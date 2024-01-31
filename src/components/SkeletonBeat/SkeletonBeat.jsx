import Image from "next/image";
const SkeletonBeat = () => {
  return (
    <div>
      <div className={`flex flex-col border border-[#151719] rounded-md w-1/5 p-4 skeletonContainer`}>
        <div className={`bg-[#151919] h-[232px] w-[232px] rounded-lg border border-[#2c2b2b] skeletonElement flex items-center justify-center`}>
          <div className="skeletonSpinner"></div>
        </div>
        <div className="flex flex-col gap-2 text-md mt-4">
          <div className="flex gap-4 items-center">
            <div className={`h-4 w-12 bg-[#F75380] rounded-lg `}></div>
            <div className="text-[#9f9f9f]">●</div>
            <div className={`h-4 w-20 bg-[#9f9f9f] rounded-lg `}></div>
            <div className={`flex items-center gap-1 px-2 bg-[#F75380] h-4 w-8 border border-[#F75380] rounded-full hover:border-white `}>
            </div>
          </div>
          <div className={`h-4 w-48 bg-white rounded-lg `}></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonBeat;
