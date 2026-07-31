import { getAllPosts, getAllCategories, getAllTags, getFeaturedPosts } from "@/lib/blog"
import { SearchBar } from "@/components/blog/search-bar"
import { BlogListClient } from "@/components/blog/blog-list-client"

export default async function BlogPage() {
    const [allPostsMeta, categories, tags, featuredPosts] = await Promise.all([
        getAllPosts(),
        getAllCategories(),
        getAllTags(),
        getFeaturedPosts()
    ])

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

            <BlogListClient
                allPostsMeta={allPostsMeta}
                categories={categories}
                tags={tags}
                featuredPosts={featuredPosts}
            />
        </div>
    )
}
