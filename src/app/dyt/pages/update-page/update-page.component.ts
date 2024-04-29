import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeTaskService } from '../../services/type-task.service';
import { Task, UpdateTask } from '../../interface/task.interface';
import { TypeTask } from '../../interface/type-task.interface';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css'
})
export class UpdatePageComponent {
  public taskToUpdate!: Task;
  public taskForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    typeId: new FormControl<number>(0)
  });

  constructor(private typeTaskService: TypeTaskService,
    private taskService: TaskService, private route: ActivatedRoute){}

  ngOnInit(): void {
    let id!: number;
    this.route.params.subscribe(params => {
      id = params['id'];
    });

    this.taskService.getTask(id).subscribe(resp => {
      this.taskToUpdate = resp;
      this.taskForm.controls.name.setValue(this.taskToUpdate.name);
      this.taskForm.controls.description.setValue(this.taskToUpdate.description);
      this.taskForm.controls.typeId.setValue(this.taskToUpdate.type.id);
    });
  }

  searchTypeTasks(): TypeTask[]{
    return this.typeTaskService.typeTasks;
  }

  onSubmit(): void {
    console.log(this.taskForm.value.typeId)
    let updateTask: UpdateTask = {
      id: this.taskToUpdate.id,
      name: this.taskForm.value.name as string,
      description: this.taskForm.value.description as string,
      statusId: 1,
      typeId: this.taskForm.value.typeId as number
    };
    this.taskService.updateTask(updateTask);
  }
}
