export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export interface BlogItem {
  title: string;
  date: string;
  summary: string;
  url: string;
  tags: string[];
}

export interface Translations {
  [key: string]: string | string[] | ExperienceItem[] | ProjectItem[] | BlogItem[];
}
