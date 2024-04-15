import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Getusertask } from '../Models/getusertask';

@Injectable({
  providedIn: 'root'
})
export class UsertaskService {

  private baseUrl = 'http://localhost:5176/api';

  constructor(private http: HttpClient) { }
  getTasksByUserId(userId: number): Observable<Getusertask[]> {
    return this.http.get<Getusertask[]>(`${this.baseUrl}/AddTask/${userId}`);
  }
}

