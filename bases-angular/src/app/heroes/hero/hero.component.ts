import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

   get capitalizedName(): string { //los getters se ven como propiedad, pero son métodos.
      return this.name.toUpperCase();
   }

   getHeroDescription(): string {  //método
    return `${this.name} - ${this.age}`;
   }

}
