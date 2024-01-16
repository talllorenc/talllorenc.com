"use client"

import Image from "next/image";

const LatestBeat = () => {
    return(
        <div className="flex flex-col items-center gap-4 ">
            <div className="border-2 border-[#4c4b4b] rounded-2xl flex flex-col items-center p-4 gap-4 gradient-header-bg">
                <span className="font-bold text-2xl">LATEST BEAT</span>
                <Image src="/test2.jpeg" alt="latest beat image" width={220} height={220} className="rounded-full rotatingImageContainer border-4 border-[#2c2b2b]"/>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col text-md items-center">
                        <span className="text-2xl font-bold text-[#9c9b9b]">I am a fake</span>
                        <div className="flex gap-4 items-center text-center text-[#8c8b8b]">
                            <div className="flex flex-col font-medium ">
                                <span className="">BPM</span>
                                <span>160</span>
                            </div>
                            <div className="flex flex-col font-medium">
                                <span className="">KEY</span>
                                <span>A#</span>
                            </div>
                            <div className="flex flex-col font-medium">
                                <span className="">TIME</span>
                                <span>02:24</span>
                            </div>
                        </div>
                    </div>
                    <a href="" className="flex gap-2 border border-[#F75380] p-1 rounded-lg bg-[#F75380] font-medium">
                        <Image src="/header/download.png" width={25} height={25} alt="download icon"/>
                        download
                    </a>
                </div>
            </div>
        </div>
    )
};

export default LatestBeat;