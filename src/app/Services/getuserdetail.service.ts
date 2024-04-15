import {Component, Injectable ,OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetuserdetailService {
  getUserIdByUsername(username: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:5176/api/AddUser'; // Update the URL with your backend URL

  constructor(private http: HttpClient) { }
  getUser(userId: string): Observable<User> {
    return this.http.get<any>(`${this.baseUrl}/GetuserByUserId/${userId}`);
  }
}
  /*constructor(private http: HttpClient) { }

  getUser(userId: number, token: string): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<User>(`${this.baseUrl}/${userId}`);
  }
}*/
