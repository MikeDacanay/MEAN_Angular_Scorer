import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable()
export class TaskService {
	tasks = ['services works']
  constructor(private _http: Http) { }

  retrieveTasks(x, callback) {
    this._http.get('https://api.github.com/users/'+x).subscribe(
      (response) => {
        this.tasks = response.json();
        callback(this.tasks);
      },
      (err) => {
        console.log(err);
      }
    );
	}
}
