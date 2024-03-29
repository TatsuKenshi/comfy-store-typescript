// type for filtering featured products
export type ProductType = {
  featured?: boolean;
  category: string;
  id: string;
  name: string;
  price: number;
  image: string;
  company: string;
  shipping: boolean;
  description: string;
  colors: [];
};

export type SingleProductType = {
  featured?: boolean;
  category: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  stars: number;
  reviews: number;
  id: string;
  company: string;
  colors: string[];
  images: [];
  shipping: boolean;
};

export type ProductsInitialStateType = {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products: ProductType[];
  // the featured_products array is made up of ProductType items
  featured_products: ProductType[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: SingleProductType;
  similar_products: ProductType[];

  // states from the filterSlice types
  filtered_products: ProductType[];
  grid_view: boolean;
  sort: string;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
};

export type CartProductType = {
  id: string;
  name: string;
  color: string;
  amount: number;
  image: string;
  price: number;
  max: number;
};

export type CartInitialStateType = {
  cart: CartProductType[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;
};
