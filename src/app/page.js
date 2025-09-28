import TopCategorySlider from "@/components/TopCategorySlider";
import HomeSlider from "@/components/HomeSlider";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <HomeSlider />

      <TopCategorySlider />
    </div>
  );
};

export default page;
