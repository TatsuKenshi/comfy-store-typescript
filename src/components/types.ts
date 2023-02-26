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

// stripe types
export interface StripeCheckoutStatic {
  configure(options: StripeCheckoutOptions): StripeCheckoutHandler;
}

export interface StripeCheckoutHandler {
  open(options?: StripeCheckoutOptions): void;
  close(): void;
}

export interface StripeCheckoutOptions {
  key?: string | undefined;
  token?(token: stripe.Token): void;
  source?(source: stripe.Source): void;
  image?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  amount?: number | undefined;
  locale?: string | undefined;
  currency?: string | undefined;
  panelLabel?: string | undefined;
  zipCode?: boolean | undefined;
  billingAddress?: boolean | undefined;
  email?: string | undefined;
  shippingAddress?: boolean | undefined;
  label?: string | undefined;
  allowRememberMe?: boolean | undefined;
  bitcoin?: boolean | undefined;
  alipay?: boolean | "auto" | undefined;
  alipayReusable?: boolean | undefined;
  opened?(): void;
  closed?(): void;
}

export declare var StripeCheckout: StripeCheckoutStatic;
