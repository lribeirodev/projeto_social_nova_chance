import { Component, OnInit } from '@angular/core';

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

  private imageConfig: imageConfg = {
    prefix: 'image_',
    path: '/assets/images/gallery/carousel/',
    qtd: 4,
    desktop: {
      class: ["top__left", "top__right", "bottom__left", "bottom__right"],
    }
  };

  public arrImages: imageItem[] = [];

  ngOnInit(): void {
    this.arrImages = this.createImagesLinks();
  }

  private createImagesLinks(): imageItem[] {
    return [...Array(this.imageConfig.qtd).keys()].map((value, index) => {
      return {
        link: `${this.imageConfig.path + this.imageConfig.prefix + value + '.jpeg'}`,
        classDesktop: index < 4 ? this.imageConfig.desktop.class[index] : '',
      }
    });
  }

}
