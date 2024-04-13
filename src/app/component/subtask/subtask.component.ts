import { Component,OnInit} from '@angular/core';
import { SubtaskService } from 'src/app/Services/subtask.service';
import { ActivatedRoute } from '@angular/router';
import { Subtask } from 'src/app/Models/subtask';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  subtasks: Subtask[] = [];
  TaskId: string = '';

  constructor(
    private subtaskService: SubtaskService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const taskId = params.get('taskId');
      if (taskId) {
        this.TaskId = taskId;
        this.getAllSubtasks();
      }
    });
  }

  getAllSubtasks(): void {
    if (this.TaskId) {
      this.subtaskService.getAllSubtasks(this.TaskId).subscribe(
        subtasks => {
          this.subtasks = subtasks;
          console.log('Subtasks:', subtasks);
        },
        error => {
          console.error('Error fetching subtasks:', error);
        }
      );
    }
  }

  addsubTask(): void {
    this.router.navigate(['/getsubtask', this.TaskId]);
  }

}
