import {
} from "@/app/page";
import CloudIcon from "@/components/icons/CloudIcon";
import CodepenIcon from "@/components/icons/CodePenIcon";
import DatabaseIcon from "@/components/icons/DataBaseIcon";
import DockIcon from "@/components/icons/DockIcon";
import TypeIcon from "@/components/icons/TypeIcon";
import XIcon from "@/components/icons/XIcon";
import WrenchIcon from "@/components/icons/WrenchIcon";
import GitlabIcon from "@/components/icons/GitlabIcon";
import LaptopIcon from "@/components/icons/LaptopIcon";
import IconJava from "@/components/icons/custom/IconJava";
import IconSpring from "@/components/icons/custom/IconSpring";
import IconJavascript from "@/components/icons/custom/IconJavascript";
import IconTypescript from "@/components/icons/custom/IconTypescript";
import IconNode from "@/components/icons/custom/IconNode";
import IconExpress from "@/components/icons/custom/IconExpress";
import IconReact from "@/components/icons/custom/IconReact";
import IconNextjs from "@/components/icons/custom/IconNextjs";
import IconJenkins from "@/components/icons/custom/IconJenkins";
import IconGithubactions from "@/components/icons/custom/IconGithubactions";
import IconLinux from "@/components/icons/custom/IconLinux";
import IconDocker from "@/components/icons/custom/IconDocker";
import IconKubernetes from "@/components/icons/custom/IconKubernetes";
import IconAws from "@/components/icons/custom/IconAws";
import IconGoogleCloud from "@/components/icons/custom/IconGoogleCloud";


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
                        <IconJava className="w-8 h-8"/>
                        <span>Java</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconSpring className="w-8 h-8"/>
                        <span>Spring Boot</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconJavascript className="w-8 h-8"/>
                        <span>JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconTypescript className="w-8 h-8"/>
                        <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconNode className="w-8 h-8"/>
                        <span>Node.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconExpress className="w-8 h-8"/>
                        <span>Express.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconReact className="w-8 h-8"/>
                        <span>React.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconNextjs className="w-8 h-8"/>
                        <span>Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DatabaseIcon className="w-8 h-8"/>
                        <span>SQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconJenkins className="w-8 h-8"/>
                        <span>Jenkins</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconGithubactions className="w-8 h-8"/>
                        <span>GitHub Actions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconLinux className="w-8 h-8"/>
                        <span>Linux</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconDocker className="w-8 h-8"/>
                        <span>Docker</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconKubernetes className="w-8 h-8"/>
                        <span>Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconAws className="w-8 h-8"/>
                        <span>AWS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconGoogleCloud className="w-8 h-8"/>
                        <span>GCP</span>
                    </div>
                </div>
            </div>
        </section>
    )
}