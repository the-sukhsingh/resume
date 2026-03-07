"use client"
import React from 'react';
import { pdf } from '@react-pdf/renderer';
import { ResumeData } from '@/types/resume';
import { DesignerPDF } from '@/components/pdf/DesignerPDF';
import { ClassicPDF } from '@/components/pdf/ClassicPDF';

export const generatePDF = async (
  data: ResumeData,
  theme: 'classic' | 'designer',
  filename: string = 'resume.pdf'
) => {
  console.log('Starting PDF generation...', { theme, filename });
  
  try {
    // Generate PDF blob based on theme
    console.log('Creating PDF document...');
    const blob = theme === 'classic' 
      ? await pdf(<ClassicPDF data={data} />).toBlob()
      : await pdf(<DesignerPDF data={data} />).toBlob();
    
    console.log('PDF blob created:', blob.size, 'bytes');
    
    // Create download link
    const url = URL.createObjectURL(blob);
    console.log('Object URL created:', url);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    
    console.log('Triggering download...');
    link.click();
    
    // Clean up after a short delay
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      console.log('Cleanup completed');
    }, 100);
    
    console.log('PDF generation completed successfully');
  } catch (error) {
    console.error('PDF generation error:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw error;
  }
};
