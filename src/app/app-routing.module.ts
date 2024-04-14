import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
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
import { GetsubmissionComponent } from './component/getsubmission/getsubmission.component';




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
},
{
  path:"deletebatch",
  component:DeleteBatchComponent,
},
{
  path:"admindashboard",
  component:AdmindashboardComponent,
},
{
  path:"employeedashboard",
  component:EmployeedashboardComponent,
},
{
  path : "taskdashboard/:batchId" ,
  component : taskdashboardComponent
},
{ path: 'addtask/:batchId',
 component: AddtaskComponent },
 {
  path:'gettask/:batchId',
  component:GettaskComponent
 },
 {
  path:'subtask/:taskId',
  component: SubtaskComponent
 },
 {
  path:'getsubtask/:taskId',
  component: GetsubtaskComponent

 },
 {
  path:'getsubmission/:subtaskId',
  component: GetsubmissionComponent
 }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
