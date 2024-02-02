import Image from "next/image";
import Link from "next/link";

const InWork = () => {
  return (
    <div className="fixed p-2 top-0 left-0 w-full h-screen bg-black flex justify-center items-center z-50">
      <div className="flex flex-col items-center container gap-8">
        <Image
          src="/inWork/404-error.png"
          width={200}
          height={200}
          alt="in work image"
        />

        <div className="flex flex-col items-center text-center">
          <span className="text-2xl in:text-3xl font-bold text-[#9c9b9b]">
            I apologize for the inconvenience, but this section is currently
            unavailable
          </span>
          <span className="text-2xl in:text-3xl font-bold text-[#9c9b9b]">
            Everything will be ready{" "}
            <span className="text-[#f75380]">SOON</span>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/"
            className="text-md font-medium py-1 px-8 mt-4 border-2 border-[#4169e1] bg-[#4169e1] rounded-xl mt-2 transition duration-300 ease-in-out hover:border-white"
          >
            Home
          </Link>
          <Link
            href="/playlist"
            className="text-md font-medium py-1 px-8 mt-4 border-2 border-[#f75380] bg-[#f75380] rounded-xl mt-2 transition duration-300 ease-in-out hover:border-white"
          >
            Playlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InWork;
