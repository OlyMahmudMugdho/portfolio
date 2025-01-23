import { Code2, Database, Server, Terminal, Cloud } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    name: "Java",
    icon: <Code2 className="h-6 w-6" />,
    category: "Languages"
  },
  {
    name: "Spring",
    icon: <Server className="h-6 w-6" />,
    category: "Frameworks"
  },
  {
    name: "Golang",
    icon: <Code2 className="h-6 w-6" />,
    category: "Languages"
  },
  {
    name: "JavaScript",
    icon: <Code2 className="h-6 w-6" />,
    category: "Languages"
  },
  {
    name: "TypeScript",
    icon: <Code2 className="h-6 w-6" />,
    category: "Languages"
  },
  {
    name: "Node.js",
    icon: <Server className="h-6 w-6" />,
    category: "Runtime"
  },
  {
    name: "Express.js",
    icon: <Server className="h-6 w-6" />,
    category: "Frameworks"
  },
  {
    name: "SQL",
    icon: <Database className="h-6 w-6" />,
    category: "Database"
  },
  {
    name: "Linux",
    icon: <Terminal className="h-6 w-6" />,
    category: "OS"
  },
  {
    name: "Docker",
    icon: <Cloud className="h-6 w-6" />,
    category: "DevOps"
  },
  {
    name: "Kubernetes",
    icon: <Cloud className="h-6 w-6" />,
    category: "DevOps"
  },
  {
    name: "Jenkins",
    icon: <Cloud className="h-6 w-6" />,
    category: "DevOps"
  },
  {
    name: "Github Actions",
    icon: <Cloud className="h-6 w-6" />,
    category: "DevOps"
  },
  {
    name: "AWS",
    icon: <Cloud className="h-6 w-6" />,
    category: "Cloud"
  },
  {
    name: "GCP",
    icon: <Cloud className="h-6 w-6" />,
    category: "Cloud"
  },
  {
    name: "Next.js",
    icon: <Code2 className="h-6 w-6" />,
    category: "Frameworks"
  },
  {
    name: "React.js",
    icon: <Code2 className="h-6 w-6" />,
    category: "Frameworks"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center bg-muted/50 px-4">
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Card key={index} className="transform transition-transform hover:scale-105">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
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