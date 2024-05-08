import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dailyupdate } from '../Models/dailyupdate';

@Injectable({
  providedIn: 'root'
})
export class DailyupdateService {

  private apiUrl = 'http://localhost:5176/api/DailyUpdate'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  addDailyUpdate(dailyUpdate: Dailyupdate): Observable<string> {
    return this.http.post<string>(this.apiUrl, dailyUpdate);
  }

  getDailyUpdatesByUserId(userId: number): Observable<Dailyupdate[]> {
    return this.http.get<Dailyupdate[]>(`${this.apiUrl}/${userId}`);
  }

}
