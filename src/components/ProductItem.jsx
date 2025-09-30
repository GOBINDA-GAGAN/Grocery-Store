import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductItem = ({ groceryItems }) => {
  const onAddToCart = () => {};

  return (
    <div className="bg-white border w-full border-gray-200 rounded-xl shadow-md hover:shadow-lg transition flex flex-col flex-shrink-0 
                    sm:w-[100%] md:w-[100%] lg:w-[100%] 
                    min-h-[320px] sm:min-h-[340px] md:min-h-[360px] p-3">
      {/* Product Image */}
      <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-44 mb-2">
        <img
          src={groceryItems.image}
          alt={groceryItems.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 gap-2">
        {/* Name */}
        <h3 className="text-sm sm:text-base md:text-base font-semibold text-gray-900 line-clamp-2 overflow-hidden">
          {groceryItems.name}
        </h3>

        {/* Price */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-base sm:text-lg md:text-lg font-bold text-red-600">
            ₹{groceryItems.discountPrice}
          </span>
          <span className="text-xs sm:text-sm text-gray-500 line-through">
            ₹{groceryItems.price}
          </span>
          <span className="text-xs sm:text-sm text-green-600 font-semibold">
            {groceryItems.discountPercentage}% OFF
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) =>
            i < groceryItems.rating ? (
              <AiFillStar key={i} className="text-yellow-400 w-4 h-4" />
            ) : (
              <AiOutlineStar key={i} className="text-gray-300 w-4 h-4" />
            )
          )}
          <span className="ml-1 text-xs sm:text-sm text-gray-600">
            {groceryItems.rating}/5
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="mt-auto w-full bg-primary/10 text-primary border border-primary py-2 rounded-lg 
                     hover:bg-secondary hover:text-white transition font-medium text-sm sm:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
