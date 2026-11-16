import type { LearningPath } from '../types';

// Omar's Dev Dictionary — learning paths.
// Every step id must exist in the dictionary (tests enforce this).

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'programming-fundamentals',
    en: 'Programming Fundamentals',
    ar: 'أساسيات البرمجة',
    descriptionEn: 'The bedrock: from variables to functions to data structures.',
    descriptionAr: 'الأساس الراسخ: من المتغيرات إلى الدوال إلى هياكل البيانات.',
    steps: [
      'variables',
      'data-types',
      'operators',
      'conditions',
      'loops',
      'functions',
      'arrays',
      'objects',
      'scope',
      'recursion',
      'algorithms',
      'data-structures'
    ]
  },
  {
    id: 'web-development-fundamentals',
    en: 'Web Development Fundamentals',
    ar: 'أساسيات تطوير الويب',
    descriptionEn: 'How the web actually works, from page to protocol.',
    descriptionAr: 'كيف يعمل الويب فعليًا، من الصفحة إلى البروتوكول.',
    steps: [
      'html',
      'css',
      'javascript',
      'dom',
      'events',
      'responsive-design',
      'accessibility',
      'http',
      'https',
      'json',
      'browser',
      'client',
      'server'
    ]
  },
  {
    id: 'javascript-learning-path',
    en: 'JavaScript Learning Path',
    ar: 'مسار تعلم JavaScript',
    descriptionEn: 'JavaScript deeply: types, async, closures, and the event loop.',
    descriptionAr: 'JavaScript بعمق: الأنواع وغير المتزامن والإغلاقات وحلقة الأحداث.',
    steps: [
      'variables',
      'functions',
      'callback',
      'promise',
      'async-await',
      'try-catch',
      'scope',
      'closure',
      'event-loop',
      'map-filter-reduce',
      'destructuring',
      'spread-rest',
      'typescript'
    ]
  },
  {
    id: 'git-and-version-control',
    en: 'Git and Version Control',
    ar: 'Git والتحكم في الإصدارات',
    descriptionEn: 'Own your project history: Git, branches, remotes, and PRs.',
    descriptionAr: 'امتلك تاريخ مشروعك: Git والفروع والـ Remotes والـ Pull Requests.',
    steps: [
      'git',
      'repository',
      'commit',
      'staging',
      'branch',
      'merge',
      'conflict',
      'remote',
      'clone',
      'push',
      'pull',
      'rebase',
      'pull-request',
      'github'
    ]
  },
  {
    id: 'frontend-development',
    en: 'Frontend Development',
    ar: 'تطوير الواجهات الأمامية',
    descriptionEn: 'Build interactive interfaces with React and modern tooling.',
    descriptionAr: 'ابنِ واجهات تفاعلية بـ React وأدوات العصر الحديثة.',
    steps: [
      'javascript',
      'typescript',
      'component',
      'state',
      'props',
      'hook',
      'react',
      'routing',
      'spa',
      'vite',
      'pwa'
    ]
  },
  {
    id: 'backend-and-apis',
    en: 'Backend and APIs',
    ar: 'الخدمة الخلفية وواجهات API',
    descriptionEn: 'Servers, APIs, authentication, and the request pipeline.',
    descriptionAr: 'السيرفرات وواجهات API والمصادقة ومسار الطلب.',
    steps: [
      'server',
      'backend',
      'api',
      'api-endpoint',
      'rest',
      'http-status-codes',
      'middleware',
      'authentication',
      'authorization',
      'jwt',
      'crud'
    ]
  },
  {
    id: 'database-fundamentals',
    en: 'Database Fundamentals',
    ar: 'أساسيات قواعد البيانات',
    descriptionEn: 'Model data properly: tables, keys, queries, and migrations.',
    descriptionAr: 'نمذج البيانات باحتراف: الجداول والمفاتيح والاستعلامات والـ Migrations.',
    steps: [
      'database',
      'table',
      'row',
      'column',
      'primary-key',
      'foreign-key',
      'schema',
      'sql',
      'join',
      'index',
      'normalization',
      'migration'
    ]
  },
  {
    id: 'modern-development-workflow',
    en: 'Modern Development Workflow',
    ar: 'سير العمل الحديث للتطوير',
    descriptionEn: 'Ship like a professional: testing, CI/CD, and code quality.',
    descriptionAr: 'اشحن كالمحترفين: الاختبارات و CI/CD وجودة الكود.',
    steps: [
      'terminal',
      'cli',
      'package-manager',
      'npm',
      'linter',
      'formatter',
      'unit-testing',
      'testing',
      'github-actions',
      'ci-cd',
      'build',
      'deploy'
    ]
  }
];
