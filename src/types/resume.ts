export interface PersonalInfo {
  fullName: string;
  headline?: string;
  phone: string;
  location: string;
  country?: string;
  image?: File | string;
}

export interface Social {
  email?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  medium?: string;
  instagram?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SectionPriority {
  summary: number;
  experience: number;
  projects: number;
  skills: number;
  achievements: number;
  certificates: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa?: string;
}


export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  social: Social;
  experience: Experience[];
  projects: Project[];
  achievements: Achievement[];
  skills: string[];
  languages: string[];
  certificates: Certificate[];
  education: Education[];
}
