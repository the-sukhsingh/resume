import { ArrowRight, FileText, Layout, Sparkles, X } from "lucide-react";
import { ModeToggle } from "@/components/theme/ThemeToggle";
import Cluster from "@/components/Cluster";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Link from "next/link";
export default function Home() {


  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-neutral-900 dark:bg-black dark:text-neutral-50 max-w-5xl mx-auto border-x border-dashed border-neutral-300 dark:border-neutral-800  overflow-hidden nobar">
      <header className="border-b border-dashed border-neutral-300 dark:border-neutral-800 px-4 py-3 flex justify-between items-center rounded-t-lg backdrop-blur-lg">
        <Link href={"/"} className='flex items-start justify-center gap-2'>
          <span className='size-8 bg-linear-to-br from-cherry/80 to-cherry inline-flex justify-center items-center rounded-lg shadow-[0_0_2px_1px_inset_rgba(0,0,0,0.1)] dark:shadow-[0_0_2px_2px_inset_rgba(255,255,255,0.1)] p-1.5 relative after:content-[""] after:absolute after:inset-0 after:rounded-lg after:border-t after:border-neutral-400'>

            <FileText className="text-white" />
          </span>
          <h1 className="font-cormorant  text-3xl font-semibold">Resume Editor</h1>
        </Link>
        <div className="flex gap-0 items-center justify-end">
          <Link href="https://x.com/thesukhjitbajwa" target="_blank" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 256 256"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></svg>
          </Link>

          <ModeToggle />
        </div>


      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-visible border-b border-dashed border-neutral-300 dark:border-neutral-800 py-20 md:py-24">
          <div className="container relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-center lg:gap-16 lg:px-8">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center rounded-md border border-neutral-300/70 bg-white/80 px-3 py-1.5 text-xs font-medium tracking-[0.22em] text-neutral-600 uppercase shadow-sm shadow-neutral-200/40 backdrop-blur-sm dark:border-neutral-700/80 dark:bg-neutral-950/70 dark:text-neutral-300 dark:shadow-black/20 font-montserrat"
              >
                Minimal resume editor
              </div>
              <h1
                className="mt-8 max-w-3xl font-serif text-5xl leading-[0.94] tracking-tight text-neutral-500 dark:text-neutral-600 sm:text-6xl lg:text-[4rem]"
              >
                Build Resume That <span className="text-black dark:text-white font-bold">Stands </span>out
              </h1>
              <p
                className="mt-6 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg"
              >
                Edit, preview, and export in one clean flow.
              </p>
              <div
                className="mt-10 flex"
              >
                <Link href="/editor" className="inline-flex h-10 items-center justify-center gap-1 rounded-xl bg-neutral-950 px-4 pr-5 font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200">
                  Start editing
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <Cluster />
          </div>
        </section>

        <Features />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
