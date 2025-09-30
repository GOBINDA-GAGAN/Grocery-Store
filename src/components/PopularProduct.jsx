"use client";

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { IoArrowForward } from "react-icons/io5";
import ProductSlider from "./ProductSlider";

const PopularProduct = ({ title, description, showNav }) => {
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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className={`flex${showNav?"flex-col":"md:flex-row"} justify-between items-start md:items-center gap-4`}>
        {/* Title + Description */}
        <div className="md:w-[20%] w-full">
          <h1 className="text-base md:text-xl font-semibold">{title}</h1>
          <p className="text-xs md:text-sm text-gray-800">{description}</p>
        </div>

        {/* Tabs or View All */}
        {showNav ? (
          <div className="w-full md:w-[80%] flex items-center justify-start md:justify-end overflow-x-auto">
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: 900 },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable category tabs"
              >
                {categories.map((item, index) => (
                  <Tab
                    key={index}
                    label={item.name}
                    sx={{
                      fontSize: { xs: "0.65rem", sm: "0.75rem" },
                      textTransform: "none",
                    }}
                  />
                ))}
              </Tabs>
            </Box>
          </div>
        ) : (
          <button className="flex items-center text-green-700 font-medium hover:underline gap-1 text-[10px] md:text-base">
            View All <IoArrowForward className="text-lg md:text-xl" />
          </button>
        )}
      </div>

      {/* Product Slider */}
      <div className="">
        <ProductSlider category={categories[value].name} />
      </div>
    </div>
  );
};

export default PopularProduct;
