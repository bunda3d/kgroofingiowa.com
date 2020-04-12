import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancingComponent } from './financing.component';



@NgModule({
  declarations: [FinancingComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    FinancingComponent
  ]
})
export class FinancingModule { }
