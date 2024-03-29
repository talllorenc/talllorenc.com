"use client";

import LicensePopup from "@/components/LicensePopup/LicensePopup";
import { useState } from "react";

const licensing = [
  {
    id: 1,
    head: {
      title: "STANDARD LEASE",
      type: "(MP3)",
      price: "$22.90",
    },
    body: {
      first: "STANDARD MP3 LEASE",
      second: "Untagged",
      third: "Must credit in title (prod. talllorenc)",
    },
    desc: {
      head: "STANDARD MP3 LEASE",
      body: "Standard mp3 license"
    }
  },
  {
    id: 2,
    head: {
      title: "TRACKOUT LEASE",
      type: "(WAV)",
      price: "$59.90",
    },
    body: {
      first: "TRACKOUT WAV LEASE",
      second: "Untagged",
      third: "Best for mixing & mastering",
      fourth: "Trackout stems",
      fifth: "Must credit in title (prod. talllorenc)",
    },
    desc: {
      head: "TRACKOUT WAV LEASE",
      body: "Standard wav license"
    }
  },
  {
    id: 3,
    head: {
      title: "PREMIUM LEASE",
      type: "(WAV)",
      price: "$29.90",
    },
    body: {
      first: "PREMIUM WAV LEASE",
      second: "Untagged",
      third: "Better quality",
      fourth: "Must credit in title (prod. talllorenc)",
    },
    desc: {
      head: "PREMIUM WAV LEASE",
      body: "Premium wav license"
    }
  },
  {
    id: 4,
    head: {
      title: "EXCLUSIVE",
      price: "~",
    },
    body: {
      first: "FULL RIGHTS TO BEAT",
    },
    desc: {
      head: "EXCLUSIVE LEASE",
      body: "Full rights"
    }
  },
];

const LicensingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeLicense, setActiveLicense] = useState(null);

  const togglePopup = (license) => {
    setActiveLicense(license);
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-black w-full py-16 mt-16">
      <div className="container">
        <span className="text-5xl font-medium flex items-center justify-center text-center">
          Licensing Info
        </span>
        <div className="mx-auto flex gap-8 pt-8 overflow-x-auto">
          {licensing.map((item) => (
            <div key={item.id} className="w-[400px]">
              <div className="border-2 border-[#f75380] rounded-lg ">
                <div className="bg-[#f75380] text-[#141414] flex flex-col items-center gap-1 p-4 rounded-t-lg">
                  <span className="text-2xl">{item.head.title}</span>
                  <span className="text-2xl">{item.head.type}</span>
                  <span className="text-5xl font-bold">{item.head.price}</span>
                  <span className="text-md">PER UNIT</span>
                </div>
                <div className="flex flex-col text-[#9e9b9b] gap-2 p-4">
                  {item.body.first && <span>● {item.body.first}</span>}
                  {item.body.second && <span>● {item.body.second}</span>}
                  {item.body.third && <span>● {item.body.third}</span>}
                  {item.body.fourth && <span>● {item.body.fourth}</span>}
                </div>
                <button onClick={() => togglePopup(item)} className="bg-[#f75380] text-[#141414] w-full p-4 text-xl transition duration-300 ease-in-out font-bold hover:bg-[#FFCBDB] rounded-b-lg">
                  Read Full License
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LicensePopup closePopup={closePopup} isPopupOpen={isPopupOpen} activeLicense={activeLicense}/>
    </div>
  );
};

export default LicensingPage;
