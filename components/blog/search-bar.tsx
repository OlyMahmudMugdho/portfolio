"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { PostMeta } from "@/lib/blog"
import Link from "next/link"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
    posts: PostMeta[]
}

export function SearchBar({ posts }: SearchBarProps) {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")

    const filteredPosts = useMemo(() => {
        if (!query) return []
        return posts.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
            post.category.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5)
    }, [posts, query])

    return (
        <div className="relative w-full max-w-sm ml-auto">
            <Popover open={open && query.length > 0} onOpenChange={setOpen}>
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
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                            <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        </button>
                    )}
                </div>
                <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)]" align="start">
                    <Command>
                        <CommandList>
                            {filteredPosts.length === 0 ? (
                                <CommandEmpty>No results found.</CommandEmpty>
                            ) : (
                                <CommandGroup heading="Recent Posts">
                                    {filteredPosts.map((post) => (
                                        <CommandItem
                                            key={post.slug}
                                            onSelect={() => {
                                                setOpen(false)
                                                setQuery("")
                                            }}
                                            className="cursor-pointer"
                                            asChild
                                        >
                                            <Link href={`/blog/${post.slug}`} className="flex flex-col items-start gap-1 p-2">
                                                <span className="font-medium">{post.title}</span>
                                                <span className="text-xs text-muted-foreground line-clamp-1">{post.excerpt}</span>
                                            </Link>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            )}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
