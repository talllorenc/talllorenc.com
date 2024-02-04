import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {useSession, signOut, signIn} from "next-auth/react";
import React from "react";

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
  const {data: session} = useSession();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-[#1c1b1b] bg-opacity-70 flex"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.15}}
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
                  Esc
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
              {session && session.user ? (
                <div className="flex gap-1 items-center">
                  <p
                    className="border-l-[2px] px-[10px] max-w-[100px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {session.user.name}
                  </p>
                  <button onClick={() => signOut()} className="flex rounded hover:bg-red-600">
                    <Image src="/navbar/logout.png" width={20} height={20} alt="logout icon"/>
                  </button>
                </div>
              ) : (
                <button
                  onClick={togglePopup}
                  className="bg-[#F75380] border-[2px] border-[#3c3b3b] rounded-lg py-1 px-2 font-bold transition-transform transform hover:translate-y-[-3px] focus:outline-none"
                >
                  Sign in
                </button>)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
