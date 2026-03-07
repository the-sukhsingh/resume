'use client';

import React, { useState } from 'react';
import { ResumeData, Experience, Project, Achievement, Certificate, Education } from '@/types/resume';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { TagInput } from '@/components/resume/TagInput';
import { DataTable } from '@/components/resume/DataTable';
import { ExperienceModal } from '@/components/resume/ExperienceModal';
import { ProjectModal } from '@/components/resume/ProjectModal';
import { AchievementModal } from '@/components/resume/AchievementModal';
import { CertificateModal } from '@/components/resume/CertificateModal';
import { EducationModal } from '@/components/resume/EducationModal';
import CollapsibleSection from './CollapseSection';

interface EditorFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}


export const EditorForm: React.FC<EditorFormProps> = ({ data, onChange }) => {


  const [openSection, setOpenSection] = useState<string | null>('personal');

  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingAchievement, setEditingAchievement] = useState<Achievement | null>(null);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const updateSocialInfo = (field: string, value: string) => {
    onChange({
      ...data,
      social: { ...data.social, [field]: value }
    })
  }

  const updateSummary = (value: string) => {
    onChange({ ...data, summary: value });
  };

  const updateSkills = (skills: string[]) => {
    onChange({ ...data, skills });
  };

  const updateLanguages = (languages: string[]) => {
    onChange({ ...data, languages });
  };

  // Experience handlers
  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    setEditingExperience(newExp);
  };

  const saveExperience = (exp: Experience) => {
    const exists = data.experience.find(e => e.id === exp.id);
    if (exists) {
      onChange({
        ...data,
        experience: data.experience.map(e => e.id === exp.id ? exp : e),
      });
    } else {
      onChange({ ...data, experience: [...data.experience, exp] });
    }
    setEditingExperience(null);
  };

  const deleteExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter(e => e.id !== id),
    });
  };

  const reorderExperience = (newOrder: Experience[]) => {
    onChange({ ...data, experience: newOrder });
  };

  // Project handlers
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      link: '',
    };
    setEditingProject(newProject);
  };

  const saveProject = (proj: Project) => {
    const exists = data.projects.find(p => p.id === proj.id);
    if (exists) {
      onChange({
        ...data,
        projects: data.projects.map(p => p.id === proj.id ? proj : p),
      });
    } else {
      onChange({ ...data, projects: [...data.projects, proj] });
    }
    setEditingProject(null);
  };

  const deleteProject = (id: string) => {
    onChange({
      ...data,
      projects: data.projects.filter(p => p.id !== id),
    });
  };

  const reorderProjects = (newOrder: Project[]) => {
    onChange({ ...data, projects: newOrder });
  };

  // Achievement handlers
  const addAchievement = () => {
    const newAch: Achievement = {
      id: Date.now().toString(),
      title: '',
      description: '',
    };
    setEditingAchievement(newAch);
  };

  const saveAchievement = (ach: Achievement) => {
    const exists = data.achievements.find(a => a.id === ach.id);
    if (exists) {
      onChange({
        ...data,
        achievements: data.achievements.map(a => a.id === ach.id ? ach : a),
      });
    } else {
      onChange({ ...data, achievements: [...data.achievements, ach] });
    }
    setEditingAchievement(null);
  };

  const deleteAchievement = (id: string) => {
    onChange({
      ...data,
      achievements: data.achievements.filter(a => a.id !== id),
    });
  };

  const reorderAchievements = (newOrder: Achievement[]) => {
    onChange({ ...data, achievements: newOrder });
  };

  // Certificate handlers
  const addCertificate = () => {
    const newCert: Certificate = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: '',
      link: '',
    };
    setEditingCertificate(newCert);
  };

  const saveCertificate = (cert: Certificate) => {
    const exists = data.certificates.find(c => c.id === cert.id);
    if (exists) {
      onChange({
        ...data,
        certificates: data.certificates.map(c => c.id === cert.id ? cert : c),
      });
    } else {
      onChange({ ...data, certificates: [...data.certificates, cert] });
    }
    setEditingCertificate(null);
  };

  const deleteCertificate = (id: string) => {
    onChange({
      ...data,
      certificates: data.certificates.filter(c => c.id !== id),
    });
  };

  const reorderCertificates = (newOrder: Certificate[]) => {
    onChange({ ...data, certificates: newOrder });
  };

  // Education handlers
  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: '',
    };
    setEditingEducation(newEdu);
  };

  const saveEducation = (edu: Education) => {
    const exists = data.education.find(e => e.id === edu.id);
    if (exists) {
      onChange({
        ...data,
        education: data.education.map(e => e.id === edu.id ? edu : e),
      });
    } else {
      onChange({ ...data, education: [...data.education, edu] });
    }
    setEditingEducation(null);
  };

  const deleteEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter(e => e.id !== id),
    });
  };

  const reorderEducation = (newOrder: Education[]) => {
    onChange({ ...data, education: newOrder });
  };


  return (
    <div className="h-full overflow-y-auto nobar overscroll-none bg-background border-l border-b overflow-hidden rounded-bl-md">
      <div className="space-y-0">
        {/* Personal Info - Fixed at top */}
        <CollapsibleSection
          title="Personal Information"
          isOpen={openSection === 'personal'}
          onToggle={() => toggleSection('personal')}
          sectionKey="personal"
        >
          <div className="space-y-2">

            <div className="grid grid-cols-2 gap-3 ">
              <div>
                <Label htmlFor="fullName" className="text-xs text-primary/90 mb-1">Full Name</Label>
                <Input
                  id="fullName"
                  value={data.personalInfo.fullName}
                  onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                  placeholder="John Doe"
                  className="h-9"
                />
              </div>
              <div>
                <Label htmlFor="headLine" className="text-xs text-primary/90 mb-1">HeadLine</Label>
                <Input
                  id="headLine"
                  value={data.personalInfo.headline}
                  onChange={(e) => updatePersonalInfo('headline', e.target.value)}
                  placeholder="Aspiring Full Stack Developer | AI Enthusiast"
                  className="h-9"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="email" className="text-xs text-primary/90 mb-1">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={data.social.email}
                  onChange={(e) => updateSocialInfo('email', e.target.value)}
                  placeholder="you@mail.com"
                  className="h-9"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs text-primary/90 mb-1">Phone</Label>
                <Input
                  id="phone"
                  value={data.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="h-9"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">

              <div>
                <Label htmlFor="location" className="text-xs text-primary/90 mb-1">Location</Label>
                <Input
                  id="location"
                  value={data.personalInfo.location}
                  onChange={(e) => updatePersonalInfo('location', e.target.value)}
                  placeholder="San Francisco"
                  className="h-9"
                />
              </div>
              <div>
                <Label htmlFor="country" className="text-xs text-primary/90 mb-1">Country</Label>
                <Input
                  id="country"
                  value={data.personalInfo.country}
                  onChange={(e) => updatePersonalInfo('country', e.target.value)}
                  placeholder="Canada"
                  className="h-9"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label htmlFor="website" className="text-xs text-primary/90 mb-1">Website</Label>
                <Input
                  id="website"
                  value={data.social.website}
                  onChange={(e) => updateSocialInfo('website', e.target.value)}
                  placeholder="yoursite.com"
                  className="h-9"
                />
              </div>
              <div>
                <Label htmlFor="linkedin" className="text-xs text-primary/90 mb-1">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={data.social.linkedin}
                  onChange={(e) => updateSocialInfo('linkedin', e.target.value)}
                  placeholder="linkedin.com/in/..."
                  className="h-9"
                />
              </div>
              <div>
                <Label htmlFor="github" className="text-xs text-primary/90 mb-1">GitHub</Label>
                <Input
                  id="github"
                  value={data.social.github}
                  onChange={(e) => updateSocialInfo('github', e.target.value)}
                  placeholder="github.com/..."
                  className="h-9"
                />
              </div>
              <div>
                <Label htmlFor="twitter" className="text-xs text-primary/90 mb-1">Twitter</Label>
                <Input
                  id="twitter"
                  value={data.social.twitter}
                  onChange={(e) => updateSocialInfo('twitter', e.target.value)}
                  placeholder="x.com/..."
                  className="h-9"
                />
              </div>
              <div>
                <Label htmlFor="medium" className="text-xs text-primary/90 mb-1">Medium</Label>
                <Input
                  id="medium"
                  value={data.social.medium}
                  onChange={(e) => updateSocialInfo('medium', e.target.value)}
                  placeholder="medium.com/..."
                  className="h-9"
                />
              </div>
              <div>
                <Label htmlFor="instagram" className="text-xs text-primary/90 mb-1">Instagram</Label>
                <Input
                  id="instagram"
                  value={data.social.instagram}
                  onChange={(e) => updateSocialInfo('instagram', e.target.value)}
                  placeholder="instagram.com/..."
                  className="h-9"
                />
              </div>
            </div>
          </div>
        </CollapsibleSection>
        <CollapsibleSection
          key="summary"
          title="Professional Summary"
          isOpen={openSection === 'summary'}
          onToggle={() => toggleSection('summary')}

          sectionKey="summary"
        >
          <Textarea
            value={data.summary}
            onChange={(e) => updateSummary(e.target.value)}
            placeholder="Brief overview of your professional background and key strengths..."
            rows={8}
            className="resize-none"
          />
        </CollapsibleSection>
        <CollapsibleSection
          key="experience"
          title={`Experience ${data.experience.length >= 1 ? `(${data.experience.length})` : ''}`}
          isOpen={openSection === 'experience'}
          onToggle={() => toggleSection('experience')}

          sectionKey="experience"
        >
          <div className="space-y-3">
            {data.experience.length > 0 && (
              <DataTable
                data={data.experience}
                columns={[
                  { key: 'position', label: 'Position' },
                  { key: 'company', label: 'Company' },
                  { key: 'startDate', label: 'Period', render: (item) => `${item.startDate} - ${item.current ? 'Present' : item.endDate}` },
                ]}
                onEdit={setEditingExperience}
                onDelete={deleteExperience}
                onReorder={reorderExperience}
              />
            )}
            <div className='w-full flex justify-center items-center'>
              <Button onClick={addExperience} size="sm" variant={"outline"} className="w-full gap-2 h-9 border-dashed">
                <Plus className="w-4 h-4" /> Add Experience
              </Button>
            </div>
          </div>
        </CollapsibleSection>
        <CollapsibleSection
          key="projects"
          title={`Projects  ${data.projects.length >= 1 ? `(${data.projects.length})` : ''}`}
          isOpen={openSection === 'projects'}
          onToggle={() => toggleSection('projects')}

          sectionKey="projects"
        >
          <div className="space-y-3">
            {data.projects.length > 0 && (
              <DataTable
                data={data.projects}
                columns={[
                  { key: 'name', label: 'Project Name' },
                  { key: 'technologies', label: 'Technologies', render: (item) => item.technologies.slice(0, 3).join(', ') + (item.technologies.length > 3 ? '...' : '') },
                ]}
                onEdit={setEditingProject}
                onDelete={deleteProject}
                onReorder={reorderProjects}
              />
            )}
            <div className='w-full flex justify-center items-center'>
              <Button onClick={addProject} size="sm" variant={"outline"} className="w-full gap-2 h-9 border-dashed">
                <Plus className="w-4 h-4" /> Add Project
              </Button>
            </div>
          </div>
        </CollapsibleSection>
        <CollapsibleSection
          key="skills"
          title={`Skills  ${data.skills.length >= 1 ? `(${data.skills.length})` : ''}`}
          isOpen={openSection === 'skills'}
          onToggle={() => toggleSection('skills')}

          sectionKey="skills"
        >
          <TagInput
            tags={data.skills}
            onChange={updateSkills}
            placeholder="Type a skill and press Enter..."
          />
        </CollapsibleSection>
        <CollapsibleSection
          key="languages"
          title={`Languages  ${data.languages.length >= 1 ? `(${data.languages.length})` : ''}`}
          isOpen={openSection === 'languages'}
          onToggle={() => toggleSection('languages')}

          sectionKey="languages"
        >
          <TagInput
            tags={data.languages}
            onChange={updateLanguages}
            placeholder="Type a language and press Enter..."
          />
        </CollapsibleSection>
        <CollapsibleSection
          key="education"
          title={`Education  ${data.education.length >= 1 ? `(${data.education.length})` : ''}`}
          isOpen={openSection === 'education'}
          onToggle={() => toggleSection('education')}

          sectionKey="education"
        >
          <div className="space-y-3">
            {data.education.length > 0 && (
              <DataTable
                data={data.education}
                columns={[
                  { key: 'degree', label: 'Degree' },
                  { key: 'institution', label: 'Institution' },
                  { key: 'startDate', label: 'Period', render: (item) => `${item.startDate} - ${item.current ? 'Present' : item.endDate}` },
                ]}
                onEdit={setEditingEducation}
                onDelete={deleteEducation}
                onReorder={reorderEducation}
              />
            )}
            <div className='w-full flex justify-center items-center'>
              <Button onClick={addEducation} size="sm" variant={"outline"} className="w-full gap-2 h-9 border-dashed">
                <Plus className="w-4 h-4" /> Add Education
              </Button>
            </div>
          </div>
        </CollapsibleSection>
        <CollapsibleSection
          key="achievements"
          title={`Achievements  ${data.achievements.length >= 1 ? `(${data.achievements.length})` : ''}`}
          isOpen={openSection === 'achievements'}
          onToggle={() => toggleSection('achievements')}

          sectionKey="achievements"
        >
          <div className="space-y-3">
            {data.achievements.length > 0 && (
              <DataTable
                data={data.achievements}
                columns={[
                  { key: 'title', label: 'Title' },
                  { key: 'description', label: 'Description'}
                ]}
                onEdit={setEditingAchievement}
                onDelete={deleteAchievement}
                onReorder={reorderAchievements}
              />
            )}
            <div className='w-full flex justify-center items-center'>
              <Button onClick={addAchievement} size="sm" variant={"outline"} className="w-full gap-2 h-9 border-dashed">
                <Plus className="w-4 h-4" /> Add Achievement
              </Button>
            </div>
          </div>
        </CollapsibleSection>
        <CollapsibleSection
          key="certificates"
          title={`Certifications  ${data.certificates.length >= 1 ? `(${data.certificates.length})` : ''}`}
          isOpen={openSection === 'certificates'}
          onToggle={() => toggleSection('certificates')}

          sectionKey="certificates"
        >
          <div className="space-y-3">
            {data.certificates.length > 0 && (
              <DataTable
                data={data.certificates}
                columns={[
                  { key: 'name', label: 'Certificate' },
                  { key: 'issuer', label: 'Issuer' },
                  { key: 'date', label: 'Date' },
                ]}
                onEdit={setEditingCertificate}
                onDelete={deleteCertificate}
                onReorder={reorderCertificates}
              />
            )}
            <div className='w-full flex justify-center items-center'>
              <Button onClick={addCertificate} size="sm" variant={"outline"} className="w-full gap-2 h-9 border-dashed">
                <Plus className="w-4 h-4" /> Add Certification
              </Button>
            </div>
          </div>
        </CollapsibleSection>
      </div>

      {/* Modals */}
      {editingExperience && (
        <ExperienceModal
          experience={editingExperience}
          onSave={saveExperience}
          onClose={() => setEditingExperience(null)}
        />
      )}
      {editingProject && (
        <ProjectModal
          project={editingProject}
          onSave={saveProject}
          onClose={() => setEditingProject(null)}
        />
      )}
      {editingAchievement && (
        <AchievementModal
          achievement={editingAchievement}
          onSave={saveAchievement}
          onClose={() => setEditingAchievement(null)}
        />
      )}
      {editingCertificate && (
        <CertificateModal
          certificate={editingCertificate}
          onSave={saveCertificate}
          onClose={() => setEditingCertificate(null)}
        />
      )}
      {editingEducation && (
        <EducationModal
          education={editingEducation}
          onSave={saveEducation}
          onClose={() => setEditingEducation(null)}
        />
      )}
    </div>
  );
};
