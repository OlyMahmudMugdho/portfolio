import Image from "next/image"
import { Send, CheckCircle2, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function NewsletterSection() {
    return (
        <section id="newsletter" className="py-20 px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="max-w-4xl mx-auto">
                <Card className="border-primary/20 bg-muted/30 backdrop-blur-md overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Send className="w-32 h-32 text-primary rotate-12" />
                    </div>

                    <CardContent className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            {/* Newsletter Logo */}
                            <div className="shrink-0 flex items-center justify-center">
                                <Image
                                    src="https://res.cloudinary.com/dnmubeloc/image/upload/v1767971440/others/Gemini_Generated_Image_91lzgh91lzgh91lz-removebg-preview_gf1jlv.png"
                                    alt="Software Systems Engineering Logo"
                                    width={160}
                                    height={160}
                                    className="object-contain w-32 h-32 md:w-40 md:h-40"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-grow text-justify md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                    Software Systems Engineering
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                    A newsletter for engineers learning how modern systems are built.
                                    From system design and DevOps to cloud infrastructure.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <a
                                        href=" https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7387128281332027394"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto"
                                    >
                                        <Button className="w-full sm:w-auto h-12 px-8 font-semibold transition-all hover:scale-105 active:scale-95 bg-[#0077b5] hover:bg-[#0077b5]/90 text-white flex items-center gap-2">
                                            <Linkedin className="w-5 h-5" />
                                            Subscribe on LinkedIn
                                        </Button>
                                    </a>
                                </div>

                                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        <span>Bi-weekly updates</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        <span>No spam, ever</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
