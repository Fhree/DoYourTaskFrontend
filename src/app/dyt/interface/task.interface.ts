import { Status } from "./status.interface";
import { TypeTask } from "./type-task.interface";

export interface Task {
    id:          number;
    name:        string;
    description: string;
    type:        TypeTask;
    status:      Status;
}

export interface NewTask{
    name:        string;
    description: string;
    typeId:        number;
    statusId:      number;
}

export interface UpdateTask{
    id:          number;
    name:        string;
    description: string;
    typeId:        number;
    statusId:      number;
}