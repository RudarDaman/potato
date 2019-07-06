import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NavbarModule, WavesModule, ButtonsModule, InputsModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    InputsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class UserModule { }
