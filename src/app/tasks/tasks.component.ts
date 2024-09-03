import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { NewTask, Task } from './task/task.model';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, FormsModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private taskService: TasksService) {}
  @Input({ required: true }) selectedUser?: User;
  @Input({ required: true }) userId: string = '';

  isAddingTask: boolean = false;
  newTask?: Task;

  get selectedUserTasks(): Task[] {
    return this.taskService.getUserTasks(this.userId);
  }

  onTaskCompleted(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onTaskAdd(task: NewTask) {
    this.taskService.addTask(task, this.userId);
    this.isAddingTask = false;
  }
}
