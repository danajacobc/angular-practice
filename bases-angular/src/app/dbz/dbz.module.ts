import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbzMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [
    DbzMainPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
