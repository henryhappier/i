export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Go', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Redis', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'AWS', category: 'Infrastructure' },
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'Kubernetes', category: 'Infrastructure' },
  { name: 'Terraform', category: 'Infrastructure' },
  { name: 'CI/CD', category: 'Infrastructure' },
];

export const categories = [...new Set(skills.map((s) => s.category))];
