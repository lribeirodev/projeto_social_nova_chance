import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontActionsComponent } from './front-actions.component';
import { CardActionComponent } from './card-action/card-action.component';

@NgModule({
  declarations: [FrontActionsComponent, CardActionComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    FrontActionsComponent,
  ]
})
export class FrontActionsModule { }
