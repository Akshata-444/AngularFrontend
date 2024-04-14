import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Submission } from '../Models/submission';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  private apiUrl = 'ttp://localhost:5176/api/TaskSub';

  constructor(private http: HttpClient) { }

  getSubmissions(subtaskId: number): Observable<Submission[]> {
    return this.http.get<Submission[]>(`${this.apiUrl}/${subtaskId}`);
  }
}
