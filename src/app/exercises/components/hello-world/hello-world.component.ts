import { Component } from '@angular/core'

@Component({
  selector: 'app-hello-world',
  standalone: true,
  styles: '.title {color: var(--primary-color);}',
  template: `<h1 class="title">Hello world!</h1>`,
})
export class HelloWorldComponent {}
