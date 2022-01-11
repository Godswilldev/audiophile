import { ProductsProps } from "../../interfaces/interfaces";
import BestAudio from "../BestAudio/BestAudio";
import ProductPreviewGroup from "../ProductPreview/ProductPreviewGroup";
import CategoryGroup from "./../CategoryType/CategoryGroup";
import styled from "styled-components";
import SwiperjsCarousel from "../Carousel/SwiperjsCarousel";
import { colors } from "./../../Utils/Theme";
import Z9Speaker from "../Z9SPEAKER/Z9Speaker";
export interface NewProductProps {
  newProducts: ProductsProps;
}
const Home = ({ newProducts }: NewProductProps) => {
  return (
    <HomeStyles>
      <SwiperjsCarousel newProducts={newProducts} />
      <div className="body">
        <div>
          <CategoryGroup />
        </div>

        <div className="body__z9Speaker">
          <Z9Speaker />
        </div>

        <div className="body__bestGear">
          <BestAudio />
        </div>
      </div>
    </HomeStyles>
  );
};

export default Home;

const HomeStyles = styled.div`
  background-color: ${colors.colorWhite};
  .body {
    width: 80vw;
    margin: 15rem auto;
    &__z9Speaker {
      margin-top: 20rem;
    }
    &__bestGear {
      margin-top: 20rem;
    }
  }
`;
