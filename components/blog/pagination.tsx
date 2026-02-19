import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
    totalPages: number
    currentPage: number
    category?: string
    tag?: string
}

export function Pagination({ totalPages, currentPage, category, tag }: PaginationProps) {
    if (totalPages <= 1) return null

    const createQueryString = (page: number) => {
        const params = new URLSearchParams()
        if (page > 1) params.set("page", page.toString())
        if (category) params.set("category", category)
        if (tag) params.set("tag", tag)

        const qs = params.toString()
        return qs ? `?${qs}` : ""
    }

    return (
        <div className="flex items-center justify-center gap-2 mt-12">
            <Button
                variant="outline"
                size="icon"
                asChild
                disabled={currentPage <= 1}
            >
                <Link href={`/blog${createQueryString(currentPage - 1)}`} className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous Page</span>
                </Link>
            </Button>

            <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        asChild
                    >
                        <Link href={`/blog${createQueryString(page)}`}>
                            {page}
                        </Link>
                    </Button>
                ))}
            </div>

            <Button
                variant="outline"
                size="icon"
                asChild
                disabled={currentPage >= totalPages}
            >
                <Link href={`/blog${createQueryString(currentPage + 1)}`} className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}>
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next Page</span>
                </Link>
            </Button>
        </div>
    )
}
