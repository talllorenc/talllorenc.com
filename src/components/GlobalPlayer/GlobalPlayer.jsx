"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const GlobalPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio.volume === 0) {
      audio.volume = volume || 0.5;
      setVolume(audio.volume);
    } else {
      audio.volume = 0;
      setVolume(0);
    }
  };

  const changeVolume = (value) => {
    const audio = audioRef.current;
    audio.volume = value;
    setVolume(value);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full p-1 backdrop-blur bg-black bg-opacity-50 z-50 border-t-2 border-[#F75380]">
      <div className="p-1 flex justify-between items-center max-w-[1800px] mx-auto">
        <div className="flex items-center gap-4">
          <img
            src="/test2.jpeg"
            alt="beat cover"
            className="rounded-lg border border-[#2c2b2b] w-[50px]"
          />
          <p className="text-xl font-bold">Title</p>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="http://localhost:8080/uploads/fine.mp3"
            download
            className="transition duration-300 ease-in-out flex items-center border-2 p-1 rounded-lg hover:bg-[#F75380] hover:scale-110"
          >
            <Image
              src="/header/download.png"
              alt="play button image"
              width={20}
              height={20}
            />
          </a>

          <Image
            src={
              isPlaying
                ? "/GlobalPlayer/pause-button.png"
                : "/GlobalPlayer/play.png"
            }
            alt="play button image"
            width={40}
            height={40}
            onClick={toggleAudio}
          />
          <div className="flex items-center gap-1">
            <Image
              onClick={() => toggleMute(isPlaying)}
              src={
                volume === 0
                  ? "/GlobalPlayer/mute.png"
                  : "/GlobalPlayer/sound.png"
              }
              width={20}
              height={20}
              alt="volume img"
              className="cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
              className="w-[100px] bg-gray-400 rounded cursor-pointer"
            />
          </div>
        </div>
        <div>LIKE</div>
      </div>
      <audio
        ref={audioRef}
        src="http://localhost:8080/uploads/fine.mp3"
        autoPlay={false}
      />
    </div>
  );
};

export default GlobalPlayer;
