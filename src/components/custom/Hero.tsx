import Link from "next/link";


export default function Hero() {
    return (
        <section id="hero" className="bg-primary text-primary-foreground py-12 md:py-24 px-6">
            <div className="container mx-auto max-w-4xl space-y-6">
                <h1 className="text-4xl font-bold md:text-6xl">Rafi Hossain</h1>
                <p className="text-lg md:text-xl">Full-Stack Web Developer & DevOps Engineer</p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        View Projects
                    </Link>
                    <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    )
}