"use client"

import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background to-muted/20 pt-16 md:pt-0">
      <div className="max-w-4xl mx-auto text-left">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            M. Oly Mahmud
          </h1>
          <p className="text-2xl text-muted-foreground mb-6">
            Back-End Focused Software & DevOps Engineer
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href={"https://olymahmud.tiiny.site/"} target={"_blank"}>
            <Button className="sm:w-auto w-full">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
          <a href={"https://dev.to/olymahmud/"} target={"_blank"}>
            <Button variant="outline" className="sm:w-auto w-full">
              <ExternalLink className="mr-2 h-4 w-4" /> Visit Blog
            </Button>
          </a>

        </div>
        <div className="flex gap-4">
          <a href={"https://github.com/OlyMahmudMugdho/"} target={"_blank"}>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>

          <a href={"https://www.linkedin.com/in/olymahmud/"} target={"https://www.linkedin.com/in/olymahmud/"}>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>

          <a href={"mailto:oly.ice.pust@gmail.com"} target={"_blank"}>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </a>

        </div>
      </div>
    </section>
  )
}
