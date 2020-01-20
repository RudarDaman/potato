import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './user.component';
import {PotatoQuoteComponent} from './potato-quote/potato-quote.component';
import {AddQuoteComponent} from './add-quote/add-quote.component';

const route: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [{
      path: '',
      component: PotatoQuoteComponent
    }, {
      path: 'add',
      component: AddQuoteComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
