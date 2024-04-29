import { Component } from '@angular/core';
import { TaskService } from '../../../dyt/services/task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
  constructor(private taskService: TaskService){}
  
  searchAllTasks() {
    this.taskService.getAll();
  }
}
