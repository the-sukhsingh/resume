'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import { ClassicPreview } from '../preview/Classic';
import DesignerPreview from '../preview/Designer';


interface ResumePreviewProps {
  theme?: "classic" | "designer",
  data: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data, theme = "designer" }) => {

  const getPreviewComponent = () => {
    switch (theme) {
      case "classic":
        return <ClassicPreview data={data} />;
      case "designer":
        return <DesignerPreview data={data} />;
      default:
        return <ClassicPreview data={data} />;
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
};
