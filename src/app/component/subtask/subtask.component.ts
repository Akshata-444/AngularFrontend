import { Component,OnInit} from '@angular/core';
import { SubtaskService } from 'src/app/Services/subtask.service';
import { ActivatedRoute } from '@angular/router';
import { Subtask } from 'src/app/Models/subtask';
import { Router } from '@angular/router';
import { Submission } from 'src/app/Models/submission';
import { SubmissionService } from 'src/app/Services/submission.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  subtasks: Subtask[] = [];
  TaskId: string = '';
  subtaskId :string = '';


  constructor(
    private subtaskService: SubtaskService,
    private route: ActivatedRoute,
    private router: Router,
    private submissionService: SubmissionService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const taskId = params.get('taskId');
      if (taskId) {
        this.TaskId = taskId;
        this.getAllSubtasks();
      }
    });
  }

  getAllSubtasks(): void {
    if (this.TaskId) {
      this.subtaskService.getAllSubtasks(this.TaskId).subscribe(
        subtasks => {
          this.subtasks = subtasks;
          console.log('Subtasks:', subtasks);
        },
        error => {
          console.error('Error fetching subtasks:', error);
        }
      );
    }
  }


  downloadFile(subtaskId: number, fileName: string): void {
    this.subtaskService.downloadSubtaskFile(subtaskId).subscribe((blob) => {
      // Create blob URL
      const url = window.URL.createObjectURL(blob);

      // Create link element
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      // Click the link to trigger download
      link.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
    }, (error) => {
      console.error('Error downloading file:', error);
    });
  }

  deleteSubtask(subtaskId: number): void {
    this.subtaskService.deleteSubtask(subtaskId)
      .subscribe(() => {
        console.log('Subtask deleted successfully');
        this.showSuccessNotification('Subtask deleted successfully'); // Show success notification
        // Optionally, you can perform any additional actions after successful deletion
      }, error => {
        console.error('Error deleting subtask:', error);
        // Optionally, handle errors here
      });
    }

    showSuccessNotification(message: string): void {
      this.toastr.success(message, 'Success');
    }

  addsubTask(): void {
    this.router.navigate(['/getsubtask', this.TaskId]);
  }

  getsubmit(): void {
    this.router.navigate(['/submission', this.subtaskId]);
  }

}
