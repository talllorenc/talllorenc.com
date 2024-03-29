"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import Popup from "@/components/Popup/Popup";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth, selectUserData } from "@/redux/slices/auth";

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
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(selectUserData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const onClickLogout = () => {
    if (window.confirm("Are you shure you want to logout")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
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
          <MobileNavbar
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            togglePopup={togglePopup}
          />
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
          <div className="flex gap-4 items-center">
            <button className="flex items-center border-[2px] border-orange-600 rounded-lg p-1 hover:bg-orange-600">
              <Image
                src="/navbar/dolar.png"
                width={24}
                height={24}
                alt="tips icon"
              />
            </button>

            {isAuth ? (
              <div className="flex gap-1 ml-auto items-center">
                <p className="border-l-[2px] px-[10px] max-w-[100px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {userData.login}
                </p>
                <button
                  onClick={onClickLogout}
                  className="flex rounded hover:bg-red-600"
                >
                  <Image
                    src="/navbar/logout.png"
                    width={20}
                    height={20}
                    alt="logout icon"
                  />
                </button>
              </div>
            ) : (
              <button
                onClick={togglePopup}
                className="bg-[#F75380] border-[2px] border-[#3c3b3b] rounded-lg py-1 px-2 font-bold transition-transform transform hover:translate-y-[-3px] focus:outline-none"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
        <Popup closePopup={closePopup} isPopupOpen={isPopupOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
