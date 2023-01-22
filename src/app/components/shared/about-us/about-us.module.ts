import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { CardAboutUsComponent } from './card-about-us/card-about-us.component';

@NgModule({
  declarations: [AboutUsComponent, CardAboutUsComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    AboutUsComponent,
  ]
})
export class AboutUsModule { }
