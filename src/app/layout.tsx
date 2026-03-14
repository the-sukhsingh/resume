import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Libre_Baskerville, Cormorant_Garamond, League_Spartan, Montserrat, Inter, Geist, Geist_Mono,  } from "next/font/google";
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
  subsets:["latin"],
    weight: ["300", "400", "500", "600", "700"],
})


export const metadata: Metadata = {
  title: "Resume Editor - Create Your Professional Resume",
  description: "A sleek, professional resume editor with live preview",
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
