import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { AdvancedImage } from "@cloudinary/react";
import {
  // imgFive,
  imgFour,
  imgOne,
  imgSeven,
  imgSix,
  imgThree,
  imgTwo,
} from "../../configs/cloudinary";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <div
      className="mt-10"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="swiper-container custom-swiper-container"
        style={{
          width: "100%",
          justifyItems: "center",
          alignItems: "center",
          placeContent: "center",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={1000}
          style={{
            overflow: "hidden",
            margin: "auto 0",
          }}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            // Configuración de las flechas de navegación
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <AdvancedImage cldImg={imgOne} />
          </SwiperSlide>
          <SwiperSlide>
            <AdvancedImage cldImg={imgTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <AdvancedImage cldImg={imgThree} />
          </SwiperSlide>
          <SwiperSlide>
            <AdvancedImage cldImg={imgFour} />
          </SwiperSlide>
          {/* <SwiperSlide>
            <AdvancedImage cldImg={imgFive} />
          </SwiperSlide> */}
          <SwiperSlide>
            <AdvancedImage cldImg={imgSix} />
          </SwiperSlide>
          <SwiperSlide>
            <AdvancedImage cldImg={imgSeven} />
          </SwiperSlide>
        </Swiper>

        {/* Flecha izquierda y derecha */}
        <div className="swiper-button-prev swiper-button-prev-custom text-black font-extrabold bg-white px-6 rounded-full"></div>
        <div className="swiper-button-next swiper-button-next-custom text-black font-extrabold bg-white px-6 rounded-full"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Carousel;
