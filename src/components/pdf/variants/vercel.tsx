"use client"
import React from 'react'
import { Document, Page, Text as TextR, View as ViewR, Image, Font, Link, Svg, Polyline, Line } from "@react-pdf/renderer";
import { GEIST_FONT, GEIST_MONO_FONT } from "@/constants/pdf-fonts";
import { createTw } from "react-pdf-tailwind";
import { cn } from "@/lib/utils";
import { ResumeData } from '@/types/resume';

// Register fonts
Font.register({
    family: "GeistMono",
    fonts: GEIST_MONO_FONT,
});


Font.register({
    family: "Geist",
    fonts: GEIST_FONT,
});


const tw = createTw({
    theme: {
        fontFamily: {
            default: ["Geist"],
            geistmono: ["GeistMono"],
        },
        extend: {
            colors: {
                background: "#040404",
                borderColor: "#262626",
            },
            fontSize: {
                "2xs": "0.625rem",
                "3xs": "0.5rem",
            },
        },
    },
});

const VercelPdf: React.FC<{ data: ResumeData }> = ({ data }) => {

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

    return (
        <Document
            title={`Resume-${data.personalInfo.fullName}`}
            author={data.personalInfo.fullName || "Unknown"}
            creator={data.personalInfo.fullName || "Unknown"}
            producer="Resumely"
        >
            <Page size="A4" style={tw(cn("font-default text-sm text-white bg-[#040404]"))}>
                <View className='flex-row w-full justify-between items-end border-b border-neutral-800  px-5 pb-2 pt-6 '>
                    <View className="">
                        <Text className="mb-2 text-5xl font-bold leading-none tracking-tight text-white">
                            {personalInfo.fullName || "Your Name"}
                        </Text>
                        {personalInfo.headline && (
                            <TextR
                                style={[tw(cn("text-sm font-geistmono font-light uppercase text-neutral-400")),
                                {
                                    letterSpacing: "0.18rem",
                                    fontFamily: "GeistMono",
                                }
                                ]}>
                                {personalInfo.headline}
                            </TextR>
                        )}
                    </View>
                    {/* Location & Contact */}

                    <View className='text-end items-end'>
                        {personalInfo.location && (
                            <Text >{personalInfo.location}{personalInfo.country ? `, ${personalInfo.country}` : ''}</Text>
                        )}
                        {personalInfo.phone && (
                            <Text>{personalInfo.phone}</Text>
                        )}
                    </View>
                </View>
                {personalInfo.location || personalInfo.phone || social.email || social.website || social.github || social.linkedin ? (<View className="flex flex-row items-center justify-between border-b border-neutral-800 px-5 py-1.5 text-[8px]">
                    {/* Quick Links Bar */}
                    <View className="flex flex-row flex-nowrap items-center">
                        {social.email && (
                            <SocialLink url={`mailto:${social.email}`} className="border-l">
                                Email
                            </SocialLink>
                        )}
                        {social.website && (
                            <SocialLink url={social.website}>
                                Website
                            </SocialLink>
                        )}
                        {social.github && (
                            <SocialLink url={social.github}>
                                GitHub
                            </SocialLink>
                        )}
                        {social.linkedin && (
                            <SocialLink url={social.linkedin}>
                                LinkedIn
                            </SocialLink>
                        )}
                        {social.twitter && (
                            <SocialLink url={social.twitter}>
                                Twitter
                            </SocialLink>
                        )}
                        {social.medium && (
                            <SocialLink url={social.medium}>
                                Medium
                            </SocialLink>
                        )}
                        {social.instagram && (
                            <SocialLink url={social.instagram}>
                                Instagram
                            </SocialLink>
                        )}
                    </View>

                </View>) : null}

                {/* About Section */}
                {summary && (
                    <View className="px-5 py-4 border-b border-neutral-800">
                        <Heading className="mb-3">
                            About
                        </Heading>
                        <Text className="max-w-4xl text-base text-balance  text-neutral-300">
                            {summary}
                        </Text>
                    </View>
                )}



                {/* Projects Section */}
                {projects.length > 0 && (
                    <>
                        <View className="border-b border-neutral-800">
                            <Heading className="my-4 ml-5">
                                Projects
                            </Heading>
                            <View className="flex flex-row flex-wrap bg-black/20">

                                {projects.slice(0, experience.length > 0 ? 3 : 6).map((project, idx) => (
                                    <ViewR
                                        key={project.id}
                                        style={tw(cn("w-1/3 flex flex-row min-h-40 flex-col gap-1 pl-5 pr-3 py-4 border-neutral-800",
                                            experience.length > 0 ? "border-t" : "border-y",
                                            (idx === 0 || idx === 1) && "border-r",
                                            experience.length === 0 && idx > 2 && idx < 6 && "border-r border-y-0",
                                        ))}

                                    >
                                        <View className="flex flex-row items-start justify-between gap-3 mb-1">
                                            <Text className="text-lg font-semibold leading-none text-white">
                                                {project.name}
                                            </Text>
                                            {project.link && (
                                                <Link
                                                    src={project.link}
                                                    style={[tw(cn("shrink-0 px-2 py-1 font-geistmono text-[8px] uppercase text-neutral-400 ")),
                                                    {
                                                        textDecoration: "none",
                                                        letterSpacing: "0.18rem",
                                                        fontFamily: "GeistMono",
                                                    }
                                                    ]}
                                                >
                                                    View
                                                </Link>
                                            )}
                                        </View>
                                        <Text className="min-h-16 text-sm leading-5 text-neutral-300">
                                            {project.description}
                                        </Text>
                                        {project.technologies.length > 0 && (
                                            <View className="mt-auto flex flex-row flex-wrap gap-2">
                                                {project.technologies.slice(0, 3).map((tech, idx) => (
                                                    <View
                                                        key={idx}
                                                        className="border border-neutral-800 bg-black"
                                                    >
                                                        <TextR style={[tw(cn("font-geistmono text-[9px] px-1.5 py-1 uppercase text-neutral-400")),
                                                        {
                                                            letterSpacing: "0.05rem",
                                                            fontFamily: "GeistMono",
                                                        }
                                                        ]}>{tech}</TextR>
                                                    </View>
                                                ))}
                                            </View>
                                        )}
                                    </ViewR>
                                ))}

                                {/* TODO: Background is not any property */}
                                {projects.length > 0 && projects.length < 3 && (
                                    <ViewR style={[tw(cn("border-neutral-800 border"
                                    )), {
                                        width: projects.length === 1 ? "66.66%" : "33.33%",
                                        }]} >
                                        <Svg height="120" width="100%" preserveAspectRatio='none' viewBox={projects.length === 1 ? '0 0 400 200' : '0 0 250 200'}>
                                            {Array.from({ length: 100 }).map((_, i) => (
                                                <Line
                                                    key={i}
                                                    x1={i * 8 - 200}
                                                    y1={208}
                                                    x2={i * 8}
                                                    y2={-8}
                                                    stroke="#525252"
                                                    strokeWidth={projects.length === 1 ? 0.24 : 0.3}
                                                />
                                            ))}
                                        </Svg>
                                        </ViewR>
                                )}
                                {experience.length === 0 && projects.length > 3 && projects.length < 6 && (
                                    <ViewR style={[tw(cn("",
                                    )), {
                                        width: projects.length === 4 ? "66.66%" : "33.33%",

                                        }]} >
                                        <Svg height="120" width="100%" preserveAspectRatio='none' viewBox={projects.length === 4 ? '0 0 400 200' : '0 0 250 200'}>
                                            {Array.from({ length: 100 }).map((_, i) => (
                                                <Line
                                                    key={i}
                                                    x1={i * 8 - 200}
                                                    y1={208}
                                                    x2={i * 8}
                                                    y2={-8}
                                                    stroke="#525252"
                                                    strokeWidth={projects.length === 4 ? 0.24 : 0.3}
                                                />
                                            ))}
                                        </Svg>
                                    </ViewR>
                                )}
                            </View>
                        </View>
                    </>
                )}

                {/* Skills and Languages */}
                {skills.length > 0 || languages.length > 0 ? (<View className="flex flex-row border-b border-neutral-800">

                    {/* Skills Section */}
                    {skills.length > 0 && (
                        <>
                            <View className="w-1/2 border-r border-neutral-800  py-4">
                                <Heading className="mb-3 ml-5">
                                    Skills
                                </Heading>
                                <View className="flex flex-row flex-wrap gap-x-3 gap-y-1.5 ml-5">
                                    {skills.slice(0, 5).map((skill, idx) => (
                                        <View
                                            key={idx}
                                        >
                                            <TextR style={[tw(cn("text-[8px] uppercase tracking-[0.16em]")),
                                            {
                                                letterSpacing: "0.16rem",
                                            }
                                            ]}>{skill}</TextR>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </>
                    )}

                    {/* Languages Section */}
                    {languages.length > 0 && (
                        <>
                            <View className="w-1/2 py-4">
                                <Heading className="mb-3 ml-5">
                                    Languages
                                </Heading>
                                <View className="flex flex-row flex-wrap gap-x-3 gap-y-1.5 ml-5">
                                    {languages.slice(0, 5).map((language, idx) => (
                                        <View key={idx} >
                                            <TextR style={[tw(cn("text-[8px] uppercase tracking-[0.16em]")),
                                            {
                                                letterSpacing: "0.16rem",
                                            }
                                            ]}>{language}</TextR>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </>
                    )}
                </View>) : null}


                {/* Education, Certificates, and Achievements */}
                {education.length > 0 || certificates.length > 0 || achievements.length > 0 ? (<View className="flex flex-row border-b border-neutral-800">
                    {/* Education Section */}
                    {education.length > 0 && (
                        <View className="w-1/3 border-r border-neutral-800 p-5">
                            <Heading className="mb-4">
                                Education
                            </Heading>
                            <View className="gap-4">
                                {education.slice(0, 3).map((edu) => (
                                    <View key={edu.id} className="gap-0.5">
                                        <View className=" flex flex-row items-center justify-between gap-3">
                                            <Text className="text-sm font-semibold text-white">
                                                {edu.institution}
                                            </Text>
                                            <TextR style={[tw(cn("shrink-0 text-[8px] uppercase tracking-[0.16em] text-neutral-400 font-geistmono")),
                                            {
                                                letterSpacing: "0.16rem",
                                                fontFamily: "GeistMono",
                                            }
                                            ]}>
                                                {edu.startDate} — {edu.current ? 'Present' : edu.endDate}
                                            </TextR>
                                        </View>
                                        <View className="flex flex-row items-center justify-between gap-3">

                                            <Text className="text-xs leading-5 text-neutral-400">
                                                {edu.degree} - {edu.field}
                                            </Text>
                                            <TextR style={[tw(cn("shrink-0 text-[8px] uppercase tracking-[0.16em] text-neutral-400 font-geistmono")),
                                            {
                                                letterSpacing: "0.16rem",
                                                fontFamily: "GeistMono",
                                            }
                                            ]}>
                                                {edu.gpa && `GPA: ${edu.gpa}`}
                                            </TextR>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}

                    {/* Certificates Section */}
                    {certificates.length > 0 && (
                        <View className="w-1/3 border-r border-neutral-800 p-5">
                            <Heading className="mb-4">
                                Certificates
                            </Heading>
                            <View className="gap-4">
                                {certificates.map((cert) => (
                                    <View key={cert.id} className="gap-0.5">
                                        <View className="flex flex-row items-center justify-between gap-2">
                                            <Text className="text-sm font-semibold text-white">
                                                {cert.name}
                                            </Text>
                                            <TextR style={[tw(cn("shrink-0 text-[8px] uppercase tracking-[0.16em] text-neutral-400 font-geistmono")),
                                            {
                                                letterSpacing: "0.16rem",
                                                fontFamily: "GeistMono",
                                            }
                                            ]}>
                                                {cert.date}
                                            </TextR>
                                        </View>
                                        <Text className="text-xs leading-5 text-neutral-400">
                                            {cert.issuer}
                                        </Text>

                                    </View>
                                ))}
                            </View>
                        </View>
                    )}

                    {/* Achievements Section */}
                    {achievements.length > 0 && (
                        <View className="w-1/3 p-5">
                            <Heading className="mb-4">
                                Achievements
                            </Heading>
                            <View className="gap-4">
                                {achievements.map((achievement) => (
                                    <View key={achievement.id} className="gap-0.5">
                                        <Text className="text-sm font-semibold text-white">
                                            {achievement.title}
                                        </Text>
                                        <Text className="text-xs leading-5 text-neutral-400">
                                            {achievement.description}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}

                </View>) : null}

                <ViewR style={tw(cn("flex-1 relative",
                ))} >
                    <Svg preserveAspectRatio='none' viewBox='0 0 600 200' style={tw(cn("h-full w-full absolute top-0 left-0"))}>
                        {Array.from({ length: 100 }).map((_, i) => (
                            <Line
                                key={i}
                                x1={i * 8 - 200}
                                y1={208}
                                x2={i * 8}
                                y2={-8}
                                stroke="#525252"
                                strokeWidth={0.24}
                            />
                        ))}
                    </Svg>
                </ViewR>
            </Page>
        </Document>
    )
}

const View = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <ViewR style={tw(cn("flex flex-col", className))}>
        {children}
    </ViewR>
)

const Text = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <TextR style={tw(cn("text-sm text-neutral-300", className))}>
        {children}
    </TextR>
);

const Heading = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <TextR style={[tw(cn("text-sm uppercase text-neutral-400 tracking-wider mb-2", className)),
    {
        letterSpacing: "0.05rem",
        fontFamily: "GeistMono",
    }
    ]}>
        {children}
    </TextR>
);

const SocialLink = ({ url, children, className }: { url: string, children: React.ReactNode, className?:string }) => (
    <Link
        href={url}
        src={url}
        style={[tw(cn("relative border-r border-neutral-800 px-2 py-0.5  font-geistmono text-[8px] uppercase tracking-[0.18em] text-neutral-200 transition-colors hover:text-white",className)),
        {
            textDecoration: "none",
            letterSpacing: "0.1rem",
            fontFamily: "GeistMono",
        }
        ]}
    >
        <TextR style={tw(cn("mt-1"))}>{children}</TextR>
    </Link>
);

export default VercelPdf