import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Route, Router} from '@angular/router';
import { Getusertask } from 'src/app/Models/getusertask';
import { UsertaskService } from 'src/app/Services/usertask.service';

@Component({
  selector: 'app-etask',
  templateUrl: './etask.component.html',
  styleUrls: ['./etask.component.css']
})
export class EtaskComponent implements OnInit {
  userId!: number;
  taskId!:string;
  tasks: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router,private taskService: UsertaskService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.loadTasks();
    });
  }

  loadTasks() {
    this.taskService.getTasksByUserId(this.userId)
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  getusersubTask(): void {
    this.router.navigate(['/usergetsubtask', this.userId]);
  }
}
