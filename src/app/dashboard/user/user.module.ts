import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import {NavbarModule, WavesModule, ButtonsModule, InputsModule, CardsFreeModule} from 'angular-bootstrap-md';
import { PotatoQuoteComponent } from './potato-quote/potato-quote.component';
import {SharedModule} from '../../shared/shared.module';
import { AddQuoteComponent } from './add-quote/add-quote.component';

@NgModule({
  declarations: [
    UserComponent,
    PotatoQuoteComponent,
    AddQuoteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    CardsFreeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class UserModule { }
