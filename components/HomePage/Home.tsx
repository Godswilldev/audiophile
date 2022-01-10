import Image from "next/image";
import { ProductsProps } from "../../interfaces/interfaces";
import BestAudio from "../BestAudio/BestAudio";
import ProductPreviewGroup from "../ProductPreview/ProductPreviewGroup";
import CategoryGroup from "./../CategoryType/CategoryGroup";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import styled from "styled-components";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
export interface NewProductProps {
  newProducts: ProductsProps;
}
const Home = ({ newProducts }: NewProductProps) => {
  return (
    <HomeStyles>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        loop={true}
      >
        {newProducts.map((product) => (
          <SwiperSlide key={product.slug}>
            <Image
              width={300}
              height={300}
              src={product.image.desktop}
              alt={`${product.name} image`}
            />
            <p>{product.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        style={{
          margin: "3rem 1rem",
        }}
      >
        <CategoryGroup />
      </div>
      <div
        style={{
          margin: "3rem 1rem",
        }}
      >
        <ProductPreviewGroup />
      </div>
      <div
        style={{
          margin: "3rem 1rem",
        }}
      >
        <BestAudio />
      </div>
    </HomeStyles>
  );
};

export default Home;

const HomeStyles = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
