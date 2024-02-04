"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import SkeletonError from "@/components/SkeletonError/SkeletonError";
import Beats from "@/components/Beats/Beats";

const PlaylistPage = () => {
  const { beats, tags } = useSelector((state) => state.beats);
  const isBeatsError = beats.status === "error";
  return (
    <div className="mt-12">
      <div className="container">
        {isBeatsError ? (
          <SkeletonError />
        ) : (
          <div className="flex flex-col">
            <span className="text-5xl font-medium flex items-center justify-center">
              Playlist
            </span>
            <div className="flex flex-col">
              <div className="flex py-8 items-center justify-center">
                <Beats/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaylistPage;
