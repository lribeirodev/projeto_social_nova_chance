import { Component, Input } from "@angular/core";
import { TYPE_CARD_ABOUT_US } from "src/app/components/core/enum/components/about-us/about-us.enum";
import { CARD_ABOUT_US } from "src/app/components/core/interfaces/components/about-us/about-us.interface";
@Component({
  selector: 'app-card-about-us',
  templateUrl: './card-about-us.component.html',
  styleUrls: ['./card-about-us.component.scss']
})
export class CardAboutUsComponent {
  @Input() card!: CARD_ABOUT_US;

  getBullets(): string[]{

    if(typeof this.card.body === 'object'){
      return this.card.body;
    }

    return [];
  }

  isTextType(): boolean {
    return this.card.type === TYPE_CARD_ABOUT_US.TEXT;
  }

  isBulletType(): boolean {
    return this.card.type === TYPE_CARD_ABOUT_US.BULLET;
  }
}
