import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const route: Routes = [
    {
        path: '',
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class UserRoutingModule {}
