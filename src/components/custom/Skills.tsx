import {
} from "@/app/page";
import CloudIcon from "@/components/icons/CloudIcon";
import EclipseIcon from "@/components/icons/EclipseIcon";
import CodepenIcon from "@/components/icons/CodePenIcon";
import DatabaseIcon from "@/components/icons/DataBaseIcon";
import DockIcon from "@/components/icons/DockIcon";
import SunSnowIcon from "@/components/icons/SunSnowIcon";
import TypeIcon from "@/components/icons/TypeIcon";
import XIcon from "@/components/icons/XIcon";
import WrenchIcon from "@/components/icons/WrenchIcon";
import GitlabIcon from "@/components/icons/GitlabIcon";
import LaptopIcon from "@/components/icons/LaptopIcon";


export default function Skills(){
    return (
        <section id="skills" className="bg-muted py-12 md:py-24 px-6">
            <div className="container mx-auto max-w-4xl space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold md:text-4xl">My Skills</h2>
                    <p className="text-muted-foreground">Here are some of the technologies and tools I am proficient
                        in:</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                        <EclipseIcon className="w-6 h-6"/>
                        <span>Java</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <SunSnowIcon className="w-6 h-6"/>
                        <span>Spring Boot</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <EclipseIcon className="w-6 h-6"/>
                        <span>JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <TypeIcon className="w-6 h-6"/>
                        <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CodepenIcon className="w-6 h-6"/>
                        <span>Node.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <XIcon className="w-6 h-6"/>
                        <span>Express.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CodepenIcon className="w-6 h-6"/>
                        <span>React.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CodepenIcon className="w-6 h-6"/>
                        <span>Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DatabaseIcon className="w-6 h-6"/>
                        <span>SQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <WrenchIcon className="w-6 h-6"/>
                        <span>Jenkins</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GitlabIcon className="w-6 h-6"/>
                        <span>GitHub Actions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LaptopIcon className="w-6 h-6"/>
                        <span>Linux</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DockIcon className="w-6 h-6"/>
                        <span>Docker</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CloudIcon className="w-6 h-6"/>
                        <span>Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CloudIcon className="w-6 h-6"/>
                        <span>AWS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CloudIcon className="w-6 h-6"/>
                        <span>GCP</span>
                    </div>
                </div>
            </div>
        </section>
    )
}