import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task/task.service'
@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {
	title= 'asfsd works!';
  user= {username:"",};
	tasks = "";
  constructor(private _taskService: TaskService) { 
    this.tasks;
  }

  ngOnInit() {
  }

  getTasks() {
    this._taskService.retrieveTasks(this.user.username ,(tasks) => {
      this.tasks = tasks;
    });
  }

  onSubmit(){
    if(this.user.username.length>0){
      console.log(this.user.username);
      this.getTasks()
    }
  }

}
