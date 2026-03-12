'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import { ClassicPreview } from '../preview/Classic';
import DesignerPreview from '../preview/Designer';
import VercelPreview from '../preview/Vercel';



interface ResumePreviewProps {
  theme?: "classic" | "designer" | "vercel",
  data: ResumeData;
  ref?: React.RefObject<HTMLDivElement>;
}

export const ResumePreviewComp = React.forwardRef<HTMLDivElement, ResumePreviewProps>(({ data, theme = "designer" }, ref) => {

  const getPreviewComponent = () => {
    switch (theme) {
      case "classic":
        return <ClassicPreview data={data} />;
      case "designer":
        return <DesignerPreview data={data} ref={ref} />;
      case "vercel":
        return <VercelPreview data={data} ref={ref} />
      default:
        return <DesignerPreview data={data} ref={ref}  />;
    }
  };
  const PreviewComponent = getPreviewComponent();
  if (!data) {
    return <div className="h-full flex items-center justify-center">No resume data available</div>;
  }

  return (
    <div className="h-full overflow-y-auto nobar overscroll-none rounded-br-sm">
      {/* Show preview COmponent */}
      {PreviewComponent}
    </div>
  );
});

ResumePreviewComp.displayName = 'ResumePreviewComp';
