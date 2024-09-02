import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addItem: EventEmitter<NewTask> = new EventEmitter<NewTask>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancelTask() {
    this.cancel.emit();
  }

  onFormSubmit() {
    this.addItem.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
