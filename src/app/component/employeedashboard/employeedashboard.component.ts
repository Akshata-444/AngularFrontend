import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { GetBatchService } from 'src/app/Services/get-batch.service';
import { GetuserdetailService } from 'src/app/Services/getuserdetail.service';
import { DailyupdateService } from 'src/app/Services/dailyupdate.service';
import { AuthService } from 'src/app/Services/auth.service';

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
    private getdetails:GetuserdetailService,
    private dailyupdate:DailyupdateService,
    private authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
  }

  logout(): void {
    this.authservice.logout(); // Call the logout method from AuthService
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }


    gettTask(): void {
      this.router.navigate(['/etask', this.userId]);
    }

    gettuserdetails(): void {
      this.router.navigate(['/getuserdetails', this.userId]);
    }

    adddailyupdatess(): void {
      this.router.navigate(['/adddailyupdate', this.userId]);
    }

    rating(): void{
      this.router.navigate(['/userrating', this.userId]);
    }

}

