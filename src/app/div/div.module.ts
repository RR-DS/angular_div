import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivComponent } from './div';
import { DivService } from './services';



@NgModule({
  declarations: [
    DivComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DivComponent
  ],
  providers: [
    DivService
  ]

})
export class DivModule { }
