import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { LinerModule } from '../liner/liner.module';


@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule,
    LinerModule,
  ],
  exports: [
    TitleComponent,
  ]
})
export class TitleModule { }
