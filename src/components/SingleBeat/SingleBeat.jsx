"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Beats from "../Beats/Beats";

const SingleBeat = ({ params }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/beat/getOne/${id}/`
        );
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-16">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          id={data._id}
          className="container flex flex-col lg:flex-row gap-16"
        >
          <div className="max-w-[600px] flex flex-col mx-auto p-8 bg-[#0a0b0c] rounded-lg">
            <div className="flex flex-col border-b border-[#5c5b5b] items-center py-4">
              <Image
                src="/test2.jpeg"
                alt="beat cover"
                width={200}
                height={200}
                className="rounded-lg border border-[#2c2b2b]"
              />
              <p className="font-bold text-xl p-4">
                {data.title}
              </p>
              <div className="flex items-center gap-8">
                <div className="p-2 rounded-full cursor-pointer hover:bg-[#F75380]">
                  <Image
                    src="/header/download.png"
                    width={30}
                    height={30}
                    alt="download image"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="py-8 flex flex-col gap-4 border-b border-[#5c5b5b]">
              <p className="uppercase text-[#7c7b7b] text-[14px] font-medium">
                producer
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src="/about/me.jpg"
                  alt="profile img"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <p className="font-medium text-lg text-[#F75380]">talllorenc</p>
              </div>
            </div>
            <div className="py-8 flex flex-col gap-4 border-b border-[#5c5b5b]">
              <p className="uppercase text-[#7c7b7b] text-[14px] font-medium">
                INFORMATION
              </p>
              <div className="flex flex-col gap-2 text-[#707070] font-bold">
                <div className="flex justify-between ">
                  <p>Published</p>
                  <p>Jan 29, 2024</p>
                </div>
                <div className="flex justify-between ">
                  <p>BPM</p>
                  <p>160</p>
                </div>
                <div className="flex justify-between ">
                  <p>Key</p>
                  <p>C♯m</p>
                </div>
                <div className="flex justify-between ">
                  <p>Views</p>
                  <p>60</p>
                </div>
              </div>
            </div>
            <div className="py-8 flex flex-col gap-4">
              <p className="uppercase text-[#7c7b7b] text-[14px] font-medium">
                tags
              </p>
              <div className="flex items-center gap-4 text-[#707070] font-medium">
                <p className="bg-[#1c1b1b] px-3 py-1 rounded-lg">#sad</p>
                <p className="bg-[#1c1b1b] px-3 py-1 rounded-lg">#lilpeep</p>
                <p className="bg-[#1c1b1b] px-3 py-1 rounded-lg">#trap</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0b0c] rounded-lg p-8 flex flex-col flex-1">
            <span className="text-4xl text-center font-medium">Licensing</span>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
              <div className="flex flex-col w-full items-center p-4 border-2 border-[#4c4b4b] rounded-xl cursor-pointer transistion duration-300 easy-in-out hover:border-[#f75380]">
                <p className="text-[14px] text-[#7c7b7b] font-bold">
                  STANDARD LEASE
                </p>
                <p className="text-4xl font-bold">$29.90</p>
                <p className="text-[#7c7b7b]">MP3</p>
              </div>
              <div className="flex flex-col w-full items-center p-4 border-2 border-[#4c4b4b] rounded-xl cursor-pointer transistion duration-300 easy-in-out hover:border-[#f75380]">
                <p className="text-[14px] text-[#7c7b7b] font-bold">
                  TRACKOUT LEASE
                </p>
                <p className="text-4xl font-bold">$59.90</p>
                <p className="text-[#7c7b7b]">MP3, STEMS & WAV</p>
              </div>
              <div className="flex flex-col w-full items-center p-4 border-2 border-[#4c4b4b] rounded-xl cursor-pointer transistion duration-300 easy-in-out hover:border-[#f75380]">
                <p className="text-[14px] text-[#7c7b7b] font-bold">
                  PREMIUM LEASE
                </p>
                <p className="text-4xl font-bold">$39.90</p>
                <p className="text-[#7c7b7b]">MP3 & WAV</p>
              </div>
              <div className="flex flex-col w-full items-center p-4 border-2 border-[#4c4b4b] rounded-xl cursor-pointer transistion duration-300 easy-in-out hover:border-[#f75380]">
                <p className="text-[14px] text-[#7c7b7b] font-bold">
                  UNLIMITED LEASE
                </p>
                <p className="text-4xl font-bold">$149.90</p>
                <p className="text-[#7c7b7b]">MP3, STEMS & WAV</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBeat;
