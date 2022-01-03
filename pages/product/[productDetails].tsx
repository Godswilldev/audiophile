import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();

  const routeName: string | undefined | string[] = router.query.productDetails;

  return (
    <div>
      <h1>Product Detail {routeName} </h1>
    </div>
  );
};

export default ProductDetail;
