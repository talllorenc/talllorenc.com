import Image from "next/image";

const SocialsLinks = () => {
  return (
    <div className="socials-links-bg bg-[#141414] w-full text-center mt-56">
      <div className="flex items-center justify-between gap-4 p-8 max-w-[900px] mx-auto" >
        <a className="flex gap-2 items-center text-xl font-bold py-1 px-8 rounded-2xl transition duration-300 ease-in-out hover:bg-[#781a53]" href="https://www.instagram.com/tellmynumber/" target="_blank">
          <Image
            src="/SocialsLinks/icon-instagram.png"
            width={50}
            height={50}
            alt="instagram image"
          />
          <span>Instagram</span>
        </a>
        <span className="text-[#9f9f9f]">/●/</span>
        <a className="flex gap-2 items-center text-xl font-bold py-1 px-8 rounded-2xl transition duration-300 ease-in-out hover:bg-[#91421b]" href="https://soundcloud.com/talllorenc" target="_blank">
          <Image
            src="/SocialsLinks/icon-soundcloud.png"
            width={50}
            height={50}
            alt="soundcloud image"
          />
          <span>SoundCloud</span>
        </a>
        <span className="text-[#9f9f9f]">/●/</span>
        <a className="flex gap-2 items-center text-xl font-bold py-1 px-8 rounded-2xl transition duration-300 ease-in-out hover:bg-[#780f08]" href="#" target="_blank">
          <Image
            src="/SocialsLinks/icon-youtube.png"
            width={50}
            height={50}
            alt="youtube image"
          />
          <span>YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default SocialsLinks;
