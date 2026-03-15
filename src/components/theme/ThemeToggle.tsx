"use client"

import { useTheme } from "next-themes"
import { motion, SVGMotionProps } from "motion/react"


export function ModeToggle() {
    const { theme, systemTheme, setTheme } = useTheme();
    const toggleTheme = () => {
        if (theme === 'system') {
            if (systemTheme === 'dark') {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        } else {
            if (theme === 'dark') {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        }
    }
    const handleThemeToggle = () => {
        if (!document?.startViewTransition) {
            toggleTheme();
            return;
        }

        document.startViewTransition(() => {
            toggleTheme();
        });
    };


    return (
        <motion.button
            aria-label="Toggle theme"
            aria-description="Toggle light & dark"
            onClick={handleThemeToggle}
            whileHover="hover"
            className="rounded-sm border size-8 flex justify-center items-center aspect-square h-fit relative overflow-hidden"
            type="button"
        >
            {
                theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? (
                    <Moon className="absolute top-0 left-0 translate-y-1.5 translate-x-1.5 size-5 scale-0 transition-all dark:scale-100" />
                ) : (
                    <Sun />
                )
            }
        </motion.button>
    )
}

const Sun = (props: SVGMotionProps<SVGSVGElement>) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="12" r="4" />
        <motion.path initial={{ opacity: 1, transition: { duration: 0.05 } }} variants={{ hover: { opacity: [0, 1], transition: { duration: 0.08, ease: "easeInOut", delay: 0 } } }} d="M12 3v1" />
        <motion.path initial={{ opacity: 1, transition: { duration: 0.05 } }} variants={{ hover: { opacity: [0, 1], transition: { duration: 0.08, ease: "easeInOut", delay: 0.05 } } }} d="m18.364 5.636-.707.707" />
        <motion.path initial={{ opacity: 1, transition: { duration: 0.05 } }} variants={{ hover: { opacity: [0, 1], transition: { duration: 0.08, ease: "easeInOut", delay: 0.1 } } }} d="M20 12h1" />
        <motion.path initial={{ opacity: 1, transition: { duration: 0.05 } }} variants={{ hover: { opacity: [0, 1], transition: { duration: 0.08, ease: "easeInOut", delay: 0.15 } } }} d="m17.657 17.657.707.707" />
        <motion.path initial={{ opacity: 1, transition: { duration: 0.05 } }} variants={{ hover: { opacity: [0, 1], transition: { duration: 0.08, ease: "easeInOut", delay: 0.2 } } }} d="M12 20v1" />
        <motion.path initial={{ opacity: 1, transition: { duration: 0.05 } }} variants={{ hover: { opacity: [0, 1], transition: { duration: 0.08, ease: "easeInOut", delay: 0.25 } } }} d="m6.343 17.657-.707.707" />
        <motion.path initial={{ opacity: 1, transition: { duration: 0.05 } }} variants={{ hover: { opacity: [0, 1], transition: { duration: 0.08, ease: "easeInOut", delay: 0.3 } } }} d="M3 12h1" />
        <motion.path initial={{ opacity: 1, transition: { duration: 0.05 } }} variants={{ hover: { opacity: [0, 1], transition: { duration: 0.08, ease: "easeInOut", delay: 0.35 } } }} d="m5.636 5.636.707.707" />
    </motion.svg>

)

const Moon = (props: SVGMotionProps<SVGSVGElement>) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <motion.path
            variants={{
                hover: {
                    rotate: [0, 10, -10, 0],
                    transition: {
                        duration: 0.6,
                        ease: "easeInOut",
                    },
                }
            }}
            d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        />
    </motion.svg>

)