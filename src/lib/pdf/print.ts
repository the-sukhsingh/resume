/**
 * Font and print utilities for resume printing with proper font loading
 */
import React from 'react';

// Define font families used in different themes
const THEME_FONTS = {
  classic: ['Inter', 'system-ui', 'sans-serif'],
  designer: ['Cormorant', 'League Spartan', 'Montserrat'],
  vercel: ['Geist', 'Geist Mono', 'system-ui']
} as const;

// Font face declarations for local fonts
const FONT_FACES = [
  // Cormorant
  {
    family: 'Cormorant',
    style: 'normal',
    weight: '300',
    url: '/fonts/Cormorant/Cormorant-Light.ttf'
  },
  {
    family: 'Cormorant',
    style: 'normal', 
    weight: '400',
    url: '/fonts/Cormorant/Cormorant-Regular.ttf'
  },
  {
    family: 'Cormorant',
    style: 'normal',
    weight: '500',
    url: '/fonts/Cormorant/Cormorant-Medium.ttf'
  },
  {
    family: 'Cormorant',
    style: 'normal',
    weight: '600',
    url: '/fonts/Cormorant/Cormorant-SemiBold.ttf'
  },
  {
    family: 'Cormorant',
    style: 'normal',
    weight: '700',
    url: '/fonts/Cormorant/Cormorant-Bold.ttf'
  },
  // Geist
  {
    family: 'Geist',
    style: 'normal',
    weight: '300',
    url: '/fonts/geist/Geist-Light.ttf'
  },
  {
    family: 'Geist',
    style: 'normal',
    weight: '400',
    url: '/fonts/geist/Geist-Regular.ttf'
  },
  {
    family: 'Geist',
    style: 'normal',
    weight: '500',
    url: '/fonts/geist/Geist-Medium.ttf'
  },
  {
    family: 'Geist',
    style: 'normal',
    weight: '600',
    url: '/fonts/geist/Geist-SemiBold.ttf'
  },
  {
    family: 'Geist',
    style: 'normal',
    weight: '700',
    url: '/fonts/geist/Geist-Bold.ttf'
  },
  // Geist Mono
  {
    family: 'Geist Mono',
    style: 'normal',
    weight: '400',
    url: '/fonts/geistmono/GeistMono-Regular.ttf'
  },
  {
    family: 'Geist Mono',
    style: 'normal',
    weight: '500',
    url: '/fonts/geistmono/GeistMono-Medium.ttf'
  },
  // League Spartan
  {
    family: 'League Spartan',
    style: 'normal',
    weight: '400',
    url: '/fonts/LeagueSpartan/LeagueSpartan-Regular.ttf'
  },
  {
    family: 'League Spartan',
    style: 'normal',
    weight: '600',
    url: '/fonts/LeagueSpartan/LeagueSpartan-SemiBold.ttf'
  },
  {
    family: 'League Spartan',
    style: 'normal',
    weight: '700',
    url: '/fonts/LeagueSpartan/LeagueSpartan-Bold.ttf'
  },
  // Montserrat
  {
    family: 'Montserrat',
    style: 'normal',
    weight: '300',
    url: '/fonts/Montserrat/Montserrat-Light.ttf'
  },
  {
    family: 'Montserrat',
    style: 'normal',
    weight: '400',
    url: '/fonts/Montserrat/Montserrat-Regular.ttf'
  },
  {
    family: 'Montserrat',
    style: 'normal',
    weight: '500',
    url: '/fonts/Montserrat/Montserrat-Medium.ttf'
  },
  {
    family: 'Montserrat',
    style: 'normal',
    weight: '600',
    url: '/fonts/Montserrat/Montserrat-SemiBold.ttf'
  },
  {
    family: 'Montserrat',
    style: 'normal',
    weight: '700',
    url: '/fonts/Montserrat/Montserrat-Bold.ttf'
  }
];

/**
 * Creates font face CSS rules for embedding in print styles
 */
function createFontFaceCSS(): string {
  return FONT_FACES.map(font => `
    @font-face {
      font-family: '${font.family}';
      font-style: ${font.style};
      font-weight: ${font.weight};
      src: url('${font.url}') format('truetype');
      font-display: swap;
    }
  `).join('\n');
}

/**
 * Preloads fonts for a specific theme
 */
export async function preloadFontsForTheme(theme: 'classic' | 'designer' | 'vercel'): Promise<void> {
  const themeFonts = THEME_FONTS[theme];
  const relevantFontFaces = FONT_FACES.filter(font => 
    themeFonts.some(themeFont => font.family.includes(themeFont))
  );

  // Preload font files
  const preloadPromises = relevantFontFaces.map(font => {
    return new Promise<void>((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font.url;
      link.as = 'font';
      link.type = 'font/ttf';
      link.crossOrigin = 'anonymous';
      
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load font: ${font.url}`));
      
      document.head.appendChild(link);
    });
  });

  await Promise.all(preloadPromises);

  // Wait a bit more for fonts to be processed
  await new Promise(resolve => setTimeout(resolve, 100));
}

/**
 * Creates print-specific styles with embedded fonts
 */
export function createPrintStyles(theme: 'classic' | 'designer' | 'vercel'): string {
  const fontCSS = createFontFaceCSS();
  
  return `
    <style>
      ${fontCSS}
      
      @media print {
        * {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        @page {
          size: A4;
          margin: 0;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
      }
    </style>
  `;
}

/**
 * Enhanced print configuration with font support
 */
export interface PrintConfig {
  contentRef: React.RefObject<HTMLDivElement | null>;
  documentTitle?: string;
  theme: 'classic' | 'designer' | 'vercel';
  onBeforePrint?: () => Promise<void> | void;
  onAfterPrint?: () => void;
}

/**
 * Creates print configuration with font preloading
 */
export function createPrintConfig(config: PrintConfig) {
  return {
    contentRef: config.contentRef,
    documentTitle: config.documentTitle,
    onBeforePrint: async () => {
      // Preload fonts before printing
      await preloadFontsForTheme(config.theme);
      
      // Add print styles to the document
      const printStyles = createPrintStyles(config.theme);
      const styleElement = document.createElement('div');
      styleElement.innerHTML = printStyles;
      document.head.appendChild(styleElement.firstElementChild as HTMLStyleElement);
      
      // Call user's onBeforePrint if provided
      if (config.onBeforePrint) {
        await config.onBeforePrint();
      }
    },
    onAfterPrint: () => {
      // Clean up print styles
      const printStyleElements = document.head.querySelectorAll('style');
      printStyleElements.forEach(style => {
        if (style.textContent?.includes('@font-face')) {
          style.remove();
        }
      });
      
      // Call user's onAfterPrint if provided
      if (config.onAfterPrint) {
        config.onAfterPrint();
      }
    }
  };
}