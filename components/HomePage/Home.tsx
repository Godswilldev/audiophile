import { ProductsProps } from "../../interfaces/interfaces";
import BestAudio from "../BestAudio/BestAudio";
import ProductPreviewGroup from "../ProductPreview/ProductPreviewGroup";
import CategoryGroup from "./../CategoryType/CategoryGroup";
import styled from "styled-components";
import SwiperjsCarousel from "../Carousel/SwiperjsCarousel";
export interface NewProductProps {
  newProducts: ProductsProps;
}
const Home = ({ newProducts }: NewProductProps) => {
  return (
    <HomeStyles>
      <SwiperjsCarousel newProducts={newProducts} />
    </HomeStyles>
  );
};

export default Home;

const HomeStyles = styled.div``;
