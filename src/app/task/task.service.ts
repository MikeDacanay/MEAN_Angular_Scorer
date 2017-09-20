import { Injectable } from '@angular/core';

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
