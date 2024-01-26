import React from "react";
import Beats from "@/components/Beats/Beats";
import Link from "next/link";

const BeatsSection = () => {
  return (
    <div className="container mt-16">
      <span className="text-5xl font-medium flex items-center justify-center">Beats</span>
      <div className='flex flex-col mt-8'>
        <Beats />
        <Link href="/playlist" className="mx-auto font-medium border-2 border-[#f75380] bg-[#f75380] py-1 px-2 rounded-full hover:border-white">ALL BEATS</Link>
      </div>
    </div>
  );
};

export default BeatsSection;
