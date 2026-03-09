"use client"
import React from 'react';
import { Document, Page, Text, View, Font } from '@react-pdf/renderer';
import { ResumeData } from '@/types/resume';
import { CORMORANT_GARAMOND_FONT, LEAGUE_SPARTAN_FONT, MONTSERRAT_FONT } from '@/constants/pdf-fonts';
import { createTw } from 'react-pdf-tailwind';
import { cn } from '@/lib/utils';

// Register local fonts from constants
Font.register({
  family: 'CormorantGaramond',
  fonts: CORMORANT_GARAMOND_FONT
});

Font.register({
  family: 'LeagueSpartan',
  fonts: LEAGUE_SPARTAN_FONT
});

Font.register({
  family: 'Montserrat',
  fonts: MONTSERRAT_FONT
});

const tw = createTw({
  theme: {
    fontFamily: {
      cormorant: ['CormorantGaramond'],
      spartan: ['LeagueSpartan'],
      montserrat: ['Montserrat'],
    },
  },
});

interface DesignerPDFProps {
  data: ResumeData;
}

export const DesignerPDF: React.FC<DesignerPDFProps> = ({ data }) => {
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

  const url = social.website ? new URL(social.website).hostname : 'www.example.com';

  return (
    <Document >
      <Page size="A4" style={tw(cn("px-12 py-6 bg-[#e8e4d8] flex flex-col"))}>
        {/* Header */}
        <View style={tw("mb-8")}>
          <Text style={tw(cn("text-[72px] leading-none font-cormorant font-bold text-center mb-1 tracking-tight"))}>
            {personalInfo.fullName || 'Morgan Maxwell'}
          </Text>
          <View style={tw("flex flex-row justify-between items-center text-xs uppercase tracking-wider font-spartan font-semibold")}>
            <Text>{personalInfo.headline || 'Headline Here'}</Text>
            <Text>{url}</Text>
          </View>
        </View>

        {/* Main Content Grid - 3 columns */}
        <View style={tw("flex flex-row gap-8 mb-8")}>
          {/* Left Column - Summary */}
          <View style={tw("flex-1")}>
            <Text style={tw("text-xs leading text-justify font-montserrat")}>
              {summary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat.'}
            </Text>
          </View>

          {/* Center Column - Photo */}
          <View style={tw("flex-1 flex items-center justify-center")}>
            <View style={tw("w-48 h-48 bg-white rounded-lg")} />
          </View>

          {/* Right Column - Contact */}
          <View style={tw("flex-1 text-xs font-montserrat")}>
            <View style={tw("mb-2")}>
              <Text style={tw("font-spartan font-semibold mb-1")}>LINKEDIN</Text>
              <Text style={tw("font-montserrat")}>{social?.linkedin?.split('.com/')[1] || 'linkedin/...'}</Text>
            </View>
            <View style={tw("mb-2 pt-2")}>
              <Text style={tw("font-spartan font-semibold mb-1")}>EMAIL</Text>
              <Text style={tw("font-montserrat")}>{social.email || 'you@mail.com'}</Text>
            </View>
            <View style={tw("mb-2 pt-2")}>
              <Text style={tw("font-spartan font-semibold mb-1")}>PHONE</Text>
              <Text style={tw("font-montserrat")}>{personalInfo.phone || '+123-456-7890'}</Text>
            </View>
            <View style={tw("pt-2")}>
              <Text style={tw("font-spartan font-semibold mb-1")}>ADDRESS</Text>
              <Text style={tw("font-montserrat")}>{personalInfo.location || '123 ANYWHERE ST., ANY CITY'}, {personalInfo.country || 'Canada'}</Text>
            </View>
          </View>
        </View>

        {/* Work Experience */}
        {experience.length > 0 && (
          <View style={tw("mb-8")}>
            <Text style={tw("text-2xl font-cormorant font-semibold mb-3 tracking-tighter")}>WORK EXPERIENCE</Text>
            <View style={tw("flex flex-row gap-6")}>
              {experience.slice(0, 3).map((exp) => (
                <View key={exp.id} style={tw("flex-1 text-xs font-montserrat")}>
                  <Text style={tw("font-spartan font-semibold uppercase text-sm mb-1")}>
                    {exp.company} | {exp.position}
                  </Text>
                  <Text style={tw("mb-2")}>
                    {exp.startDate}-{exp.current ? 'Present' : exp.endDate}
                  </Text>
                  <Text style={tw("text-justify leading-relaxed")}>
                    {exp.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet.'}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <View style={tw("mb-8")}>
            <Text style={tw("text-2xl font-cormorant font-semibold mb-3 tracking-tighter")}>PROJECTS</Text>
            <View style={tw("flex flex-row gap-6")}>
              {projects.slice(0, 3).map((proj) => (
                <View key={proj.id} style={tw("flex-1 text-xs font-montserrat")}>
                  <Text style={tw("font-spartan font-semibold uppercase text-sm mb-1")}>{proj.name}</Text>
                  <Text style={tw("italic mb-1")}>{proj.technologies.join(' ')}</Text>
                  <Text style={tw("leading-relaxed")}>
                    {proj.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet.'}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Bottom Grid - Languages, Skills, Education */}
        <View style={tw("flex flex-row gap-8 mb-8")}>
          {/* Languages */}
          {languages.length > 0 && (
            <View style={tw("flex-1")}>
              <Text style={tw("text-2xl font-cormorant font-semibold mb-2 tracking-tighter")}>LANGUAGES</Text>
              <View style={tw("flex flex-col gap-2 text-sm font-montserrat")}>
                {languages.slice(0, 4).map((lang, idx) => (
                  <View key={idx} style={tw("flex flex-row justify-between items-center")}>
                    <Text>{lang}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <View style={tw("flex-1")}>
              <Text style={tw("text-2xl font-cormorant font-semibold mb-1.5 tracking-tighter")}>SKILLS</Text>
              <View style={tw("text-sm font-montserrat")}>
                {skills.slice(0, 5).map((skill, idx) => (
                  <Text key={idx}>• {skill}</Text>
                ))}
              </View>
            </View>
          )}

          {/* Education */}
          {education.length > 0 && (
            <View style={tw("flex-1")}>
              <Text style={tw("text-2xl font-cormorant font-semibold mb-3 tracking-tighter")}>EDUCATION</Text>
              <View style={tw("flex flex-col gap-3 text-xs font-montserrat")}>
                {education.slice(0, 2).map((edu) => (
                  <View key={edu.id} style={tw("flex flex-row justify-between")}>
                    <View>
                      <Text style={tw("font-spartan text-sm font-semibold uppercase")}>{edu.institution}</Text>
                      <Text>({edu.degree} - {edu.field})</Text>
                    </View>
                    <Text style={tw("font-spartan font-bold")}>
                      {edu.startDate}-{edu.current ? 'Present' : edu.endDate}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* Achievements and Certificates */}
        <View style={tw("flex flex-row gap-8")}>
          {/* Achievements */}
          {achievements.length > 0 && (
            <View style={tw("flex-1")}>
              <Text style={tw("text-2xl font-cormorant font-semibold mb-4 tracking-tighter")}>ACHIEVEMENTS</Text>
              <View style={tw("text-xs font-montserrat flex flex-col gap-2")}>
                {achievements.slice(0, 2).map((achievement) => (
                  <View key={achievement.id}>
                    <Text style={tw("font-spartan text-sm font-semibold uppercase")}>{achievement.title}</Text>
                    <Text style={tw("leading-relaxed")}>{achievement.description}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Certificates */}
          {certificates.length > 0 && (
            <View style={tw("flex-[2]")}>
              <Text style={tw("text-2xl font-cormorant font-semibold mb-4 tracking-tighter")}>CERTIFICATES</Text>
              <View style={tw("flex flex-row gap-6")}>
                {certificates.slice(0, 3).map((cert) => (
                  <View key={cert.id} style={tw("flex-1 text-xs font-montserrat")}>
                    <Text style={tw("font-spartan text-sm font-semibold uppercase mb-1")}>{cert.name}</Text>
                    <Text style={tw("italic mb-2")}>{cert.date}</Text>
                    <Text style={tw("leading-relaxed")}>
                      {cert.issuer || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
