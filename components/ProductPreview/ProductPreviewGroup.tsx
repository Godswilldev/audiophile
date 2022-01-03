import ProductPreview from "./ProductPreview";
import styled from "styled-components";

const ProductPreviewGroup = () => {
  return (
    <ProductPreviewGroupStyles>
      <span>
        <ProductPreview text="XX99 Mark 1" />
      </span>
      <span>
        <ProductPreview text="XX59" />
      </span>
      <span>
        <ProductPreview text="ZX9 SPEAKER" />
      </span>
    </ProductPreviewGroupStyles>
  );
};

export default ProductPreviewGroup;

const ProductPreviewGroupStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
