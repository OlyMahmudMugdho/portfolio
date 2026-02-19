import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon, UserIcon, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"

interface PostPageProps {
    params: {
        slug: string[]
    }
}

export async function generateStaticParams() {
    const slugs = getPostSlugs()
    return slugs.map((slug) => ({
        slug: slug.replace(/\.md$/, "").split("/"),
    }))
}

export default async function PostPage({ params }: PostPageProps) {
    const slug = params.slug.join("/")

    let post
    try {
        post = await getPostBySlug(slug)
    } catch (error) {
        notFound()
    }

    if (!post) {
        notFound()
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <Link
                href="/blog"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to Blog
            </Link>

            <article>
                <header className="mb-10 text-center">
                    <Badge variant="secondary" className="mb-4">
                        {post.category}
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            <time dateTime={post.date}>
                                {(() => {
                                    try {
                                        const d = new Date(post.date);
                                        if (isNaN(d.getTime())) return "Invalid Date";
                                        return format(d, "MMMM dd, yyyy");
                                    } catch (e) {
                                        return "Invalid Date";
                                    }
                                })()}
                            </time>
                        </div>
                        <div className="flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            <span>{post.readingTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <UserIcon className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                    </div>
                </header>

                {post.coverImage && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border mb-10">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-10 justify-center">
                    {post.tags.map(tag => (
                        <Link key={tag} href={`/blog?tag=${tag}`}>
                            <Badge variant="outline">#{tag}</Badge>
                        </Link>
                    ))}
                </div>

                <div
                    className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            <div className="mt-16 pt-8 border-t">
                {/* Related posts logic can go here */}
            </div>
        </div>
    )
}
