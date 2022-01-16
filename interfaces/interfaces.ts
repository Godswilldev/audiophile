export type ProductsProps = {
  id: number;
  slug: string;
  name: string;
  image: { desktop: any };
  category: string;
  categoryImage: object;
  new: true;
  price: number;
  description: string;
  features: string;
  includes: {}[];
  gallery: object;
  others: {}[];
}[];

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: { desktop: any };
  category: string;
  categoryImage: object;
  new: true;
  price: number;
  description: string;
  features: string;
  includes: {}[];
  gallery: object;
  others: {}[];
}
