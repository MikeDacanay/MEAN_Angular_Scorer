import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskService } from './task/task.service';
import { AppComponent } from './app.component';
import { ScoreKeeperComponent } from './score-keeper/score-keeper.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreKeeperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
