"use client"

import GoogleAuth from "@/components/GoogleAuth/GoogleAuth";

const SocialAuth = () => {
    return(
        <div className="flex flex-col items-center w-full">
            <span className="text-[#8c8b8b] border-t border-[#8c8b8b] w-full text-center p-4">Social networks login</span>
            <div>
                <GoogleAuth/>
            </div>
        </div>
    )
};

export default SocialAuth;