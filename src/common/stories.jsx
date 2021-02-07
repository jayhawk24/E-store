import React from "react";
import StoryItem from "./../components/storyItem";

const Stories = ({ items }) => {
  const stories = items.map((m) => {
    return <StoryItem key={m.name} name={m.name} src={m.imgURL}></StoryItem>;
  });
  return (
    <ul className="md:flex flex-row items-center justify-center pt-2">
      {stories}
    </ul>
  );
};

export default Stories;
