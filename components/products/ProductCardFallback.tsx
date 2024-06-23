import React from "react";

const ProductCardFallback = () => {
  return (
    <div className="flex flex-col items-center gap-4 animate-pulse">
      <div className="w-[220px] h-[220px] bg-gray-300 rounded-full"></div>
      <div className="w-9/12 h-6 bg-gray-300"></div>
      <div className="w-9/12 h-6 bg-gray-300"></div>
      <div className="w-9/12 h-6 bg-gray-300"></div>
      <div className="w-9/12 h-6 bg-gray-300"></div>
      <div className="w-1/2 flex items-center justify-between mt-auto gap-4">
        <div className="w-24 h-6 bg-gray-300"></div>
        <div className="w-24 h-6 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default ProductCardFallback;
