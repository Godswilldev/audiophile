import type { NextPage } from "next";
import HomePage from "./../components/HomePage/Home";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/useStoreHook";

const Home: NextPage = () => {
  const { handleGetProducts } = useAppDispatch();

  const { products, loading, error } = useAppSelector(
    ({ productsReducer }) => productsReducer
  );

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <section>
      <HomePage />
    </section>
  );
};

export default Home;
