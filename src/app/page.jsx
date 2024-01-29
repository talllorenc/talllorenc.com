import HeaderPage from "@/app/header/page";
import BeatsSection from "./beatsSection/page";
import SocialsLinks from "@/components/SocialsLinks/SocialsLinks";
import LicensingPage from "./licensing/page";
import ContactPage from "./contact/page";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col">
            <HeaderPage/>
            <SocialsLinks/>
            <BeatsSection/>
            <LicensingPage/>
            <ContactPage/>
        </div>
    )
}
