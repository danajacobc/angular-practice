import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h3>Contador:</h3>
  <button (click)="increseBy(-1)">-1</button>
  <h3>{{ counter }}</h3>
  <button (click)="increseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>`
})
export class CounterComponent {
  constructor() { }
  public counter: number = 10;

  increseBy( value: number ): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
