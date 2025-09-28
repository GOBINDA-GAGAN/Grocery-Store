"use client";

import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

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
    "#FDE2E2", // light red
    "#E0F7FA", // light cyan
    "#FFF3E0", // light orange
    "#E8F5E9", // light green
    "#F3E5F5", // light purple
    "#FFFDE7", // light yellow
    "#E1F5FE", // light blue
    "#FBE9E7", // peach
    "#F1F8E9", // lime
    "#ECEFF1", // light gray
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-lg font-semibold">Top Categories</h2>
        <button className="flex items-center text-green-700 font-medium hover:underline gap-1">
          View All <IoArrowForward />
        </button>
      </div>

      <Swiper slidesPerView={10} spaceBetween={10}>
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center justify-center p-1 rounded-lg hover:shadow-md transition min-h-[100px]"
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              {/* Small image 100x100 */}
              <div className="w-[50px] h-[50px] relative mb-1">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover hover:scale-125 transition-all"
                />
              </div>
              {/* Wrapped text */}
              <p className="text-xs font-medium text-center break-words">
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
