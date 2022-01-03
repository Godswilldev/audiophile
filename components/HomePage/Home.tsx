import ProductPreviewGroup from "../ProductPreview/ProductPreviewGroup";
import CategoryGroup from "./../CategoryType/CategoryGroup";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div
        style={{
          margin: "3rem 0",
        }}
      >
        <CategoryGroup />
      </div>

      <div
        style={{
          margin: "3rem 0",
        }}
      >
        <ProductPreviewGroup />
      </div>
    </div>
  );
};

export default Home;
