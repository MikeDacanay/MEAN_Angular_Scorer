import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task/task.service'
@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {
	title= 'asfsd works!';

	tasks = [];
  constructor(private _taskService: TaskService) { 
  	this.tasks = this._taskService.retrieveTasks();
  }

  ngOnInit() {
  }

}
