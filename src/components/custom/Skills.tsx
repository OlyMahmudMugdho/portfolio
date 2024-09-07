import {} from "@/app/page";
import CloudIcon from "@/components/icons/CloudIcon";
import CodepenIcon from "@/components/icons/CodePenIcon";
import DatabaseIcon from "@/components/icons/DataBaseIcon";
import DockIcon from "@/components/icons/DockIcon";
import GitlabIcon from "@/components/icons/GitlabIcon";
import LaptopIcon from "@/components/icons/LaptopIcon";
import TypeIcon from "@/components/icons/TypeIcon";
import WrenchIcon from "@/components/icons/WrenchIcon";
import XIcon from "@/components/icons/XIcon";
import IconAws from "@/components/icons/custom/IconAws";
import IconDocker from "@/components/icons/custom/IconDocker";
import IconExpress from "@/components/icons/custom/IconExpress";
import IconGithubactions from "@/components/icons/custom/IconGithubactions";
import IconGoogleCloud from "@/components/icons/custom/IconGoogleCloud";
import IconJava from "@/components/icons/custom/IconJava";
import IconJavascript from "@/components/icons/custom/IconJavascript";
import IconJenkins from "@/components/icons/custom/IconJenkins";
import IconKubernetes from "@/components/icons/custom/IconKubernetes";
import IconLinux from "@/components/icons/custom/IconLinux";
import IconNextjs from "@/components/icons/custom/IconNextjs";
import IconNode from "@/components/icons/custom/IconNode";
import IconReact from "@/components/icons/custom/IconReact";
import IconSpring from "@/components/icons/custom/IconSpring";
import IconTypescript from "@/components/icons/custom/IconTypescript";
import SkillCard, { SkillProps } from "../skills-cards/SkillCard";
import IconGolang from "../icons/custom/IconGolang";

const skills: SkillProps[] = [
  {
    IconComponent: <IconJava className="h-14 w-14 text-red-500" />,
    SkillName: "Java",
  },
  {
    IconComponent: <IconSpring className="h-14 w-14 text-red-500" />,
    SkillName: "Spring",
  },
  {
    IconComponent: <IconGolang className="h-14 w-14 text-red-500" />,
    SkillName: "Golang",
  },
  {
    IconComponent: <IconJavascript className="h-14 w-14 text-red-500" />,
    SkillName: "JavaScript",
  },
  {
    IconComponent: <IconTypescript className="h-14 w-14 text-red-500" />,
    SkillName: "TypeScript",
  },
  {
    IconComponent: <IconJavascript className="h-14 w-14 text-red-500" />,
    SkillName: "JavaScript",
  },
  {
    IconComponent: <IconNode className="h-14 w-14 text-red-500" />,
    SkillName: "Node.js",
  },
  {
    IconComponent: <IconExpress className="h-14 w-14 text-red-500" />,
    SkillName: "Express.js",
  },
  {
    IconComponent: <DatabaseIcon className="h-14 w-14 text-red-500" />,
    SkillName: "SQL",
  },
  {
    IconComponent: <IconLinux className="h-14 w-14 text-red-500" />,
    SkillName: "Linux",
  },
  {
    IconComponent: <IconDocker className="h-14 w-14 text-red-500" />,
    SkillName: "Docker",
  },
  {
    IconComponent: <IconKubernetes className="h-14 w-14 text-red-500" />,
    SkillName: "Kubernetes",
  },
  {
    IconComponent: <IconJenkins className="h-14 w-14 text-red-500" />,
    SkillName: "Jenkins",
  },
  {
    IconComponent: <IconGithubactions className="h-14 w-14 text-red-500" />,
    SkillName: "Github Actions",
  },
  {
    IconComponent: <IconAws className="h-14 w-14 text-red-500" />,
    SkillName: "Amazon Web Service",
  },
  {
    IconComponent: <IconGoogleCloud className="h-14 w-14 text-red-500" />,
    SkillName: "Google Cloud",
  },
  {
    IconComponent: <IconNextjs className="h-14 w-14 text-red-500" />,
    SkillName: "Next.js",
  },
  {
    IconComponent: <IconReact className="h-14 w-14 text-red-500" />,
    SkillName: "React.js",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-muted py-12 md:py-24 px-6">
      <div className="container mx-auto max-w-4xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold md:text-4xl">My Skills</h2>
          <p className="text-muted-foreground">
            Here are some of the technologies and tools I am proficient in:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard
              key={i}
              IconComponent={skill.IconComponent}
              SkillName={skill.SkillName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
