import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CodeIcon} from "@radix-ui/react-icons";
import {MenuIcon} from "lucide-react";

export default function Header(){
    return (
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <CodeIcon className="w-6 h-6"/>
                <span className="text-xl font-bold">Rafi Hossain</span>
            </div>
            <nav className="hidden md:flex gap-6">
                <Link href="#about" className="hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                <Link href="#projects" className="hover:underline underline-offset-4" prefetch={false}>
                    Projects
                </Link>
                <Link href="#skills" className="hover:underline underline-offset-4" prefetch={false}>
                    Skills
                </Link>
                <Link href="#contact" className="hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="w-6 h-6"/>
                <span className="sr-only">Toggle menu</span>
            </Button>
        </header>
    )
}