"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "all", name: "All" },
  { id: "software", name: "Software Engineering" },
  { id: "devops", name: "DevOps and Cloud" },
  { id: "ai", name: "Artificial Intelligence" },
  { id: "iot", name: "Internet of Things" },
  { id: "tools", name: "Tools" }
]

const skills = [
  // Software Engineering
  { name: "Java", icon: "java", category: "software" },
  { name: "Spring Boot", icon: "spring", category: "software" },
  { name: "Golang", icon: "go", category: "software" },
  { name: "C#", icon: "cs", category: "software" },
  { name: "ASP.NET Core", icon: "dotnet", category: "software" },
  { name: "JavaScript", icon: "js", category: "software" },
  { name: "TypeScript", icon: "ts", category: "software" },
  { name: "Node.js", icon: "nodejs", category: "software" },
  { name: "Next.js", icon: "nextjs", category: "software" },
  { name: "React.js", icon: "react", category: "software" },
  { name: "Express.js", icon: "express", category: "software" },
  { name: "SQL", icon: "postgres", category: "software" },
  { name: "MongoDB", icon: "mongodb", category: "software" },

  // DevOps and Cloud
  { name: "Docker", icon: "docker", category: "devops" },
  { name: "Kubernetes", icon: "kubernetes", category: "devops" },
  { name: "Terraform", icon: "terraform", category: "devops" },
  { name: "Ansible", icon: "ansible", category: "devops" },
  { name: "Jenkins", icon: "jenkins", category: "devops" },
  { name: "Github Actions", icon: "githubactions", category: "devops" },
  { name: "GitLab CI/CD", icon: "gitlab", category: "devops" },
  { name: "ArgoCD", icon: "https://icon.icepanel.io/Technology/svg/Argo-CD.svg", category: "devops", isExternal: true },
  { name: "AWS", icon: "aws", category: "devops" },
  { name: "GCP", icon: "gcp", category: "devops" },
  { name: "Linux", icon: "linux", category: "devops" },

  // AI
  { name: "PyTorch", icon: "pytorch", category: "ai" },
  { name: "Scikit Learn", icon: "sklearn", category: "ai" },
  { name: "LangChain", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/langchain-color.png", category: "ai", isExternal: true },
  // IoT
  { name: "ESP32", icon: "https://www.espressif.com/sites/all/themes/espressif/favicon.ico", category: "iot", isExternal: true },
  { name: "Arduino", icon: "arduino", category: "iot" },
  { name: "Raspberry Pi Pico", icon: "raspberrypi", category: "iot" },
  { name: "AWS IoT Core", icon: "aws", category: "iot" },

  // Tools
  { name: "VS Code", icon: "vscode", category: "tools" },
  { name: "IntelliJ IDEA", icon: "https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg", category: "tools", isExternal: true },
  { name: "Google Colab", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg", category: "tools", isExternal: true },
  { name: "Kaggle", icon: "https://icon.icepanel.io/Technology/svg/Kaggle.svg", category: "tools", isExternal: true }
]

const getIconUrl = (skill: typeof skills[0]) => {
  if (skill.isExternal) return skill.icon
  return `https://skillicons.dev/icons?i=${skill.icon}`
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 flex items-center bg-muted/50 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">My Skills</h2>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center h-auto gap-2 bg-transparent">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border transition-all duration-300"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills
                  .filter((skill) => cat.id === "all" || skill.category === cat.id)
                  .map((skill, index) => (
                    <Card key={index} className="transform transition-all duration-300 hover:scale-105 hover:border-primary/50 group">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center gap-4 text-center">
                          <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                            <img
                              src={getIconUrl(skill)}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">{skill.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}