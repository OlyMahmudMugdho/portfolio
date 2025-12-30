"use client"

import { Document, Page, pdfjs } from 'react-pdf'
import { Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Set up the worker accurately
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
    pdfUrl: string
    pageNumber: number
    scale: number
    containerWidth: number | null
    onDocumentLoadSuccess: ({ numPages }: { numPages: number }) => void
}

export default function PDFViewer({
    pdfUrl,
    pageNumber,
    scale,
    containerWidth,
    onDocumentLoadSuccess
}: PDFViewerProps) {
    return (
        <div className="shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden relative bg-white min-h-[600px] flex items-center justify-center">
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                    <div className="flex flex-col items-center gap-6 py-32">
                        <div className="relative">
                            <div className="h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                            <Loader2 className="h-8 w-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-semibold animate-pulse">Fetching Newsletter...</p>
                            <p className="text-sm text-muted-foreground mt-1">Almost there</p>
                        </div>
                    </div>
                }
                error={
                    <div className="py-32 px-6 text-center max-w-sm">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                            <X className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Unable to load PDF</h3>
                        <p className="text-muted-foreground mb-6">
                            The document couldn&apos;t be displayed directly in the browser.
                            Try downloading it instead.
                        </p>
                        <a href={pdfUrl} download>
                            <Button variant="outline" className="w-full">
                                Download Instead
                            </Button>
                        </a>
                    </div>
                }
            >
                <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    width={containerWidth ? Math.min(containerWidth - (typeof window !== 'undefined' && window.innerWidth < 768 ? 32 : 64), 850) : undefined}
                    renderAnnotationLayer={true}
                    renderTextLayer={true}
                    className="max-w-full h-auto"
                />
            </Document>
        </div>
    )
}
