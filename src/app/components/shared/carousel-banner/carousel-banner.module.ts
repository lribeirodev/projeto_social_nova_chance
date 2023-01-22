import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselBannerComponent } from './carousel-banner.component';


@NgModule({
  declarations: [CarouselBannerComponent,],
  imports: [
    CommonModule,
  ],
  exports:[CarouselBannerComponent,]
})
export class CarouselBannerModule { }
