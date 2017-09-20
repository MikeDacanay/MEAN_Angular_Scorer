import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable()
export class TaskService {
	tasks = ['services works']
  constructor() { }

  retrieveTasks(){
    return this.tasks;
  }
 
  createTask(task){
    this.tasks.push(task);
  }
}
