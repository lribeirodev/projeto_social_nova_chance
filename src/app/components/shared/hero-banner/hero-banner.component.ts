import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HERO_BANNER } from '../../core/interfaces/components/hero-banner/hero-banner.interface';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {

  public hero!: HERO_BANNER;
  public loading: boolean = true;

  constructor(private content: ContentService, private route: ActivatedRoute,){}

  ngOnInit(): void {
    this.content.requestData<HERO_BANNER>(this.route, 'hero-banner')
    .then(data => this.hero = data)
    .finally(() => {
      this.loading = false;
    });
  }

}
