import { Component , OnInit } from '@angular/core';
import { AdminadduserService } from 'src/app/Services/adminadduser.service';
import { Getaduser } from 'src/app/Models/getaduser';

@Component({
  selector: 'app-getaduser',
  templateUrl: './getaduser.component.html',
  styleUrls: ['./getaduser.component.css']
})
export class GetaduserComponent implements OnInit {
  user: Getaduser | undefined;
  userId: number | undefined;

  constructor(private userService: AdminadduserService) { }

  ngOnInit(): void {
  }

  getUserData(): void {
    if (this.userId) {
      this.userService.getUser(this.userId)
        .subscribe(
          user => {
            this.user = user;
            console.log('User Data:', this.user);
          },
          error => {
            console.error('Error fetching user data:', error);
          }
        );
    }
  }

}
