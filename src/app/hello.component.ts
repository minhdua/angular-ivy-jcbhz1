import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  padLeft = (n) => (n >= 10 ? n : `0${n}`);
  @Input() name: string;
  constructor() {
    console.log(this.padLeft(8));
    document.getElementById()
  }
}
