import IconAws from "../icons/custom/IconAws";
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardDescription,
  CardContent,
} from "../ui/card";

export type SkillProps = {
  IconComponent: React.ReactElement;
  SkillName: string;
};

export default function SkillCard({ IconComponent, SkillName }: SkillProps) {
  return (
    <Card className="flex flex-col items-center pt-2 justify-center">
      <CardContent className="flex flex-col items-center text-center">
        {IconComponent}
        <h1 className="text-lg font-medium"> {SkillName} </h1>
      </CardContent>
    </Card>
  );
}
