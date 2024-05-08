import { Component } from '@angular/core';
import { Dailyupdate } from 'src/app/Models/dailyupdate';
import { AuthService } from 'src/app/Services/auth.service';
import { DailyupdateService } from 'src/app/Services/dailyupdate.service';

@Component({
  selector: 'app-adddailyupdate',
  templateUrl: './adddailyupdate.component.html',
  styleUrls: ['./adddailyupdate.component.css']
})
export class AdddailyupdateComponent {
  dailyUpdate: Dailyupdate = {
    userId: 0, // Initialize to 0 initially
    title: '',
    uploadedAt: new Date(),
    learnedToday: '',
    planForTomorrow: '',
    challenge: '',
    oneDriveLink: '',
    summary: ''
  };

  constructor(private dailyUpdateService: DailyupdateService) { }

  addDailyUpdate(): void {
    // Retrieve the user ID from localStorage
    const userId = localStorage.getItem('user_id');

    if (userId) {
      // Assign the retrieved user ID to the daily update object
      this.dailyUpdate.userId = +userId; // Convert string to number
      // Call the service method to add the daily update
      this.dailyUpdateService.addDailyUpdate(this.dailyUpdate)
        .subscribe(
          result => {
            console.log(result); // Log the result or handle it as needed
            // Optionally, reset the form or perform any other action upon successful addition
          },
          error => {
            console.error('An error occurred:', error); // Log the error
            // Optionally, display an error message to the user
          }
        );
    } else {
      console.error('User ID is not available in localStorage'); // Log the error
      // Optionally, display an error message to the user
    }
  }
}
