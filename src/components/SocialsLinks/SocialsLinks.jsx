import Image from "next/image";

const SocialsLinks = () => {
  return (
    <div className="flex items-center justify-between gap-2 border-2 border-[#7c7b7b] px-2 w-[280px] rounded-xl">
      <div className="rounded-lg px-2 bg-[#f75380]">
        <span>MY SOCIAL NET</span>
      </div>
      <div className="flex gap-2 py-1">
        <a
          className="flex gap-2 items-center text-xl font-bold rounded-2xl transition duration-300 ease-in-out hover:scale-110"
          href="https://www.instagram.com/tellmynumber/"
          target="_blank"
        >
          <Image
            src="/SocialsLinks/icon-instagram.png"
            width={25}
            height={25}
            alt="instagram image"
          />
        </a>

        <a
          className="flex gap-2 items-center text-xl font-bold rounded-2xl transition duration-300 ease-in-out hover:scale-110"
          href="https://soundcloud.com/talllorenc"
          target="_blank"
        >
          <Image
            src="/SocialsLinks/icon-soundcloud.png"
            width={25}
            height={25}
            alt="soundcloud image"
          />
        </a>

        <a
          className="flex gap-2 items-center text-xl font-bold rounded-2xl transition duration-300 ease-in-out hover:scale-110"
          href="#"
          target="_blank"
        >
          <Image
            src="/SocialsLinks/icon-youtube.png"
            width={25}
            height={25}
            alt="youtube image"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialsLinks;
