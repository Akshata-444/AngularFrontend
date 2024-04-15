import { Component ,OnInit} from '@angular/core';
import { GetBatchService } from 'src/app/Services/get-batch.service';
import { GetBatch } from 'src/app/Models/get-batch';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  batches: GetBatch[] = [];

  constructor(private router: Router, private route:ActivatedRoute ,private batchService: GetBatchService ) { }

  ngOnInit(): void {
    //this.batchId = this.route.snapshot.params['batchId'];
    this.getBatchDetails();
  }

  getBatchDetails(): void {
    this.batchService.getBatchDetails().subscribe(batches => {
      this.batches = batches;
    });
}}
