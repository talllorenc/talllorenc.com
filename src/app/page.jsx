import HeaderPage from "@/app/header/page";
import BeatsSection from "./beatsSection/page";
import SocialsLinks from "@/components/SocialsLinks/SocialsLinks";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col items-center">
            <HeaderPage/>
            <SocialsLinks/>
            <BeatsSection/>
        </div>
    )
}
