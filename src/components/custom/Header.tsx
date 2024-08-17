'use client'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CodeIcon} from "@radix-ui/react-icons";
import {MenuIcon} from "lucide-react";
import {useEffect, useState} from "react";

export default function Header(){
    const [navClass,setNavClass] = useState("hidden md:flex gap-6");
    const [navButtonClass, setNavButtonClass] = useState("md:hidden")
    const [navOpen,setNavOpen] = useState(false)

    const toggleNavbar = () => {

        if (!navOpen) {
            setNavClass("flex flex-col justify-start items-center h-screen md:flex gap-6 w-full")
            setNavOpen(true)
            setNavButtonClass("hidden")
            return
        }
        if (navOpen) {
            setNavClass("hidden md:flex gap-6")
            setNavOpen(false)
            return
        }
    }

    const closeNavbar = () => {
        if (navOpen && navClass==="flex flex-col justify-start items-center h-screen md:flex gap-6 w-full") {
            setNavClass("hidden flex flex-col justify-start items-center h-screen md:flex gap-6 w-full")
            setNavButtonClass("static md:hidden")
            setNavOpen(false)
            return
        }
    }

    return (
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
            {
                !navOpen &&
                <>
                    <div className="flex items-center gap-2">
                        <CodeIcon className="w-6 h-6"/>
                        <span className="text-xl font-bold">M. Oly Mahmud</span>
                    </div>
                    <Button onClick={toggleNavbar} variant="ghost" size="icon" className={"md:hidden"}>
                        <MenuIcon className="w-6 h-6"/>
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </>
            }

            <nav className={navClass}>
                <Button onClick={toggleNavbar} variant="ghost" size="icon" className="md:hidden">
                    <MenuIcon className="w-6 h-6"/>
                    <span className="sr-only">Toggle menu</span>
                </Button>
                <Link onClick={closeNavbar} href="#about" className="hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                <Link onClick={closeNavbar} href="#projects" className="hover:underline underline-offset-4" prefetch={false}>
                    Projects
                </Link>
                <Link onClick={closeNavbar} href="#skills" className="hover:underline underline-offset-4" prefetch={false}>
                    Skills
                </Link>
                <Link onClick={closeNavbar} href="#contact" className="hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>

        </header>
    )
}