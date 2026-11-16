import type { Term } from '../types';

// Omar's Dev Dictionary — additional Architecture terms (part B).

export const ARCHITECTURE_EXTRA_B_TERMS: Term[] = [
  {
    id: 'legacy-code',
    name: 'Legacy Code',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 76,
    related: ['refactoring', 'technical-debt'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Legacy code is code that works and earns money but is hard to change safely — often untested and written under old constraints.',
        simple: 'Legacy code is the old house you must renovate while people still live in it.',
        whenToUse: 'Never rewrite it in one go: add characterization tests, create seams, and replace piece by piece.',
        mistakes: 'The big-bang rewrite fails far more often than the strangler-fig approach.'
      },
      'ar-msa': {
        definition: 'الكود القديم كود يعمل ويكسب المال لكن يصعب تغييره بأمان — غالبًا بلا اختبارات وكُتب تحت قيود قديمة.',
        simple: 'الكود القديم بيت عتيق تجدده والناس ما زالت تسكن فيه.',
        whenToUse: 'لا تعيد كتابته دفعة واحدة: أضف اختبارات توصيف واصنع دروزًا واستبدل قطعة قطعة.',
        mistakes: 'إعادة الكتابة الشاملة تفشل أكثر بكثير من نهج التين الخانق.'
      }
    }
  },
  {
    id: 'clean-code',
    name: 'Clean Code',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 82,
    related: ['refactoring', 'readable-code'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Clean code is code written to be read by humans first: clear names, small functions, single responsibilities, and minimal cleverness.',
        simple: 'Clean code reads like prose — you know what it does before you finish the line.',
        whenToUse: 'Always; code is read far more often than it is written.',
        mistakes: 'Clever one-liners that take a minute to write and an hour to debug.'
      },
      'ar-msa': {
        definition: 'الكود النظيف كود كتب ليقرأه البشر أولًا: أسماء واضحة ودوال صغيرة ومسؤوليات واحدة وذكاء أدنى.',
        simple: 'الكود النظيف يقرأ كنثر — تعرف ما يفعله قبل أن تكمل السطر.',
        whenToUse: 'دائمًا؛ فالكود يقرأ أكثر بكثير مما يكتب.',
        mistakes: 'أسطر ذكية تأخذ دقيقة للكتابة وساعة للتنقيح.'
      }
    }
  },
  {
    id: 'optimization',
    name: 'Optimization',
    category: 'architecture',
    subcategory: 'Performance',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['performance', 'big-o', 'lazy-loading'],
    prerequisites: ['performance'],
    resources: [],
    content: {
      en: {
        definition: 'Optimization is the deliberate act of making code faster or lighter after measurement proves where the real cost is.',
        simple: 'Optimization is fixing only what the stopwatch says is slow.',
        whenToUse: 'Measure, optimize the top cost, re-measure — premature optimization is wasted effort.',
        mistakes: 'Optimizing before measuring; most guesses about slow code are wrong.'
      },
      'ar-msa': {
        definition: 'التحسين هو الفعل المقصود لتسريع الكود أو تخفيفه بعد أن يثبت القياس أين التكلفة الحقيقية.',
        simple: 'التحسين هو إصلاح ما تقول ساعة الإيقاف إنه بطيء فقط.',
        whenToUse: 'قس، ثم حسن أكبر تكلفة، ثم قس مجددًا — فالتحسين المبكر جهد ضائع.',
        mistakes: 'التحسين قبل القياس؛ معظم التخمينات عن الكود البطيء خاطئة.'
      }
    }
  },
  {
    id: 'lazy-loading',
    name: 'Lazy Loading',
    category: 'architecture',
    subcategory: 'Performance',
    difficulty: 'intermediate',
    popularity: 78,
    related: ['optimization', 'bundler', 'spa'],
    prerequisites: ['optimization'],
    resources: [],
    content: {
      en: {
        definition: 'Lazy loading defers loading a resource until it is actually needed — a route, an image, a heavy component — keeping the initial bundle small.',
        simple: 'Lazy loading is not carrying the whole toolbox when you only need the screwdriver.',
        whenToUse: 'Route-level code splitting in SPAs and below-the-fold images.',
        mistakes: 'Lazy-loading everything adds waterfalls of requests — lazy-load the heavy and rarely used parts.'
      },
      'ar-msa': {
        definition: 'التحميل البطيء يؤخر تحميل مورد حتى الحاجة الفعلية إليه — مسارًا أو صورة أو مكونًا ثقيلًا — فيبقي الحزمة الأولية صغيرة.',
        simple: 'التحميل البطيء يعني ألا تحمل صندوق الأدوات كله وأنت تحتاج مفكًا واحدًا.',
        whenToUse: 'تقسيم الكود على مستوى المسارات في تطبيقات SPA والصور تحت الشاشة.',
        mistakes: 'التحميل البطيء لكل شيء يضيف شلالات من الطلبات — حمل ببطء الأجزاء الثقيلة النادرة الاستخدام.'
      }
    }
  }
];
const minification: Term = {
  id: 'minification',
  name: 'Minification',
  category: 'architecture',
  subcategory: 'Performance',
  difficulty: 'beginner',
  popularity: 77,
  related: ['build', 'bundler', 'tree-shaking'],
  prerequisites: ['build'],
  resources: [],
  content: {
    en: {
      definition: 'Minification strips comments, whitespace, and shortens names in production code, making files smaller and faster to download.',
      simple: 'Minification is squeezing the air out of your code before shipping it.',
      whenToUse: 'Always in production builds — automatic with Vite.',
      mistakes: 'Debugging minified code directly — ship source maps to your error tracker instead.'
    },
    'ar-msa': {
      definition: 'التصغير ينزع التعليقات والمسافات ويقصّر الأسماء في كود الإنتاج، فتصبح الملفات أصغر وأسرع تنزيلًا.',
      simple: 'التصغير هو عصر الهواء من كودك قبل شحنه.',
      whenToUse: 'دائمًا في بناء الإنتاج — تلقائي مع Vite.',
      mistakes: 'تنقيح الكود المصغر مباشرة — أرسل خرائط المصدر لمتعقب أخطائك بدلًا من ذلك.'
    }
  }
};

const treeShaking: Term = {
  id: 'tree-shaking',
  name: 'Tree Shaking',
  category: 'architecture',
  subcategory: 'Performance',
  difficulty: 'intermediate',
  popularity: 74,
  related: ['bundler', 'minification', 'build'],
  prerequisites: ['bundler'],
  resources: [],
  content: {
    en: {
      definition: 'Tree shaking is the bundler removing code that is exported but never imported, so unused library code does not ship.',
      simple: 'Tree shaking is pruning branches you never use from the tree.',
      whenToUse: 'Works best with ES modules and explicit imports; side-effect-heavy libraries resist it.',
      mistakes: 'Importing an entire library when you need one function defeats tree shaking.'
    },
    'ar-msa': {
      definition: 'هز الشجرة هو إزالة الحازم للكود المصدَّر غير المستورد قط، فلا يشحن كود المكتبات غير المستخدم.',
      simple: 'هز الشجرة هو تقليم الفروع التي لا تستخدمها من الشجرة.',
      whenToUse: 'يعمل أفضل مع وحدات ES واستيرادات صريحة؛ والمكتبات كثيرة التأثيرات الجانبية تقاومه.',
      mistakes: 'استيراد مكتبة كاملة وأنت تحتاج دالة واحدة يهزم هز الشجرة.'
    }
  }
};

const hosting: Term = {
  id: 'hosting',
  name: 'Hosting',
  category: 'architecture',
  subcategory: 'Delivery',
  difficulty: 'beginner',
  popularity: 79,
  related: ['deploy', 'server', 'domain'],
  prerequisites: ['deploy'],
  resources: [],
  content: {
    en: {
      definition: 'Hosting is the service that keeps your application files available on servers reachable from the internet.',
      simple: 'Hosting is renting the land where your app lives.',
      whenToUse: 'Static hosts fit built SPAs and PWAs perfectly — this dictionary is a pure static build.',
      mistakes: 'Forgetting to configure redirects for SPA routing (though HashRouter avoids that need).'
    },
    'ar-msa': {
      definition: 'الاستضافة هي الخدمة التي تبقي ملفات تطبيقك متاحة على سيرفرات يمكن الوصول إليها من الإنترنت.',
      simple: 'الاستضافة استئجار الأرض التي يسكنها تطبيقك.',
      whenToUse: 'الاستضافات الثابتة تناسب بناءات SPA و PWA تمامًا — وهذا القاموس بناء ثابت خالص.',
      mistakes: 'نسيان تهيئة إعادة التوجيه لتوجيه SPA (مع أن HashRouter يغنيك عنها).'
    }
  }
};

const domain: Term = {
  id: 'domain',
  name: 'Domain',
  category: 'architecture',
  subcategory: 'Delivery',
  difficulty: 'beginner',
  popularity: 77,
  related: ['hosting', 'deploy'],
  prerequisites: ['hosting'],
  resources: [],
  content: {
    en: {
      definition: 'A domain is the human-readable address of a site (like omar.dev) that DNS translates into the server IP address.',
      simple: 'A domain is your app street name on the internet.',
      whenToUse: 'Buy a domain, point its DNS records to your host, and always keep HTTPS on it.',
      mistakes: 'Letting a domain expire — you lose emails, subdomains, and your identity overnight.'
    },
    'ar-msa': {
      definition: 'النطاق هو العنوان المقروء للبشر لموقع (مثل omar.dev) ويترجمه DNS إلى عنوان IP للسيرفر.',
      simple: 'النطاق اسم شارع تطبيقك على الإنترنت.',
      whenToUse: 'اشتر نطاقًا ووجه سجلات DNS إلى مستضيفك، وأبق HTTPS مفعلا دائمًا.',
      mistakes: 'ترك النطاق ينتهي — تفقد البريد والنطاقات الفرعية وهويتك في ليلة.'
    }
  }
};

const license: Term = {
  id: 'license',
  name: 'License',
  category: 'architecture',
  subcategory: 'Delivery',
  difficulty: 'beginner',
  popularity: 75,
  related: ['open-source', 'package'],
  prerequisites: ['open-source'],
  resources: [],
  content: {
    en: {
      definition: 'A software license is the legal text that defines what others may do with your code: use, modify, distribute, or nothing.',
      simple: 'A license is the rules sign at the pool: what is allowed and what is not.',
      whenToUse: 'Every published project needs one — no license means all rights reserved by default.',
      mistakes: 'Assuming public code is free to copy — check the license of every dependency you adopt.'
    },
    'ar-msa': {
      definition: 'ترخيص البرمجيات نص قانوني يحدد ما يجوز لغيرك فعله بكودك: استخدامًا وتعديلًا وتوزيعًا أو لا شيء.',
      simple: 'الترخيص لافتة قواعد المسبح: ما المسموح وما غير المسموح.',
      whenToUse: 'كل مشروع منشور يحتاج ترخيصًا — وغيابه يعني كل الحقوق محفوظة افتراضيًا.',
      mistakes: 'افتراض أن الكود العام حر النسخ — افحص ترخيص كل اعتمادية تتبناها.'
    }
  }
};

ARCHITECTURE_EXTRA_B_TERMS.push(minification, treeShaking, hosting, domain, license);
