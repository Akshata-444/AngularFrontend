import { Component , OnInit} from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { TaskdashboardService } from 'src/app/Services/taskdashboard.service';
import { Taskdashboard  } from 'src/app/Models/taskdashboard';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})

export class AddtaskComponent  implements OnInit{
  batchId!: number;
  taskName:string='';
  description:string='';
  priority:string='';
  deadLine:Date=new Date();
  status:string='';
  comments:string='';

  constructor(
    private taskService: TaskdashboardService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.batchId = this.route.snapshot.params['batchId'];
  }

  addTask(form: NgForm) {
    if (form.valid) {
      let priorityValue: number;
      switch (form.value.priority.toLowerCase()) {
        case 'high':
          priorityValue = 0;
          break;
        case 'medium':
          priorityValue = 2;
          break;
        case 'low':
          priorityValue = 1;
          break;
        default:
          priorityValue = 2; // Default to medium if priority is not recognized
      }

      const taskData: any = {
        taskName: form.value.taskName,
        description: form.value.description,
        priority: priorityValue,
        deadLine: form.value.deadLine,
        status: form.value.status,
        comments: form.value.comments
      };

      this.taskService.assignTaskToBatch(this.batchId, taskData).subscribe({
        next: (response) => console.log('Task added successfully', response),
        error: (error) => console.error('There was an error!', error)
      });
      /*BatchId: this.batchId // Assign the batchId from the route params
        ,
      this.taskService.assignTaskToBatch(this.batchId,taskData).subscribe({
        next: (response) => console.log('Task added successfully', response),
        error: (error) => console.error('There was an error!', error)
      });*/
  /*addTask(): void {
    this.taskService.assignTaskToBatch(this.batchId, this.task).subscribe(
      (response) => {
        console.log('Task added successfully', response);
        // Handle success here, you can display the response or show a success message to the user
      },
      (error) => {
        console.error('Error adding task', error);
        // Handle error here, show user-friendly message, etc.
      }
    );*/
  }
}


}
