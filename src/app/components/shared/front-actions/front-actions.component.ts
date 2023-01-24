import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CARD_FRONT_ACTION_POSITION } from '../../core/enum/components/front-actions/front-actions.enum';
import { CARD_FRONT_ACTION, FRONT_ACTION } from '../../core/interfaces/components/front-actions/front-actions.interface';

import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-front-actions',
  templateUrl: './front-actions.component.html',
  styleUrls: ['./front-actions.component.scss']
})
export class FrontActionsComponent implements OnInit {

  title!: string;
  cards: Array<CARD_FRONT_ACTION> = [];
  loading : boolean = true;

  constructor(private content: ContentService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.content.requestData<FRONT_ACTION>(this.route,'front-actions').then(data => {
      this.title = data.title;
      for(let front of data.actions){
        this.createCardFrontAction(front.title, front.body, front.imageSrc, front.position);
      }
    })
    .finally(() => {
      this.loading = false;
    });
  }

  createCardFrontAction(title: string, body: string, imageSrc: string, position: CARD_FRONT_ACTION_POSITION): void {
    this.cards.push({
      title: title.toUpperCase(),
      body: body,
      imageSrc: imageSrc,
      position: position,
    })
  }

}
