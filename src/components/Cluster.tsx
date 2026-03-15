"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, HTMLMotionProps } from "motion/react";
import { X } from 'lucide-react';

const Cluster = () => {
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
        <>
            <div className='flex items-center justify-center min-h-100 bg-transparent overflow-visible w-full '>
                <div className='perspective-distant '>
                    <motion.div
                        initial={{ rotateX: 35, rotateZ: 20, rotateY: -5 }}
                        style={{ transformStyle: "preserve-3d" }}
                        className='relative w-[80vw] max-w-80 h-90 rounded-3xl perspective-distant'
                    >

                        {/* Center Solid Cards */}
                        <div className='absolute inset-0 flex items-center justify-center gap-8 z-50'>
                            <SolidCard onClick={() => setFullScreenImage("/images/1.png")}>
                                <Image src={"/images/1.png"} alt='1' fill className='object-cover' />
                            </SolidCard>
                            <SolidCard onClick={() => setFullScreenImage("/images/2.png")}>
                                <Image src={"/images/2.png"} alt='2' fill className='object-cover' />
                            </SolidCard>
                        </div>

                        {/* Top Row Cards */}
                        <DashedCard className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 mask-t-from-5%' />
                        <DashedCard className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 mask-t-from-5%' />
                        <DashedCard className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 mask-t-from-5%' />

                        {/* Middle Row (Outer) Cards */}
                        <DashedCard className='absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 mask-l-from-5%' />
                        <DashedCard className='absolute top-1/2 right-0 translate-x-full -translate-y-1/2 mask-r-from-5%' />

                        {/* Bottom Row Cards */}
                        <DashedCard className='absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 mask-b-from-5%' />
                        <DashedCard className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 mask-b-from-5%' />
                        <DashedCard className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 mask-b-from-5%' />

                    </motion.div>
                </div>

                {/* Full Screen Image Modal */}
                <AnimatePresence mode='wait'>
                    {fullScreenImage ? (
                        <motion.div
                            key="wrapper"
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8">
                            <div
                                key="overlay"
                                className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm"
                                onClick={() => setFullScreenImage(null)}
                            />
                            <button
                                key="close-btn"
                                onClick={() => setFullScreenImage(null)}
                                className="absolute right-6 top-6 z-110 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105"
                                aria-label="Close fullscreen"
                            >
                                <X size={24} />
                            </button>
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
                                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                                className="relative z-105 h-[90vh] aspect-[1/1.414] max-w-full overflow-hidden rounded-xl bg-white shadow-2xl dark:border-neutral-700 dark:bg-neutral-900"
                            >
                                <Image
                                    src={fullScreenImage}
                                    alt="Fullscreen Resume Template"
                                    fill
                                    sizes="90vw"
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </>
    )
}

const DashedCard = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <div className={`z-0 w-30 h-40 bg-white dark:bg-[#111111] border-2 border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl flex items-center justify-center opacity-75 ${className}`}>
            {children}
        </div>
    )
}

const SolidCard = ({ children, ...props }: HTMLMotionProps<"div">) => {
    return (
        <AnimatePresence mode='popLayout'>
            <motion.div
                whileHover={{ translateZ: -10, translateX: -5, translateY: -5 }}
                whileTap={{ scale: 0.98 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
                className='w-28 h-40 aspect-9/16 bg-neutral-100 dark:bg-[#161616] border border-neutral-300 dark:border-neutral-800 rounded-lg relative overflow-hidden cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-0' 
                {...props}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Cluster