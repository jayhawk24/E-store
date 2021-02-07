import React from "react";

const StoryItem = ({ name, src }) => {
  return (
    <li key={name} className="flex flex-col items-center">
      <a
        className="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300"
        href="#"
      >
        <img className="h-12 w-12 rounded-full" src={src} alt="image" />
      </a>
      <p className="text-xs md:text-xs">{name}</p>
    </li>
  );
};
export default StoryItem;
