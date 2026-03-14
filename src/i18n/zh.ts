import type { Translations } from './types';

export const zh: Translations = {
  // Navbar
  'nav.about': '关于',
  'nav.skills': '技能',
  'nav.experience': '经历',
  'nav.projects': '项目',
  'nav.blog': '博客',
  'nav.contact': '联系',
  'nav.resume': '简历',

  // Hero
  'hero.greeting': '你好，我是',
  'hero.name': '马恒瑞。',
  'hero.roles': [
    '工程总监',
    '高效能团队缔造者',
    '系统思考者',
    '快速学习者',
    '问题解决者',
    '始终是一名工程师',
  ],
  'hero.subtitle':
    '我构建并带领工程团队交付卓越的软件产品。热衷于开发者/用户体验、可扩展系统以及工程文化的培养。',
  'hero.ctaPrimary': '查看我的作品',
  'hero.ctaSecondary': '联系我',

  // About
  'about.heading': '关于我',
  'about.p1':
    '我是一名拥有十余年经验的工程领导者，专注于软件开发与团队建设。我的职业生涯始于编写代码——设计 API、优化数据库、交付功能——后来转型为技术管理，通过赋能他人来放大个人影响力。',
  'about.p2':
    '如今，我领导工程组织，致力于为工程师创造蓬勃发展的环境：清晰的技术愿景、强大的工程文化、以及自主性与一致性之间的恰当平衡。',
  'about.p3':
    '工作之余，你会发现我在捣鼓个人项目、阅读分布式系统相关资料，或者探索 AI 和开发者工具的最新动态。',

  // Skills
  'skills.heading': '技能与技术',
  'skills.categories.Languages': '编程语言',
  'skills.categories.Frontend': '前端',
  'skills.categories.Backend': '后端',
  'skills.categories.Infrastructure': '基础设施',

  // Experience
  'experience.heading': '工作经历',
  'experience.items': [
    {
      role: '工程总监',
      company: 'Tech Company',
      period: '2022 — 至今',
      description: [
        '领导 30 多名工程师，横跨多个产品线',
        '推动架构迁移至微服务，将部署时间缩短 70%',
        '围绕代码质量、测试和持续交付建立了工程文化',
      ],
    },
    {
      role: '高级工程经理',
      company: 'Growth Startup',
      period: '2019 — 2022',
      description: [
        '管理 4 个跨职能工程团队，构建核心平台',
        '将工程团队从 12 人扩展到 40 人',
        '实施 OKR 框架和工程师职级体系，促进职业发展',
      ],
    },
    {
      role: '工程经理',
      company: 'SaaS Platform',
      period: '2016 — 2019',
      description: [
        '带领 8 人工程团队构建实时数据处理管道',
        '交付的功能使用户参与度提升 35%',
        '指导初级工程师并建立代码审查机制',
      ],
    },
    {
      role: '高级软件工程师',
      company: 'Enterprise Software Co.',
      period: '2013 — 2016',
      description: [
        '设计并构建日处理超过 1000 万请求的 RESTful API',
        '主导从单体架构到面向服务架构的迁移',
        '推动自动化测试的采用，实现 90% 的代码覆盖率',
      ],
    },
  ],

  // Projects
  'projects.heading': '项目',
  'projects.items': [
    {
      title: '云基础设施平台',
      description:
        '内部开发者平台，抽象云端复杂性，使团队能够通过一条命令即可部署服务。',
      tech: ['Go', 'Kubernetes', 'Terraform', 'React'],
      github: 'https://github.com',
    },
    {
      title: '实时分析仪表板',
      description:
        '高性能仪表板，每秒处理数百万事件，查询延迟低于一秒。',
      tech: ['TypeScript', 'React', 'ClickHouse', 'WebSocket'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'AI 代码审查机器人',
      description:
        '自动化代码审查工具，利用大语言模型为 Pull Request 提供上下文反馈。',
      tech: ['Python', 'OpenAI', 'GitHub API', 'FastAPI'],
      github: 'https://github.com',
    },
    {
      title: '分布式任务队列',
      description:
        '容错型分布式任务队列，每天支持数百万个任务，具备恰好一次语义。',
      tech: ['Go', 'Redis', 'PostgreSQL', 'gRPC'],
      github: 'https://github.com',
    },
    {
      title: '工程效能追踪器',
      description:
        '跟踪 DORA 指标和团队工程效能的工具，提供可自定义的仪表板。',
      tech: ['Next.js', 'TypeScript', 'D3.js', 'Prisma'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: '开源 CLI 工具',
      description:
        '用于搭建微服务脚手架的开发者 CLI，内置日志、监控和测试的最佳实践。',
      tech: ['Rust', 'CLI', 'Docker'],
      github: 'https://github.com',
    },
  ],

  // Blog
  'blog.heading': '博客',
  'blog.readMore': '阅读更多',
  'blog.items': [
    {
      title: '在不影响速度的前提下扩展工程团队',
      date: '2025-12-15',
      summary:
        '从 12 人扩展到 40 多名工程师的过程中，如何保持交付速度的经验分享。',
      url: '#',
      tags: ['领导力', '工程文化'],
    },
    {
      title: '选择"无聊"技术的理由',
      date: '2025-09-20',
      summary:
        '为什么选择成熟、被充分验证的技术往往比追逐最新框架更明智。',
      url: '#',
      tags: ['架构', '策略'],
    },
    {
      title: '从零构建开发者平台',
      date: '2025-06-10',
      summary:
        '深入解析如何构建将部署时间缩短 70% 的内部开发者平台。',
      url: '#',
      tags: ['平台工程', 'DevOps'],
    },
    {
      title: '大规模高效代码审查',
      date: '2025-03-05',
      summary:
        '团队增长时，如何通过代码审查保持质量而不成为瓶颈。',
      url: '#',
      tags: ['最佳实践', '团队管理'],
    },
  ],

  // Contact
  'contact.heading': '联系我',
  'contact.text':
    '无论你想讨论工程领导力、在项目上进行合作，还是只想打个招呼——我的邮箱随时欢迎。我会尽快回复你。',
  'contact.emailBtn': '发送邮件',

  // Footer
  'footer.resumeLink': '下载简历 (PDF)',
  'footer.credit': '用心构建',
  'footer.creditBy': 'by Henry Ma',
};
