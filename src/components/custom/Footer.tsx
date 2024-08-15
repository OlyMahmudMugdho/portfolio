import Link from "next/link";
import GitlabIcon from "@/components/icons/GitlabIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MailIcon from "@/components/icons/MailIcon";


export default function Footer(){
    return (
        <footer className="bg-primary text-primary-foreground py-4 px-6">
            <div className="container mx-auto max-w-4xl flex items-center justify-between">
                <p className="text-sm">&copy; 2024 Rafi Hossain. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <Link href="#" target="_blank" prefetch={false}>
                        <GitlabIcon className="w-6 h-6"/>
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" target="_blank" prefetch={false}>
                        <LinkedinIcon className="w-6 h-6"/>
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" prefetch={false}>
                        <MailIcon className="w-6 h-6"/>
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}