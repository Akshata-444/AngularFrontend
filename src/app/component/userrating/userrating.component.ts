import { Component,OnInit } from '@angular/core';
import { ActivatedRoute ,Route, Router} from '@angular/router';
import { Getusertask } from 'src/app/Models/getusertask';
import { UsertaskService } from 'src/app/Services/usertask.service';
import { SubtaskService } from 'src/app/Services/subtask.service';
import { Subtask } from 'src/app/Models/subtask';
import { AuthService } from 'src/app/Services/auth.service';
import { RatingService } from 'src/app/Services/rating.service';
import { Rating } from 'src/app/Models/rating';

@Component({
  selector: 'app-userrating',
  templateUrl: './userrating.component.html',
  styleUrls: ['./userrating.component.css']
})
export class UserratingComponent implements OnInit{
  userId!: number;
  //taskId!:string;
  tasks: Getusertask[] = [];
  //tasks: any[] = [];
  //subtaskId :number = 0;
  subtasks: Subtask[] = [];
  ratings: Rating[] = [];
  subtaskId!: number;

  constructor(private route: ActivatedRoute, private router: Router,private taskService: UsertaskService,private authService: AuthService, private subtaskService: SubtaskService,private ratingService: RatingService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.loadRatings();

      //this.loadTasks();
    });

  }

  loadRatings(): void {
    this.ratingService.getRatingsByUserId(this.userId).subscribe(
      ratings => {
        this.ratings = ratings;
        this.loadSubtaskIds();
      },
      error => {
        console.error('Error fetching ratings:', error);
      }
    );
  }

  loadSubtaskIds(): void {
    for (let rating of this.ratings) {
      this.ratingService.getSubtaskIdBySubmissionId(rating.taskSubmissionId).subscribe(
        subtaskId => {
          if (subtaskId !== undefined) {
            rating.subtaskId = subtaskId;
            this.loadSubtask(subtaskId); // Load subtask details after subtask ID is fetched
          } else {
            console.error('Subtask ID is undefined.');
          }
        },
        error => {
          console.error('Error fetching subtaskId:', error);
        }
      );
    }
  }

  loadSubtask(subtaskId: number): void {
    this.subtaskService.getSubtaskById(subtaskId).subscribe(
      subtask => {
        this.subtasks.push(subtask); // Push the fetched subtask to the array
      },
      error => {
        console.error('Error fetching subtask:', error);
      }
    );
  }
}
