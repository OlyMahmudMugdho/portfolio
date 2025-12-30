import Image from "next/image"
import { GraduationCap, BookOpen, Calendar } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const education = {
    university: "Pabna University of Science and Technology",
    department: "Information and Communication Engineering (ICE)",
    logo: "https://res.cloudinary.com/dnmubeloc/image/upload/v1767104629/university/ICE_PUST_LOGO_transparent.png",
    degree: "B.Sc. (Engineering)",
    equivalency: "Officially Equivalent to B.Sc. (Engineering) Information and Communication Technology (ICT)",
    period: "2022 - 2026",
    courses: [
        "Object Oriented Programming",
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems (DBMS)",
        "Computer Architecture",
        "Software Engineering",
        "System Analysis and Software Testing",
        "Web Development",
        "Artificial Intelligence and Robotics",
        "Digital Image and Speech Processing",
        "Cryptography and Data Security",
        "Machine Learning",
        "Deep Learning",
        "Internet of Things"
    ]
}

export function EducationSection() {
    return (
        <section id="education" className="py-20 flex items-center px-4">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-12">Education</h2>

                <Card className="mb-12 border-primary/20 bg-muted/30 backdrop-blur-sm">
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex items-center justify-center mx-auto md:mx-0 shrink-0">
                                <Image
                                    src={education.logo}
                                    alt="Department logo"
                                    width={80}
                                    height={80}
                                    className="object-contain w-20 h-20 md:w-24 md:h-24"
                                />
                            </div>
                            <div className="flex-grow md:text-left">
                                <h3 className="text-lg md:text-2xl font-bold mb-2">{education.university}</h3>
                                <p className="text-md md:text-xl text-primary font-semibold mb-1">{education.degree} in {education.department}</p>
                                <p className="text-muted-foreground mb-4">{education.equivalency}</p>
                                <div className="flex md:justify-start gap-2 text-muted-foreground">
                                    <Calendar className="h-7 w-7" />
                                    <span>{education.period}</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="h-6 w-6 text-primary" />
                        <h3 className="text-xl md:text-2xl font-bold">Academic Courses</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {education.courses.map((course, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border/50 transition-colors hover:bg-muted"
                            >
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <span className="text-sm md:text-base font-medium">{course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
