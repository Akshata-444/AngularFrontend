import { Component, OnInit } from '@angular/core';
import { GetBatchService } from 'src/app/Services/get-batch.service';
import { GetBatch } from 'src/app/Models/get-batch';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DeleteBatchService } from 'src/app/Services/deletebatch.service';
@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit{
  batches: GetBatch[] = [];
  //batchId! : number;

  constructor(private router: Router, private route:ActivatedRoute ,private batchService: GetBatchService , private deleteBatchService: DeleteBatchService) { }

  ngOnInit(): void {
    //this.batchId = this.route.snapshot.params['batchId'];
    this.getBatchDetails();
  }

  // Method to fetch batch details
  getBatchDetails(): void {
    this.batchService.getBatchDetails().subscribe(batches => {
      this.batches = batches;
    });

  }


  viewBatch(batchId: number): void {
    this.router.navigate(['/taskdashboard', batchId]); // Navigate to updatebatch component with batchId parameter
  }

  deleteBatch(batchId: number): void {
    if (!batchId) {
      console.error('Invalid batchId');
      return;
    }

    this.deleteBatchService.deleteBatch(batchId).subscribe(
      () => {
        console.log('Batch deleted successfully');
        // Optionally, you can perform any UI update here
        // Remove the deleted batch from the array or refresh the batch list
        this.getBatchDetails(); // Refresh the batch list after deletion
      },
      error => {
        console.error('Error deleting batch', error);
        // Handle error if needed
      }
    );
  }
}
