import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskService } from './task/task.service';
import { AppComponent } from './app.component';
import { ScoreKeeperComponent } from './score-keeper/score-keeper.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScoreKeeperComponent,
    FormcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
