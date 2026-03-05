export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: 'Cloud Infrastructure Platform',
    description:
      'Internal developer platform that abstracts away cloud complexity, enabling teams to deploy services with a single command.',
    tech: ['Go', 'Kubernetes', 'Terraform', 'React'],
    github: 'https://github.com',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description:
      'High-performance dashboard processing millions of events per second with sub-second query latency.',
    tech: ['TypeScript', 'React', 'ClickHouse', 'WebSocket'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Code Review Bot',
    description:
      'Automated code review tool that uses LLMs to provide contextual feedback on pull requests.',
    tech: ['Python', 'OpenAI', 'GitHub API', 'FastAPI'],
    github: 'https://github.com',
  },
  {
    title: 'Distributed Task Queue',
    description:
      'Fault-tolerant distributed task queue supporting millions of jobs per day with exactly-once semantics.',
    tech: ['Go', 'Redis', 'PostgreSQL', 'gRPC'],
    github: 'https://github.com',
  },
  {
    title: 'Engineering Metrics Tracker',
    description:
      'Tool for tracking DORA metrics and engineering productivity across teams with customizable dashboards.',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'Prisma'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Open Source CLI Tool',
    description:
      'Developer CLI for scaffolding microservices with built-in best practices for logging, monitoring, and testing.',
    tech: ['Rust', 'CLI', 'Docker'],
    github: 'https://github.com',
  },
];
