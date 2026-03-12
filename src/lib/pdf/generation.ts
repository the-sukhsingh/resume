import * as htmlToImage from 'html-to-image';
import * as htmlToPdf from "html2pdf.js"


export const generateFile = async (element: HTMLElement): Promise<string> => {
    try {
        const dataUrl = await htmlToImage.toPng(element, { cacheBust: true,quality: 1, pixelRatio: 2 });
        return dataUrl;
    }
    catch (error) {
        console.error('Error generating image:', error);
        throw error;
    }
}


export const downloadPDF = async (element: HTMLElement): Promise<string> => {
    const resumeHtml = element.innerHTML;

    const response = await fetch('/api/pdf', {
        method: 'POST',
        body: JSON.stringify({ html: resumeHtml }),
    });
    if (!response.ok) {
        throw new Error('Failed to generate PDF');
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return url;
};