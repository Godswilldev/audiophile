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
import { body, h1, lightText } from "../../Utils/Typography";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export interface NewProductProps {
  newProducts: ProductsProps;
}
const SwiperjsCarousel = ({ newProducts }: NewProductProps) => {
  return (
    <SwiperjsCarouselStyles>
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        className="mySwiper"
        loop={true}
      >
        {newProducts.map((product) => (
          <SwiperSlide key={product.slug}>
            <div className="slide">
              <div className="slide__description">
                <p>New product</p>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <span onClick={() => Router.push(`/product/${product.slug}`)}>
                  <Button text="see product" variant="PINK_DARK" />
                </span>
              </div>

              <div className="slide__image">
                <span>
                  <Image
                    width={550}
                    height={550}
                    src={product.image.desktop}
                    alt={`${product.name} image`}
                  />
                </span>
              </div>
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
  height: 63.2rem;
  background-color: ${colors.colorBlack};

  .slide {
    display: grid;
    grid-template-columns: 40% 1fr;
    justify-content: space-between;
    width: 100%;

    &__description {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      top: 5rem;

      p {
        ${lightText}
        text-transform: uppercase;
        margin-bottom: 2rem;
      }
      h1 {
        ${h1}
        left: 0;
        margin-bottom: 3rem;
      }
      h2 {
        ${body}
        margin-bottom: 3rem;
      }

      span {
      }
    }

    &__image {
      display: flex;
      justify-content: end;
      align-items: flex-end;
      /* position: relative;
      top: 10rem; */
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    /* text-align: center; */
    /* font-size: 18px; */
    /* display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex; */
    display: flex;
    align-items: flex-end;
    /* -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center; */
    /* align-items: center; */
  }
  /* 
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

  .mySwiper {
    width: 80vw;
    border-top: 0.1rem solid #5e5e5e;
  }
`;
