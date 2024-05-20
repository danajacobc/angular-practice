import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  // @Output()
  // public onValue = new EventEmitter<string>();
  onValue = output<string>();

  emitValue( value: string ): void {
    this.onValue.emit(value);
  }
  
}
