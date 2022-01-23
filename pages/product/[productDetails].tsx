import Image from "next/image";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../Hooks/useStoreHook";
import { useEffect } from "react";
import Button from "../../components/Buttons/Button";

const ProductDetail = () => {
  const router = useRouter();
  const routeName: string | undefined | string[] = router.query.productDetails;

  const { handleGetProducts } = useAppDispatch();

  useEffect(() => {
    handleGetProducts();
  }, [routeName]);

  const { products } = useAppSelector(({ productsReducer }) => productsReducer);
  const actualProduct = products.find(
    (p) => p.slug === routeName || p.name === routeName
  );

  return (
    <div>
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
      <Button text="add to cart" variant="PINK_DARK" />
    </div>
  );
};

export default ProductDetail;
