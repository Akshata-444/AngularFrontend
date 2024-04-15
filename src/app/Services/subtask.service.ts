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

  getAllSubtasks(taskId: string): Observable<Subtask[]> {
  return this.http.get<any[]>(`${this.apiUrl}/tasks/${taskId}/subtasks`);

  //http://localhost:5176/api/AddTask/add



  }

  /*addSubtask(subtask: Getsubtask): Observable<any> { // Modify method signature to accept Getsubtask
    return this.http.post<any>(`${this.apiUrl}/add`, subtask);}*/

   /* addSubTask(subtask: Getsubtask): Observable<any> {
      const formData: FormData = new FormData();

      formData.append('Title', subtask.Title);
      formData.append('Description', subtask.Description);
      formData.append('TaskId', subtask.TaskId.toString());

      if (subtask.FileUploadTaskFileUpload) {
        formData.append('FileUploadTaskFileUpload', subtask.FileUploadTaskFileUpload, subtask.FileUploadTaskFileUpload.name);
      }

      return this.http.post<any>(`${this.apiUrl}/add`, formData);
    }*/
   /* addSubtask(formData: FormData): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/add`, formData);
    }*/

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
