import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetBatch } from '../Models/get-batch';

@Injectable({
  providedIn: 'root'
})
export class AdbatchService {
  private baseUrl = 'http://localhost:5176/api/batch';

  constructor(private http: HttpClient) { }

  getAllBatches(): Observable<GetBatch[]> {
    return this.http.get<GetBatch[]>(this.baseUrl);
}}
