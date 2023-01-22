import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeroBannerModule } from '../../shared/hero-banner/hero-banner.module';
import { LinerModule } from '../../shared/liner/liner.module';
import { CarouselBannerModule } from '../../shared/carousel-banner/carousel-banner.module';
import { TitleModule } from '../../shared/title/title.module';
import { FrontActionsModule } from '../../shared/front-actions/front-actions.module';
import { AboutUsModule } from '../../shared/about-us/about-us.module';
import { VideoPlayerModule } from '../../shared/video-player/video-player.module';
import { ContactFormComponent } from '../../shared/contact-form/contact-form.component';
import { ContactFormModule } from '../../shared/contact-form/contact-form.module';
import { BackTopComponent } from '../../shared/back-top/back-top.component';
import { BackTopModule } from '../../shared/back-top/back-top.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    HeroBannerModule,
    LinerModule,
    CarouselBannerModule,
    TitleModule,
    AboutUsModule,
    FrontActionsModule,
    VideoPlayerModule,
    ContactFormModule,
    BackTopModule,
  ]
})
export class HomeModule { }
