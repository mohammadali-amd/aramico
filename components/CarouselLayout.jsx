"use client";

import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function App({ children }) {
  return (
    <Swiper modules={[Pagination]} slidesPerView={3} spaceBetween={30}>
      {children}
    </Swiper>
  );
}
