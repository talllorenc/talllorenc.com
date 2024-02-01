"use client";

import React from "react";
import Beats from "@/components/Beats/Beats";
import Link from "next/link";
import { useSelector } from "react-redux";
import SkeletonError from "@/components/SkeletonError/SkeletonError";

const BeatsSection = () => {
  const { beats, tags } = useSelector((state) => state.beats);
  const isBeatsError = beats.status === "error";

  return (
    <div className="mt-16">
      <div className="container">
        {isBeatsError ? (
          <SkeletonError />
        ) : (
          <div className="flex flex-col">
            <span className="text-5xl font-medium flex items-center justify-center">
              Beats
            </span>
            <div className="flex flex-col">
              <div className="flex py-8 items-center justify-center">
                <Beats />
              </div>
              <Link
                href="/playlist"
                className="mx-auto font-medium border-2 border-[#f75380] bg-[#f75380] py-1 px-2 rounded-full hover:border-white"
              >
                ALL BEATS
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeatsSection;
