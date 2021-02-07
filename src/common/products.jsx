import React from "react";
import ProductCard from "../components/productCard";

const Products = ({ items }) => {
  const renderProduct = items.map((p) => {
    return (
      <ProductCard
        name={p.name}
        src={p.imgURL}
        type={p.type}
        price={p.price}
      ></ProductCard>
    );
  });
  return (
    <main class="w-full overflow-y-auto">
      <div class="px-10 mt-5 text-2xl">
        <span class="uppercase font-bold text-2xl text-gray-400">
          Clothing{" "}
        </span>
        Women
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 float-right"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div class="px-10 grid grid-cols-4 gap-4">{renderProduct}</div>
    </main>
  );
};

export default Products;
