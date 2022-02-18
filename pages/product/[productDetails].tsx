import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Buttons/Button";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../Hooks/useStoreHook";

const ProductDetail = () => {
  const router = useRouter();
  const routeName: string | undefined | string[] =
    router?.query?.productDetails;

  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useAppDispatch();

  const { products } = useAppSelector(({ productsReducer }) => productsReducer);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);

  const currentProduct = products.find(
    (product) => product.slug === routeName || product.name === routeName
  );

  const addToCart = () => {
    if (currentProduct === undefined) {
      return;
    } else {
      if (
        cartProducts
          .map((product) => product.slug)
          .includes(currentProduct.slug)
      ) {
        toast(
          `${currentProduct?.name} is already in cart, update the quantity instead`,
          {
            theme: "dark",
            type: "error",
            position: "top-left",
            autoClose: 3000,
          }
        );
        return;
      }
      handleAddToCart(currentProduct);
      toast(`${currentProduct?.name} has been added to cart`, {
        theme: "dark",
        type: "success",
        position: "top-left",
        autoClose: 3000,
      });
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <div>
      <ToastContainer newestOnTop={true} />
      {/* <Image src={currentProduct?.image.desktop} alt={`${routeName} image`} /> */}
      {currentProduct?.new && <h3>New Product</h3>}
      <h1>{currentProduct?.name}</h1>
      <p>{currentProduct?.description}</p>
      <h2>Features</h2>
      <p>{currentProduct?.features}</p>
      <p>${currentProduct?.price}</p>

      {currentProduct?.including.map((p) => (
        <p key={p.item}>
          {p.quantity}X {p.item}
        </p>
      ))}

      {/* <Image
        src={currentProduct?.gallery.first.desktop}
        alt={`${routeName} image`}
      />
      <Image
        src={currentProduct?.gallery.second.desktop}
        alt={`${routeName} image`}
      />
      <Image
        src={currentProduct?.gallery.third.desktop}
        alt={`${routeName} image`}
      /> */}
      <h1>You May Also Like</h1>
      {/* {currentProduct?.others.map((product) => (
        <div key={product.name}>
          <ProductPreview text={product.name} image={undefined} />
        </div>
      ))} */}
      <button disabled={quantity === 1} onClick={handleDecrement}>
        <h1>-</h1>
      </button>
      <h1>{quantity}</h1>
      <button onClick={handleIncrement}>
        <h1>+</h1>
      </button>

      <span onClick={addToCart}>
        <Button text="add to cart" variant="PINK_DARK" />
      </span>
    </div>
  );
};

export default ProductDetail;
//  toast(
//    `${currentProduct?.name} is already in cart, update the quantity instead`,
//    {
//      theme: "dark",
//      type: "error",
//      position: "top-left",
//      autoClose: 3000,
//    }
//  );
