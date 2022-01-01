import Image from "next/image";
import styled from "styled-components";
import headphones from "../../assets/product-xx99-mark-one-headphones/desktop/image-removebg-preview(41).png";
import oval from "../../assets/product-xx99-mark-one-headphones/desktop/Oval Copy 4.png";
import { colors } from "../../Utils/Theme";
import { h6 } from "../../Utils/Typography";
import Button from "./../Buttons/Button";
const CategoryType = () => {
  return (
    <Category>
      <div className="headphone">
        <span>
          <Image alt="category image" src={headphones} />
        </span>
        <span className="oval">
          <Image alt="oval" src={oval} />
        </span>
      </div>
      <CategoryTypeStyles className="category">
        <h1>Headphones</h1>
        <Button text="shop" variant="BORDER-LESS_BLACK" />
      </CategoryTypeStyles>
    </Category>
  );
};

export default CategoryType;

export const Category = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .headphone {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    .oval {
      position: absolute;
      bottom: -5rem;
    }
  }
`;

const CategoryTypeStyles = styled.div`
  background-color: ${colors.colorDarkWhite};
  border-radius: 0.8rem;
  width: 35rem;
  height: 20.4rem;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  padding-bottom: 1rem;
  position: relative;
  top: 12rem;
  z-index: -1;

  h1 {
    ${h6}
  }
`;
