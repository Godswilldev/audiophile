export interface ProductsProps {
  id: number;
  slug: string;
  name: string;

  image: {
    mobile: StaticImageData | string;
    tablet: StaticImageData | string;
    desktop: StaticImageData | string;
  };

  category: string;

  categoryImage: {
    mobile: StaticImageData | string;
    tablet: StaticImageData | string;
    desktop: StaticImageData | string;
  };

  new: boolean;
  price: number;
  description: string;
  features: string;

  others: {
    slug: string;
    name: string;
    image: {
      mobile: StaticImageData | string;
      tablet: StaticImageData | string;
      desktop: StaticImageData | string;
    };
  }[];

  including: {
    quantity: number;
    item: string;
  }[];

  gallery: {
    first: {
      desktop: StaticImageData | string;
      tablet: StaticImageData | string;
      mobile: StaticImageData | string;
    };
    second: {
      desktop: StaticImageData | string;
      tablet: StaticImageData | string;
      mobile: StaticImageData | string;
    };
    third: {
      desktop: StaticImageData | string;
      tablet: StaticImageData | string;
      mobile: StaticImageData | string;
    };
  };
}

export interface ProductsState {
  loading: boolean;
  error: string | null;
  products: ProductsProps[];
}

export type updateQtyProps = {
  type: "INCREMENT" | "DECREMENT";
  id: string;
};

export interface cartProductType {
  id: string;
  quantity: number;
  product: ProductsProps;
}

export interface CartState {
  loading: boolean;
  error: null | string;
  cartProducts: cartProductType[];
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}
