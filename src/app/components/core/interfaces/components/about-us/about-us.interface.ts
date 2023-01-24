import { TYPE_CARD_ABOUT_US } from "../../../enum/components/about-us/about-us.enum";

export interface ABOUT_US {
  title: string,
  cards : CARD_ABOUT_US[],
}

export interface CARD_ABOUT_US {
  title: string,
  body: string | string[],
  size: string,
  type: TYPE_CARD_ABOUT_US,
  lineHeight: string,
}
