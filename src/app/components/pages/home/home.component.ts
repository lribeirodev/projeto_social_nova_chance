import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentService } from '../../core/services/content.service';
import { PagesService } from '../../core/services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private route: ActivatedRoute,
    private service: PagesService,
    ) {
      this.service.changeTitle(this.route);
  };
}
