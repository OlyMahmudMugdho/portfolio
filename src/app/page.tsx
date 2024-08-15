// @ts-ignore
// @ts-ignore

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qJH8dTOwuRx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero"
import About from "@/components/custom/About";
import Projects from "@/components/custom/Projects";
import Skills from "@/components/custom/Skills";
import Contact from "@/components/custom/Contact"
import Footer from "@/components/custom/Footer";

export default function Component() {
    return (
        <main className="flex flex-col min-h-[100dvh]">
            <Header />
            <main className="flex-1">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </main>
    )
}

