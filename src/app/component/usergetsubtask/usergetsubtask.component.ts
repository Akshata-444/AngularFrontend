import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubtaskService } from 'src/app/Services/subtask.service';
import { Subtask } from 'src/app/Models/subtask';
import { SubmissionService } from 'src/app/Services/submission.service';
import { Submission } from 'src/app/Models/submission';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-usergetsubtask',
  templateUrl: './usergetsubtask.component.html',
  styleUrls: ['./usergetsubtask.component.css']
})
export class UsergetsubtaskComponent implements OnInit{
  taskSubmissionForm: FormGroup;
  subtasks: Subtask[] = [];
  taskId: string = '';
  subtaskId :number = 0;
  fileToUpload: File | null = null;
  UserId: string = '';
  submittedSubtaskIds: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private subtaskService: SubtaskService,
    private submissionService: SubmissionService,
    private authService: AuthService
    ) {
      this.taskSubmissionForm = this.formBuilder.group({
        //status: ['Pending'],
        submittedFileName: ['', Validators.required],
        fileUpload: [null, Validators.required]
      });
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const taskId = params.get('taskId');
      //const userId = params.get('userId');
      if (taskId) {
        this.taskId = taskId;
        this.getAllSubtasks();
      }

    });
    this.UserId = localStorage.getItem('user_id') || '';
    this.fetchSubmittedSubtaskIds();
  }




  getAllSubtasks(): void {
    if (this.taskId) {
      this.subtaskService.getAllSubtasks(this.taskId).subscribe(
        subtasks => {
          this.subtasks = subtasks;
          this.disableUploadedSubtasks();
          //console.log('Subtasks:', subtasks);
          // Disable file upload for already submitted subtasks

        },
        error => {
          console.error('Error fetching subtasks:', error);
        }
      );
    }
  }

  disableUploadedSubtasks(): void {
    this.subtasks.forEach(subtask => {
      subtask.uploaded = this.submittedSubtaskIds.includes(subtask.subTaskId);
    });
  }

  fetchSubmittedSubtaskIds(): void {
    if (this.UserId) {
      const userIdNumber = parseInt(this.UserId, 10);
      this.submissionService.getSubmissionsBySubtaskId(userIdNumber).subscribe(submissions => {
        this.submittedSubtaskIds = submissions.map(submission => submission.subtaskId);
        this.disableUploadedSubtasks();
      });
    }
  }


  onFileSelected(event: Event, subtask: Subtask): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      subtask.fileToUpload = inputElement.files[0];
    }
  }


  uploadSubmission(subtask: Subtask): void {
    if (!subtask.fileToUpload) {
      console.error('No file selected.');
      return;
    }



    const formData = new FormData();
    formData.append('UserId', this.UserId);
    formData.append('subtaskid', subtask.subTaskId.toString());
    formData.append('FileUpload', subtask.fileToUpload);

    // Pass subtaskId to the submitTask method

    // Submit task
    this.submissionService.submitTask(formData).subscribe(
      (response) => {
        console.log('Submission successful:', response);
        subtask.uploaded = true;
        subtask.fileToUpload = null;
      },
      (error) => {
        console.error('Error submitting task:', error);
      }
    );
  }


  downloadFile(subtaskId: number, fileName: string): void {
    this.subtaskService.downloadSubtaskFile(subtaskId).subscribe(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    }, error => {
      console.error('Error downloading file:', error);
    });
  }
}
