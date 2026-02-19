import { Skeleton } from "@/components/ui/skeleton"
import { PostCardSkeleton } from "@/components/blog/post-card"

export default function BlogLoading() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header Skeleton */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="space-y-2">
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-5 w-96" />
                </div>
                <Skeleton className="h-10 w-full md:w-64" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* Sidebar Skeleton */}
                <aside className="lg:col-span-1 space-y-10 order-2 lg:order-1">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <Skeleton className="h-6 w-32" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Skeleton className="h-6 w-32" />
                            <div className="flex flex-wrap gap-2">
                                <Skeleton className="h-6 w-16" />
                                <Skeleton className="h-6 w-20" />
                                <Skeleton className="h-6 w-14" />
                                <Skeleton className="h-6 w-18" />
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="lg:col-span-3 order-1 lg:order-2">
                    {/* Featured Skeleton (maybe just one large skeleton) */}
                    <div className="mb-16">
                        <Skeleton className="h-8 w-32 mb-6" />
                        <div className="rounded-2xl border aspect-[2/1] w-full">
                            <Skeleton className="h-full w-full rounded-2xl" />
                        </div>
                    </div>

                    {/* Posts Grid Skeleton */}
                    <div>
                        <Skeleton className="h-8 w-40 mb-6" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <PostCardSkeleton key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
