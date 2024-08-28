import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  Signal,
} from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user?: User;
  @Input({ required: true }) selected?: boolean;
  @Output() userSelection = new EventEmitter<string>();

  imagePath: Signal<string> = computed(() => {
    return `assets/users/${this.user?.avatar}`;
  });

  onSelectUser(userId?: string): void {
    this.userSelection.emit(userId);
  }
}
