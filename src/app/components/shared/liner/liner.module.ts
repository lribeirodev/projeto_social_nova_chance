import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinerComponent } from './liner.component';



@NgModule({
  declarations: [LinerComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    LinerComponent,
  ]
})
export class LinerModule { }
