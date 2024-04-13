// deletebatch.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteBatchService {
  private apiUrl = 'http://localhost:5176/api/Batch';

  constructor(private http: HttpClient) {}


 // Method to delete a batch by ID
// Method to delete a batch by ID
deleteBatch(batchId: number): Observable<any> {
  const url = `${this.apiUrl}/${batchId}`;
  return this.http.delete(url, { responseType: 'text' })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error deleting batch:', error);
        return throwError(error);
      })
    );
}
}
