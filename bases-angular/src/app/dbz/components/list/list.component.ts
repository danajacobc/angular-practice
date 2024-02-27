import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Thunks',
    power: 10,
  }]

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id?: string): void {
    //TODO: Emitir el ID del personaje.
    if(!id) return;
    this.onDelete.emit( id );
  }
}
