import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Inventory Management System",
    description: "Inventory Management System using Java, Spring Boot, Spring MVC, Spring Security Thymeleaf, PostgreSQL and Docker.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "https://github.com/OlyMahmudMugdho/inventory-management-system"
  },
  {
    title: "URL Shortener",
    description: "A URL Shortener app made using Go, PostgreSQL and Angular. URL Redirect, Creation, Management and Deletion of long URLs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "https://github.com/OlyMahmudMugdho/url-shortener"
  },
  {
    title: "DevOps CI/CD",
    description: "A CI/CD pipeline for automating the deployment of web applications using Jenkins, GitHub Actions and Docker.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "https://github.com/OlyMahmudMugdho/react-with-spring-boot"
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 flex items-center px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <a href={project.link} target={"_blank"}>
                  <Button variant="outline" className="w-full mt-4">
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