import { Component, OnInit } from '@angular/core';
import { AddBatchService } from 'src/app/Services/add-batch.service';
import { Addbatch } from 'src/app/Models/addbatch';

@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.css']
})
export class AddbatchComponent {
  batch: Addbatch = {
    mentorId: 0,
    batchName: '',
    domain: '',
    description: '',
    employeeInfoExcelFile: null // Initialize it as null
  };

  constructor(private batchService: AddBatchService) {}

  onFileChange(event: any): void {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.batch.employeeInfoExcelFile = files[0];
    }
  }

  uploadBatch(): void {
    this.batchService.uploadBatchWithEmployees(this.batch)
      .subscribe(
        response => {
          console.log('Batch uploaded successfully', response);
          // Handle success response
        },
        error => {
          console.error('Error uploading batch', error);
          // Handle error
        }
      );
  }

}
