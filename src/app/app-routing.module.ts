import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitatorListComponent } from './facilitator/facilitator-list/facilitator-list.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'facilitator', component: FacilitatorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
