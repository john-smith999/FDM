import { SECTION_IDS } from '../config/constants';

export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'contact';

export type Language = 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'it';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'other';
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  description?: string;
}

export type AnimationType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'; 