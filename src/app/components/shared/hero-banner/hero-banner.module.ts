import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './hero-banner.component';



@NgModule({
  declarations: [
    HeroBannerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeroBannerComponent,
  ]
})
export class HeroBannerModule { }
