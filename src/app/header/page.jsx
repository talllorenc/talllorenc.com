import Image from "next/image";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div className="h-screen flex items-center container justify-between">
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
      <div className="w-[50%]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque qui
        numquam quos ut rem minima eaque eveniet corrupti impedit, hic ex iusto
        quisquam magnam doloremque provident suscipit adipisci quae maiores.
      </div>
    </div>
  );
};

export default HeaderPage;
