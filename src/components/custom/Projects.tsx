import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {CodepenIcon, DockIcon, EclipseIcon, GithubIcon, GitlabIcon, SunSnowIcon, WrenchIcon} from "@/app/page";
import {CloudIcon} from "lucide-react";
import React from "react";


export default function Projects() {
    return (

        <section id="projects" className="bg-background py-12 md:py-24 px-6">
            <div className="container mx-auto max-w-4xl space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold md:text-4xl">My Projects</h2>
                    <p className="text-muted-foreground">Here are some of the projects I have worked on:</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Reekto E-commerce</CardTitle>
                            <CardDescription>
                                A full-stack e-commerce application built with Java, Spring Boot, React.js, and Next.js.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <EclipseIcon className="w-6 h-6"/>
                                <CodepenIcon className="w-6 h-6"/>
                                <CodepenIcon className="w-6 h-6"/>
                                <DockIcon className="w-6 h-6"/>
                                <CloudIcon className="w-6 h-6"/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                View Project
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>DevOps Automation</CardTitle>
                            <CardDescription>
                                A CI/CD pipeline for automating the deployment of web applications using Jenkins, GitHub
                                Actions,
                                Docker, and Kubernetes.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <WrenchIcon className="w-6 h-6"/>
                                <GitlabIcon className="w-6 h-6"/>
                                <DockIcon className="w-6 h-6"/>
                                <CloudIcon className="w-6 h-6"/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                View Project
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Microservices with Spring Boot</CardTitle>
                            <CardDescription>
                                A microservices-based application built with Java, Spring Boot, and Golang.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <EclipseIcon className="w-6 h-6"/>
                                <SunSnowIcon className="w-6 h-6"/>
                                <GithubIcon className="w-6 h-6"/>
                                <DockIcon className="w-6 h-6"/>
                                <CloudIcon className="w-6 h-6"/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                View Project
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}