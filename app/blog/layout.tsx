import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 pt-24 pb-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}
