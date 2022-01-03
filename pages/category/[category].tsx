import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const routeName: string | undefined | string[] = router.query.category;

  return (
    <div>
      <h1>{routeName}</h1>
    </div>
  );
};

export default Category;
