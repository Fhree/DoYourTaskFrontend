import { Component, Input } from '@angular/core';
import { Task, UpdateTask } from '../../interface/task.interface';
import { TaskService } from '../../services/task.service';
import { StatusService } from '../../services/status.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'dyt-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {


  @Input() public task!: Task;

  constructor(private taskService: TaskService, private router: Router){}

  completeTask() {
    let completedTask: UpdateTask = {
      id: this.task.id,
      name: this.task.name,
      description: this.task.description,
      typeId: this.task.type.id,
      statusId: 3
    };
    this.taskService.updateTask(completedTask);
  }

  updateTask() {
    this.router.navigate([`update/${this.task.id}`, { queryParams: { valor: this.task.id } }])
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}
