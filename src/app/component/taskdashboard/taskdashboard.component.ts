import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { GetBatchEmployeeModel } from 'src/app/Models/getbatchemployee';
import { GetBatchService } from 'src/app/Services/get-batch.service';




@Component({
  selector: 'app-taskdashboard',
  templateUrl: './taskdashboard.component.html',
  styleUrls: ['./taskdashboard.component.css']
})
export class taskdashboardComponent implements OnInit{

  batchId: number = 0; // Initialize with a default value
  excelData : GetBatchEmployeeModel[] = [];
  //excelData: string = '';
  //batche: GetBatchEmployeeModel[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getempService: GetBatchService
  ) { }

  ngOnInit(): void {
    this.batchId = this.route.snapshot.params['batchId'];
    this.onViewBatch();
  }

  onViewBatch(): void {
    this.getempService.getExcelDataForBatch(this.batchId)
      .subscribe(
        (data: GetBatchEmployeeModel[]) => {
          this.excelData = data;
        },
        (error: any) => {
          console.error('Error fetching Excel data:', error);
        }
      );
  }

  addTask(): void {
    this.router.navigate(['/addtask', this.batchId]);
  }

  getTask(): void {
    this.router.navigate(['/gettask', this.batchId]);
  }

    }
