import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spider-Man', 'Iron Man', 'Capitana Marvel', 'Thor', 'Hulk', 'Black Widow', 'Wolverine', 'Capitán América']


}
