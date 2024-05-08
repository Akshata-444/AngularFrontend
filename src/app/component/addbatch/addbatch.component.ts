import { Component, OnInit } from '@angular/core';
import { AddBatchService } from 'src/app/Services/add-batch.service';
import { Addbatch } from 'src/app/Models/addbatch';
import { Location } from '@angular/common';

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

  constructor(private batchService: AddBatchService, private location: Location) {}

  onFileChange(event: any): void {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.batch.employeeInfoExcelFile = files[0];
    }
  }

  goBack(): void {
    this.location.back(); // Navigate back to the previous location
  }

  uploadBatch(): void {
    this.batchService.uploadBatchWithEmployees(this.batch)
      .subscribe(
        response => {
          console.log('Batch uploaded successfully', response);
          // Handle success response
          this.resetForm();
          alert('Batch created successfully!');
        },
        error => {
          console.error('Error uploading batch', error);
          // Handle error
        }
      );
  }

  resetForm(): void {
    // Reset the form fields by reinitializing the 'batch' object
    this.batch = {
      mentorId: 0,
      batchName: '',
      domain: '',
      description: '',
      employeeInfoExcelFile: null
    };
  }

}
