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

import { GetuserdetailComponent } from './component/getuserdetail/getuserdetail.component';
import { AdgetbatchComponent } from './component/adgetbatch/adgetbatch.component';
import { AdminadduserComponent } from './component/adminadduser/adminadduser.component';
import { GetaduserComponent } from './component/getaduser/getaduser.component';
import { EtaskComponent } from './component/etask/etask.component';
import { UsergetsubtaskComponent } from './component/usergetsubtask/usergetsubtask.component';




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
  path:"employeedashboard/:userId",
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
 },

 {
  path:'getuserdetail/:userId',
  component: GetuserdetailComponent
 },
 {
  path:'adgetbatch',
  component : AdgetbatchComponent
 },
 {
  path:'adminadduser',
  component: AdminadduserComponent
 },
 {
  path: 'getaduser',
  component: GetaduserComponent
 },
 {
  path:'etask/:userId',
  component: EtaskComponent
 },
{
  path:'usergetsubtask/:taskId',
  component: UsergetsubtaskComponent
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
