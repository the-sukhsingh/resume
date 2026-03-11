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

