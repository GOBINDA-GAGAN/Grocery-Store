"use client"; // make sure this is a client component
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="container p-1 flex items-center justify-center">
  <Swiper
    pagination={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Pagination, Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide className="flex items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <Image
          src="/Home slider.png"
          width={1344}
          height={514}
          alt="Home Slider"
          className="mx-auto"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide className="flex items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <Image
          src="/Home slider.png"
          width={1344}
          height={514}
          alt="Home Slider 2"
          className="mx-auto"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</div>

  );
};

export default HomeSlider;
