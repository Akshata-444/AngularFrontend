import { Component , OnInit} from '@angular/core';
import { AdminadduserService } from 'src/app/Services/adminadduser.service';
import { Guser,Role } from 'src/app/Models/guser';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adminadduser',
  templateUrl: './adminadduser.component.html',
  styleUrls: ['./adminadduser.component.css']
})
export class AdminadduserComponent {
  user: Guser = {
    name: '',
    role: 0, // Change this to an empty string
    domain: '',
    jobTitle: '',
    location: '',
    phone: '',
    isCr: false,
    gender: '',
    doj: new Date(),
    capgeminiEmailId: '',
    attendanceCount: 0,
    totalAverageRatingStatus: 0,
    personalEmailId: '',
    earlierMentorName: '',
    finalMentorName: ''
  };


  constructor(private userService: AdminadduserService, private location: Location) { }

  addUser(form: NgForm): void {
    if (form.valid) {

      // Call the service to add user
      this.userService.addUser(this.user).subscribe(
        (response) => {
          console.log('User added successfully:', response);
          // Reset the form after successful addition
          this.resetForm();
           // Show success notification
           alert('User added successfully!');
        },
        (error) => {
          console.error('Error adding user:', error);


        }
      );
    }
  }

  resetForm(): void {
    // Reset the form fields
    this.user = {
      name: '',
      role:Role.Employee, // Change this to an empty string
      domain: '',
      jobTitle: '',
      location: '',
      phone: '',
      isCr: false,
      gender: '',
      doj: new Date(),
      capgeminiEmailId: '',
      attendanceCount: 0,

      totalAverageRatingStatus: 0,
      personalEmailId: '',
      earlierMentorName: '',
      finalMentorName: ''
    };
  }

  goBack(): void {
    this.location.back(); // Navigate back to the previous location
  }

  ngOnInit(): void {
    // Initialize any necessary data or operations when the component is initialized
  }
}
