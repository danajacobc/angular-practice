import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable( //yo puedo injectar este servicio.
  {providedIn: 'root'}
  )
export class DbzService {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  }, {
    name: 'Vegeta',
    power: 7500
  }, {
    name: 'Goku',
    power: 9500
  }];

  onNewCharacter(character: Character): void{
    this.characters.push(character);
  }

  onDeleteCharacter(index:number) {
    this.characters.splice(index, 1);
  }

}
