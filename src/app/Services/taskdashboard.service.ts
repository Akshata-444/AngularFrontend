import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Taskdashboard } from '../Models/taskdashboard';

@Injectable({
  providedIn: 'root'
})
export class TaskdashboardService {
  private apiUrl = 'http://localhost:5176/api/AddTask'; // Update the API URL to match your backend endpoint
  constructor(private http: HttpClient) { }

  /*assignTaskToBatch(batchId: number, task: Taskdashboard): Observable<Taskdashboard> {
    return this.http.post<Taskdashboard>(`${this.apiUrl}/batches/${batchId}/tasks`, task);


  }*/

  assignTaskToBatch(batchId: number,task: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/batches/${batchId}/tasks`, task);

}

/*deleteTask(userTaskID: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${userTaskID}`);
}*/

deleteTask(userTaskID: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${userTaskID}`, { responseType: 'text' });
}


/*getAllTasks(batchId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/batches/${batchId}/tasks`);
}*/
getAllTasks(batchId: number): Observable<Taskdashboard[]> {
  return this.http.get<Taskdashboard[]>(`${this.apiUrl}/GetAlltasks/${batchId}/tasks`);
}

}

