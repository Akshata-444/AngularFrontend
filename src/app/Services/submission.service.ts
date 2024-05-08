import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Submission } from '../Models/submission';
import { Subtask } from '../Models/subtask';


@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  private apiUrl = 'http://localhost:5176/api/TaskSub'; // Corrected URL

  constructor(private http: HttpClient) { }



  submitTask(formData: FormData ): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/subtaskId/Submit`, formData);
  }




  getSubmissionsBySubtaskId(subtaskId: number): Observable<Submission[]> {
    return this.http.get<Submission[]>(`${this.apiUrl}/${subtaskId}`);
  }

  downloadSubmission(subtaskId: number, submissionId: number, fileName: string): void {
    this.http.get(`${this.apiUrl}/${subtaskId}/${submissionId}/Download`, { responseType: 'blob' })
      .subscribe((data: Blob) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  }
}


