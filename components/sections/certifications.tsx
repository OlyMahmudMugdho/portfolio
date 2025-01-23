import { Award, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    title: "IBM DevOps and Software Engineering Professional Certificate",
    issuer: "IBM",
    date: "2024",
    icon: <Trophy className="h-6 w-6" />
  },
  {
    title: "AWS Cloud Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: <Award className="h-6 w-6" />
  }

]

export function CertificationsSection() {
  return (
    <section id="certifications" className="min-h-screen flex items-center bg-muted/50 px-4">
      <div className="max-w-4xl mx-auto py-16 w-full">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="transform transition-transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
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