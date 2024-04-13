// deletebatch.component.ts

import { Component ,OnInit } from '@angular/core';
import { DeleteBatchService } from 'src/app/Services/deletebatch.service';
import { DeleteBatch } from 'src/app/Models/deletebatch';
import { AddBatchService } from 'src/app/Services/add-batch.service';
import { GetBatch } from 'src/app/Models/get-batch';
import { Input } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-deletebatch',
  templateUrl: './deletebatch.component.html',
  styleUrls: ['./deletebatch.component.css']
})


export class DeleteBatchComponent{
  @Input() batchId!: number;

  constructor(private batchService: DeleteBatchService) { }

  deleteBatch(): void {
    if (!this.batchId) {
      console.error('Batch ID is missing');
      return;
    }

    this.batchService.deleteBatch(this.batchId)
      .subscribe(
        () => {
          console.log('Batch deleted successfully');
          // Optionally, you can perform any UI update here
        },
        error => {
          console.error('Error deleting batch', error);
          // Handle error if needed
        }
      );
  }
}
