import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS ,HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { LoginComponent } from './component/login/login.component';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { CommonModule, DatePipe } from '@angular/common';
import { BatchComponent } from './component/batch/batch.component';
import { AddbatchComponent } from './component/addbatch/addbatch.component';
import { DeleteBatchComponent } from './component/deletebatch/deletebatch.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { EmployeedashboardComponent } from './component/employeedashboard/employeedashboard.component';
import { taskdashboardComponent } from './component/taskdashboard/taskdashboard.component';
import { AddtaskComponent } from './component/addtask/addtask.component';
import { GettaskComponent } from './component/gettask/gettask.component';
import { SubtaskComponent } from './component/subtask/subtask.component';
import { GetsubtaskComponent } from './component/getsubtask/getsubtask.component';
import { DeleteBatch } from './Models/deletebatch';


import { GetuserdetailComponent } from './component/getuserdetail/getuserdetail.component';
import { AdgetbatchComponent } from './component/adgetbatch/adgetbatch.component';
import { AdminadduserComponent } from './component/adminadduser/adminadduser.component';
import { GetaduserComponent } from './component/getaduser/getaduser.component';
import { EtaskComponent } from './component/etask/etask.component';
import { UsergetsubtaskComponent } from './component/usergetsubtask/usergetsubtask.component';
import { GetmentordetailsComponent } from './component/getmentordetails/getmentordetails.component';
import { SubmissionComponent } from './component/submission/submission.component';
import { AdddailyupdateComponent } from './component/adddailyupdate/adddailyupdate.component';
import { GetdailyupdateComponent } from './component/getdailyupdate/getdailyupdate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { UserratingComponent } from './component/userrating/userrating.component';


















@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BatchComponent,
    AddbatchComponent,
    DeleteBatchComponent,
    AdmindashboardComponent,
    EmployeedashboardComponent,
    taskdashboardComponent,
    AddtaskComponent,
    GettaskComponent,
    SubtaskComponent,
    GetsubtaskComponent,

    EtaskComponent,
    GetuserdetailComponent,
     AdgetbatchComponent,
     AdminadduserComponent,
     GetaduserComponent,
     UsergetsubtaskComponent,
     GetmentordetailsComponent,
     SubmissionComponent,
     AdddailyupdateComponent,
     GetdailyupdateComponent,
     UserratingComponent,














  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center',
       // Set the position to center
    })





  ],
  exports: [BatchComponent],

  providers: [
    DatePipe,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
