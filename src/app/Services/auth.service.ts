
//import { HttpClient } from '@angular/common/http';
import { Component, Injectable , OnInit} from '@angular/core';
import { Observable , tap , throwError} from 'rxjs';
import { HttpClient,HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/login';
import { catchError } from 'rxjs';
import { User } from '../Models/user';

@Injectable(
  {
    providedIn:'root'
  }
)
export class AuthService{
  getUsername() {
    throw new Error('Method not implemented.');
  }

  //private tokenKey = 'auth_token';
  //private User!:any;

  private apiUrl = 'http://localhost:5176/api/Login/Login';
  //private token: string = '';

  private readonly tokenKey = 'auth_token';
  private readonly roleKey = 'user_role';
  private readonly userIdKey = 'user_id';

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    // Check if the authentication token is present in localStorage
    const token = localStorage.getItem(this.tokenKey);
    return !!token; // Returns true if token is present, false otherwise
  }


  login(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
    // Your login logic here


  // Method to save JWT token to localStorage
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Method to get JWT token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Method to clear JWT token from localStorage
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Method to save user role to localStorage
  saveUserRole(role: string): void {
    localStorage.setItem(this.roleKey, role);
  }

  // Method to get user role from localStorage
  getUserRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  // Method to clear user role from localStorage
  clearUserRole(): void {
    localStorage.removeItem(this.roleKey);
  }

  saveUserId(userId: string): void {
    localStorage.setItem(this.userIdKey, userId);
  }

  getUserId(): string | null {
    return localStorage.getItem(this.userIdKey);
  }

  clearUserId(): void {
    localStorage.removeItem(this.userIdKey);
  }

  logout(): void {
    // Clear token, user role, and user ID from localStorage
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    localStorage.removeItem(this.userIdKey);
  }

}
