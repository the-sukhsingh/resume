"use client"
import { ResumeData } from '@/types/resume';
import { Image } from 'lucide-react';
import React, { useRef, useState } from 'react'

interface DesignerProps {
    data: ResumeData;
}

const DesignerPreview = React.forwardRef<HTMLDivElement, DesignerProps>(({ data }, ref) => {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {
        personalInfo,
        summary,
        social,
        experience,
        projects,
        achievements,
        skills,
        certificates,
        education,
        languages,
    } = data;

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const url = new URL(social.website || "https://www.google.com")

    return (
        <div className="h-full overflow-y-auto nobar flex justify-center overscroll-none bg-background p-8 select-none text-black">
            <div id="resume-preview" ref={ref} className="w-[8.27in] h-[11.69in] bg-[#e8e4d8d6] shadow-[0_2px_8px_rgba(0,0,0,0.08)] px-12 py-6 origin-top overflow-hidden flex flex-col">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-8xl text-center font-cormorant font-bold mb-1 tracking-tight leading-none">
                        {personalInfo.fullName || "Morgan Maxwell"}
                    </h1>
                    <div className="flex justify-between items-center text-xs uppercase tracking-wider font-league-spartan font-semibold decoration-">
                        <span>{personalInfo.headline || "Headline Here"}</span>
                        <a href={String(url) || "/editor"} target='_blank'>{
                            url.hostname
                        }</a>
                    </div>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-3 gap-8 mb-8">
                    {/* Left Column - Summary */}
                    <div className="col-span-1">
                        <p className="text-xs leading-relaxed text-justify font-montserrat">
                            {summary || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat."}
                        </p>
                    </div>

                    {/* Center Column - Photo */}
                    <div className="col-span-1 flex justify-center">
                        <input 
                            ref={fileInputRef}
                            type='file'
                            hidden 
                            accept='image/*'
                            onChange={handleImageUpload}
                        />
                        <div 
                            className="w-48 h-48 bg-white shadow-md cursor-pointer hover:opacity-80 transition-opacity overflow-hidden flex items-center justify-center rounded-lg"
                            onClick={handleImageClick}
                        >
                            {profileImage ? (
                                <img 
                                    src={profileImage} 
                                    alt="Profile" 
                                    draggable={false}
                                    className="w-full h-full object-cover "
                                />
                            ) : (
                                <Image className='size-10' />
                            )}
                        </div>
                    </div>

                    {/* Right Column - Contact */}
                    <div className="col-span-1 text-xs space-y-2 font-montserrat">
                        <div>
                            <div className="font-league-spartan font-semibold mb-1">LINKEDIN</div>
                            <a href={social.linkedin ? social.linkedin : "/editor"}> {social?.linkedin?.split(".com/")[1] || "linkedin/..."} </a>
                        </div>
                        <div className="border-t border-black pt-2">
                            <div className="font-league-spartan font-semibold mb-1">EMAIL</div>
                            <a href={social.email ? `mailto:${social.email}` : "/editor"} className="">{social.email || "you@mail.com"}</a>
                        </div>
                        <div className="border-t border-black pt-2">
                            <div className="font-league-spartan font-semibold mb-1">PHONE</div>
                            <a href={personalInfo.phone ? `tel:${personalInfo.phone}` : "/editor"}>{personalInfo.phone || "+123-456-7890"}</a>
                        </div>

                        <div className="border-t border-black pt-2">
                            <div className="font-league-spartan font-semibold mb-1">ADDRESS</div>
                            <div>{personalInfo.location || "123 ANYWHERE ST., ANY CITY"}, {personalInfo.country || "Canada"} </div>
                        </div>
                    </div>
                </div>

                {/* Work Experience */}
                {experience.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-cormorant font-semibold mb-3 tracking-tighter">WORK EXPERIENCE</h2>
                        <div className="grid grid-cols-3 gap-6">
                            {experience.slice(0, 3).map((exp, idx) => (
                                <div key={exp.id} className="text-xs font-montserrat">
                                    <h3 className="font-league-spartan font-semibold uppercase text-sm mb-1">
                                        {exp.company} | {exp.position}
                                    </h3>
                                    <p className='mb-2'>{exp.startDate}-{exp.current ? 'Present' : exp.endDate}</p>
                                    <p className="text-justify leading-relaxed">
                                        {exp.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}


                {/* Projects */}
                {projects.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-cormorant font-semibold mb-3 tracking-tighter">PROJECTS</h2>
                        <div className="grid grid-cols-3 gap-6">
                            {projects.slice(0, experience.length > 0 ? 3 : 6).map((proj, idx) => (
                                <div key={proj.id} className="text-xs font-montserrat">
                                    <a href={proj.link ? proj.link : "/editor"} className="font-league-spartan font-semibold uppercase text-sm mb-1">
                                        {proj.name}
                                    </a>
                                    <p className="italic mb-1">{proj.technologies.join(" ")}</p>
                                    <p className="text-pretty leading-relaxed">
                                        {proj.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Bottom Grid - Languages, Skills, Education */}
                <div className="grid grid-cols-3 gap-8 mb-8">
                    {/* Languages */}
                    {
                        languages.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-cormorant font-semibold mb-2 tracking-tighter">LANGUAGES</h2>
                                <div className="space-y-2 text-sm font-montserrat">
                                    {languages.slice(0, 4).map((lang, idx) => (
                                        <div key={idx} className="flex justify-between items-center">
                                            <span>{lang}</span>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        )}

                    {/* Skills */}
                    {skills.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-cormorant font-semibold mb-1.5 tracking-tighter">SKILLS</h2>
                            <ul className="space-y-0 text-sm list-disc list-inside font-montserrat">
                                {skills.slice(0, 5).map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))
                                }
                            </ul>
                        </div>
                    )}

                    {/* Education */}
                    {education.length > 0 && (

                        <div>
                            <h2 className="text-2xl font-cormorant font-semibold mb-3 tracking-tighter">EDUCATION</h2>
                            <div className="space-y-3 text-xs font-montserrat">
                                {education.slice(0, 2).map((edu) => (
                                    <div key={edu.id} className="flex justify-between">
                                        <div>
                                            <div className="font-league-spartan text-sm font-semibold uppercase">{edu.institution}</div>
                                            <div className="">({edu.degree} - {edu.field})</div>
                                        </div>
                                        <div className="font-league-spartan font-bold">{edu.startDate}-{edu.current ? 'Present' : edu.endDate}</div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    )}
                </div>

                {/* Achievements and Certificates */}
                <div className="grid grid-cols-3 gap-8">
                    {/* Achievements */}
                    {achievements.length > 0 && (
                        <div className='col-span-1'>
                            <h2 className="text-2xl font-cormorant font-semibold mb-4 tracking-tighter">ACHIEVEMENTS</h2>
                            <div className="text-xs space-y-2 font-montserrat">
                                {achievements.slice(0, 2).map((achievement) => (
                                    <div key={achievement.id}>
                                        <div className="font-league-spartan text-sm font-semibold uppercase">{achievement.title}</div>
                                        <div className="leading-relaxed">{achievement.description}</div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    )}


                    {/* Certificates */}
                    {certificates.length > 0 && (

                        <div className="col-span-2">
                            <h2 className="text-2xl font-cormorant font-semibold mb-4 tracking-tighter">CERTIFICATES</h2>
                            <div className="grid grid-cols-3 gap-6">
                                {certificates.slice(0, 3).map((cert) => (
                                    <div key={cert.id} className="text-xs font-montserrat">
                                        <h3 className="font-league-spartan text-sm font-semibold uppercase mb-1">{cert.name}</h3>
                                        <p className="italic mb-2">{cert.date}</p>
                                        <p className="leading-relaxed">
                                            {cert.issuer || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
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
});

export default DesignerPreview