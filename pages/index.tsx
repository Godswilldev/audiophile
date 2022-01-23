import type { NextPage } from "next";
import HomePage from "./../components/HomePage/Home";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/useStoreHook";

const Home: NextPage = () => {
  useEffect(() => {
    handleGetProducts();
  }, []);

  const { handleGetProducts } = useAppDispatch();

  const { products } = useAppSelector(({ productsReducer }) => productsReducer);
  const newProducts = products.filter((p) => p.new);

  return (
    <section>
      <HomePage newProducts={newProducts} />
    </section>
  );
};

export default Home;
