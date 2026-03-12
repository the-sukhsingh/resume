'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';

interface ClassicPreviewProps {
  data: ResumeData;
}

export const ClassicPreview: React.FC<ClassicPreviewProps> = ({ data }) => {
  return (
    <div className="h-full overflow-y-auto bg-neutral-100 p-4 sm:p-8">
      <div
        id="resume-preview"
        className="mx-auto w-[8.27in] h-[11.69in] bg-white p-10 sm:p-16 shadow-sm font-sans overflow-hidden"
      >
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-medium tracking-tight text-neutral-900 mb-1">
            {data.personalInfo.fullName || 'Your Name'}
          </h1>
          {data.personalInfo.headline && (
            <p className="text-sm font-medium tracking-wide text-neutral-500 uppercase mb-4">
              {data.personalInfo.headline}
            </p>
          )}
          
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs text-neutral-500">
            {[
              data.social.email && (
                <a key="email" href={`mailto:${data.social.email}`} className="hover:text-neutral-900 transition-colors">
                  {data.social.email}
                </a>
              ),
              data.personalInfo.phone && (
                <span key="phone">{data.personalInfo.phone}</span>
              ),
              data.social.website && (
                <a key="website" href={data.social.website} target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition-colors">
                  Portfolio
                </a>
              ),
              data.social.linkedin && (
                <a key="linkedin" href={data.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition-colors">
                  LinkedIn
                </a>
              ),
              data.social.github && (
                <a key="github" href={data.social.github} target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition-colors">
                  GitHub
                </a>
              ),
            ]
              .filter(Boolean)
              .map((item, index, array) => (
                <React.Fragment key={index}>
                  {item}
                  {index < array.length - 1 && (
                    <span className="text-neutral-300 select-none">•</span>
                  )}
                </React.Fragment>
              ))}
          </div>
        </header>

        <div className="space-y-8">
          {/* Summary */}
          {data.summary && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 pb-2 border-b border-neutral-200">
                Professional Summary
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {data.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                Experience
              </h2>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {exp.position}
                      </h3>
                      <span className="text-xs text-neutral-500 font-medium whitespace-nowrap ml-4">
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-600 mb-2 font-medium">
                      {exp.company} <span className="text-neutral-300 mx-1">•</span> {exp.location}
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}


          {/* Projects */}
          {data.projects.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                Projects
              </h2>
              <div className="space-y-5">
                {data.projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex items-baseline mb-1 border-neutral-200">
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {project.name}
                      </h3>
                      {project.link && (
                        <a href={project.link} className="text-xs text-neutral-500 hover:text-black ml-2 underline underline-offset-2">
                          View
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-2">
                      {project.description}
                    </p>
                    {project.technologies.length > 0 && (
                      <p className="text-xs text-neutral-500">
                        <span className="font-medium text-neutral-700">Technologies:</span> {project.technologies.join(', ')}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}


          {/* Education */}
          {data.education?.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                Education
              </h2>
              <div className="space-y-5">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {edu.institution}
                      </h3>
                      <span className="text-xs text-neutral-500 font-medium whitespace-nowrap ml-4">
                        {edu.startDate} – {edu.current ? 'Present' : edu.endDate}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-600 font-medium">
                      {edu.degree} in {edu.field}
                      {edu.gpa && (
                        <>
                          <span className="text-neutral-300 mx-1">•</span> GPA: {edu.gpa}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Skills */}
          {data.skills.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 pb-2 border-b border-neutral-200">
                Skills
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {data.skills.join(' • ')}
              </p>
            </section>
          )}

          {/* Achievements */}
          {data.achievements.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                Achievements
              </h2>
              <div className="space-y-3">
                {data.achievements.map((achievement) => (
                  <div key={achievement.id}>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-0.5">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certificates */}
          {data.certificates.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                Certifications
              </h2>
              <div className="space-y-3">
                {data.certificates.map((cert) => (
                  <div key={cert.id} className="flex justify-between items-baseline">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {cert.name}
                        {cert.link && (
                          <a href={cert.link} className="text-xs text-neutral-500 hover:text-black ml-2 underline underline-offset-2">
                            View
                          </a>
                        )}
                      </h3>
                      <p className="text-sm text-neutral-600">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-neutral-500 font-medium whitespace-nowrap ml-4">{cert.date}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
