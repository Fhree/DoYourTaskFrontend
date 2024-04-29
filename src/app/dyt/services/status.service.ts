import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments.dev';
import { Status } from '../interface/status.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  public status: Status[] = [];

  private API_URI: string = `${environment.DYT_API_URI}Status/`;

  constructor(private http: HttpClient) {}
  
  // get status(): Status[]{
  //   if(this._status.length === 0){
  //     this.getAll();
  //     return this._status;
  //   }
  //   else
  //     return this._status;
  // }

  getAll(): void{
    this.http.get<Status[]>(`${this.API_URI}GetAllStatus`)
    .subscribe(resp => {
      this.status = resp;
    });
  }
}
