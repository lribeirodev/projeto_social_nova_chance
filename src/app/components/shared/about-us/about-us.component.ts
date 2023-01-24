import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TYPE_CARD_ABOUT_US } from '../../core/enum/components/about-us/about-us.enum';
import { ABOUT_US, CARD_ABOUT_US } from '../../core/interfaces/components/about-us/about-us.interface';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  title!: string;
  cards: Array<CARD_ABOUT_US> = [];

  constructor(private route: ActivatedRoute, private content: ContentService,){}

  ngOnInit(): void {
    this.content.requestData<ABOUT_US>(this.route, 'about-us').then(data => {
      this.title = data.title;
      let cards = [...data.cards];
      for(let card of cards) {
        this.createCardObj(card.title, card.body, card.size, card.lineHeight, card.type)
      }
    });
  }

  private createCardObj(title: string, body: string | string[], size: string, lineHeight: string, type: TYPE_CARD_ABOUT_US): void {
    this.cards.push({
      title: title,
      body: body,
      size: size,
      type: type,
      lineHeight: lineHeight,
    });
  }

}
