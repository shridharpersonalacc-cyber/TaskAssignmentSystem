import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskList {

}
