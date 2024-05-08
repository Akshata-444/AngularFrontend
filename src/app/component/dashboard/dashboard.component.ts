import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { GetuserdetailService } from 'src/app/Services/getuserdetail.service';
import { AuthService } from 'src/app/Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { GetBatchService } from 'src/app/Services/get-batch.service';



@Component({

  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  batchId: number = 0;
  userId: number = 0;



  constructor(  private route: ActivatedRoute,
    private router: Router,private userService: GetuserdetailService, private authservice : AuthService) { }


    ngOnInit(): void {
      this.userId = this.route.snapshot.params['userId'];
      //this.logout();
    }

    logout(): void {
      this.authservice.logout(); // Call the logout method from AuthService
      this.router.navigate(['/login']); // Redirect to the login page after logout
    }

    gettuserdetails(): void {
      this.router.navigate(['/getmentordetails', this.userId]);
    }

}


