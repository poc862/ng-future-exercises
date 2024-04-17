import { Component, Signal, WritableSignal, computed, signal } from '@angular/core'
import { count } from 'rxjs'

@Component({
  selector: 'app-signals-computed',
  templateUrl: './signals-computed.component.html',
  styleUrl: './signals-computed.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComputedComponent {
  count: WritableSignal<number> = signal(0)
  doubleCount: Signal<number> = computed(() => this.count() * 2)

  decrease() {
    this.count.update(value => value - 1)
  }

  increase() {
    this.count.update(value => value + 1)
  }

  reset() {
    this.count.set(0)
  }
}
