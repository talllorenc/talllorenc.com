"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SigninButton from "@/components/SigninButton/SigninButton";
import { useState } from "react";
import Popup from "@/components/Popup/Popup";

const links = [
  {
    id: 1,
    title: "About me",
    url: "/about",
  },
  {
    id: 2,
    title: "Playlist",
    url: "/playlist",
  },
  {
    id: 3,
    title: "Records",
    url: "/records",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 backdrop-blur bg-black bg-opacity-50 z-50">
      <div className="flex justify-between items-center z-999">
        <Link href="/">
          <span className="font-bold">TALLLORENC</span>
        </Link>
        <div className="in:hidden h-[36px]">
          <button onClick={toggleMenu}>
            <Image
              src="/navbar/burger-menu.png"
              width={36}
              height={36}
              alt="Menu"
            />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex flex-col" : "hidden"
          } items-center justify-center top-full left-0 w-full absolute bg-black backdrop-blur in:hidden`}
        >
          <div className="flex flex-col in:flex-row gap-[20px] items-center p-4 in:p-0">
            {links.map((link) => (
              <Link key={link.id} href={link.url}>
                <span
                  onClick={closeMenu}
                  className={`hover:text-[#9C9C9C] ${
                    pathname === link.url
                      ? "border-b-2 border-[#F75380] text-[#9C9C9C]"
                      : ""
                  }`}
                >
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex gap-4 mb-4">
            <div>
              <button className="flex items-center border-[2px] border-orange-600 rounded-lg gap-1 p-1 hover:border-orange-500">
                <Image
                  src="/navbar/dolar.png"
                  width={24}
                  height={24}
                  alt="tips icon"
                />
              </button>
            </div>
            <button
              onClick={togglePopup}
              className="border-[2px] border-[#A11B3F] rounded-lg p-1 hover:border-[#F75380]"
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="hidden in:flex gap-[15px] items-center">
          <div className="flex gap-[20px] items-center">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={`text-[#999999] font-bold hover:text-white ${
                  pathname === link.url
                    ? "border-b-2 border-[#F75380] text-[#9C9C9C]"
                    : ""
                }`}
              >
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="flex items-center border-[2px] border-orange-600 rounded-lg p-1 hover:bg-orange-600">
              <Image
                src="/navbar/dolar.png"
                width={24}
                height={24}
                alt="tips icon"
              />
            </button>

            <button
              onClick={togglePopup}
              className="bg-[#F75380] border-[2px] border-[#3c3b3b] rounded-lg py-1 px-2 font-bold transition-transform transform hover:translate-y-[-3px] focus:outline-none"
            >
              Sign in
            </button>
          </div>
        </div>
        <Popup closePopup={closePopup} isPopupOpen={isPopupOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
