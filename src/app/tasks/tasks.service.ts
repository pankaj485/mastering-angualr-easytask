import { Injectable } from '@angular/core';
import { NewTask, Task } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {
    const tasksData: any = localStorage.getItem('tasks');

    if (tasksData === '[]') {
      this.tasksList = [
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
    } else if (tasksData) {
      this.tasksList = JSON.parse(tasksData);
    }
  }

  @Injectable({
    providedIn: 'root',
  })
  private tasksList: Task[] = [];

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
  }

  getUserTasks(userId: string) {
    return this.tasksList.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    const { date, summary, title } = taskData;
    const newTask: Task = {
      id: new Date().getTime().toString(),
      userId: userId,
      title,
      summary,
      dueDate: date,
    };
    this.tasksList.unshift(newTask);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasksList = this.tasksList.filter((task) => task.id !== taskId);
    this.saveTasks();
  }
}
