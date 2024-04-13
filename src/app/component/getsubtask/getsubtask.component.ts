import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Getsubtask } from 'src/app/Models/getsubtask';
//import { Subtask } from 'src/app/Models/subtask';
import { SubtaskService } from 'src/app/Services/subtask.service';

@Component({
  selector: 'app-getsubtask',
  templateUrl: './getsubtask.component.html',
  styleUrls: ['./getsubtask.component.css']
})
export class GetsubtaskComponent {
  subtaskForm: FormGroup;
  taskId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private subtaskService: SubtaskService
  ) {
    this.subtaskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      fileUploadTaskFileUpload: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = +params['taskId'];
    });
  }

  handleFileInput(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.subtaskForm.get('fileUploadTaskFileUpload')?.setValue(files[0]);
    }
  }

  onSubmit(): void {
    if (this.subtaskForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.subtaskForm.get('title')?.value ?? '');
    formData.append('description', this.subtaskForm.get('description')?.value ?? '');
    formData.append('taskId', this.taskId.toString());
    formData.append('fileUploadTaskFileUpload', this.subtaskForm.get('fileUploadTaskFileUpload')?.value ?? '');

    this.subtaskService.addSubtask(formData)
      .subscribe(
        (response) => console.log('Subtask added successfully', response),
        (error) => console.error('There was an error!', error)
      );
  }
}
