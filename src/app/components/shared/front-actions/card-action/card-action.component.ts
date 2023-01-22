import { Component, Input } from "@angular/core";
import { CARD_FRONT_ACTION } from "../front-actions.component";

@Component({
  selector: "app-card-action",
  templateUrl: "./card-action.component.html",
  styleUrls: ["./card-action.component.scss"],
})
export class CardActionComponent {

  @Input() card!: CARD_FRONT_ACTION;

}
