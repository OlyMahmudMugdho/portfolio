"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface BlogFiltersProps {
    categories: string[]
    tags: string[]
}

export function BlogFilters({ categories, tags }: BlogFiltersProps) {
    const searchParams = useSearchParams()
    const activeCategory = searchParams.get("category")
    const activeTag = searchParams.get("tag")

    const hasFilters = activeCategory || activeTag

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">Categories</h3>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <Link
                            key={category}
                            href={activeCategory === category ? "/blog" : `/blog?category=${category}${activeTag ? `&tag=${activeTag}` : ""}`}
                        >
                            <Badge
                                variant={activeCategory === category ? "default" : "outline"}
                                className="px-3 py-1 cursor-pointer transition-colors"
                            >
                                {category}
                            </Badge>
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Link
                            key={tag}
                            href={activeTag === tag ? "/blog" : `/blog?tag=${tag}${activeCategory ? `&category=${activeCategory}` : ""}`}
                        >
                            <Badge
                                variant={activeTag === tag ? "default" : "outline"}
                                className={cn(
                                    "px-3 py-0.5 cursor-pointer transition-colors text-[10px]",
                                    activeTag === tag ? "" : "text-muted-foreground"
                                )}
                            >
                                #{tag}
                            </Badge>
                        </Link>
                    ))}
                </div>
            </div>

            {hasFilters && (
                <Link
                    href="/blog"
                    className="inline-flex items-center text-xs font-medium text-primary hover:underline gap-1"
                >
                    <X className="h-3 w-3" />
                    Clear all filters
                </Link>
            )}
        </div>
    )
}
