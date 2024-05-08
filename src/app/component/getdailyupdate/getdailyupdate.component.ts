import { Component , OnInit} from '@angular/core';
import { Dailyupdate } from 'src/app/Models/dailyupdate';
import { DailyupdateService } from 'src/app/Services/dailyupdate.service';

@Component({
  selector: 'app-getdailyupdate',
  templateUrl: './getdailyupdate.component.html',
  styleUrls: ['./getdailyupdate.component.css']
})
export class GetdailyupdateComponent implements OnInit{
  userId!: number; // Initialize this with the user's ID
  dailyUpdates!: Dailyupdate[];

  constructor(private dailyUpdateService: DailyupdateService) { }

  ngOnInit(): void {
    this.loadDailyUpdates();
  }

  loadDailyUpdates() {
    this.dailyUpdateService.getDailyUpdatesByUserId(this.userId)
      .subscribe(
        (data: Dailyupdate[]) => {
          this.dailyUpdates = data;
        },
        error => {
          console.log('Error fetching daily updates:', error);
        }
      );
  }
}

