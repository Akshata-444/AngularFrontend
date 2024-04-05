import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetBatch } from '../Models/get-batch';

@Injectable({
  providedIn: 'root'
})
export class GetBatchService {

  private apiUrl = 'http://localhost:5176/api/Batch';

  constructor(private http: HttpClient) { }
  getBatchDetails(): Observable<GetBatch[]> {
    return this.http.get<GetBatch[]>(this.apiUrl);
}
}
