"use client"; // make sure this is a client component
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="container">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/Home slider.png"
            width={1344}
            height={514}
            alt="Home Slider"
          />
        </SwiperSlide>

        {/* Add more slides here */}
        <SwiperSlide>
          <Image
            src="/Home slider.png"
            width={1344}
            height={514}
            alt="Home Slider 2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
