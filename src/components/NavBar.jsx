"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const NavBar = () => {
  const categories = [
    { name: "Home", href: "/" },
    { name: "Fruits & Dairy", href: "/fruits-dairy" },
    { name: "Vegetables", href: "/vegetables" },
    { name: "Meats & Poultry", href: "/meats-poultry" },
    { name: "Seafood", href: "/seafood" },
    { name: "Bakery & Bread", href: "/bakery-bread" },
    { name: "Beverages", href: "/beverages" },
    { name: "Tea & Coffee", href: "/tea-coffee" },
    { name: "Snacks", href: "/snacks" },
    { name: "Frozen & Ready-to-Eat", href: "/frozen-ready" },
    { name: "Household", href: "/household" },
    { name: "Organic", href: "/organic" },
    { name: "Spices", href: "/spices" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const firstCategories = categories.slice(0, 9);
  const extraCategories = categories.slice(9);

  return (
    <nav className="w-full bg-white  py-2">
      <div className="container mx-auto relative">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 9 },
          }}

          className="mySwiper"
        >
          {firstCategories.map((cat) => (
            <SwiperSlide key={cat.name}>
              <Link
                href={cat.href}
                className="text-gray-700 hover:text-green-700 font-medium transition"
              >
                <span className="bg-gray-100 py-1 px-3 rounded-2xl whitespace-nowrap block text-center">
                  {cat.name}
                </span>
              </Link>
            </SwiperSlide>
          ))}

          {/* Extra Categories as dropdown inside last slide */}
          {extraCategories.length > 0 && (
            <SwiperSlide>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="py-1 px-3 rounded-2xl text-white font-medium hover:opacity-90 transition flex items-center gap-1 bg-green-700 w-full justify-center"
                >
                  {dropdownOpen ? (
                    <>
                      Less <IoChevronUp />
                    </>
                  ) : (
                    <>
                      More <IoChevronDown />
                    </>
                  )}
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-max bg-white border border-gray-200 shadow-lg rounded-md flex flex-col py-2 z-50">
                    {extraCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium transition whitespace-nowrap"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </nav>
  );
};

export default NavBar;
