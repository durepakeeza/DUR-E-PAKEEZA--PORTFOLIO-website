export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  technologies: string[];
  description: string;
  image: string;
  alt: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  liveDemoType?: 'ecommerce' | 'portfolio' | 'notes';
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  keyHighlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  highlights: string;
}
