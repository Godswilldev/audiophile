import BestAudio from "../BestAudio/BestAudio";
import ProductPreviewGroup from "../ProductPreview/ProductPreviewGroup";
import CategoryGroup from "./../CategoryType/CategoryGroup";

export interface NewProductProps {
  newProducts: {}[];
}
const Home = ({ newProducts }: NewProductProps) => {
  return (
    <div>
      <h1>NEW PRODUCTS: </h1>{" "}
      {newProducts.map((product) => (
        <h1 key={product.slug}>{product.name}</h1>
      ))}
      <div
        style={{
          margin: "3rem 1rem",
        }}
      >
        <CategoryGroup />
      </div>
      <div
        style={{
          margin: "3rem 1rem",
        }}
      >
        <ProductPreviewGroup />
      </div>
      <div
        style={{
          margin: "3rem 1rem",
        }}
      >
        <BestAudio />
      </div>
    </div>
  );
};

export default Home;
