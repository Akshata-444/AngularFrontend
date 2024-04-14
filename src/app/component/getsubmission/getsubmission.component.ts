import { Component ,OnInit} from '@angular/core';
import { Submission } from 'src/app/Models/submission';
import { SubmissionService } from 'src/app/Services/submission.service';

@Component({
  selector: 'app-getsubmission',
  templateUrl: './getsubmission.component.html',
  styleUrls: ['./getsubmission.component.css']
})
export class GetsubmissionComponent implements OnInit{
  submissions: Submission[] = [];
  subtaskId: number = 0; // Set the default subtaskId

  constructor(private submissionService: SubmissionService) { }

  ngOnInit(): void {
    this.loadSubmissions();
  }

  loadSubmissions() {
    this.submissionService.getSubmissions(this.subtaskId).subscribe(submissions => {
      this.submissions = submissions;
    });
  }

  downloadSubmission(fileContent: Uint8Array) {
    const blob = new Blob([fileContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
