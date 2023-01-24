import { Component, HostListener, Input, OnInit } from "@angular/core";
import { CARD_FRONT_ACTION_POSITION } from "src/app/components/core/enum/components/front-actions/front-actions.enum";
import { CARD_FRONT_ACTION } from "src/app/components/core/interfaces/components/front-actions/front-actions.interface";

@Component({
  selector: "app-card-action",
  templateUrl: "./card-action.component.html",
  styleUrls: ["./card-action.component.scss"],
})
export class CardActionComponent implements OnInit {

  @Input() card!: CARD_FRONT_ACTION;
  private _position!: CARD_FRONT_ACTION_POSITION;

  @HostListener('window:resize', ['$event'])
  public isMobile() {
    this.checkOuterWidth();
  }

  public ngOnInit(): void {
    this.checkOuterWidth();
  }

  private checkOuterWidth() {
    if(window.outerWidth <= 500){
      if(this.card.position !== CARD_FRONT_ACTION_POSITION.NONE) this._position = this.card.position;
      this.card.position = CARD_FRONT_ACTION_POSITION.NONE;
    } else {
      this.card.position = this._position;
    }
  }

}
