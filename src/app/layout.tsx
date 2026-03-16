import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Libre_Baskerville, Cormorant_Garamond, League_Spartan, Montserrat, Inter, Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { ModeToggle } from "@/components/theme/ThemeToggle";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Designer template fonts
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],

})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://resumely.tech'),
  title: {
    default: "Resumely - Create Resume that stands out",
    template: "%s | Resumely"
  },
  description: "Build a professional, ATS-friendly resume in minutes. Features live preview, customizable templates, and instant PDF download. Perfect for software engineers, marketers, and all job seekers.",
  keywords: [
    "resume builder", "free resume maker", "CV maker", "ATS friendly resume", "professional resume templates",
    "online resume creator", "resume editor", "resume generator", "job application", "career", "PDF resume",
    "live preview resume", "software engineer resume", "format resume", "stand out resume", "2026 resume templates",
    "programmatic SEO resume", "online CV builder", "create resume online", "best resume builder", "simple resume maker",
    "modern resume templates", "minimalist resume", "resume formatter", "resume builder for freshers",
    "entry level resume builder", "executive resume templates", "manager resume examples", "student resume maker",
    "internship resume", "tech resume", "IT resume templates", "developer resume builder", "front end developer resume",
    "full stack engineer resume", "data scientist resume", "product manager resume", "marketing resume planner",
    "sales resume templates", "teacher resume examples", "nurse CV templates", "healthcare resume",
    "finance resume builder", "accounting resume", "investment banking resume", "graphic design resume",
    "creative resume templates", "freelance resume", "remote job resume", "work from home resume",
    "ATS optimization", "beat the ATS", "resume keyword optimization", "resume passing score",
    "download pdf resume", "shareable resume link", "resume formatting tool", "one page resume",
    "two page resume templates", "chronological resume", "functional resume format", "hybrid resume format",
    "cv generator", "curriculum vitae maker", "free cv creator", "best cv templates", "academic cv builder",
    "europass cv alternative", "resume design tool", "resume layout creator", "resume structure",
    "how to make a resume", "resume builder app", "mobile friendly resume", "printable resume templates",
    "resume writing software", "automated resume builder", "smart resume creator", "AI resume builder",
    "AI cv maker", "resume optimizer", "resume suggestions", "resume action verbs", "resume bullet points",
    "skills section resume", "experience section resume", "education section resume", "resume summary generator",
    "resume objective statement", "cover letter builder", "job winning resume", "hireable resume",
    "interview ready resume", "career change resume", "military transition resume", "return to work resume",
    "gap in employment resume", "customizable resume", "editable resume template", "resume builder no watermark",
    "free download resume", "resume privacy", "secure resume builder", "react resume builder",
    "open source resume templates", "NextJS resume builder"
  ],
  authors: [{ name: "Sukhjit Singh" }],
  creator: "Sukhjit Singh",
  publisher: "Sukhjit Singh",
  openGraph: {
    title: 'Resumely - Create Resume that stands out',
    description: 'Build a professional, ATS-friendly resume in minutes. Features live preview, customizable templates, and instant PDF download.',
    url: '/',
    siteName: 'Resumely',
    images: [{ url: '/og-image.png', width: 1920, height: 1080 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@thesukhjitbajwa',
    title: 'Resumely - Create Resume that stands out',
    images: [`${process.env.NEXT_PUBLIC_APP_URL || 'https://resumely.tech'}/og-image.png`],
    description: 'Build a professional, ATS-friendly resume in minutes. Features live preview, customizable templates, and instant PDF download.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="nobar ">
      <body
        className={`${dmSans.variable} ${playfair.variable} ${libreBaskerville.variable} ${cormorantGaramond.variable} ${leagueSpartan.variable} ${montserrat.variable} ${inter.variable} ${geist.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
