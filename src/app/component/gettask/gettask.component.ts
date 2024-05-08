import { Component, OnInit } from '@angular/core';
import { TaskdashboardService } from 'src/app/Services/taskdashboard.service';
import { Taskdashboard } from 'src/app/Models/taskdashboard';
import { ActivatedRoute, Router } from '@angular/router';
import { Subtask } from 'src/app/Models/subtask';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gettask',
  templateUrl: './gettask.component.html',
  styleUrls: ['./gettask.component.css']
})
export class GettaskComponent implements OnInit{
  tasks: Taskdashboard[] = [];
  batchId!: number;
  userTaskID! : string;

  constructor(private taskService: TaskdashboardService, private route: ActivatedRoute,private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Use non-null assertion operator to indicate that params will not be null
      this.batchId = +params.get('batchId')!;
      this.getAllTasks();
    });
  }


  getAllTasks(): void {
    // Check if batchId is not null or undefined
    if (this.batchId != null) {
      this.taskService.getAllTasks(this.batchId).subscribe(
        tasks => {
          this.tasks = tasks;
          console.log('Tasks:', tasks);
        },
        error => {
          console.error('Error fetching tasks:', error);
        }
      );
    }
  }
  getsubTask(userTaskID: string): void {
    this.router.navigate(['/subtask', userTaskID]);
  }

  deleteTask(userTaskID: string): void {
    this.taskService.deleteTask(userTaskID).subscribe(
      () => {
        console.log('Task deleted successfully.');
        // Remove the deleted task from the tasks array
        this.tasks = this.tasks.filter(task => task.userTaskID !== userTaskID);
        this.snackBar.open('Task deleted successfully.', 'Close',{
          duration: 3000, // Duration in milliseconds
          verticalPosition: 'top' // Position at the top of the screen
        });
      },
      error => {
        console.error('Error deleting task:', error);
        // Handle error scenarios here
      }
    );

}}
