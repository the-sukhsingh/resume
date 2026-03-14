import { ClassicPdf, DesignerPdf, VercelPdf } from "@/components/pdf/variants";
import { ResumeData } from "@/types/resume";
import { pdf } from "@react-pdf/renderer";

interface CreatePdfBlobProps {
  template: "vercel" | "classic" | "designer";
  resumeData: ResumeData;
  type?: "pdf" | "image";
}

export const createPdfBlob = async ({ resumeData, template, type }: CreatePdfBlobProps) => {
  const Template = getPdfTemplate(template);

  const pdfDocument = <Template data={resumeData} />;
  const blob = await pdf(pdfDocument).toBlob();

  return blob;
};

const getPdfTemplate = (template: CreatePdfBlobProps["template"]) => {
  // if there is no template, fallback to default
  if (!template) {
    return DesignerPdf;
  }

  // else return the specified template
  switch (template) {
    case "vercel":
      return VercelPdf;
    case "classic":
      return ClassicPdf;
    default:
      return DesignerPdf;
  }
};
