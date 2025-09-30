"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

// Banner data
const banners = [
  {
    id: 1,
    imageSrc: "/banar-1.png",
    name: "Fresh Fruits & Vegetables",
    link: "/fruits-vegetables",
  },
  {
    id: 2,
    imageSrc: "/banar-2.png",
    name: "Dairy & Eggs",
    link: "/dairy-eggs",
  },
  {
    id: 3,
    imageSrc: "/banar-3.png",
    name: "Snacks & Beverages",
    link: "/snacks-beverages",
  },
];

const Banner = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1.2 },   // 📱 Mobile
          640: { slidesPerView: 2 },   // 📲 Tablet
          1024: { slidesPerView: 3 },  // 💻 Desktop
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerItem
              imageSrc={banner.imageSrc}
              name={banner.name}
              link={banner.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

export const BannerItem = ({ imageSrc, name, link = "/" }) => {
  return (
    <Link
      href={link}
      className="block w-full rounded-xl overflow-hidden hover:shadow-md transition"
    >
      {/* Banner Image */}
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-40 sm:h-52 md:h-60 object-cover rounded-xl"
      />
    </Link>
  );
};
