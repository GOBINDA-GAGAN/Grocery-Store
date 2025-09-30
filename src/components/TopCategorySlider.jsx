"use client";

import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopCategorySlider = () => {
  const categories = [
    { name: "Food & Vegetables", image: "/image 1.png" },
    { name: "Meat & Seafood", image: "/image 2.png" },
    { name: "Breakfast", image: "/image 3.png" },
    { name: "Frozen Food", image: "/image 4.png" },
    { name: "Biscuit", image: "/image 5.png" },
    { name: "Grocery", image: "/image 6.png" },
    { name: "Baby", image: "/image 7.png" },
    { name: "Pregnancy & Healthcare", image: "/image 8.png" },
    { name: "Personal Care", image: "/image 9.png" },
    { name: "Beverages", image: "/image 10.png" },
  ];

  const bgColors = [
    "#FDE2E2", "#E0F7FA", "#FFF3E0", "#E8F5E9", "#F3E5F5",
    "#FFFDE7", "#E1F5FE", "#FBE9E7", "#F1F8E9", "#ECEFF1",
  ];

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-lg md:text-xl font-semibold">Top Categories</h2>
        <button className="flex items-center text-green-700 font-medium hover:underline gap-1 text-sm md:text-base">
          View All <IoArrowForward />
        </button>
      </div>

      <Swiper
        spaceBetween={8}
        breakpoints={{
          0: { slidesPerView: 5 },      // Mobile
          480: { slidesPerView: 5 },    // Small Tablet
          768: { slidesPerView: 6 },    // Tablet / Small Laptop
          1024: { slidesPerView: 7 },   // Laptop
          1280: { slidesPerView: 10 },  // Desktop
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center justify-center p-2 rounded-lg hover:shadow-md transition min-h-[100px]"
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] relative mb-1">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform"
                />
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm font-medium text-center break-words">
                {cat.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopCategorySlider;
