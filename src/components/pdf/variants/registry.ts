import DesignerPdf from './designer';
import VercelPdf from './vercel';

export const variantRegistry = {
  designer: {
    name: 'Designer',
    component: DesignerPdf,
  },
  vercel: {
    name: 'Vercel',
    component: VercelPdf,
  },
} as const;

export type ResumeTemplate = keyof typeof variantRegistry;
