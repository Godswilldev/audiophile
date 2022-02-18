import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "../../Utils/Theme";
import { h2 } from "../../Utils/Typography";
import { useAppSelector } from "../../Hooks/useStoreHook";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import CategoryGroup from "../../components/CategoryType/CategoryGroup";
import BestAudio from "../../components/BestAudio/BestAudio";
import { ProductsProps } from "../../interfaces/interfaces";

const Category = () => {
  const router = useRouter();
  const routeName = router?.query?.category;

  const { products } = useAppSelector(({ productsReducer }) => productsReducer);

  const category = products.filter(
    (product: ProductsProps) => product.category === routeName
  );

  return (
    <CategoryStyles>
      <div className="category__header">
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
