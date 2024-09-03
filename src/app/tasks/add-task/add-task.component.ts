import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() addItem: EventEmitter<NewTask> = new EventEmitter<NewTask>();
  @Input({ required: true }) userId!: string;
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  private tasksService = inject(TasksService);

  onCancelTask() {
    this.closeModal.emit();
  }

  onFormSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.closeModal.emit();
  }
}
