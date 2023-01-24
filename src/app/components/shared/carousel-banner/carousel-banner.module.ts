import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselBannerComponent } from './carousel-banner.component';
import { LoadingModule } from '../loading/loading.module';
import { ContentService } from '../../core/services/content.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CarouselBannerComponent,],
  imports: [
    CommonModule,
    LoadingModule,
    RouterModule,
  ],
  exports:[CarouselBannerComponent,],
  providers: [
    ContentService,
  ]
})
export class CarouselBannerModule { }
