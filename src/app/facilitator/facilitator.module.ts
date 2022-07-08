import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitatorListComponent } from './facilitator-list/facilitator-list.component';
import { AddFacilitatorComponent } from './add-facilitator/add-facilitator.component';



@NgModule({
  declarations: [
    FacilitatorListComponent,
    AddFacilitatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FacilitatorModule { }
