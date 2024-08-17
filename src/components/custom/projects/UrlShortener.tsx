import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import EclipseIcon from "@/components/icons/EclipseIcon";
import SunSnowIcon from "@/components/icons/SunSnowIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import DockIcon from "@/components/icons/DockIcon";
import {CloudIcon} from "lucide-react";
import Link from "next/link";
import React from "react";
import IconGolang from "@/components/icons/custom/IconGolang";
import DatabaseIcon from "@/components/icons/DataBaseIcon";
import IconAngular from "@/components/icons/custom/IconAngular";


export default function UrlShortener() {
    return (
        <Card className={"flex flex-col justify-between"}>
            <CardHeader>
                <CardTitle>URL Shortener</CardTitle>
                <CardDescription>
                    A URL Shortener app made using Go, PostgreSQL and Angular. URL Redirect, Creation, Management and Deletion of long URLs. It takes the short URL and redirects to the long URL.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                    <IconGolang className="w-6 h-6"/>
                    <DatabaseIcon className="w-6 h-6"/>
                    <IconAngular className="w-6 h-6"/>
                </div>
            </CardContent>
            <CardFooter>
                <Link
                    href="https://github.com/OlyMahmudMugdho/url-shortener"
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