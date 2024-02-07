"use client"
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleAuth = () => {
  return (
    <button onClick={()=> signIn('google')} className="flex mt-2 items-center gap-2 text-lg bg-white border border-[#2c2b2b] text-black font-medium px-12 py-2 rounded-lg hover:opacity-90">
      <Image src='/SocialsLinks/icon-google.png' alt="google image" width={30} height={30}/>
      Sign in with Google
    </button>
  )
};

export default GoogleAuth;