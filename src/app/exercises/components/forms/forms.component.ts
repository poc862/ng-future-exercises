import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { DateTime } from 'luxon'

interface HabitFormModel {
  name: FormControl<string>
  date: FormControl<DateTime>
  completed?: FormControl<boolean>
}

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule],
})
export class FormsComponent {
  habits: { name: string | null | undefined; date: DateTime }[] = []
  habitForm = new FormGroup({
    habitName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  onSubmit() {
    if (this.habitForm.invalid) {
      alert('Error')
    } else {
      this.habits.push({ name: this.habitForm.value.habitName, date: DateTime.now() })
    }
  }
}
