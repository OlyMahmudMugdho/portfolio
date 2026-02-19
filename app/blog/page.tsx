import { getAllPosts, getPaginatedPosts, getAllCategories, getAllTags, getFeaturedPosts } from "@/lib/blog"
import { PostCard } from "@/components/blog/post-card"
import { Pagination } from "@/components/blog/pagination"
import { BlogFilters } from "@/components/blog/blog-filters"
import { SearchBar } from "@/components/blog/search-bar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const POSTS_PER_PAGE = 6

interface BlogPageProps {
    searchParams: {
        page?: string
        category?: string
        tag?: string
    }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const currentPage = parseInt(searchParams.page || "1")
    const { category, tag } = searchParams

    const [postsData, allPostsMeta, categories, tags, featuredPosts] = await Promise.all([
        getPaginatedPosts(currentPage, POSTS_PER_PAGE, category, tag),
        getAllPosts(),
        getAllCategories(),
        getAllTags(),
        getFeaturedPosts()
    ])

    const { posts, totalPages } = postsData

    const isFirstPage = currentPage === 1
    const noFilters = !category && !tag
    const showFeatured = isFirstPage && noFilters && featuredPosts.length > 0

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Blog</h1>
                    <p className="text-muted-foreground">
                        Thoughts, tutorials and insights on software engineering and DevOps.
                    </p>
                </div>
                <SearchBar posts={allPostsMeta} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                <aside className="lg:col-span-1 space-y-10 order-2 lg:order-1">
                    <BlogFilters categories={categories} tags={tags} />
                </aside>

                <div className="lg:col-span-3 order-1 lg:order-2">
                    {showFeatured && (
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                Featured
                                <Badge variant="default" className="bg-primary text-primary-foreground font-normal">New</Badge>
                            </h2>
                            <div className="grid grid-cols-1 gap-8">
                                {featuredPosts.slice(0, 1).map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center overflow-hidden rounded-2xl border bg-card hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative aspect-video md:aspect-square w-full">
                                            {post.coverImage && (
                                                <Image
                                                    src={post.coverImage}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            )}
                                        </div>
                                        <div className="p-6 md:p-8">
                                            <Badge variant="secondary" className="mb-4">
                                                {post.category}
                                            </Badge>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center text-sm font-medium text-primary">
                                                Read post →
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    <section>
                        <h2 className="text-2xl font-bold mb-6">
                            {category ? `Category: ${category}` : tag ? `Tag: #${tag}` : "Latest Posts"}
                        </h2>

                        {posts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {posts.map((post) => (
                                    <PostCard key={post.slug} post={post} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center border rounded-xl bg-muted/30">
                                <p className="text-muted-foreground">No posts found matching your criteria.</p>
                                <Link href="/blog" className="text-primary hover:underline mt-4 inline-block font-medium">
                                    View all posts
                                </Link>
                            </div>
                        )}

                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            category={category}
                            tag={tag}
                        />
                    </section>
                </div>
            </div>
        </div>
    )
}
