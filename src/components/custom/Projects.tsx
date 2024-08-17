import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {CloudIcon} from "lucide-react";
import React from "react";
import EclipseIcon from "@/components/icons/EclipseIcon";
import CodepenIcon from "@/components/icons/CodePenIcon";
import DockIcon from "@/components/icons/DockIcon";
import SunSnowIcon from "@/components/icons/SunSnowIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import WrenchIcon from "@/components/icons/WrenchIcon";
import GitlabIcon from "@/components/icons/GitlabIcon";
import InventoryProject from "@/components/custom/projects/InventoryProject";
import CICDProject from "@/components/custom/projects/CICDProject";
import UrlShortener from "@/components/custom/projects/UrlShortener";


export default function Projects() {
    return (

        <section id="projects" className="bg-background py-12 md:py-24 px-6">
            <div className="container mx-auto max-w-4xl space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold md:text-4xl">My Projects</h2>
                    <p className="text-muted-foreground">Here are some of the projects I have worked on:</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    <InventoryProject />
                    <UrlShortener />
                    <CICDProject />
                </div>
            </div>
        </section>
    )
}