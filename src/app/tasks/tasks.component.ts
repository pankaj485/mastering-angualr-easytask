import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { NewTask, Task } from './task/task.model';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';

let dummyTasks: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, FormsModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUser?: User;
  @Input({ required: true }) userId?: string;

  isAddingTask: boolean = false;
  newTask?: Task;

  get selectedUserTasks(): Task[] {
    return dummyTasks.filter((task) => task.userId === this.userId);
  }

  onTaskCompleted(taskId: string) {
    dummyTasks = dummyTasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onTaskAdd(task: NewTask) {
    const { date, summary, title } = task;
    const newTask: Task = {
      id: new Date().getTime().toString(),
      userId: this.userId || '',
      title,
      summary,
      dueDate: date,
    };
    dummyTasks.unshift(newTask);
    this.isAddingTask = false;
  }
}
