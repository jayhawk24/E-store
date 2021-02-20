import React from "react";

const CategoryCard = () => {
  return (
    <div className="my-4 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            className="block h-full w-full"
            src="https://picsum.photos/600/400/?random"
          />
        </a>

        <header className="relative p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline font-bold" href="#">
              Article Title
            </a>
          </h1>
        </header>
      </article>
    </div>
  );
};

export default CategoryCard;
