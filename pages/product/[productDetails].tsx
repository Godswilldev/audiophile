"u";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Buttons/Button";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../Hooks/useStoreHook";

const ProductDetail = () => {
  const router = useRouter();
  const routeName: string | undefined | string[] = router.query.productDetails;

  const { handleGetProducts, handleAddToCart } = useAppDispatch();

  useEffect(() => {
    handleGetProducts();
  }, [routeName]);

  const { products } = useAppSelector(({ productsReducer }) => productsReducer);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);

  const actualProduct = products.find(
    (p) => p.slug === routeName || p.name === routeName
  );

  const addToCart = () => {
    if (cartProducts.map((p) => p.productSlug).includes(actualProduct?.slug)) {
      toast("Already in Cart", {
        theme: "dark",
        type: "error",
        position: "top-left",
        autoClose: 3000,
      });
      return;
    } else {
      handleAddToCart({
        productSlug: actualProduct?.slug,
        productName: actualProduct?.name,
        price: actualProduct?.price,
        quantity: 1,
        image: "",
      });
      toast("Product added to cart", {
        theme: "dark",
        type: "success",
        position: "top-left",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <ToastContainer newestOnTop={true} />
      {/* <Image src={actualProduct?.image.desktop} alt={`${routeName} image`} /> */}
      {actualProduct?.new && <h3>New Product</h3>}
      <h1>{actualProduct?.name}</h1>
      <p>{actualProduct?.description}</p>
      <h2>Features</h2>
      <p>{actualProduct?.features}</p>
      <p>${actualProduct?.price}</p>

      {actualProduct?.including.map((p) => (
        <p key={p.item}>
          {p.quantity}X {p.item}
        </p>
      ))}

      {/* <Image
        src={actualProduct?.gallery.first.desktop}
        alt={`${routeName} image`}
      />
      <Image
        src={actualProduct?.gallery.second.desktop}
        alt={`${routeName} image`}
      />
      <Image
        src={actualProduct?.gallery.third.desktop}
        alt={`${routeName} image`}
      /> */}
      <h1>You May Also Like</h1>
      {/* {actualProduct?.others.map((product) => (
        <div key={product.name}>
          <ProductPreview text={product.name} image={undefined} />
        </div>
      ))} */}
      <button>-</button>
      <p>1</p>
      <button>+</button>

      <span onClick={addToCart}>
        <Button text="add to cart" variant="PINK_DARK" />
      </span>
    </div>
  );
};

export default ProductDetail;
