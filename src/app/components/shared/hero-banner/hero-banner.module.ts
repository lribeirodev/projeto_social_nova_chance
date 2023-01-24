import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './hero-banner.component';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../core/services/content.service';



@NgModule({
  declarations: [
    HeroBannerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HeroBannerComponent,
  ],
  providers: [
    ContentService,
  ]
})
export class HeroBannerModule { }
