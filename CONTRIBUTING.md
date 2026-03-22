# Contributing to Resumely

First off, thank you for considering contributing to Resumely! 

Since the main idea behind our open-source release is allowing anyone to add their own **PDF Variants**, we've made the process incredibly simple. 

## How to Add a New PDF Variant

PDF variants are React components generated using [@react-pdf/renderer](https://react-pdf.org/). They receive `resumeData` via props and render a PDF document.

### 1. Create your component
Create a new file in `src/components/pdf/variants/` (e.g., `my-theme.tsx`).

```tsx
// src/components/pdf/variants/my-theme.tsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { ResumeData } from '@/types/resume';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10 }
});

const MyThemePdf = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{data.personalInfo.fullName}</Text>
      </View>
    </Page>
  </Document>
);

export default MyThemePdf;
```

### 2. Register your Variant
Open `src/components/pdf/variants/registry.ts` and add your new template to the `variantRegistry` object.

```tsx
import DesignerPdf from './designer';
import VercelPdf from './vercel';
import MyThemePdf from './my-theme'; // 1. Import your theme

export const variantRegistry = {
  designer: {
    name: 'Designer',
    component: DesignerPdf,
  },
  vercel: {
    name: 'Vercel',
    component: VercelPdf,
  },
  'my-theme': {                      // 2. Register it with an id
    name: 'My Custom Theme',         // 3. Display name in the dropdown
    component: MyThemePdf,
  }
} as const;

export type ResumeTemplate = keyof typeof variantRegistry;
```

### 3. Test your Variant
Start the development server:
```bash
npm run dev
```
Navigate to your editor, open the **Theme** dropdown, and select your new template to see a live preview of it!

---

## Contribution Guidelines

To ensure the repository remains easy to work with and variants maintain high quality, please stick to the following guidelines:

### Code Style
- We use standard ES6 syntax and standard Next.js 15 (React 19) conventions within functional, client-side, and server components.
- Your custom layout should be strictly typed using the existing `ResumeData` interface. Try to gracefully handle missing string properties (for example, if a user has no `github` link provided in their data).
- Keep component imports modular and try to avoid adding bloated third-party libraries just for one resume theme. Rely mainly on `@react-pdf/renderer` primitives.

### Pull Requests
1. **Fork the repository** and clone it locally.
2. **Create a branch** for your variant (e.g., `git checkout -b feat/my-new-variant`).
3. **Commit your changes**: Provide clear and concise commit messages.
4. **Push the branch** to GitHub and open a Pull Request against the `main` branch.
5. In your PR description, try to include a **Screenshot or a sample exported PDF** showcasing your variant.
6. The CI workflow will automatically check for linting and build errors, so please make sure your local `npm run build` succeeds first!

### Issues
If you encounter a bug in the main app, or a PDF template crashes when rendering, please check if the issue is already reported in the **Issues** tab. Use our designated issue templates to file bug reports or feature ideas.

That's it! Everything else—from the theme selector dropdown to the PDF generator backend logic—will automatically update to feature your new variant. We look forward to seeing your awesome designs!
