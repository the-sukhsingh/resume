# Resumely 📝

Resumely is an open-source, beautifully designed resume builder built with Next.js and `@react-pdf/renderer`. It empowers users to create, preview, and export stunning resumes as high-quality PDFs.

The core philosophy of Resumely is extensibility. We built it so that anyone in the community can easily contribute their own custom **PDF Variants** (resume templates) with minimal effort.

## ✨ Features
- **Live PDF Preview:** Instantly see your resume update as you type.
- **Multiple Variants:** Choose from an ever-growing list of community-contributed templates.
- **Fully Type-Safe:** Built with TypeScript for a rock-solid developer experience.
- **Pluggable Architecture:** Adding a new template takes exactly two steps: creating a React component and adding it to the registry.

## 🚀 Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [@react-pdf/renderer](https://react-pdf.org/) for pure PDF Generation
- [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/) for the Editor UI

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
- Node.js (v20 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/the-sukhsingh/resume.git
   ```
2. Navigate into the project directory:
   ```bash
   cd resumely
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to start building!

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

We highly encourage developers to contribute new **PDF Variants** to the project! We have specifically abstracted the tedious generator logic so you can focus solely on designing beautiful layouts.

Please read our [Contributing Guidelines](CONTRIBUTING.md) to learn how to add your own custom resume templates to Resumely.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
