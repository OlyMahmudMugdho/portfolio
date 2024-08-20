"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";



export default function Contact() {

    const [name, setName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [visitorsMessage, setVisitorsMessage] = useState("")
    const [loading, setLoading] = useState(false)


    const sendMessage = async (event: FormEvent<HTMLFormElement>, name: string, emailAddress: string, visitorsMessage: string) => {
        event.preventDefault();
        setLoading(true)
        fetch("/api/mail", {
            method: 'POST',
            body: JSON.stringify({
                "name": name,
                "emailAddress": emailAddress,
                "visitorsMessage": visitorsMessage
            })
        })
            .then(res => res.json())
            .then(data => data.ok ?  alert("Message sent successfully") : alert("something went wrong"))
            .then(() => setLoading(false))
    }


    return (
        <section id="contact" className="bg-background py-12 md:py-24 px-6">
            <div className="container mx-auto max-w-4xl space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold md:text-4xl">Contact Me</h2>
                    <p className="text-muted-foreground">Feel free to reach out to me for any inquiries or
                        opportunities.</p>
                </div>
                <form onSubmit={e => sendMessage(e, name, emailAddress, visitorsMessage)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input onChange={e => setName(e.target.value)} name="name" id="name" type="text" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={e => setEmailAddress(e.target.value)} name="email" id="email" type="email" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea onChange={e => setVisitorsMessage(e.target.value)} name="message" id="message" rows={5} required />
                    </div>
                    <Button disabled={loading} type="submit" className="w-full">
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        }

                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}