import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import EclipseIcon from "@/components/icons/EclipseIcon";
import CodepenIcon from "@/components/icons/CodePenIcon";
import DockIcon from "@/components/icons/DockIcon";
import {CloudIcon} from "lucide-react";
import Link from "next/link";
import React from "react";
import IconJava from "@/components/icons/custom/IconJava";
import IconSpring from "@/components/icons/custom/IconSpring";
import DatabaseIcon from "@/components/icons/DataBaseIcon";
import IconDocker from "@/components/icons/custom/IconDocker";

export default function InventoryProject(){
   return (
       <Card className={"flex flex-col justify-between"}>
           <CardHeader>
               <CardTitle>Inventory Management System</CardTitle>
               <CardDescription>
                   Inventory Management System using Java, Spring Boot, Spring MVC, Spring Security Thymeleaf,Postgresql and Docker.
               </CardDescription>
           </CardHeader>
           <CardContent>
               <div className="flex items-center gap-2">
                   <IconJava className="w-6 h-6"/>
                   <IconSpring className="w-6 h-6"/>
                   <DatabaseIcon className="w-6 h-6"/>
                   <IconDocker className="w-6 h-6"/>
               </div>
           </CardContent>
           <CardFooter>
               <Link
                   href="https://github.com/OlyMahmudMugdho/inventory-management-system"
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