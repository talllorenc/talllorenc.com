import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const MobileNavbar = ({ isMenuOpen, closeMenu, togglePopup }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-[#1c1b1b] bg-opacity-70 flex"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          onClick={closeMenu}
        >
          <motion.div
            className=" bg-[#1b1b1b] w-[318px] fixed top-0 right-0 h-screen shadow-2xl shadow-[#F75380]"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <div className="p-4">
                <button
                  className="flex border font-medium border-[#8c8b8b] bg-[#3c3b3b] p-1 rounded-lg ml-auto"
                  onClick={closeMenu}
                >
                  Close
                </button>
              </div>

              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={closeMenu}
                  className={`text-white font-bold border-b-2 border-[#4c4b4b] w-full p-4 text-right${
                    pathname === link.url
                      ? "border-b-2 border-[#F75380] text-[#9C9C9C]"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <Image
                      className="-rotate-90"
                      src="/header/arrow-prev-next.png"
                      width={15}
                      height={15}
                      alt="mobile menu arrow"
                    />
                    {link.title}
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex gap-4 mb-4 items-center justify-center mt-8">
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
                className="border-[2px] border-[#A11B3F] rounded-lg p-1 hover:border-[#F75380]"
                onClick={togglePopup}
              >
                Sign in
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
