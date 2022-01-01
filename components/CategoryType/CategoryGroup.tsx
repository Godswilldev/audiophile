import styled from "styled-components";
import CategoryType from "./CategoryType";

const CategoryGroup = () => {
  return (
    <div>
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
    </div>
  );
};

export default CategoryGroup;

const CategoryGroupStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
