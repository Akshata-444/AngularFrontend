import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubtaskService } from 'src/app/Services/subtask.service';
import { Subtask } from 'src/app/Models/subtask';

@Component({
  selector: 'app-usergetsubtask',
  templateUrl: './usergetsubtask.component.html',
  styleUrls: ['./usergetsubtask.component.css']
})
export class UsergetsubtaskComponent implements OnInit{
  subtasks: Subtask[] = [];
  taskId: string = '';
  subtaskId :string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private subtaskService: SubtaskService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const taskId = params.get('taskId');
      if (taskId) {
        this.taskId = taskId;
        this.getAllSubtasks();
      }
    });
  }

  getAllSubtasks(): void {
    if (this.taskId) {
      this.subtaskService.getAllSubtasks(this.taskId).subscribe(
        subtasks => {
          this.subtasks = subtasks;
          console.log('Subtasks:', subtasks);
        },
        error => {
          console.error('Error fetching subtasks:', error);
        }
      );
    }
  }}
