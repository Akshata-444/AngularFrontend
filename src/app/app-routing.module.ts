import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BatchComponent } from './component/batch/batch.component';
import { AddbatchComponent } from './component/addbatch/addbatch.component';



const routes: Routes = [

{
  path:'login',
  component:LoginComponent,
},
{
  path:'dashboard',
  component:DashboardComponent,
},
{
  path:"batch",
  component:BatchComponent,
},
{
  path:"addbatch",
  component:AddbatchComponent,
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
