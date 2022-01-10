import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { ProductsProps } from "../../interfaces/interfaces";
import styled from "styled-components";
import { colors } from "../../Utils/Theme";
import Button from "../Buttons/Button";
import Link from "next/link";
import Router from "next/router";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export interface NewProductProps {
  newProducts: ProductsProps;
}
const SwiperjsCarousel = ({ newProducts }: NewProductProps) => {
  return (
    <SwiperjsCarouselStyles>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
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
            <div>
              <Image
                width={300}
                height={300}
                src={product.image.desktop}
                alt={`${product.name} image`}
              />
            </div>
            <div>
              <h1>{product.name}</h1>
              <h1>{product.description}</h1>
              <span onClick={() => Router.push(`/product/${product.slug}`)}>
                <Button text="see product" variant="PINK_DARK" />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperjsCarouselStyles>
  );
};

export default SwiperjsCarousel;

const SwiperjsCarouselStyles = styled.div`
  color: #fff;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    /* font-size: 18px; */
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
  height: 63.2rem;
  background-color: ${colors.colorBlack};
`;
