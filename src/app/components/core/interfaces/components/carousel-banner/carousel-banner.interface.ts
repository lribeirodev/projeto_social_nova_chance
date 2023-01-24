import { CAROUSEL_BANNER_DONATION_TYPE, CAROUSEL_BANNER_IMAGE_POSITION } from "../../../enum/components/carousel-banner/carousel-banner.enum";

export interface CAROUSEL_BANNER {
  images: CAROUSEL_BANNER_IMAGE[],
  donation: CAROUSEL_BANNER_DONATION[]
}

export interface CAROUSEL_BANNER_IMAGE {
  className: string,
  imageSrc: string,
}

export interface CAROUSEL_BANNER_DONATION {
  type: CAROUSEL_BANNER_DONATION_TYPE,
  className: string,
  value: string,
}

