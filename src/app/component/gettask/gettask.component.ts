import { Component, OnInit } from '@angular/core';
import { TaskdashboardService } from 'src/app/Services/taskdashboard.service';
import { Taskdashboard } from 'src/app/Models/taskdashboard';
import { ActivatedRoute, Router } from '@angular/router';
import { Subtask } from 'src/app/Models/subtask';

@Component({
  selector: 'app-gettask',
  templateUrl: './gettask.component.html',
  styleUrls: ['./gettask.component.css']
})
export class GettaskComponent implements OnInit{
  tasks: Taskdashboard[] = [];
  batchId!: number;
  userTaskID! : string;

  constructor(private taskService: TaskdashboardService, private route: ActivatedRoute,private router:Router) { }

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

}
