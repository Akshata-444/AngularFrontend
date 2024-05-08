import { Component , OnInit} from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { TaskdashboardService } from 'src/app/Services/taskdashboard.service';
import { Taskdashboard  } from 'src/app/Models/taskdashboard';
//import { NgForm } from '@angular/forms';
import { MatSnackBar , MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})

export class AddtaskComponent  implements OnInit{

  batchId!: number;
  taskForm: FormGroup;

  constructor(
    private taskService: TaskdashboardService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      deadLine: ['', [Validators.required,this.validateDeadlineDate]],
      status: ['', Validators.required],
      comments: ['']
    });
  }

  ngOnInit(): void {
    this.batchId = this.route.snapshot.params['batchId'];
  }

  validateDeadlineDate(control: AbstractControl) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      return { pastDate: true };
    }
    return null;
  }
  addTask() {
    if (this.taskForm.valid) {
      let priorityValue: number;
      switch (this.taskForm.value.priority.toLowerCase()) {
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
        taskName: this.taskForm.value.taskName,
        description: this.taskForm.value.description,
        priority: priorityValue,
        deadLine: this.taskForm.value.deadLine,
        status: this.taskForm.value.status,
        comments: this.taskForm.value.comments
      };

      this.taskService.assignTaskToBatch(this.batchId, taskData).subscribe({
        next: (response) => {
          console.log('Task added successfully', response);
          this.showNotification('Task added successfully');
          this.taskForm.reset();
        },
        error: (error) => console.error('There was an error!', error)
      });
    }
  }

  private showNotification(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'center' as MatSnackBarVerticalPosition // Duration of the notification in milliseconds
    });
  }
}
