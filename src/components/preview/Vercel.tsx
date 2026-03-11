"use client"
import { cn } from '@/lib/utils'
import { ResumeData } from '@/types/resume'
import React from 'react'

interface VercelProps {
    data: ResumeData
}

const VercelPreview: React.FC<VercelProps> = ({ data }) => {
    const { personalInfo, summary, social, experience, projects, achievements, skills, languages, certificates, education } = data

    return (
        <div className="h-full overflow-y-auto nobar overscroll-none bg-background p-8 select-none font-geist dark:bg-background">
            <div id="resume-preview" className="mx-auto max-w-204 h-[11.6in] bg-[#040404] text-white shadow-2xl scale-90 origin-top border border-neutral-800 relative overflow-hidden">
                {/* Hero Header */}
                <div className="">
                    <div className="border-b border-neutral-800 px-5 pb-4 pt-6">
                        <h1 className="mb-2 text-5xl font-bold leading-none tracking-tight text-white">
                            {personalInfo.fullName || "Your Name"}
                        </h1>
                        {personalInfo.headline && (
                            <p className="text-sm font-geist-mono font-light uppercase tracking-[0.18em] text-neutral-500">
                                {personalInfo.headline}
                            </p>
                        )}
                    </div>
                    <div className='flex items-center justify-between gap-4 border-b border-neutral-800 px-5 py-3 text-sm'>
                        {/* Location & Contact */}
                        <div className="flex flex-wrap gap-x-5 gap-y-1 text-neutral-400">
                            {personalInfo.location && (
                                <span>{personalInfo.location}{personalInfo.country ? `, ${personalInfo.country}` : ''}</span>
                            )}
                            {personalInfo.phone && (
                                <span>{personalInfo.phone}</span>
                            )}
                        </div>
                        {/* Quick Links Bar */}
                        <div className="flex flex-wrap items-center">
                            {social.email && (
                                <a
                                    href={`mailto:${social.email}`}
                                    className="group relative border-x border-neutral-800 px-3 py-1.5 font-geist-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-white"
                                >
                                    <span className="absolute border-white -top-px -right-px opacity-0 size-3 border-t border-r group-hover:top-0 group-hover:right-0 group-hover:opacity-100 transition-all">
                                    </span>
                                    Mail
                                </a>
                            )}
                            {social.website && (
                                <a
                                    href={social.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative border-r border-neutral-800 px-3 py-1.5 font-geist-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-white"
                                >
                                    <span className="absolute border-white -top-px -right-px opacity-0 size-3 border-t border-r group-hover:top-0 group-hover:right-0 group-hover:opacity-100 transition-all">
                                    </span>
                                    Website
                                </a>
                            )}
                            {social.github && (
                                <a
                                    href={social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative border-r border-neutral-800 px-3 py-1.5 font-geist-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-white"
                                >
                                    <span className="absolute border-white -top-px -right-px opacity-0 size-3 border-t border-r group-hover:top-0 group-hover:right-0 group-hover:opacity-100 transition-all">
                                    </span>
                                    GitHub
                                </a>
                            )}
                            {social.linkedin && (
                                <a
                                    href={social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative border-r border-neutral-800 px-3 py-1.5 font-geist-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-white"
                                >
                                    <span className="absolute border-white -top-px -right-px opacity-0 size-3 border-t border-r group-hover:top-0 group-hover:right-0 group-hover:opacity-100 transition-all">
                                    </span>
                                    LinkedIn
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* About Section */}
                {summary && (
                    <div className="px-5 py-4 border-b border-neutral-800">
                        <Heading className="mb-3">
                            About
                        </Heading>
                        <p className="max-w-4xl text-base text-balance  text-neutral-300">
                            {summary}
                        </p>
                    </div>
                )}

                {/* Experience Section */}
                {experience.length > 0 && (
                    <>
                        <div className="pt-4">
                            <Heading className="mb-4 ml-5">
                                Experience
                            </Heading>
                            <div className="space-y-0 border-y border-neutral-800 bg-black/30">
                                {experience.slice(0, 3).map((exp) => (
                                    <div
                                        key={exp.id}
                                        className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-neutral-800 px-5 py-4 last:border-b-0"
                                    >
                                        <div className="space-y-2 text-xs font-geist-mono uppercase tracking-[0.16em] text-neutral-500">
                                            <div>
                                                <p>{exp.startDate}</p>
                                                <p>{exp.current ? 'Present' : exp.endDate}</p>
                                            </div>
                                            {exp.location && (
                                                <p className="text-xs tracking-[0.2em] text-neutral-500">
                                                    {exp.location}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="text-lg font-semibold leading-none text-white">
                                                        {exp.position}
                                                    </h3>
                                                    <p className="mt-1 text-sm text-neutral-400">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <span className="shrink-0 border border-neutral-800 px-2 py-1 text-[10px] font-geist-mono uppercase tracking-[0.18em] text-neutral-500">
                                                    {exp.current ? 'Current' : 'Previous'}
                                                </span>
                                            </div>
                                            <p className="max-w-3xl text-sm leading-6 text-neutral-300">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {/* Projects Section */}
                {projects.length > 0 && (
                    <>
                        <div className="border-b border-neutral-800">
                            <Heading className="my-4 ml-5">
                                Projects
                            </Heading>
                            <div className="grid grid-cols-3 border-t border-neutral-800 bg-black/20">
                                {projects.slice(0, 3).map((project) => (
                                    <div
                                        key={project.id}
                                        className="flex min-h-44 flex-col gap-3 border-r border-neutral-800 pl-5 pr-3 py-4"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="text-lg font-semibold leading-none text-white">
                                                {project.name}
                                            </h3>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0 px-2 py-1 font-geist-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-white"
                                                >
                                                    View
                                                </a>
                                            )}
                                        </div>
                                        <p className="min-h-16 text-sm leading-6 text-neutral-300">
                                            {project.description}
                                        </p>
                                        {project.technologies.length > 0 && (
                                            <div className="mt-auto flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 3).map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="border border-neutral-800 bg-black px-2.5 py-1 font-geist-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
                <div className='grid grid-cols-2 border-b border-neutral-800'>

                    {/* Skills Section */}
                    {skills.length > 0 && (
                        <>
                            <div className="border-r border-neutral-800  py-4">
                                <Heading className="mb-3 ml-5">
                                    Skills
                                </Heading>
                                <div className="flex flex-wrap gap-x-3 gap-y-1.5 ml-5">
                                    {skills.slice(0, 5).map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="font-geist-mono text-[12px] uppercase tracking-[0.16em]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Languages Section */}
                    {languages.length > 0 && (
                        <>
                            <div className="py-4">
                                <Heading className="mb-3 ml-5">
                                    Languages
                                </Heading>
                                <div className="flex flex-wrap gap-x-3 gap-y-1.5 ml-5">
                                    {languages.slice(0, 5).map((language, idx) => (
                                        <span key={idx} className="font-geist-mono text-[12px] uppercase tracking-[0.16em]">
                                            {language}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>


                <div className='grid grid-cols-3 border-b border-neutral-800'>
                    {/* Education Section */}
                    {education.length > 0 && (
                        <div className="col-span-1 border-r border-neutral-800 p-5">
                            <Heading className="mb-4">
                                Education
                            </Heading>
                            <div className="space-y-4">
                                {education.slice(0, 3).map((edu) => (
                                    <div key={edu.id} className="space-y-0.5">
                                        <div className="flex items-center justify-between gap-3">

                                            <h3 className="text-sm font-semibold text-white">
                                                {edu.institution}
                                            </h3>
                                            <span className="shrink-0 text-[10px] uppercase tracking-[0.16em] mt-0.5 text-neutral-500 font-geist-mono">
                                                {edu.startDate} — {edu.current ? 'Present' : edu.endDate}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between gap-3">

                                            <p className="text-xs leading-5 text-neutral-300">
                                                {edu.degree} in {edu.field}
                                            </p>
                                            <p className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-neutral-500 font-geist-mono">
                                                {edu.gpa && `GPA: ${edu.gpa}`}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Certificates Section */}
                    {certificates.length > 0 && (
                        <div className="col-span-1 border-r border-neutral-800 p-5">
                            <Heading className="mb-4">
                                Certificates
                            </Heading>
                            <div className="space-y-4">
                                {certificates.map((cert) => (
                                    <div key={cert.id} className="space-y-0.5">
                                        <div className="flex items-center justify-between gap-2">
                                            <h3 className="text-sm font-semibold text-white">
                                                {cert.name}
                                            </h3>
                                            <span className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-neutral-500 font-geist-mono">
                                                {cert.date}
                                            </span>
                                        </div>
                                        <p className="text-xs leading-5 text-neutral-300">
                                            {cert.issuer}
                                        </p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Achievements Section */}
                    {achievements.length > 0 && (
                        <div className="col-span-1 p-5">
                            <Heading className="mb-4">
                                Achievements
                            </Heading>
                            <div className="space-y-4">
                                {achievements.map((achievement) => (
                                    <div key={achievement.id} className="space-y-0.5">
                                        <h3 className="text-sm font-semibold text-white">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-xs leading-5 text-neutral-300">
                                            {achievement.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


                </div>

            </div>
        </div>
    )
}

const Heading = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-sm uppercase font-geist-mono text-neutral-500 tracking-wider mb-2", className)}>
        {children}
    </h2>
)


export default VercelPreview