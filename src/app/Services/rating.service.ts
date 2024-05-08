import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from '../Models/rating';
//import { Subtask } from '../Models/subtask';


@Injectable({
  providedIn: 'root'
})
export class RatingService {
   private apiUrl = 'http://localhost:5176/api'; // Replace 'your_api_endpoint' with your actual API URL

  constructor(private http: HttpClient) { }

  addRating(rating: Rating): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Rating`, rating);
  }

  getRatingsByUserId(userId: number): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${this.apiUrl}/Rating/${userId}`);
  }

  getSubtaskIdBySubmissionId(submissionId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/Rating/subtask/${submissionId}`);
  }

}
