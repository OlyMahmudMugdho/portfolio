import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { CalendarIcon, ClockIcon } from "lucide-react"
import { PostMeta } from "@/lib/blog"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface PostCardProps {
    post: PostMeta
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/blog/${post.slug}`} className="block relative aspect-video w-full overflow-hidden group">
                {post.coverImage ? (
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">No image</span>
                    </div>
                )}
                <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                        {post.category}
                    </Badge>
                </div>
            </Link>

            <CardHeader className="flex-1 pb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    <h3 className="text-xl font-bold leading-tight line-clamp-2">
                        {post.title}
                    </h3>
                </Link>
            </CardHeader>

            <CardContent className="pb-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                </p>
            </CardContent>

            <CardFooter className="flex items-center justify-between text-muted-foreground text-xs pt-0 border-t mt-auto">
                <div className="flex items-center gap-1 pt-4">
                    <CalendarIcon className="h-3 w-3" />
                    <span>
                        {(() => {
                            try {
                                const d = new Date(post.date);
                                if (isNaN(d.getTime())) return "Invalid Date";
                                return format(d, "MMM d, yyyy");
                            } catch (e) {
                                return "Invalid Date";
                            }
                        })()}
                    </span>
                </div>
                <div className="flex items-center gap-1 pt-4">
                    <ClockIcon className="h-3 w-3" />
                    <span>{post.readingTime}</span>
                </div>
            </CardFooter>
        </Card>
    )
}
export function PostCardSkeleton() {
    return (
        <Card className="flex flex-col h-full overflow-hidden">
            <div className="aspect-video w-full">
                <Skeleton className="h-full w-full rounded-none" />
            </div>
            <CardHeader className="flex-1 pb-2">
                <Skeleton className="h-7 w-3/4 mb-2" />
                <Skeleton className="h-7 w-1/2" />
            </CardHeader>
            <CardContent className="pb-4">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter className="flex items-center justify-between pt-0 border-t mt-auto">
                <div className="flex items-center gap-1 pt-4">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-3 w-20" />
                </div>
                <div className="flex items-center gap-1 pt-4">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-3 w-16" />
                </div>
            </CardFooter>
        </Card>
    )
}
