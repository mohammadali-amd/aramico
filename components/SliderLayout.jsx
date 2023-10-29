"use client";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const SliderLayout = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {children}
      </Swiper>
    </div>
  );
};

export default SliderLayout;
