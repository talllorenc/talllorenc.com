import React from "react";
import BeatItem from "@/components/BeatItem/BeatItem";

const BeatsSection = () => {
  return (
    <div className="container">
      <span className="text-5xl font-bold">Beats</span>
      <div className='flex'>
        <BeatItem />
      </div>
    </div>
  );
};

export default BeatsSection;
