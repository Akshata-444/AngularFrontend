import { Component , OnInit } from '@angular/core';
import { SubmissionService } from 'src/app/Services/submission.service';
import { Submission } from 'src/app/Models/submission';
import { SubtaskService } from 'src/app/Services/subtask.service';
import { ActivatedRoute } from '@angular/router';
import { RatingService } from 'src/app/Services/rating.service';
import { Rating } from 'src/app/Models/rating';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  submissions: Submission[] = [];
  subtaskId: number = 0;
  selectedSubmissionId: number = 0;

  rating: Rating = {
    ratedBy: 0,
    ratedTo: 0,
    taskSubmissionId: 0,
    ratingValue: 0,
    comments: '',
    ratingId: 0
  };

  constructor(private submissionService: SubmissionService,private route:ActivatedRoute,private submissionservice : SubmissionService ,private authservice : AuthService,private ratingservice : RatingService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.subtaskId = params['subtaskId'];
      this.loadSubmissions();
    });
    //this.getSubmissions();
  }


  loadSubmissions(): void {
    this.submissionService.getSubmissionsBySubtaskId(this.subtaskId).subscribe(
      (data: Submission[]) => {
        this.submissions = data;
      },
      (error) => {
        console.log('Error fetching submissions:', error);
      }
    );
  }
  downloadSubmission(subtaskId: number, submissionId: number, fileName: string): void {
    this.submissionService.downloadSubmission(subtaskId, submissionId, fileName);
  }

  submitRating(submission: Submission): void {
    // Create a new Rating object
    const rating: Rating = {
      ratedBy: parseInt(this.authservice.getUserId() || '0', 10), // Get logged-in user's ID
      ratedTo: submission.userId, // Set the user ID who submitted the task
      taskSubmissionId: submission.taskSubmissionsId,
      ratingValue: submission.ratingValue || 0 // Default to 0 if ratingValue is null
      ,
      ratingId: 0
    };

    // Call the rating service to submit the rating
    this.ratingservice.addRating(rating).subscribe(
      (response) => {
        console.log('Rating submitted successfully:', response);
        // Refresh the submissions after submitting the rating
        this.loadSubmissions();
      },
      (error) => {
        console.error('Error submitting rating:', error);
      }
    );
  }
}
