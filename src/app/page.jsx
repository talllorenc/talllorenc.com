import HeaderPage from "@/app/header/page";
import BeatsSection from "./beatsSection/page";
import LicensingPage from "./licensing/page";
import ContactPage from "./contact/page";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col">
            <HeaderPage/>
            <BeatsSection/>
            <LicensingPage/>
            <ContactPage/>
        </div>
    )
}
