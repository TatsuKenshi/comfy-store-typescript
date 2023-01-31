// type for filtering featured products
export type ProductType = {
  featured?: boolean;
  category: string;
};

export type ProductsInitialStateType = {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products: [];
  // the featured_products array is made up of ProductType items
  featured_products: ProductType[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: {};
  similar_products: [];

  // states from the filterSlice types
  filtered_products: [];
  // all_products: [];
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
