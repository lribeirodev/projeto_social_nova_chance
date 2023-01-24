import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { CardAboutUsComponent } from './card-about-us/card-about-us.component';
import { ContentService } from '../../core/services/content.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutUsComponent, CardAboutUsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutUsComponent,
  ],
  providers: [
    ContentService,
  ]
})
export class AboutUsModule { }
