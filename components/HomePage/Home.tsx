import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProductsProps } from "../../Utils/interfaces";
import BestAudio from "../BestAudio/BestAudio";
import ProductPreviewGroup from "../ProductPreview/ProductPreviewGroup";
import CategoryGroup from "./../CategoryType/CategoryGroup";

export interface NewProductProps {
  newProducts: ProductsProps;
}
const Home = ({ newProducts }: NewProductProps) => {
  return (
    <div>
      <h1>NEW PRODUCTS: </h1>

      <Carousel showThumbs={false}>
        {newProducts.map((product) => (
          <div key={product.slug}>
            <Image
              width={300}
              height={300}
              src={product.image.desktop}
              alt={`${product.name} image`}
            />
            <p>{product.name}</p>
          </div>
        ))}
      </Carousel>

      <div
        style={{
          margin: "3rem 1rem",
        }}
      >
        <CategoryGroup />
      </div>
      <div
        style={{
          margin: "3rem 1rem",
        }}
      >
        <ProductPreviewGroup />
      </div>
      <div
        style={{
          margin: "3rem 1rem",
        }}
      >
        <BestAudio />
      </div>
    </div>
  );
};

export default Home;
