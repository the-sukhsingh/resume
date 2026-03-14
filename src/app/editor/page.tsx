'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ResumeData } from '@/types/resume';
import { EditorForm } from '@/components/resume/EditorForm';
import { ResizablePanels } from '@/components/resume/ResizablePanels';
import dynamic from 'next/dynamic';
import Manager from '@/components/pdf/manager';
import { Save } from 'lucide-react';
import { createPdfBlob } from '@/lib/pdf/create-pdf-blob';
import { createBlobUrl } from '@/lib/pdf/create-blob-url';
import { createPdfToImage } from '@/lib/pdf/create-pdf-to-image';
import { downloadFile } from '@/lib/pdf/download-file';
import Navbar from '@/components/Navbar';

const ResumePreview = dynamic(() => import('@/components/pdf/resume-preview'), { ssr: false });
const STORAGE_KEY = 'resume-data';


const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    headline: '',
    country: '',
    phone: '',
    location: '',
  },
  social: {
    email: '',
    github: '',
    linkedin: '',
    instagram: '',
    medium: '',
    twitter: '',
    website: ''
  },
  summary: '',
  experience: [],
  projects: [],
  achievements: [],
  skills: [],
  certificates: [],
  education: [],
  languages: []
};

const EditorPage = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'idle'>('idle');
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'classic' | 'designer' | 'vercel'>('vercel');
  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setResumeData(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to parse saved resume data:', error);
      }
    }
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    if (saveStatus === 'idle') return;

    const timer = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
      setSaveStatus('saved');

      setTimeout(() => {
        setSaveStatus('idle');
      }, 2000);
    }, 500);

    return () => clearTimeout(timer);
  }, [resumeData, saveStatus]);

  const handleDataChange = (newData: ResumeData) => {
    setResumeData(newData);
    setSaveStatus('saving');
  };

  const handleDownloadPdf = async () => {
    const blob = await createPdfBlob({ resumeData: resumeData, template: currentTheme });
    const newUrl = createBlobUrl({ blob });
    const link = document.createElement('a');
    link.href = newUrl;
    link.download = `${resumeData.personalInfo.fullName || 'resume'}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleDownloadImage = async () => {
    setIsDownloading(true);
    try {
      const pdfBlob = await createPdfBlob({ resumeData: resumeData, template: currentTheme });
      const blob = await createPdfToImage({ pdfBlob, scale: 3 });
      const url = createBlobUrl({ blob });
      downloadFile({ url, fileName: `${resumeData.personalInfo.fullName || 'resume'}.png` });
      setIsDownloading(false);
    } catch (error) {
      console.error('Error downloading image:', error);
    } finally {
      setIsDownloading(false);
    }
  }


  return (
    <div className="h-screen flex flex-col bg-muted p-2 ">
      {/* Header */}
      <Navbar />


      <Manager isDownloading={isDownloading} theme={currentTheme} onThemeChange={setCurrentTheme} onDownloadImage={handleDownloadImage} onDownloadPdf={handleDownloadPdf} />

      {/* Split View */}
      <ResizablePanels
        leftPanel={<EditorForm data={resumeData} onChange={handleDataChange} />}
        rightPanel={<ResumePreview resumeData={resumeData} theme={currentTheme} />
        }
      />

    </div>
  );
};

export default EditorPage;
