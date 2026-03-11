'use client';

import React, { useState, useEffect } from 'react';
import { ResumeData } from '@/types/resume';
import { EditorForm } from '@/components/resume/EditorForm';
import { ResizablePanels } from '@/components/resume/ResizablePanels';
import { Save, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResumePreviewComp } from '@/components/resume/ResumePreview';
import DesignerPreview from '@/components/preview/Designer';

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
  const [currentTheme, setCurrentTheme] = useState<'classic' | 'designer' | 'vercel'>('designer');

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


  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById('resume-preview');
      if (!element) throw new Error('Preview element not found');
      const { generateFile } = await import('@/lib/pdf/generation');
      const fileData = await generateFile(element);
      const link = document.createElement('a');
      link.href = fileData;
      link.download = `${resumeData.personalInfo.fullName || 'resume'}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    catch (error) {
      console.error('Error generating image:', error);
    }
    finally {
      setIsDownloading(false);
    }
  }


  return (
    <div className="h-screen flex flex-col bg-muted p-2 ">
      {/* Header */}
      <header className="bg-background border px-4 py-3 flex justify-between items-center rounded-t-sm">
        <div>
          <h1 className="font-sans text-lg font-semibold ">Resume Editor</h1>
        </div>
        <div className="flex items-center gap-3">
         
          {saveStatus !== 'idle' && (
            <div className="flex items-center gap-2 text-sm">
              <Save className="w-4 h-4" />
              <span className={saveStatus === 'saving' ? 'text-cherry' : 'text-teal-600'}>
                {saveStatus === 'saving' ? 'Saving...' : 'Saved'}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Actions */}
      <div className='bg-background flex items-center justify-between py-3 border-b border-x px-4'>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Theme:</span>
          <Button
            onClick={() => setCurrentTheme('designer')}
            variant={currentTheme === 'designer' ? 'default' : 'outline'}
            size="sm"
          >
            Designer
          </Button>
          <Button
            onClick={() => setCurrentTheme('classic')}
            variant={currentTheme === 'classic' ? 'default' : 'outline'}
            size="sm"
          >
            Classic
          </Button>
          <Button
            onClick={() => setCurrentTheme('vercel')}
            variant={currentTheme === 'vercel' ? 'default' : 'outline'}
            size="sm"
          >
            Vercel
          </Button>
        </div>
         <Button
            onClick={handleDownload}
            disabled={isDownloading}
            variant="default"
            size="sm"
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {isDownloading ? 'Generating...' : 'Download'}
          </Button>
      </div>

      {/* Split View */}
      <ResizablePanels
        leftPanel={<EditorForm data={resumeData} onChange={handleDataChange} />}
        rightPanel={<ResumePreviewComp data={resumeData} theme={currentTheme} />}
      />
    </div>
  );
};

export default EditorPage;
