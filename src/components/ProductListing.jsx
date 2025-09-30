"use client";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import ProductItem from "./ProductItem";

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

const ProductListing = () => {
  const [sort, setSort] = useState("a-z");
  const [products, setProducts] = useState(Products);

  const handleSort = (value) => {
    setSort(value);
    let sorted = [...products];
    if (value === "a-z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "z-a") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    setProducts(sorted);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-4">
      {/* Sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <Typography variant="h6">Products</Typography>
        <FormControl size="small" className="w-full sm:w-40">
          <InputLabel>Sort</InputLabel>
          <Select
            value={sort}
            label="Sort"
            onChange={(e) => handleSort(e.target.value)}
          >
            <MenuItem value="a-z">A → Z</MenuItem>
            <MenuItem value="z-a">Z → A</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((groceryItems) => (
          <ProductItem key={groceryItems.id} groceryItems={groceryItems} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
