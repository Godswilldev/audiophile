import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "../../Utils/Theme";
import { h2 } from "../../Utils/Typography";
import { useAppDispatch, useAppSelector } from "../../Hooks/useStoreHook";
import { useEffect, useState } from "react";

const Category = () => {
  const router = useRouter();
  const [routeName, setRouteName] = useState(router?.query?.category);
  const { handleGetCategory } = useAppDispatch();

  useEffect(() => {
    setRouteName(router?.query?.category);
    routeName !== "" && handleGetCategory({ category: routeName });
  }, []);

  const { category, loading } = useAppSelector(
    ({ categoryReducer }) => categoryReducer
  );

  console.log(router);
  console.log(routeName);

  return (
    <CategoryStyles>
      <div className="category__header">
        {loading && <h1>loading...</h1>}
        <h1>{routeName}</h1>
      </div>
      <div className="category__products"></div>
    </CategoryStyles>
  );
};

export default Category;

const CategoryStyles = styled.div`
  .category {
    &__header {
      height: ${33.6 - 9.7 + "rem"};
      background-color: ${colors.colorBlack};
      color: ${colors.colorWhite};
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        ${h2}
      }
    }
  }
`;
