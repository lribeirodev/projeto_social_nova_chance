import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../../core/services/pages.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent {

  constructor(
    private router: ActivatedRoute,
    private service: PagesService,
  ) {
    this.service.changeTitle(this.router);
  };
}
