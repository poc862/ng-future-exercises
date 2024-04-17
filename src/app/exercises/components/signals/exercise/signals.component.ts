import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComponent {
  valueSignalBase = signal(0)

  decrease() {
    this.valueSignalBase.update(value => value - 1)
  }

  increase() {
    this.valueSignalBase.update(value => value + 1)
  }

  reset() {
    this.valueSignalBase.set(0)
  }
}
