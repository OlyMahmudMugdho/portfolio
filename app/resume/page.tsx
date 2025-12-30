"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ArrowLeft, Share2 } from "lucide-react"
import Link from 'next/link'
import dynamic from 'next/dynamic'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Dynamic import with SSR disabled to prevent ReferenceError: DOMMatrix is not defined
const PDFViewer = dynamic(() => import('@/components/pdf-viewer'), {
    ssr: false,
    loading: () => (
        <div className="w-full max-w-[950px] bg-muted/20 rounded-3xl p-4 md:p-8 backdrop-blur-sm border border-border/40 shadow-inner min-h-[600px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                <p className="text-muted-foreground animate-pulse">Initializing Viewer...</p>
            </div>
        </div>
    )
})

export default function NewsletterPage() {
    const [numPages, setNumPages] = useState<number | null>(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [scale, setScale] = useState(1.0)
    const [containerWidth, setContainerWidth] = useState<number | null>(null)
    const [isMounted, setIsMounted] = useState(false)

    const pdfUrl = 'https://res.cloudinary.com/dnmubeloc/image/upload/v1766910201/resume/RESUME_M_OLY_MAHMUD.pdf'

    useEffect(() => {
        setIsMounted(true)
        const updateWidth = () => {
            const container = document.getElementById('pdf-container')
            if (container) {
                setContainerWidth(container.offsetWidth)
            }
        }

        updateWidth()
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
    }

    const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.0))
    const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5))

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Software Systems Engineering Newsletter',
                    url: window.location.href,
                })
            } catch (err) {
                console.error('Error sharing:', err)
            }
        }
    }

    if (!isMounted) return null

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 selection:bg-primary/20">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Top Navigation */}
                <div className="mb-8 flex items-center justify-between">
                    <Link href="/">
                        <Button variant="ghost" className="gap-2 group text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Button>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" onClick={handleShare} className="rounded-full">
                            <Share2 className="h-4 w-4" />
                        </Button>
                        <a href={pdfUrl} download="Software_Systems_Engineering_Newsletter.pdf">
                            <Button className="gap-2 rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                <Download className="h-4 w-4" />
                                Download PDF
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Resume
                    </h1>
                </div>

                {/* Floating Controls */}
                <div className="sticky top-24 z-30 mb-8 flex justify-center">
                    <div className="flex items-center gap-1 p-1.5 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-primary/5">
                        <div className="flex items-center gap-1 border-r border-border/50 pr-2 mr-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
                                disabled={pageNumber <= 1}
                                className="h-9 w-9 rounded-xl"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium w-24 text-center tabular-nums">
                                {pageNumber} <span className="text-muted-foreground mx-1">/</span> {numPages || '--'}
                            </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setPageNumber(p => Math.min(p + 1, numPages || 1))}
                                disabled={pageNumber >= (numPages || 1)}
                                className="h-9 w-9 rounded-xl"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" onClick={zoomOut} className="h-9 w-9 rounded-xl">
                                <ZoomOut className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium w-16 text-center tabular-nums">
                                {Math.round(scale * 100)}%
                            </span>
                            <Button variant="ghost" size="icon" onClick={zoomIn} className="h-9 w-9 rounded-xl">
                                <ZoomIn className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* PDF Display Container */}
                <div id="pdf-container" className="flex justify-center flex-col items-center">
                    <div className="w-full max-w-[950px] bg-muted/20 rounded-3xl p-4 md:p-8 backdrop-blur-sm border border-border/40 shadow-inner">
                        <PDFViewer
                            pdfUrl={pdfUrl}
                            pageNumber={pageNumber}
                            scale={scale}
                            containerWidth={containerWidth}
                            onDocumentLoadSuccess={onDocumentLoadSuccess}
                        />
                    </div>

                    {/* Quick Page Jump */}
                    {numPages && numPages > 1 && (
                        <div className="mt-10 flex flex-wrap justify-center gap-3">
                            {Array.from(new Array(numPages), (el, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setPageNumber(index + 1)
                                        window.scrollTo({ top: 200, behavior: 'smooth' })
                                    }}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${pageNumber === index + 1
                                        ? 'w-8 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]'
                                        : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                        }`}
                                    aria-label={`Go to page ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
