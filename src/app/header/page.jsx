import Link from "next/link";
import GlobalSearch from "@/components/GlobalSearch/GlobalSearch";
import SocialsLinks from "@/components/SocialsLinks/SocialsLinks";

const HeaderPage = () => {
  return (
    <div className="header-bg w-full">
      <div className="flex container ">
        <div className="flex flex-col font-bold gap-5 mt-24 mb-24 in:mt-40">
          <div className="flex flex-col ">
            <SocialsLinks/>
            <span className="text-4xl in:text-6xl mt-2">Welcome everyone, I am</span>
            <span className="text-4xl in:text-6xl text-[#F75380]">talllorenc</span>
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
              href="/about"
              className="px-3 py-1 border-2 rounded-full transition duration-300 ease-in-out hover:bg-[#F75380] hover:border-[#F75380]"
            >
              Contacts
            </Link>
          </div>
          <GlobalSearch />
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
