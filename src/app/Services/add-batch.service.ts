import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddBatchService {
  private apiUrl = 'http://localhost:5176/api/Batch/add-batch-with-employees';

  constructor(private http: HttpClient) {}

  uploadBatchWithEmployees(batch: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('mentorId', batch.mentorId.toString());
    formData.append('batchName', batch.batchName);
    formData.append('domain', batch.domain);
    formData.append('description', batch.description);
    formData.append('employee_info_Excel_File', batch.employeeInfoExcelFile);

    return this.http.post(this.apiUrl, formData, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        // Handle error here
        console.error('Error uploading batch', error);
        return throwError('Error uploading batch');
      })
    );
  }
}
