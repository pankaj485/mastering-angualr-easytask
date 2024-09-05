import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
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

  oncloseAddTask() {
    this.isAddingTask = false;
  }
}
