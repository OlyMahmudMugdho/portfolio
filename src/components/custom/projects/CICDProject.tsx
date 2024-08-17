import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import WrenchIcon from "@/components/icons/WrenchIcon";
import GitlabIcon from "@/components/icons/GitlabIcon";
import DockIcon from "@/components/icons/DockIcon";
import {CloudIcon} from "lucide-react";
import Link from "next/link";
import React from "react";
import IconJenkins from "@/components/icons/custom/IconJenkins";
import IconGithubactions from "@/components/icons/custom/IconGithubactions";
import IconDocker from "@/components/icons/custom/IconDocker";
import IconJava from "@/components/icons/custom/IconJava";
import IconSpring from "@/components/icons/custom/IconSpring";
import IconReact from "@/components/icons/custom/IconReact";

export default function CICDProject() {
    return (
        <Card className={"flex flex-col justify-between"}>
            <CardHeader>
                <CardTitle>DevOps CI/CD</CardTitle>
                <CardDescription>
                    A CI/CD pipeline for automating the deployment of web applications using Jenkins, GitHub
                    Actions and Docker. The Web app is built using Java, Spring Boot, React.js
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                    <IconJenkins className="w-6 h-6"/>
                    <IconGithubactions className="w-6 h-6"/>
                    <IconDocker className="w-6 h-6"/>
                    <IconJava className="w-6 h-6"/>
                    <IconSpring className="w-6 h-6"/>
                    <IconReact className="w-6 h-6"/>
                </div>
            </CardContent>
            <CardFooter>
                <Link
                    href="https://github.com/OlyMahmudMugdho/react-with-spring-boot"
                    target={"_blank"}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    View Project
                </Link>
            </CardFooter>
        </Card>
    )
}