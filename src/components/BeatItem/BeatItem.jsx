import React from "react";
import Image from "next/image";

const BeatItem = () => {
  return (
    <div className="flex flex-col max-w-[200px]">
      <Image
        src="/test2.jpeg"
        alt="beat cover"
        width={200}
        height={200}
        className="rounded-lg"
      />
      <div className="text-md mt-4">
        <div className="flex gap-2">
          <span>$29.90</span>
          <span className="text-[#9f9f9f]">●</span>
          <span className="text-[#9f9f9f]">160 BPM</span>
          <div className="flex items-center gap-1 px-2 bg-[#F75380] border border-[#F75380] rounded-full hover:border-white">
            <Image
              src="/header/download.png"
              width={18}
              height={18}
              alt="download image"
            />
          </div>
        </div>
        <span className="font-bold text-xl">I am a fake</span>
      </div>
    </div>
  );
};

export default BeatItem;
