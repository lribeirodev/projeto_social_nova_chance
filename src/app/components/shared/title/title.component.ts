import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title!: string;

  config!: {
    title: string,
    liner: {
      top: {
        top: string,
        bottom: string,
      },
      bottom: {
        top: string,
        bottom: string,
      }
    }
  };

  ngOnInit(): void {
    this.config = {
      title: this.title.toUpperCase(),
      liner: {
        top: {
          top : "46px",
          bottom : "32px",
        },
        bottom: {
          top : "32px",
          bottom : "46px",
        }
    }
    }
  }

}
