'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ResumeData } from '@/types/resume';
import { ClassicPreview } from '@/components/preview/Classic';
import DesignerPreview from '@/components/preview/Designer';
import VercelPreview from '@/components/preview/Vercel';

function PdfContent() {
  const searchParams = useSearchParams();
  const theme = (searchParams.get('theme') || 'designer') as 'classic' | 'designer' | 'vercel';
  
  const [data, setData] = useState<ResumeData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('resume-data'); 
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (err) {
        console.error('Failed to parse resume data', err);
      }
    }
  }, []);

  if (!data) {
    return <div className="p-8" id="pdf-resume-loading">Loading or no data available in local storage...</div>;
  }

  const renderTheme = () => {
    switch (theme) {
      case 'classic': return <ClassicPreview data={data} />;
      case 'vercel': return <VercelPreview data={data} />;
      case 'designer':
      default:
        return <DesignerPreview data={data} />;
    }
  };

  return (
    <div id="pdf-resume-ready" className="bg-white text-black min-h-screen">
      {renderTheme()}
    </div>
  );
}

export default function PdfPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading PDF preview...</div>}>
      <PdfContent />
    </Suspense>
  );
}
