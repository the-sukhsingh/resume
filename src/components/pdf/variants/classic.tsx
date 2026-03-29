"use client"
import React from 'react';
import { ResumeData } from '@/types/resume';
import { Document, Page, Text as TextR, View as ViewR, Font, Link, Svg, Line } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { cn } from "@/lib/utils";
import { INTER_FONT } from '@/constants/pdf-fonts';



// Register fonts
Font.register({
    family: "Inter",
    fonts: INTER_FONT,
});


const tw = createTw({
    theme: {
        fontFamily: {
            default: ["Inter"],
            inter: ["Inter"]
        },
        extend: {
            fontSize: {
                "2xs": "0.625rem",
                "3xs": "0.5rem",
            },
        },
    },
});


const ClassicPdf: React.FC<{ data: ResumeData }> = ({ data }) => {
    if (!data) {
        return (
            <Document>
                <Page size="A4" style={tw(cn("font-default text-sm text-white bg-[#040404]"))}>
                    <ViewR style={tw(cn("flex-1 justify-center items-center"))}>
                        Loading...
                    </ViewR>
                </Page>
            </Document>
        )
    }

    const {
        personalInfo,
        achievements,
        certificates,
        education,
        experience,
        languages,
        projects,
        skills,
        social,
        summary
    } = data;

    const url = new URL(social.website || "https://www.google.com");

    const linkedinUrl = new URL(social.linkedin || "https://www.linkedin.com")
    const githubUrl = new URL(social.github || "https://www.github.com")


    return (
        <Document
            title={`Resume-${data.personalInfo.fullName}`}
            author={data.personalInfo.fullName || "Unknown"}
            creator={data.personalInfo.fullName || "Unknown"}
            producer="Resumely"
        >
            <Page size="A4" style={tw(cn("font-default text-sm text-black bg-white px-8 py-6"))}>
                {/* Header Section */}
                <View className=" text-center">
                    <Heading className="text-3xl font-bold tracking-tight uppercase mb-3">{personalInfo.fullName || "Your Name"}</Heading>
                    <ViewR style={tw("flex-row gap-3 flex-wrap items-center justify-center")}>
                        {personalInfo.phone && <Text className="text-2xs font-normal">{personalInfo.phone}</Text>}
                        {social.email && <LinkR src={`mailto:${social.email}`} className="text-2xs font-normal">{social.email}</LinkR>}
                        {social.linkedin && linkedinUrl.pathname.length > 2 && <LinkR src={social.linkedin} className="text-2xs font-normal">linkedin.com{linkedinUrl.pathname }</LinkR>}
                        {social.github && githubUrl.pathname.length > 2 && <LinkR src={social.github} className="text-2xs font-normal">github.com{githubUrl.pathname}</LinkR>}
                        {social.website && <LinkR src={social.website} className="text-2xs font-normal">{url.hostname}</LinkR>}
                    </ViewR>
                </View>


                {/* Summary Section */}
                {summary && (
                    <View className="mb-3 mt-4">
                        <SectionHeading>Summary</SectionHeading>
                        <Text className="text-xs font-normal leading-relaxed text-neutral-800">{summary}</Text>
                    </View>
                )}

                {/* Experience Section */}
                {experience.length > 0 && (
                    <View className="mb-4">
                        <SectionHeading>Work Experience</SectionHeading>
                        {experience.map((exp) => (
                            <ViewR key={exp.id} style={tw("mb-3")}>
                                <ViewR style={tw("flex-row justify-between items-start mb-0.5")}>
                                    <Text className="text-sm font-bold">{exp.company}</Text>
                                    <Text className="text-xs font-bold">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</Text>
                                </ViewR>
                                <Text className="text-xs font-normal italic text-neutral-700 mb-1">{exp.position}</Text>
                                {exp.description && (
                                    <ViewR style={tw("pl-3")}>
                                        {exp.description.split('\n').filter(line => line.trim()).map((line, idx) => (
                                            <ViewR key={idx} style={tw("flex-row mb-0.5")}>
                                                <Text className="text-xs font-normal mr-1.5">•</Text>
                                                <Text className="text-xs font-normal leading-relaxed text-neutral-800 flex-1">{line.trim()}</Text>
                                            </ViewR>
                                        ))}
                                    </ViewR>
                                )}
                            </ViewR>
                        ))}
                    </View>
                )}

                {/* Projects Section - Grid of 2 */}
                {projects.length > 0 && (
                    <View className="mb-3">
                        <SectionHeading>Projects</SectionHeading>
                        <ViewR style={tw("flex flex-col gap-3")}>
                            {projects.map((project) => (
                                <ViewR key={project.id}>
                                    <View className='flex flex-row justify-between items-center'>

                                        <View className='mb-0.5 flex flex-row justify-start items-center gap-2'>
                                            <Text className="text-sm font-bold">{project.name}</Text>

                                            {project.link && (
                                                <LinkR src={project.link} className="text-xs ">View</LinkR>
                                            )}
                                        </View>
                                        {project.technologies.length > 0 && (
                                            <Text className="text-2xs font-normal text-neutral-800">
                                                {project.technologies.join(' • ')}
                                            </Text>
                                        )}
                                    </View>
                                    {project.description.split('\n').filter(line => line.trim()).map((line, idx) => (
                                        <ViewR key={idx} style={tw("flex-row mb-0.5")}>
                                            <Text className="text-xs font-normal mr-1.5">•</Text>
                                            <Text className="text-xs font-normal leading-relaxed text-neutral-800 flex-1">{line.trim()}</Text>
                                        </ViewR>
                                    ))}

                                </ViewR>
                            ))}
                        </ViewR>
                    </View>
                )}

                {/* Skills Section */}
                {skills.length > 0 && (
                    <View className="mb-3">
                        <SectionHeading>Skills</SectionHeading>
                        <Text className="text-xs font-normal leading-relaxed text-neutral-800">{skills.join(' • ')}</Text>
                    </View>
                )}

                {/* Languages Section */}
                {languages.length > 0 && (
                    <View className="mb-3 ">
                        <SectionHeading>Languages</SectionHeading>
                        <Text className="text-xs font-normal text-neutral-800">{languages.join(' • ')}</Text>
                    </View>
                )}

                {/* Bottom Grid - Education, Certificates, Achievements - Grid of 3 */}
                <ViewR style={tw("flex-row flex-wrap gap-x-4")}>
                    {/* Education */}
                    {education.length > 0 && (
                        <ViewR style={tw("w-[31.5%]")}>
                            <SectionHeading>Education</SectionHeading>
                            {education.map((edu) => (
                                <ViewR key={edu.id} style={tw("w-full mb-3 flex flex-row justify-between items-start")}>
                                    <View>
                                        <Text className="text-sm font-bold` text-neutral-800">{edu.institution}</Text>
                                        <Text className="text-xs mb-0.5">{edu.degree} - {edu.field}</Text>
                                    </View>
                                    <View>
                                        <Text className="text-2xs font-normal text-neutral-700">
                                            {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                                        </Text>
                                        {edu.gpa && <Text className="text-2xs font-normal text-neutral-700">GPA: {edu.gpa}</Text>}
                                    </View>
                                </ViewR>
                            ))}
                        </ViewR>
                    )}

                    {/* Certificates */}
                    {certificates.length > 0 && (
                        <ViewR style={tw("w-[31.5%]")}>
                            <SectionHeading>Certifications</SectionHeading>
                            {certificates.map((cert) => (
                                <ViewR key={cert.id} style={tw("mb-3 flex flex-row justify-between items-start")}>
                                    <View className='flex flex-col gap-1 mb-0.5'>

                                        {cert.link ? (
                                            <LinkR src={cert.link} className="text-sm">{cert.name}</LinkR>
                                        ) : (
                                            <Text className="text-sm">{cert.name}</Text>
                                        )}
                                        <Text className="text-xs font-normal text-neutral-800">{cert.issuer}</Text>
                                    </View>
                                    <Text className="text-2xs font-normal text-neutral-500">{cert.date}</Text>
                                </ViewR>
                            ))}
                        </ViewR>
                    )}

                    {/* Achievements */}
                    {achievements.length > 0 && (
                        <ViewR style={tw("w-[31.5%]")}>
                            <SectionHeading>Achievements</SectionHeading>
                            {achievements.map((achievement) => (
                                <ViewR key={achievement.id} style={tw("mb-3")}>
                                    <Text className="text-xs mb-0.5">{achievement.title}</Text>
                                    <Text className="text-2xs font-normal text-neutral-800">{achievement.description}</Text>
                                </ViewR>
                            ))}
                        </ViewR>
                    )}
                </ViewR>

                {/* Declaration Section */}
                {data.declaration?.show && data.declaration.declaration && (
                    <View className="mt-4">
                        <SectionHeading>Declaration</SectionHeading>
                        <Text className="text-xs font-normal leading-relaxed text-neutral-800 mb-2">
                            {data.declaration.declaration}
                        </Text>
                        {(data.declaration.dated || data.declaration.location) && (
                            <ViewR style={tw("flex-row justify-between items-center")}>
                                {data.declaration.location && (
                                    <Text className="text-xs font-normal text-neutral-700">
                                        Place: {data.declaration.location}
                                    </Text>
                                )}
                                {data.declaration.dated && (
                                    <Text className="text-xs font-normal text-neutral-700">
                                        Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </Text>
                                )}
                            </ViewR>
                        )}
                    </View>
                )}
            </Page>
        </Document>)
}

const View = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <ViewR style={tw(cn("flex flex-col gap-1", className))}>
            {children}
        </ViewR>
    )
}

const Text = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <TextR style={tw(cn("text-sm text-black", className))}>
            {children}
        </TextR>
    )
}

const LinkR = ({ children, src, className }: { children: React.ReactNode, src: string, className?: string }) => {
    return (
        <Link src={src} style={[tw(cn("text-xs text-black", className)),
        {
            textDecoration: "none",

        }
        ]}>
            {children}
        </Link>
    )
}

const Heading = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <TextR style={[tw(cn("text-lg font-bold", className)), {
            lineHeight: 1.2
        }]}>
            {children}
        </TextR>
    )
}

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
    return (
        <TextR style={[tw("text-sm font-bold uppercase tracking-wide mb-1 text-neutral-900 border-b")
        ]}>
            {children}
        </TextR>
    )
}

export default ClassicPdf