import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselBannerComponent } from './carousel-banner.component';
import { LoadingModule } from '../loading/loading.module';


@NgModule({
  declarations: [CarouselBannerComponent,],
  imports: [
    CommonModule,
    LoadingModule,
  ],
  exports:[CarouselBannerComponent,]
})
export class CarouselBannerModule { }
