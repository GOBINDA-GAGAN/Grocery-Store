import TopCategorySlider from "@/components/TopCategorySlider";
import HomeSlider from "@/components/HomeSlider";
import React from "react";
import PopularProduct from "@/components/PopularProduct";
import Banner from "@/components/Banner";


const page = () => {
  return (
    <div>
      
      <HomeSlider />

      <TopCategorySlider />

      <PopularProduct
        title="Popular Products"
        description="Do not miss the current offers"
        showNav={true}
      />

      <Banner />

      <PopularProduct
        title="New Arrivals"
        description="Check out the latest products in our store"
        showNav={false}
      />
      <PopularProduct
        title="Latest Products"
        description="Customers love these products"
        showNav={false}
      />
      <PopularProduct
        title="Featured Products"
        description="Customers love these products"
        showNav={false}
      />
      <PopularProduct
        title="Breaksfast & Dairy"
        description="Customers love these products"
        showNav={false}
      />
    </div>
  );
};

export default page;
