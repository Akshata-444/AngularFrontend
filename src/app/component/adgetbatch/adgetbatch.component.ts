import { Component, OnInit } from '@angular/core';
import { GetBatch } from 'src/app/Models/get-batch';
import { AdbatchService } from 'src/app/Services/adbatch.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adgetbatch',
  templateUrl: './adgetbatch.component.html',
  styleUrls: ['./adgetbatch.component.css']
})
export class AdgetbatchComponent implements OnInit{
  batches: GetBatch[] = [];

  constructor(private batchService: AdbatchService,private location: Location) { }

  ngOnInit(): void {
    this.getAllBatches();
  }

  goBack(): void {
    this.location.back(); // Navigate back to the previous location
  }
  
  getAllBatches(): void {
    this.batchService.getAllBatches().subscribe(
      (data: GetBatch[]) => {
        this.batches = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

