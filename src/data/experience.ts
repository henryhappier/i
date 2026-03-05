export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
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
];
