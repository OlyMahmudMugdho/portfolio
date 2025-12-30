"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageSquare, Heart } from "lucide-react"

interface Article {
    id: number
    title: string
    description: string
    cover_image: string
    url: string
    published_at: string
    tag_list: string[]
    public_reactions_count: number
    comments_count: number
}

export function ArticlesSection() {
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch("https://dev.to/api/articles?username=olymahmud&per_page=6")
                const data = await response.json()
                setArticles(data)
            } catch (error) {
                console.error("Error fetching articles:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchArticles()
    }, [])

    if (loading) {
        return (
            <section id="articles" className="py-20 flex items-center px-4">
                <div className="max-w-6xl mx-auto w-full text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Recent Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-[400px] rounded-2xl bg-muted animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="articles" className="py-20 flex items-center px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Recent Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block h-full"
                        >
                            <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={article.cover_image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60"}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {new Date(article.published_at).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Heart className="h-3 w-3" />
                                            {article.public_reactions_count}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageSquare className="h-3 w-3" />
                                            {article.comments_count}
                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                        {article.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {article.tag_list.map((tag, i) => (
                                            <Badge key={i} variant="secondary" className="bg-primary/5 text-primary/70 border-none text-[10px] uppercase font-bold hover:bg-primary/10 transition-colors">
                                                #{tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button variant="link" className="p-0 h-auto justify-start text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                        Read More →
                                    </Button>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a href="https://dev.to/olymahmud" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg">
                            View All Articles
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}
