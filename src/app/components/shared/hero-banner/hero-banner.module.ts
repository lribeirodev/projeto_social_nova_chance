import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './hero-banner.component';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [
    HeroBannerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
  ],
  exports:[
    HeroBannerComponent,
  ],
  providers: [
    ContentService,
  ]
})
export class HeroBannerModule { }
