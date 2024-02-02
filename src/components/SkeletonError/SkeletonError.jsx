import Image from "next/image";
import Link from "next/link";

const reloadPage = () => {
    window.location.reload();
}

const SkeletonError = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col items-center">
        <span className="text-7xl in:text-8xl">OOPS!</span>
        <span className="text-2xl in:text-3xl text-[#eb4343] font-medium">Something went wrong</span>
      </div>
      <span className="text-lg text-[#9c9b9b]">Error loading beats. Please try again later.</span>
      <div className="flex gap-4 items-center">
        <button className="text-md font-medium py-1 px-8 mt-4 border-2 border-[#4169e1] bg-[#4169e1] rounded-xl mt-2 transition duration-300 ease-in-out hover:border-white" onClick={reloadPage}>Reload</button>
        <Link href="/playlist" className="text-md font-medium py-1 px-8 mt-4 border-2 border-[#f75380] bg-[#f75380] rounded-xl mt-2 transition duration-300 ease-in-out hover:border-white">Playlist</Link>
      </div>
    </div>
  );
};

export default SkeletonError;
