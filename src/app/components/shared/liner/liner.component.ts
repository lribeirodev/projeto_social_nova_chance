import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liner',
  template: `<div class="liner-cmp" [style.margin-top]="top" [style.margin-bottom]="bottom">
              <div class="liner-cmp__container">
              </div>
            </div>`,
  styleUrls: ['./liner.component.scss']
})
export class LinerComponent {

  @Input() top: string = '';
  @Input() bottom: string = '';

}
