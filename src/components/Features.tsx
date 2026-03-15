import { DownloadCloud, FileText, Layout, Type } from 'lucide-react'
import React from 'react'

const Features = () => {
    {/* Features Section - Glassmorphic Bento */ }
    return (
        <section id="features" className="container mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 border-b border-dashed border-neutral-300 dark:border-neutral-800" >
            <div className="mb-16">
                <h2 className="font-serif text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-7xl">
                    Brilliant design. <br className="hidden sm:block" />
                    <span className="text-neutral-400 dark:text-neutral-600">Built into every layer.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-6">

                {/* Feature 1 (Large Image/Mockup Block) */}
                <div className="group relative overflow-hidden rounded-xl  p-8 md:col-span-4 transition-all duration-500 ">
                    <div className="absolute inset-x-0 -bottom-px h-full w-full bg-linear-to-tr from-transparent via-transparent to-cyan-500/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    <div className="flex flex-col h-full justify-between relative z-10">
                        <div className="max-w-md">
                            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/50 dark:border-neutral-700/50 bg-white/50 dark:bg-black/50 px-3 py-1 shadow-sm backdrop-blur-md mb-6">
                                <Layout className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                                <span className="text-xs font-medium uppercase tracking-wider text-neutral-700 dark:text-neutral-300">Live Editor</span>
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">Edit in real-time, instantly.</h3>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                Experience a fluid workflow. See exactly how your resume translates to the page as you type.
                            </p>
                        </div>

                        <div className="mt-12 md:mt-0 md:absolute md:top-40 w-full md:w-[110%] h-40 overflow-hidden rounded-t-xl md:rounded-tl-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black -rotate-3 group-hover:rotate-0 transition-transform duration-300 ease-out mask-b-from-50%">
                            <div className="flex items-center gap-1.5 border-b border-neutral-100 dark:border-neutral-900 px-4 py-3 bg-neutral-50 dark:bg-neutral-950">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                                <div className="h-2.5 w-2.5 rounded-full bg-amber-400"></div>
                                <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex h-full p-4 gap-4">
                                <div className="w-1/3 bg-neutral-100 dark:bg-neutral-900 rounded-lg p-3 space-y-3 opacity-80">
                                    <div className="h-3 w-1/2 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
                                    <div className="space-y-1.5">
                                        <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                                        <div className="h-2 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                                        <div className="h-2 w-4/6 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="w-2/3 border border-neutral-100 dark:border-neutral-800 rounded-lg p-4 bg-white dark:bg-black shadow-sm flex flex-col items-center">
                                    <div className="h-4 w-3/4 border-b border-neutral-200 dark:border-neutral-800 mb-4 pb-2 text-center text-xs text-neutral-400 dark:text-neutral-600">
                                        SMW
                                    </div>
                                    <div className="w-full space-y-2">
                                        <div className="flex justify-between items-center"><div className="h-2 w-1/4 bg-blue-100 dark:bg-blue-900/50 rounded-full"></div><div className="h-2 w-16 bg-neutral-100 dark:bg-neutral-900 rounded-full"></div></div>
                                        <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-900 rounded-full"></div>
                                        <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-900 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2 (Small Callout Block) */}
                <div className="group relative overflow-hidden rounded-xl p-8 md:col-span-2">
                    <div className="absolute inset-x-0 -bottom-px h-full w-full bg-linear-to-b from-transparent via-transparent to-green-500/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>                    
                    <div className="h-full flex flex-col justify-between relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 px-3 py-1 mb-6 backdrop-blur-md">
                                <FileText className="h-4 w-4 text-emerald-400" />
                                <span className="text-xs font-medium uppercase tracking-wider">ATS Ready</span>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-3">Never get filtered out.</h3>
                            <p className="text-neutral-400 text-sm">
                                Clean HTML output guarantees parsing algorithms will extract every detail of your career flawlessly.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                            <span className="text-sm font-medium text-emerald-400">100% Parsing Score</span>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 3 (Pixel-Perfect Typography) */}
                <div className="group relative overflow-hidden rounded-xl p-6 pb-4 md:col-span-3 transition-all duration-500">
                    <div className="absolute inset-x-0 -bottom-px h-full w-full bg-linear-to-bl from-transparent via-transparent to-amber-500/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <div className="flex items-start gap-4 mb-6 relative z-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 border border-amber-200/50 dark:border-amber-800/50">
                            <Type className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Pixel-Perfect Typography</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Beautifully balanced font pairings.</p>
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 gap-4 h-40">
                        <div className="flex flex-col items-center justify-center rounded-xl bg-neutral-50/50 dark:bg-neutral-900/50 p-6 border border-neutral-100 dark:border-neutral-800 transition-colors group-hover:bg-white dark:group-hover:bg-neutral-900 group-hover:border-neutral-200 dark:group-hover:border-neutral-700 hover:border-amber-500/50">
                            <span className="font-serif text-5xl text-neutral-900 dark:text-white mb-2">Ag</span>
                            <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Serif</span>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-xl bg-neutral-50/50 dark:bg-neutral-900/50 p-6 border border-neutral-100 dark:border-neutral-800 transition-colors group-hover:bg-white dark:group-hover:bg-neutral-900 group-hover:border-neutral-200 dark:group-hover:border-neutral-700 hover:border-amber-500/50">
                            <span className="font-sans text-5xl text-neutral-900 dark:text-white mb-2 tracking-tight">Ag</span>
                            <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Sans</span>
                        </div>
                    </div>
                </div>

                {/* Feature 4 (Universal Export) */}
                <div className="group relative overflow-hidden rounded-xl p-6 pb-4 md:col-span-3">
                    <div className="absolute inset-x-0 -bottom-px h-full w-full bg-linear-to-tl from-transparent via-transparent to-blue-500/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    <div className="flex items-start gap-4 mb-6 relative z-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-500 border border-blue-200/50 dark:border-blue-800/50">
                            <DownloadCloud className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Universal Export</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Generate polished PDFs instantly.</p>
                        </div>
                    </div>

                    <div className="relative z-10 flex h-40 w-full items-center justify-center rounded-xl bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-900 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

                        <div className="relative flex items-center justify-center h-16 w-52 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-500 group-hover:-translate-y-1 z-10">
                            <div className="flex items-center gap-3 w-full px-4">
                                <div className="h-8 w-8 rounded bg-red-50 dark:bg-red-950 text-red-500 border border-red-100 dark:border-red-900/50 flex items-center justify-center font-bold text-[10px] tracking-wider">PDF</div>
                                <div className="flex flex-col gap-1.5 flex-1">
                                    <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                                        <div className="h-full w-0 bg-blue-500 rounded-full transition-all duration-1000 ease-out group-hover:w-full"></div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="h-1.5 w-12 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
                                        <div className="text-[8px] font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500">100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >

    )
}

export default Features