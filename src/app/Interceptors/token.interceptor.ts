import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../Services/auth.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

 // constructor(private authService: AuthService) {}

 constructor() {}

 intercept(
   request: HttpRequest<any>,
   next: HttpHandler
 ): Observable<HttpEvent<any>> {
   return next.handle(request).pipe(
     catchError((error: HttpErrorResponse) => {
       let errorMessage = '';
       if (error.error instanceof ErrorEvent) {
         // Client-side errors
         errorMessage = `Error: ${error.error.message}`;
       } else {
         // Server-side errors
         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       }
       console.error(errorMessage);
       return throwError(errorMessage);
     })
   );
 }
}
