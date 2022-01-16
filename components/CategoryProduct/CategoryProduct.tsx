import Image from "next/image";
import Button from "../Buttons/Button";
const CategoryProduct = () => {
  return (
    <div>
      <div>
        <Image src="" alt="" />
      </div>
      <div>
        <h3>New Product</h3>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <span>
          <Button text="see product" variant="PINK_DARK" />
        </span>
      </div>
    </div>
  );
};

export default CategoryProduct;
