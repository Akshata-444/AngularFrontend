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
import { CommonModule } from '@angular/common';
import { BatchComponent } from './component/batch/batch.component';
import { AddbatchComponent } from './component/addbatch/addbatch.component';
import { DeleteBatchComponent } from './component/deletebatch/deletebatch.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BatchComponent,
    AddbatchComponent,
    DeleteBatchComponent








  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule


  ],
  providers: [
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
