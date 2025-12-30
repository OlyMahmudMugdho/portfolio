import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import projects from "@/data/projects.json"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 flex items-center px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col group overflow-hidden border-border/50 bg-muted/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags?.slice(0, 2).map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-background/80 backdrop-blur-md border-white/10 text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags?.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-primary/70 bg-primary/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project.link} target={"_blank"} rel="noopener noreferrer">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    View Project
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}