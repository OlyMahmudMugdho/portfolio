import { Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    company: "Shefra",
    position: "Software Engineer",
    period: "October 2024 - Present",
    description: "Developed and maintained enterprise applications using Java, Spring Boot. Implemented CI/CD pipelines using Jenkins and GitHub Actions. Deployed and managed applications on AWS and GCP using Docker and Kubernetes."
  },
  {
    company: "Reekto",
    position: "Software Developer",
    period: "August 2023 - September 2024",
    description: "Developed full stack applications using Node.js, Express.js, Mongo DB and React.js "
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 flex items-center px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-muted-foreground mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}