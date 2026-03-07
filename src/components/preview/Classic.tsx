'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';

interface ClassicPreviewProps {
  data: ResumeData;
}

export const ClassicPreview: React.FC<ClassicPreviewProps> = ({ data }) => {
  return (
    <div className="h-full overflow-y-auto nobar overscroll-none bg-stone-50 p-8">
      <div id="resume-preview-classic" className="mx-auto max-w-[8.5in] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-12">
        {/* Header */}
        <header className="border-b border-stone-200 pb-6 mb-8">
          <h1 className="font-sans text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
            {data.personalInfo.fullName || 'Your Name'}
          </h1>
          {data.personalInfo.headline && (
            <h2>
              {data.personalInfo.headline}
            </h2>
          )}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-primary/90">
            {data.social.email && (
              <span>{data.social.email}</span>
            )}
            {data.personalInfo.phone && (
              <span>{data.personalInfo.phone}</span>
            )}
            {data.personalInfo.location && (
              <span>{data.personalInfo.location}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-blue-700 mt-2">
            {data.social.website && (
              <a href={data.social.website} className="hover:underline">
                {data.social.website}
              </a>
            )}
            {data.social.linkedin && (
              <a href={data.social.linkedin} className="hover:underline">
                LinkedIn
              </a>
            )}
            {data.social.github && (
              <a href={data.social.github} className="hover:underline">
                GitHub
              </a>
            )}
          </div>
        </header>

        {/* Summary */}
        {data.summary && (
          <section className="mb-8">
            <h2 className="font-sans text-xl font-semibold text-neutral-900 mb-3 border-b border-neutral-600 pb-1">
              Professional Summary
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              {data.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <h2 className="font-sans text-xl font-semibold text-neutral-900 mb-4 border-b border-neutral-600 pb-1">
              Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-neutral-900">{exp.position}</h3>
                    <span className="text-sm text-primary/90">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-700 mb-2">
                    {exp.company} • {exp.location}
                  </div>
                  <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="mb-8">
            <h2 className="font-sans text-xl font-semibold text-neutral-900 mb-4 border-b border-neutral-600 pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {project.name}
                    {project.link && (
                      <a href={project.link} className="text-sm text-blue-700 ml-2 hover:underline">
                        View Project
                      </a>
                    )}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-2">
                    {project.description}
                  </p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-stone-100 text-neutral-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <section className="mb-8">
            <h2 className="font-sans text-xl font-semibold text-neutral-900 mb-3 border-b border-neutral-600 pb-1">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-stone-100 text-neutral-700 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section className="mb-8">
            <h2 className="font-sans text-xl font-semibold text-neutral-900 mb-4 border-b border-neutral-600 pb-1">
              Achievements
            </h2>
            <div className="space-y-3">
              {data.achievements.map((achievement) => (
                <div key={achievement.id}>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certificates */}
        {data.certificates.length > 0 && (
          <section className="mb-8">
            <h2 className="font-sans text-xl font-semibold text-neutral-900 mb-4 border-b border-neutral-600 pb-1">
              Certifications
            </h2>
            <div className="space-y-3">
              {data.certificates.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      {cert.name}
                      {cert.link && (
                        <a href={cert.link} className="text-sm text-blue-700 ml-2 hover:underline">
                          View
                        </a>
                      )}
                    </h3>
                    <p className="text-sm text-primary/90">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-primary/90">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
