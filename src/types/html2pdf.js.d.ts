declare module 'html2pdf.js' {
    export interface Html2PdfOptions {
        margin?: number | number[];
        filename?: string;
        image?: {
            type?: 'jpeg' | 'png' | 'webp';
            quality?: number;
        };
        html2canvas?: {
            scale?: number;
            [key: string]: unknown;
        };
        jsPDF?: {
            unit?: string;
            format?: string | number[];
            orientation?: 'portrait' | 'landscape';
            [key: string]: unknown;
        };
        [key: string]: unknown;
    }

    export interface Html2PdfWorker {
        from(source: HTMLElement | string): Html2PdfWorker;
        set(options: Html2PdfOptions): Html2PdfWorker;
        outputPdf(
            type?: 'blob' | 'arraybuffer' | 'datauristring' | 'dataurlstring'
        ): Promise<Blob | ArrayBuffer | string>;
    }

    export default function html2pdf(): Html2PdfWorker;
}