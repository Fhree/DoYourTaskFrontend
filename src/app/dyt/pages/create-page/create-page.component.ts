import { Component } from '@angular/core';
import { TypeTaskService } from '../../services/type-task.service';
import { TypeTask } from '../../interface/type-task.interface';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { NewTask } from '../../interface/task.interface';


@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.css'
})
export class CreatePageComponent {
  public selectedTypeTask: TypeTask = { id: 0, name: '' };
  public taskForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    typeId: new FormControl<number>(0)
  });

  constructor(private typeTaskService: TypeTaskService,
    private taskService: TaskService){}

  searchTypeTasks(): TypeTask[]{
    return this.typeTaskService.typeTasks;
  }

  onSubmit(): void {
    let newTask: NewTask = {
      name: this.taskForm.value.name as string,
      description: this.taskForm.value.description as string,
      statusId: 1,
      typeId: this.taskForm.value.typeId as number
    };
    this.taskService.createTask(newTask);
  }
}
