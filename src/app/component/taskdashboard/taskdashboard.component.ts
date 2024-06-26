import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { GetBatchEmployeeModel } from 'src/app/Models/getbatchemployee';
import { GetBatchService } from 'src/app/Services/get-batch.service';
import { GetuserdetailService } from 'src/app/Services/getuserdetail.service';




@Component({
  selector: 'app-taskdashboard',
  templateUrl: './taskdashboard.component.html',
  styleUrls: ['./taskdashboard.component.css']
})
export class taskdashboardComponent implements OnInit{

  batchId: number = 0; // Initialize with a default value
  excelData : GetBatchEmployeeModel[] = [];
  userId: number = 0;
  //excelData: string = '';
  //batche: GetBatchEmployeeModel[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getempService: GetBatchService,
    private getdetail: GetuserdetailService
  ) { }

  ngOnInit(): void {
    this.batchId = this.route.snapshot.params['batchId'];
    this.onViewBatch();
    this.userId = this.route.snapshot.params['userId'];
  }

  highlightBackground(element: HTMLElement) {
    // Reset background color for all links
    var links = document.querySelectorAll('.sidebar a') as NodeListOf<HTMLElement>;
    for (var i = 0; i < links.length; i++) {
      links[i].style.backgroundColor = "#4CAF50";
    }

    // Highlight the clicked link
    element.style.backgroundColor = "#ffffff"; // Change to white
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

  getdetails(): void {
    this.router.navigate(['/getmentordetails', this.userId]);
  }

  getdailupdate(): void {
    this.router.navigate(['/getdailyupdate', this.userId]);
  }

    }
