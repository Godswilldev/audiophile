import styled from "styled-components";
import CategoryType from "./CategoryType";

const CategoryGroup = () => {
  return (
    <CategoryGroupStyles>
      <span>
        <CategoryType type="headphones" />
      </span>

      <span>
        <CategoryType type="speakers" />
      </span>

      <span>
        <CategoryType type="earphones" />
      </span>
    </CategoryGroupStyles>
  );
};

export default CategoryGroup;

const CategoryGroupStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
