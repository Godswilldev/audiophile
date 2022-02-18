import BestAudio from "../BestAudio/BestAudio";
import CategoryGroup from "./../CategoryType/CategoryGroup";
import styled from "styled-components";
import SwiperjsCarousel from "../Carousel/SwiperjsCarousel";
import { colors } from "./../../Utils/Theme";
import Z9Speaker from "../Z9SPEAKER/Z9Speaker";
import Zx7Speaker from "../ZX7SPEAKER/Zx7Speaker";
import Yx1Earphone from "../Yx1Earphone/Yx1Earphone";

const Home = () => {
  return (
    <HomeStyles>
      <SwiperjsCarousel />

      <div className="body">
        <div>
          <CategoryGroup />
        </div>
        <div className="component body__z9Speaker">
          <Z9Speaker />
        </div>
        <div className="component body__Zx7Speaker">
          <Zx7Speaker />
        </div>
        <div className="component body__bestGear">
          <Yx1Earphone />
        </div>
        <div className="component body__bestGear">
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

    .component {
      margin-top: 20rem;
    }
  }
`;
