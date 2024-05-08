import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subtask } from '../Models/subtask';
import { Getsubtask } from '../Models/getsubtask';
import { catchError,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {
  private apiUrl = 'http://localhost:5176/api/AddTask';
  constructor(private http: HttpClient) { }


  getSubtaskById(subtaskId: number): Observable<Subtask> {
    return this.http.get<Subtask>(`${this.apiUrl}/Sub/${subtaskId}`);}

  getAllSubtasks(taskId: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/tasks/${taskId}/subtasks`);
  }

 getSubtasks(taskId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks/${taskId}/subtask`);}




  deleteSubtask(subtaskId:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/subtasks/${subtaskId}`);
  }


    downloadSubtaskFile(subtaskId: number): Observable<Blob> {
      return this.http.get(`${this.apiUrl}/subtasks/${subtaskId}/download`, { responseType: 'blob' });
    }

    addSubtask(subtask: FormData): Observable<string> {
      return this.http.post(`${this.apiUrl}/add`, subtask, { responseType: 'text' })
        .pipe(
          map((response: any) => {
            console.log('Response:', response); // Add this line for debugging
            // Check if the response is successful (200 OK)
            if (response && response.includes('Subtask created successfully')) {
              return 'Subtask created successfully';
            } else {
              // If the response is not successful, throw an error
              throw new Error('Error creating subtask');
            }
          }),
          catchError((error) => {
            // Handle any errors that occur during the HTTP request
            console.error('There was an error!', error);
            throw error; // Rethrow the error to propagate it to the caller
          })
        );

    }
  }
