import React from "react";

const GlobalSearch = () => {
  return (
    <div className="mt-8">
      <input
        type="text"
        placeholder="Type sad type beat..."
        className="w-[288px] in:w-[500px]  p-2 bg-black border-2 border-[#7c7b7b] rounded-lg focus:outline-none relative"
      />
    </div>
  );
};

export default GlobalSearch;
