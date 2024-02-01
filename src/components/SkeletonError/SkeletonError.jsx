import Image from "next/image";

const reloadPage = () => {
    window.location.reload();
}

const SkeletonError = () => {
  return (
    <div className="flex flex-col items-center p-4 border-2 rounded-xl border-[#eb4343]">
      <div className="flex flex-col items-center">
        <Image src="/skeletonError/error-page.png" width={80} height={80} alt="error image"/>
        <span className="text-3xl text-[#eb4343] font-medium">Something went wrong</span>
      </div>
      <span className="text-lg text-[#9c9b9b]">Error loading beats. Please try again later.</span>
      <div className="flex flex-col text-md font-medium py-1 px-4 border-2 border-[#4169e1] bg-[#4169e1] rounded-xl mt-2 transition duration-300 ease-in-out hover:border-white">
        <button onClick={reloadPage}>Reload page</button>

      </div>
    </div>
  );
};

export default SkeletonError;
