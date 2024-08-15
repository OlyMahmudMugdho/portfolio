import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";


export default function Contact(){
    return (
        <section id="contact" className="bg-background py-12 md:py-24 px-6">
            <div className="container mx-auto max-w-4xl space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold md:text-4xl">Contact Me</h2>
                    <p className="text-muted-foreground">Feel free to reach out to me for any inquiries or
                        opportunities.</p>
                </div>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" type="text" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" rows={5} required/>
                    </div>
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}