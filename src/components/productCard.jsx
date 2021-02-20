import React from "react";

const ProductCard = ({ name, src, type, price }) => {
  return (
    <div class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
      <div class="bg-white rounded-lg mt-5">
        <img src={src} class="h-40 rounded-md" alt="" />
      </div>
      <div class="bg-white shadow-lg rounded-lg -mt-5 w-52">
        <div class="py-3 px-3">
          <div class="flex items-center justify-between">
            <span class="font-extrabold text-gray-800 text-base">{name}</span>
            <div class="text-base text-gray-600 font-bold">₹ {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
