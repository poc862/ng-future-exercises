import { Component, input } from '@angular/core'

@Component({
  selector: 'app-habit',
  styleUrl: './habit.component.css',
  templateUrl: './habit.component.html',
  standalone: true,
  imports: [],
})
export class HabitComponent {
  //habit = input.required<string>()

  //textColor = this.habit().match("C*")

  textComponent = input.required<string>()

  getClasses() {
    return {
      'begins-with-letter-a': this.textComponent().toLowerCase().startsWith('a'),
    }
  }
}
