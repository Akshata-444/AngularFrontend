import { Component, OnInit } from '@angular/core';
import { GetBatchService } from 'src/app/Services/get-batch.service';
import { GetBatch } from 'src/app/Models/get-batch';


@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit{
  batches: GetBatch[] = [];

  constructor(private batchService: GetBatchService) { }

  ngOnInit(): void {
    this.getBatchDetails();
  }

  // Method to fetch batch details
  getBatchDetails(): void {
    this.batchService.getBatchDetails().subscribe(batches => {
      this.batches = batches;
    });
  }

}
