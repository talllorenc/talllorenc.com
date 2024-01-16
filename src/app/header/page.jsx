import Image from "next/image";
import Link from "next/link";
import LatestBeat from "@/components/LatestBeat";

const HeaderPage = () => {
  return (
    <div className="h-screen flex items-center justify-between gap-4 container mx-auto">
      <div className="flex flex-col font-bold gap-5 w-[70%]">
        <div className="flex flex-col">
          <span className="text-6xl">Welcome everyone, I am</span>
          <span className="text-[#F75380] text-6xl">talllorenc</span>
          <span className="text-lg font-medium mt-2">
            This site contains all my works. Enjoy listening..
          </span>
        </div>

        <div className="flex gap-4 text-xl font-medium items-center">
          <Link
            href="/playlist"
            className="px-4 py-1 border-2 border-[#F75380] bg-[#F75380] rounded-full transition duration-300 ease-in-out hover:border-white hover:rounded-lg"
          >
            Playlist
          </Link>
          <Link
            href="/contacts"
            className="px-3 py-1 border-2 rounded-full transition duration-300 ease-in-out hover:bg-[#F75380] hover:border-[#F75380]"
          >
            Contacts
          </Link>
        </div>
      </div>
      <div className="w-[30%]">
        <LatestBeat/>
      </div>
    </div>
  );
};

export default HeaderPage;
