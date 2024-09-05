import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent,
  ],
  bootstrap: [AppComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
})
export class AppModule {}
