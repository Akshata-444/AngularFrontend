import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { GetuserdetailService } from 'src/app/Services/getuserdetail.service';
import { AuthService } from 'src/app/Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-getmentordetails',
  templateUrl: './getmentordetails.component.html',
  styleUrls: ['./getmentordetails.component.css']
})
export class GetmentordetailsComponent implements OnInit{

  userId!: string ;
  user: any;

  constructor(private userService: GetuserdetailService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.getUserDetail(this.userId);
    });
  }

  getUserDetail(userId:string): void {
    this.userService.getUser(this.userId).subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching user detail:', error);
      }
    );
  }
}


