import React from "react";
import Navbar from "./navbar";
import CategoryCard from "../components/categoryCard";
const Categories = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
