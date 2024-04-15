import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guser } from '../Models/guser';
import { Observable } from 'rxjs';
import { Getaduser } from '../Models/getaduser';

@Injectable({
  providedIn: 'root'
})
export class AdminadduserService {
  private baseUrl = 'http://localhost:5176/api/AddUser';
  constructor(private http: HttpClient) { }

  addUser(user: Guser): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/AddEmployee`, user);
  }


  getUser(userId: number): Observable<Getaduser> {
    return this.http.get<Getaduser>(`${this.baseUrl}/${userId}`);
}}
