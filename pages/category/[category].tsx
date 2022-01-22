import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "../../Utils/Theme";
import { h2 } from "../../Utils/Typography";
import { useAppDispatch, useAppSelector } from "../../Hooks/useStoreHook";
import { useEffect, useState } from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import CategoryGroup from "../../components/CategoryType/CategoryGroup";
import BestAudio from "../../components/BestAudio/BestAudio";

const Category = () => {
  const router = useRouter();
  const routeName = router?.query?.category;
  const { handleGetCategory } = useAppDispatch();

  useEffect(() => {
    routeName && handleGetCategory({ category: routeName });
  }, [routeName]);

  const { category, loading } = useAppSelector(
    ({ categoryReducer }) => categoryReducer
  );

  return (
    <CategoryStyles>
      <div className="category__header">
        {loading && <h1>loading...</h1>}
        <h1>{routeName}</h1>
      </div>

      <div className="category__products">
        {category.map((cat) => (
          <div key={cat.slug}>
            <CategoryProduct cat={cat} />
          </div>
        ))}
      </div>
      <div>
        <CategoryGroup />
        <BestAudio />
      </div>
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
