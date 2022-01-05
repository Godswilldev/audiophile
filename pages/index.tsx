import type { NextPage } from "next";
import HomePage from "./../components/HomePage/Home";
import { useEffect } from "react";
import { useAppDispatch } from "../Hooks/useStoreHook";

const Home: NextPage = () => {
  const { handleGetProducts } = useAppDispatch();

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  return (
    <section>
      <HomePage />
    </section>
  );
};

export default Home;
