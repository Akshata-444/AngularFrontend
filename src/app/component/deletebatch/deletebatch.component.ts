// deletebatch.component.ts

import { Component } from '@angular/core';
import { DeleteBatchService } from 'src/app/Services/deletebatch.service';
import { DeleteBatch } from 'src/app/Models/deletebatch';

@Component({
  selector: 'app-deletebatch',
  templateUrl: './deletebatch.component.html',
  styleUrls: ['./deletebatch.component.css']
})
export class DeleteBatchComponent {
  batchId!: number;

  constructor(private deleteBatchService: DeleteBatchService) {}

  deleteBatch(): void {
    if (!this.batchId) {
      console.error('Please enter batch ID');
      return;
    }

    const deleteBatchRequest = new DeleteBatch(this.batchId);
    this.deleteBatchService.deleteBatch(deleteBatchRequest.batchId)
      .subscribe(
        response => {
          console.log('Batch deleted successfully', response);
          // Handle success response
        },
        error => {
          console.error('Error deleting batch', error);
          // Handle error
        }
      );
  }
}
