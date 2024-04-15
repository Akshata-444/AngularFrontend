import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { isFormGroup } from '@angular/forms';
import { Etask } from '../Models/etask';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';
import { Addbatch } from '../Models/addbatch';

@Injectable({
  providedIn: 'root'
})
export class EmployeetaskService {
  private apiUrl = 'http://localhost:5176/api';

  constructor(private http: HttpClient) { }
  /*Getall(userId: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<any>(`${this.apiUrl}/${userId}`, httpOptions)
      .pipe(
        map(response => response));
  }
}*/
getTasksByUserId(userId: number): Observable<Etask[]> {
  return this.http.get<Etask[]>(`${this.apiUrl}/AddTask/${userId}`);
}}
