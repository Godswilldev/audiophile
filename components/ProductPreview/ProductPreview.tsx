import Image from "next/image";
import styled from "styled-components";
import speaker from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import headphone from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import earphone from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import { h5 } from "../../Utils/Typography";
import Button from "../Buttons/Button";
// import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

interface ProductPreviewProps {
  text: "XX99 Mark 1" | "XX59" | "ZX9 SPEAKER";
}
const ProductPreview = ({ text }: ProductPreviewProps) => {
  let productType;
  switch (text) {
    case "XX99 Mark 1":
      productType = <Image width={350} height={318} alt={text} src={speaker} />;
      break;
    case "XX59":
      productType = (
        <Image width={350} height={318} alt={text} src={headphone} />
      );
      break;
    case "ZX9 SPEAKER":
      productType = (
        <Image width={350} height={318} alt={text} src={earphone} />
      );
      break;
    default:
      productType = <Image width={350} height={318} alt={text} src={speaker} />;
      break;
  }
  return (
    <ProductPreviewStyles>
      <div className="product">
        <span className="product__img">{productType}</span>
        <span className="product__description">
          <h1>{text}</h1>
          <Button text="see product" variant="PINK_DARK" />
        </span>
      </div>
    </ProductPreviewStyles>
  );
};

export default ProductPreview;

const ProductPreviewStyles = styled.div`
  .product {
    width: 35rem;
    height: 47.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &__description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      h1 {
        ${h5}
        margin-bottom: 3rem;
      }
    }
  }
`;
