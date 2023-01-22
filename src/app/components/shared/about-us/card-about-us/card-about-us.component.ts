import { Component, Input } from "@angular/core";
import { CARD_ABOUT_US, TYPE_CARD_ABOUT_US } from "../about-us.component";

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
