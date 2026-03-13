"use client"
import { createBlobUrl, revokeBlobUrl } from "@/lib/pdf/create-blob-url";
import { createPdfBlob } from "@/lib/pdf/create-pdf-blob";
import React, { useEffect, useRef, useState } from "react";
import PDFError from "./helper/pdf-error";
import PDFLoading from "./helper/pdf-loading";
import { Document, Page, pdfjs } from "react-pdf";
import { ResumeData } from "@/types/resume";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF_VIEWER_PADDING = 18;

const PDFViewer = ({ url}: { url: string | null; }) => {
    const [error, setError] = useState<Error | null>(null);


    // Show empty state if the url is not loaded
    if (!url) {
        return null;
    }

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Document
                file={url}
                loading={null}
                onLoadError={(error) => {
                    console.error("[ERROR]: Error loading PDF:", error);
                    // Send the error to Sentry
                    setError(error);

                }}
                className="scroll-bar-hidden dark:bg-background flex h-full max-h-full w-full items-center justify-center overflow-y-scroll py-4.5 sm:items-start"
            >
                {!error && (
                    <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                )}
            </Document>
            {/* <iframe
                src={url}
                title="PDF Preview"
                className="h-full w-full rounded-sm border border-neutral-300"
                allowFullScreen
            /> */}
        </div>
    );
};

const ResumePreview = ({ data, theme }: { data: ResumeData, theme: "classic" | "designer" | "vercel" }) => {
    const [pdfError, setPdfError] = useState<string | null>(null);
    const [generatedPdfUrl, setGeneratedPdfUrl] = useState<string | null>(null);


    // Effect to generate PDF when data changes
    useEffect(() => {
        setPdfError(null);

        (async () => {
            try {
                const blob = await createPdfBlob({ resumeData: data, template: theme });
                const newUrl = createBlobUrl({ blob });

                setGeneratedPdfUrl(newUrl);
            } catch (err) {
                setPdfError(String(err instanceof Error ? err.message : "An unknown error occurred while generating the PDF."));
                if (generatedPdfUrl) {
                    revokeBlobUrl({ url: generatedPdfUrl });
                }
            }
        })();

        // Cleanup on component unmount or when data changes again (before new generation)
        return () => {
            if (generatedPdfUrl) {
                revokeBlobUrl({ url: generatedPdfUrl });
            }
        };
        // Dont Include generatedPdfUrl in the dependency array as it will cause infinite re-renders
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, theme]);

    // If there is an error loading the PDF, show an error message
    if (pdfError) {
        return (
            <div className="h-full w-full">
                <PDFError message={pdfError} />
            </div>
        );
    }

    return (
        <div  className="scroll-bar-hidden bg-sidebar h-full w-full overflow-y-auto">
            {!generatedPdfUrl ? (
                <div className="h-full w-full">
                    <PDFLoading />
                </div>
            ) : (
                <PDFViewer url={generatedPdfUrl}  />
            )}
        </div>
    );
};

export default ResumePreview;