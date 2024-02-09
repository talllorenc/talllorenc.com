"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeats } from "@/redux/slices/beats";
import SkeletonBeat from "@/components/SkeletonBeat/SkeletonBeat";
import Link from "next/link";

const Beats = () => {
  const dispatch = useDispatch();
  const { beats, tags } = useSelector((state) => state.beats);

  const isBeatsLoading = beats.status === "loading";

  useEffect(() => {
    dispatch(fetchBeats());
  }, []);


  return (
    <div className="flex flex-wrap justify-around">
      {(isBeatsLoading ? [...Array(5)] : beats.items || []).map((obj, index) =>
        isBeatsLoading ? (
          <SkeletonBeat key={index} />
        ) : (
          <div
            key={obj._id}
            className="flex flex-col border border-[#151719] rounded-md w-1/5 p-4 hover:border-[#2c2b2b] hover:bg-[#3c3b3b]"
          >
            <img
              src={obj.imageUrl}
              alt="beat cover"
              className="rounded-lg border border-[#2c2b2b] w-full"
            />
            <div className="text-md mt-4">
              <div className="flex gap-2 items-center">
                <span className="text-[#F75380] text-lg font-medium">
                  ${obj.price}
                </span>
                <span className="text-[#9f9f9f]">●</span>
                <span className="text-[#9f9f9f] text-lg font-medium">
                  {obj.bpm} BPM
                </span>
                <div className="flex items-center gap-1 py-1 px-3 bg-[#F75380] border border-[#F75380] rounded-full hover:border-white">
                  <Image
                    src="/header/download.png"
                    width={18}
                    height={18}
                    alt="download image"
                  />
                </div>
              </div>
              <div>
                <Link
                  href={`beatsSection/${obj._id}`}
                  className="font-bold text-xl hover:text-[#F75380]"
                >
                  {obj.title}
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Beats;
