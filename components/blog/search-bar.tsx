"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { PostMeta } from "@/lib/blog"
import Link from "next/link"

interface SearchBarProps {
    posts: PostMeta[]
}

export function SearchBar({ posts }: SearchBarProps) {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const containerRef = useRef<HTMLDivElement>(null)

    const filteredPosts = useMemo(() => {
        const searchTerm = query.trim().toLowerCase()
        if (!searchTerm) return []
        return posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
        ).slice(0, 8)
    }, [posts, query])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return (
        <div ref={containerRef} className="relative w-full max-w-sm ml-auto z-50">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search posts..."
                    className="pl-9 pr-9"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setOpen(true)
                    }}
                    onFocus={() => {
                        if (query.trim().length > 0) {
                            setOpen(true)
                        }
                    }}
                />
                {query && (
                    <button
                        type="button"
                        onClick={() => {
                            setQuery("")
                            setOpen(false)
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                        aria-label="Clear search"
                    >
                        <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </button>
                )}
            </div>

            {open && query.trim().length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 rounded-lg border bg-popover text-popover-foreground shadow-xl overflow-hidden max-h-[360px] overflow-y-auto animate-in fade-in-0 zoom-in-95">
                    {filteredPosts.length === 0 ? (
                        <div className="p-4 text-center text-sm text-muted-foreground">
                            No blog posts found for &quot;{query}&quot;.
                        </div>
                    ) : (
                        <div className="py-2">
                            <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Matching Posts ({filteredPosts.length})
                            </div>
                            {filteredPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    onClick={() => {
                                        setOpen(false)
                                        setQuery("")
                                    }}
                                    className="flex flex-col gap-1 px-3 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <span className="font-medium text-sm text-foreground">{post.title}</span>
                                    <span className="text-xs text-muted-foreground line-clamp-1">{post.excerpt}</span>
                                    <div className="flex gap-1 mt-1">
                                        <span className="inline-block text-[10px] bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
