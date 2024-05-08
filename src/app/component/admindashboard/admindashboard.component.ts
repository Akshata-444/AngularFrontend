import { Component ,OnInit} from '@angular/core';
import { GetBatchService } from 'src/app/Services/get-batch.service';
import { GetBatch } from 'src/app/Models/get-batch';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  batches: GetBatch[] = [];
  userId: number = 0;

  constructor(private router: Router, private route:ActivatedRoute ,private batchService: GetBatchService , private authservice : AuthService ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    //this.batchId = this.route.snapshot.params['batchId'];
    this.getBatchDetails();
  }

  logout(): void {
    this.authservice.logout(); // Call the logout method from AuthService
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }

  gettuserdetails(): void {
    this.router.navigate(['/getuserdetails', this.userId]);
  }

  getBatchDetails(): void {
    this.batchService.getBatchDetails().subscribe(batches => {
      this.batches = batches;
    });
}}
