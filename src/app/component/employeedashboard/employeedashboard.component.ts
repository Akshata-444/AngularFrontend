import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { GetBatchService } from 'src/app/Services/get-batch.service';
import { GetuserdetailService } from 'src/app/Services/getuserdetail.service';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent {
  batchId: number = 0;
  userId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getempService: GetBatchService,
    private getdetails:GetuserdetailService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
  }
    gettTask(): void {
      this.router.navigate(['/etask', this.userId]);
    }

    gettuserdetails(): void {
      this.router.navigate(['/getuserdetails', this.userId]);
    }

}

