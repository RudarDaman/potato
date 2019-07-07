import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonsModule, InputsModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    InputsModule
  ],
  exports: [
    NavbarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
