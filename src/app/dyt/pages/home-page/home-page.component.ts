import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interface/task.interface';
import { TaskCardComponent } from '../../components/task-card/task-card.component';

@Component({
  selector: 'dyt-home-page',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  constructor(private taskService: TaskService){}
    
  seachTasks(): Task[]{
    return this.taskService.tasks;
  }
}
