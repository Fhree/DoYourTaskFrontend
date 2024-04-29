import { Injectable } from '@angular/core';
import { NewTask, Task, UpdateTask } from '../interface/task.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environments.dev';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks: Task[] = [];

  private API_URI: string = `${environment.DYT_API_URI}Tasks/`;

  constructor(private http: HttpClient, private router: Router) { }

  getTask(id: number): Observable<Task>{
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.get<Task>(`${this.API_URI}GetTask`, {params});
  }

  getAll(): void{
    this.http.get<Task[]>(`${this.API_URI}GetAllTasks`)
    .subscribe(resp => {
      this.tasks = resp;
    });
  }

  createTask(task: NewTask): void{
    this.http.post(`${this.API_URI}CreateTask`, task).subscribe(resp => {
      alert('Task created');
      this.getAll();
      this.router.navigate(['home']);
    });
  }

  updateTask(task: UpdateTask): void{
    this.http.put(`${this.API_URI}UpdateTask`, task).subscribe(resp => {
      alert('Task updated');
      this.getAll();
      this.router.navigate(['home']);
    });
  }

  deleteTask(id: number): void{
    let params = new HttpParams();
    params = params.set('id', id);
    this.http.delete(`${this.API_URI}DeleteTask/`,{params}).subscribe(resp => {
      this.tasks.splice( this.tasks.findIndex(t => t.id === id),1);
    });
  }
}
