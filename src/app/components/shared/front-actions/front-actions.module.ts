import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontActionsComponent } from './front-actions.component';
import { CardActionComponent } from './card-action/card-action.component';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [FrontActionsComponent, CardActionComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
  ],
  exports: [
    FrontActionsComponent,
  ],
  providers: [
    ContentService,
  ]
})
export class FrontActionsModule { }
