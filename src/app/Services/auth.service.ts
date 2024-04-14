
//import { HttpClient } from '@angular/common/http';
import { Component, Injectable , OnInit} from '@angular/core';
import { Observable , tap} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/login';
import { catchError } from 'rxjs';

@Injectable(
  {
    providedIn:'root'
  }
)
export class AuthService{

  //private tokenKey = 'auth_token';
  //private User!:any;

  private apiUrl = 'http://localhost:5176/api/Login';


  constructor(private http: HttpClient) { }

  login(user: LoginModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Login`, user).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
