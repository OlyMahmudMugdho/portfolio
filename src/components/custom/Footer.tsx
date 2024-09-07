import FooterQuickLinks from "./footer-sections/FooterQuickLinks";
import FooterContact from "./footer-sections/FooterContact";
import FooterSocial from "./footer-sections/FooterSocial";
import FooterBottom from "./footer-sections/FooterBottom";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-10 px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-56 text-center md:text-left">

                    <FooterQuickLinks />
                    <FooterContact />
                    <FooterSocial />
                </div>
                <FooterBottom />
            </div>
        </footer>
    );
}
