import { CARD_FRONT_ACTION_POSITION } from "../../../enum/components/front-actions/front-actions.enum";

export interface FRONT_ACTION {
  title: string,
  actions: CARD_FRONT_ACTION[]
}

export interface CARD_FRONT_ACTION {
  title: string,
  body: string,
  imageSrc: string,
  position: CARD_FRONT_ACTION_POSITION,
}
