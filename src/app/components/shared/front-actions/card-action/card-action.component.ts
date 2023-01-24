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

  public ngOnInit(): void {
    this.toggleVisionBetweenDesktopAndMobile();
  }

  @HostListener('window:resize', ['$event'])
  private toggleVisionBetweenDesktopAndMobile() {
    if(this.card.position !== CARD_FRONT_ACTION_POSITION.NONE) this._position = this.card.position;
    if(window.outerWidth <= 500){
      this.card.position = CARD_FRONT_ACTION_POSITION.NONE;
    } else {
      this.card.position = this._position;
    }
  }

}
