import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { randomFillSync } from 'crypto';
import { CAROUSEL_BANNER_DONATION_CLASSNAME, CAROUSEL_BANNER_DONATION_TYPE, CAROUSEL_BANNER_IMAGE_LIMIT_GROUP, CAROUSEL_BANNER_IMAGE_POSITION } from '../../core/enum/components/carousel-banner/carousel-banner.enum';
import { CAROUSEL_BANNER, CAROUSEL_BANNER_DONATION, CAROUSEL_BANNER_IMAGE } from '../../core/interfaces/components/carousel-banner/carousel-banner.interface';
import { ContentService } from '../../core/services/content.service';

interface imageConfg {
  prefix: string,
  path: string,
  qtd: number,
  desktop: {
    class : string[]
  }
}

interface imageItem {
  link: string,
  classDesktop: string,
}

@Component({
  selector: 'app-carousel-banner',
  templateUrl: './carousel-banner.component.html',
  styleUrls: ['./carousel-banner.component.scss']
})
export class CarouselBannerComponent implements OnInit {

  loading : boolean = true;
  donationSection: CAROUSEL_BANNER_DONATION[] = [];
  imageSection: CAROUSEL_BANNER_IMAGE[] = [];

  constructor(private content: ContentService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.content.requestData<CAROUSEL_BANNER>(this.route, 'carousel-banner')
    .then(data => {

      this.donationSection = data.donation
      .map(item => this.createDonationItem(item));

      this.imageSection = data.images
      .sort((a,b) => {
        return Math.floor(Math.random() * a.imageSrc.length) > Math.floor(Math.random() * b.imageSrc.length ) ? -1 : 0;
      })
      .slice(0,CAROUSEL_BANNER_IMAGE_LIMIT_GROUP.DESKTOP)
      .map((item, index)  => {
        item.className = CAROUSEL_BANNER_IMAGE_POSITION[index];
        return item;
      });

    })
    .finally(() => {
      this.loading = false;
    });
  }

  private createDonationItem(item: CAROUSEL_BANNER_DONATION): CAROUSEL_BANNER_DONATION{
   item.className = item.type === CAROUSEL_BANNER_DONATION_TYPE.TEXT ? CAROUSEL_BANNER_DONATION_CLASSNAME.TEXT : CAROUSEL_BANNER_DONATION_CLASSNAME.IMAGE;
    return item;
  }

  public isTextDonation(item: CAROUSEL_BANNER_DONATION): boolean{
    return item.type === CAROUSEL_BANNER_DONATION_TYPE.TEXT;
  }

  public isImageDonation(item: CAROUSEL_BANNER_DONATION): boolean{
    return item.type === CAROUSEL_BANNER_DONATION_TYPE.IMAGE;
  }

  public getImageSectionTop() : CAROUSEL_BANNER_IMAGE[] {
    return this.imageSection.slice(0,2);
  }

  public getImageSectionBottom() : CAROUSEL_BANNER_IMAGE[] {
    return this.imageSection.slice(2,4);
  }
}
