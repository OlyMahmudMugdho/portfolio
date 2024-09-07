import GithubIcon from "@/components/icons/GithubIcon"
import GitlabIcon from "@/components/icons/GitlabIcon"
import LinkedinIcon from "@/components/icons/LinkedinIcon"
import MailIcon from "@/components/icons/MailIcon"
import Link from "next/link"


function FooterSocial() {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
            <div className="flex justify-center md:justify-start items-center gap-4">
                <Link href="https://github.com/OlyMahmudMugdho/" target="_blank" aria-label="GitLab" prefetch={false}>
                    <GithubIcon className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link href="https://www.linkedin.com/in/olymahmud/" target="_blank" aria-label="LinkedIn" prefetch={false}>
                    <LinkedinIcon className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link href="mailto:oly.ice.pust@gmail.com" aria-label="Email" prefetch={false}>
                    <MailIcon className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                </Link>
            </div>
        </div>
    )
}

export default FooterSocial