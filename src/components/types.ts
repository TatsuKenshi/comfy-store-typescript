import { SingleProductType, ProductType } from "../app/types";

export type PageHeroTypes = {
  title: string;
  product?: string;
};

export type AddToCartTypes = {
  product: SingleProductType;
};

export type StarsTypes = {
  stars: number;
  reviews: number;
};

export type MainImageTypes = {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    full: {
      url: string;
      width: number;
      height: number;
    };
    large: {
      url: string;
      width: number;
      height: number;
    };
    small: {
      url: string;
      width: number;
      height: number;
    };
  };
  type: string;
  url: string;
  width: number;
};

export type ProductImagesTypes = {
  images: MainImageTypes[];
};

export type AmountButtonsTypes = {
  amount: number;
  increaseAmount: () => void;
  decreaseAmount: () => void;
};

export type GridViewTypes = {
  products: ProductType[];
};

export type ListViewTypes = {
  products: ProductType[];
};
