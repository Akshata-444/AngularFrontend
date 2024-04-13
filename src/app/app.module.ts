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
    GetsubtaskComponent












  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,



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
