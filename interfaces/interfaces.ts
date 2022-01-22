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

// export type ProductsProps = {
//   id: number;
//   slug: string;
//   name: string;
//   image: {
//     mobile: string;
//     tablet: string;
//     desktop: any;
//   };
//   category: string;

//   categoryImage: {
//     mobile: string;
//     tablet: string;
//     desktop: string;
//   };

//   new: boolean;
//   price: number;
//   description: string;
//   features: string;
//   others: {
//     slug: string;
//     name: string;
//     image: {
//       mobile: any;
//       tablet: any;
//       desktop: any;
//     };
//   }[];

//   includes: {
//     quantity: number;
//     item: string;
//   }[];

//   gallery: {
//     first: { desktop: any };
//     second: { desktop: any };
//     third: { desktop: any };
//   };
// }[];

// export interface Product {
//   id: number;
//   slug: string;
//   name: string;
//   image: { desktop: any };
//   category: string;
//   categoryImage: object;
//   new: boolean;
//   price: number;
//   description: string;
//   features: string;
//   includes: {
//     quantity: number;
//     item: string;
//   }[];
//   gallery: {
//     first: { desktop: any };
//     second: { desktop: any };
//     third: { desktop: any };
//   };
//   others: {
//     slug: string;
//     name: any;
//     image: {
//       mobile: any;
//       tablet: any;
//       desktop: any;
//     };
//   }[];
// }
