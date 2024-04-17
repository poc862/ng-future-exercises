import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core'

@Component({
  selector: 'app-signals-effect',
  templateUrl: './signals-effect.component.html',
  styleUrl: './signals-effect.component.css',
  standalone: true,
  imports: [],
})
export class SignalsEffectComponent {
  count: WritableSignal<number> = signal(0)
  doubleCount: Signal<number> = computed(() => this.count() * 2)

  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`)
    })
  }

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
