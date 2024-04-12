import { Component, input } from '@angular/core'
import { HabitComponent } from '../habit/habit.component'

@Component({
  selector: 'app-habits-list',
  standalone: true,
  templateUrl: './habits-list.component.html',
  styleUrl: './habits-list.component.css',
  imports: [],
})
export class HabitsListComponent {
  habits: string[] = ['Correr', 'Cocinar', 'Leer']
}
