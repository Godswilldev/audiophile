import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { ProductsProps } from "../../interfaces/interfaces";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export interface NewProductProps {
  newProducts: ProductsProps;
}
const SwiperjsCarousel = ({ newProducts }: NewProductProps) => {
  return (
    <div>
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
    </div>
  );
};

export default SwiperjsCarousel;
