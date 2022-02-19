export interface ProductsProps {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: any;
  };
  category: string;

  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: any;
  };

  new: boolean;
  price: number;
  description: string;
  features: string;
  others: {
    slug: string;
    name: string;
    image: {
      mobile: any;
      tablet: any;
      desktop: any;
    };
  }[];

  including: {
    quantity: number;
    item: string;
  }[];

  gallery: {
    first: { desktop: any };
    second: { desktop: any };
    third: { desktop: any };
  };
}

export type updateQtyProps = {
  type: "INCREMENT" | "DECREMENT";
  id: string;
};
