import type { CategoryId, CategoryMeta, Difficulty } from '../types';

// Omar's Dev Dictionary — category and difficulty metadata.
// Technical names (Git, API, JavaScript, ...) always keep their English spelling.

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'fundamentals',
    en: 'Programming Fundamentals',
    ar: 'أساسيات البرمجة',
    descriptionEn: 'Core building blocks every developer needs: variables, functions, data structures, and control flow.',
    descriptionAr: 'الأساسيات التي يحتاجها كل مطور: المتغيرات والدوال وهياكل البيانات والتحكم في التنفيذ.'
  },
  {
    id: 'web',
    en: 'Web Development',
    ar: 'تطوير الويب',
    descriptionEn: 'How the web works: HTML, CSS, JavaScript, HTTP, and the browser.',
    descriptionAr: 'كيف يعمل الويب: HTML و CSS و JavaScript و HTTP والمتصفح.'
  },
  {
    id: 'tools',
    en: 'Development Tools & Workflow',
    ar: 'أدوات التطوير وسير العمل',
    descriptionEn: 'Git, terminals, package managers, CI/CD, and the daily workflow of developers.',
    descriptionAr: 'Git والطرفية ومديري الحزم و CI/CD وسير عمل المطورين اليومي.'
  },
  {
    id: 'backend',
    en: 'Databases & Backend',
    ar: 'قواعد البيانات والخلفية',
    descriptionEn: 'Servers, API, databases, SQL, and everything behind the frontend.',
    descriptionAr: 'السيرفرات و API وقواعد البيانات و SQL وكل ما يحدث خلف الواجهة الأمامية.'
  },
  {
    id: 'architecture',
    en: 'Software Engineering & Architecture',
    ar: 'هندسة البرمجيات والمعمارية',
    descriptionEn: 'Frameworks, design patterns, testing, performance, and structuring real applications.',
    descriptionAr: 'الأطر وأنماط التصميم والاختبارات والأداء وبناء التطبيقات الحقيقية.'
  },
  {
    id: 'modern',
    en: 'Mobile & Modern Technologies',
    ar: 'تطبيقات الموبايل والتقنيات الحديثة',
    descriptionEn: 'Mobile platforms, cross-platform tools, and AI concepts every developer meets today.',
    descriptionAr: 'منصات الموبايل والأدوات متعددة المنصات ومفاهيم الذكاء الاصطناعي التي يقابلها كل مطور اليوم.'
  }
];

export function getCategory(id: CategoryId): CategoryMeta {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0]!;
}

export const DIFFICULTY_LABELS: Record<Difficulty, { en: string; ar: string }> = {
  beginner: { en: 'Beginner', ar: 'مبتدئ' },
  intermediate: { en: 'Intermediate', ar: 'متوسط' },
  advanced: { en: 'Advanced', ar: 'متقدم' }
};
