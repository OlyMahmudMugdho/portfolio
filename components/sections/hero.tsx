"use client"

import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-background pt-16 md:pt-0">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[25%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-left relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AVAILABLE FOR NEW PROJECTS
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Hi, I&apos;m <span className="text-primary italic">M. Oly Mahmud</span>. <br />

          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400">
            Back-End Focused Software & DevOps Engineer specializing in high-performance Java ecosystem,
            Cloud infrastructures, and automated CI/CD workflows.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          <a href={"https://res.cloudinary.com/dnmubeloc/image/upload/v1766910201/resume/RESUME_M_OLY_MAHMUD.pdf"} target={"_blank"} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden bg-primary px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </Button>
          </a>
          <a href={"https://dev.to/olymahmud/"} target={"_blank"} className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-lg transition-all hover:bg-muted/50 border-border/50">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit Blog
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-800">
          <a
            href="https://github.com/OlyMahmudMugdho/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/olymahmud/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:oly.ice.pust@gmail.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
