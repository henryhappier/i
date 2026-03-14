import type { Translations } from './types';

export const en: Translations = {
  // Navbar
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.experience': 'Experience',
  'nav.projects': 'Projects',
  'nav.blog': 'Blog',
  'nav.contact': 'Contact',
  'nav.resume': 'Resume',

  // Hero
  'hero.greeting': 'Hi, my name is',
  'hero.name': 'Henry Ma.',
  'hero.roles': [
    'Director of Engineering',
    'Builder of High-Performance Teams',
    'Systems Thinker',
    'Fast Learner',
    'Problem Solver',
    'Ultimately an Engineer at Heart',
  ],
  'hero.subtitle':
    'I build and lead engineering teams that ship exceptional software. Passionate about developer/user experiences, scalable systems, and nurturing engineering culture.',
  'hero.ctaPrimary': 'View My Work',
  'hero.ctaSecondary': 'Get In Touch',

  // About
  'about.heading': 'About Me',
  'about.p1':
    "I'm an engineering leader with over a decade of experience building software and scaling teams. I started my career writing code — designing APIs, optimizing databases, and shipping features — and transitioned into leadership where I could multiply impact by enabling others to do their best work.",
  'about.p2':
    'Today, I lead engineering organizations where I focus on creating environments where engineers thrive: clear technical vision, strong engineering culture, and the right balance between autonomy and alignment.',
  'about.p3':
    "When I'm not working, you'll find me tinkering with side projects, reading about distributed systems, or exploring the latest in AI and developer tooling.",

  // Skills
  'skills.heading': 'Skills & Technologies',
  'skills.categories.Languages': 'Languages',
  'skills.categories.Frontend': 'Frontend',
  'skills.categories.Backend': 'Backend',
  'skills.categories.Infrastructure': 'Infrastructure',

  // Experience
  'experience.heading': 'Experience',
  'experience.items': [
    {
      role: 'Director of Engineering',
      company: 'Tech Company',
      period: '2022 — Present',
      description: [
        'Leading a team of 30+ engineers across multiple product verticals',
        'Drove architecture migration to microservices, reducing deployment time by 70%',
        'Established engineering culture around code quality, testing, and continuous delivery',
      ],
    },
    {
      role: 'Senior Engineering Manager',
      company: 'Growth Startup',
      period: '2019 — 2022',
      description: [
        'Managed 4 cross-functional engineering teams building the core platform',
        'Scaled the engineering organization from 12 to 40 engineers',
        'Implemented OKR framework and engineering ladder for career growth',
      ],
    },
    {
      role: 'Engineering Manager',
      company: 'SaaS Platform',
      period: '2016 — 2019',
      description: [
        'Led a team of 8 engineers building real-time data processing pipelines',
        'Shipped features that increased user engagement by 35%',
        'Mentored junior engineers and established code review practices',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Enterprise Software Co.',
      period: '2013 — 2016',
      description: [
        'Designed and built RESTful APIs serving 10M+ requests/day',
        'Led migration from monolith to service-oriented architecture',
        'Championed adoption of automated testing, achieving 90% code coverage',
      ],
    },
  ],

  // Projects
  'projects.heading': 'Projects',
  'projects.items': [
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
  ],

  // Blog
  'blog.heading': 'Blog',
  'blog.readMore': 'Read more',
  'blog.items': [
    {
      title: 'Scaling Engineering Teams Without Losing Velocity',
      date: '2025-12-15',
      summary:
        'Lessons learned from growing an engineering org from 12 to 40+ engineers while maintaining shipping speed.',
      url: '#',
      tags: ['Leadership', 'Engineering Culture'],
    },
    {
      title: 'The Case for Boring Technology',
      date: '2025-09-20',
      summary:
        'Why choosing well-understood, proven technologies often beats chasing the latest framework.',
      url: '#',
      tags: ['Architecture', 'Strategy'],
    },
    {
      title: 'Building a Developer Platform from Scratch',
      date: '2025-06-10',
      summary:
        'A deep dive into building an internal developer platform that reduced deployment time by 70%.',
      url: '#',
      tags: ['Platform Engineering', 'DevOps'],
    },
    {
      title: 'Effective Code Reviews at Scale',
      date: '2025-03-05',
      summary:
        'How to maintain code quality through reviews without creating bottlenecks as your team grows.',
      url: '#',
      tags: ['Best Practices', 'Team Management'],
    },
  ],

  // Contact
  'contact.heading': 'Get In Touch',
  'contact.text':
    "Whether you want to discuss engineering leadership, collaborate on a project, or just say hello — my inbox is always open. I'll do my best to get back to you.",
  'contact.emailBtn': 'Say Hello',

  // Footer
  'footer.resumeLink': 'Download Resume (PDF)',
  'footer.credit': 'Built with',
  'footer.creditBy': 'by Henry Ma',
};
