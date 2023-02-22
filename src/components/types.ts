import { SingleProductType } from "../app/types";

export type PageHeroTypes = {
  title: string;
  product?: string;
};

export type AddToCartTypes = {
  product: SingleProductType;
};

export type StarsTypes = {
  stars: number;
};

export type ProductImagesTypes = {
  images: [];
};
