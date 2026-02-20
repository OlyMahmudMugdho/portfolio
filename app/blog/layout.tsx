import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className={`flex-1 pt-24 pb-12 ${inconsolata.className}`}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
