"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "./ProductItem";

const ProductSlider = () => {
  const Products = [
    {
      id: 1,
      image: "/p1.png",
      name: "Fresh Apples (1kg)",
      price: 300,
      discountPrice: 250,
      discountPercentage: Math.round(((300 - 250) / 300) * 100),
      rating: 4,
    },
    {
      id: 2,
      image: "/p2.png",
      name: "Bananas (1 Dozen)",
      price: 100,
      discountPrice: 80,
      discountPercentage: Math.round(((100 - 80) / 100) * 100),
      rating: 5,
    },
    {
      id: 3,
      image: "/p3.png",
      name: "Fresh Oranges (1kg)",
      price: 200,
      discountPrice: 150,
      discountPercentage: Math.round(((200 - 150) / 200) * 100),
      rating: 4,
    },
    {
      id: 4,
      image: "/p4.png",
      name: "Mangoes (1kg)",
      price: 400,
      discountPrice: 300,
      discountPercentage: Math.round(((400 - 300) / 400) * 100),
      rating: 5,
    },
    {
      id: 5,
      image: "/p1.png",
      name: "Papaya (1pc)",
      price: 120,
      discountPrice: 100,
      discountPercentage: Math.round(((120 - 100) / 120) * 100),
      rating: 3,
    },
    {
      id: 6,
      image: "/p2.png",
      name: "Watermelon (1pc)",
      price: 150,
      discountPrice: 120,
      discountPercentage: Math.round(((150 - 120) / 150) * 100),
      rating: 4,
    },
  ];

  return (
    <div className="">
      <Swiper
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView:2 },  // 📱 Mobile
          480: { slidesPerView: 2 },  // Small phones
          640: { slidesPerView: 3 },  // Tablets
          1024: { slidesPerView: 5 }, // Laptops
          1280: { slidesPerView: 6 }, // Desktop
        }}
      >
        {Products.map((groceryItems) => (
          <SwiperSlide key={groceryItems.id}>
            <ProductItem groceryItems={groceryItems} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
