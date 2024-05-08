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
import { AuthguardService } from './Services/authguard.service';
import { UserratingComponent } from './component/userrating/userrating.component';





const routes: Routes = [

{
  path:'login',
  component:LoginComponent,
},
{
  path:'dashboard/:userId',
  component:DashboardComponent,
  canActivate: [AuthguardService],
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
  path:"admindashboard/:userId",
  component:AdmindashboardComponent,
  canActivate: [AuthguardService],
},
{
  path:"employeedashboard/:userId",
  component:EmployeedashboardComponent,
  canActivate: [AuthguardService],
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
},
{
  path:'getmentordetails/:userId',
  component: GetmentordetailsComponent
},
{
  path:'submission/:subtaskId',
  component: SubmissionComponent
},
{
  path:'adddailyupdate/:userId',
  component: AdddailyupdateComponent
},
{
  path:'getdailyupdate',
  component: GetdailyupdateComponent
},
{
  path:'userrating/:userId',
  component: UserratingComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
