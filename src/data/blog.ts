export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  url: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
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
];
