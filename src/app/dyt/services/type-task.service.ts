import { Injectable } from '@angular/core';
import { TypeTask } from '../interface/type-task.interface';
import { environment } from '../../../environments/environments.dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeTaskService {
  private _typeTasks: TypeTask[] = [];

  private API_URI: string = `${environment.DYT_API_URI}TypeTask/`;

  constructor(private http: HttpClient) { }

  get typeTasks(): TypeTask[]{
    if(this._typeTasks.length === 0)
      this.getAll();

    return this._typeTasks;
  }

  getAll(): void{
    this.http.get<TypeTask[]>(`${this.API_URI}GetAllTypeTasks`)
    .subscribe(resp => {
      this._typeTasks = resp;
    });
  }
}
