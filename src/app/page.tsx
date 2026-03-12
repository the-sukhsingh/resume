"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Layout, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = ({ key }: { key: string }) => {
      if (key === "Escape") {
        setFullScreenImage(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-black">
              <FileText size={18} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight">Resumely</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="#features" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-50">Features</Link>
            <Link href="#templates" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-50">Templates</Link>
            <Link href="#pricing" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-50">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/editor" className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
              Go to Editor
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-200/70  py-20 dark:border-zinc-800/80 md:py-24">
          <div className="container relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-center lg:gap-16 lg:px-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center rounded-full border border-zinc-300/70 bg-white/80 px-4 py-2 text-xs font-medium tracking-[0.22em] text-zinc-600 uppercase shadow-sm shadow-zinc-200/40 backdrop-blur-sm dark:border-zinc-700/80 dark:bg-zinc-950/70 dark:text-zinc-300 dark:shadow-black/20"
              >
                Minimal resume editor
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                className="mt-8 max-w-3xl font-serif text-5xl leading-[0.94] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-[5.15rem]"
              >
                Build your resume. Keep it clear.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg"
              >
                Edit, preview, and export in one clean flow.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
                className="mt-10 flex"
              >
                <Link href="/editor" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200">
                  Start editing
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="relative mx-auto w-full max-w-60"
            >
             

              {/* Interactive Folder Structure */}
              <motion.div
                initial="idle"
                whileHover="hover"
                className="group relative flex w-full cursor-pointer justify-center "
              >
                <div className="absolute inset-x-10 -bottom-6 h-16 rounded-sm bg-zinc-900/10 blur-2xl dark:bg-black/40"></div>
                <div className="absolute -top-4 left-8 h-6 w-24 rounded-t-sm bg-zinc-200 transition-colors group-hover:bg-zinc-300 dark:bg-zinc-800 dark:group-hover:bg-zinc-700"></div>
                <div className="absolute inset-0 rounded-2xl bg-zinc-200 transition-colors group-hover:bg-zinc-300 dark:bg-zinc-800 dark:group-hover:bg-zinc-700"></div>

                <div className="relative z-10 flex h-40 w-full justify-center p-2 gap-2 ">
                  <motion.div
                    layoutId="/images/1.png"
                    onClick={() => setFullScreenImage("/images/1.png")}
                    variants={{
                      idle: { scale: 1, rotate: -30, y: 0 },
                      hover: { scale: 1.03, rotate: -2, y: -48 },
                    }}
                    whileHover="hover"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.6 }}
                    className="relative h-full aspect-[1/1.414] overflow-hidden rounded-xs border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] dark:border-zinc-700"
                  >
                    <Image
                      src="/images/1.png"
                      alt="Resume Template 1"
                      fill
                      sizes="(max-width: 768px) 40vw, 220px"
                      className="pointer-events-none object-cover"
                    />
                  </motion.div>
                  <motion.div
                    layoutId="/images/2.png"
                    onClick={() => setFullScreenImage("/images/2.png")}
                    variants={{
                      idle: { scale: 1, rotate: 4, y: 12 },
                      hover: { scale: 1.03, rotate: 2, y: -36 },
                    }}
                    whileHover="hover"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.6 }}
                    className="relative h-full aspect-[1/1.414] overflow-hidden rounded-xs border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] dark:border-zinc-700"
                  >
                    <Image
                      src="/images/2.png"
                      alt="Resume Template 2"
                      fill
                      sizes="(max-width: 768px) 40vw, 220px"
                      className="pointer-events-none object-cover"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={{
                    idle: { y: 0 },
                    hover: { y: 8, height: "50%" },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute bottom-0 z-10 h-20 w-full rounded-2xl border border-white/30 bg-zinc-100/92 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/50"
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Bento Grid Section */}
        <section id="features" className="container mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">Simple tools for complex careers. Designed for modern professionals.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 auto-rows-[250px]">
            {/* Bento Box 1 - Span 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-8 pt-10 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 md:col-span-2">
              <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-all group-hover:bg-blue-500/20"></div>
              <Sparkles className="mb-4 h-8 w-8 text-zinc-900 dark:text-zinc-50" />
              <h3 className="mb-2 text-2xl font-bold">Smart Formatting</h3>
              <p className="max-w-md text-zinc-600 dark:text-zinc-400">Your content automatically adapts to our beautifully balanced templates without breaking layout.</p>

              <div className="absolute -bottom-10 -right-10 opacity-20 transition-transform duration-500 group-hover:scale-110">
                <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
            </div>

            {/* Bento Box 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-8 pt-10 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
              <Layout className="mb-4 h-8 w-8 text-zinc-900 dark:text-zinc-50" />
              <h3 className="mb-2 text-2xl font-bold">Live Preview</h3>
              <p className="text-zinc-600 dark:text-zinc-400">See your changes instantly typed.</p>

              <div className="absolute -bottom-8 -right-8 opacity-20 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
            </div>

            {/* Bento Box 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-8 pt-10 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
              <FileText className="mb-4 h-8 w-8 text-zinc-900 dark:text-zinc-50" />
              <h3 className="mb-2 text-2xl font-bold">ATS-Optimized</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Easily read by software algorithms.</p>

              <div className="absolute -bottom-8 -right-8 opacity-20 transition-transform duration-500 group-hover:scale-110">
                <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
            </div>

            {/* Bento Box 4 - Span 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-8 pt-10 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 md:col-span-2">
              <div className="absolute left-0 top-0 -ml-16 -mt-16 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl transition-all group-hover:bg-purple-500/20"></div>
              <h3 className="mb-2 text-2xl font-bold">Built for the Future</h3>
              <p className="max-w-md text-zinc-600 dark:text-zinc-400">Export formats that stand the test of time, built with cutting edge open-source technologies for blazing fast performance.</p>

              <div className="absolute -right-8 bottom-0 opacity-20 transition-transform duration-500 group-hover:translate-x-2">
                <svg width="250" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-black">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-zinc-900 dark:text-zinc-50" />
            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Resumely</span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Resumely. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {fullScreenImage && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
              onClick={() => setFullScreenImage(null)}
            />
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute right-6 top-6 z-110 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105"
              aria-label="Close fullscreen"
            >
              <X size={24} />
            </button>
            <motion.div
              layoutId={fullScreenImage}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              className="relative z-105 h-[90vh] aspect-[1/1.414] max-w-full overflow-hidden rounded-xl bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900"
            >
              <Image
                src={fullScreenImage}
                alt="Fullscreen Resume Template"
                fill
                sizes="90vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
