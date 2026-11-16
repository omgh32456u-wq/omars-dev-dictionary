import type { Term } from '../types';

// Omar's Dev Dictionary — additional Tools & Workflow terms.

export const TOOLS_EXTRA_TERMS: Term[] = [
  {
    id: 'code-review',
    name: 'Code Review',
    category: 'tools',
    subcategory: 'Collaboration',
    difficulty: 'beginner',
    popularity: 84,
    related: ['pull-request', 'testing', 'ci-cd'],
    prerequisites: ['pull-request'],
    resources: [],
    content: {
      en: {
        definition: 'Code review is the practice of teammates reading and commenting on each other changes before merge, catching bugs and spreading knowledge.',
        simple: 'Code review is a second pair of eyes before the code ships.',
        whenToUse: 'Every PR to a shared branch, without exception; keep reviews small and kind.',
        mistakes: 'Reviewing only for style when the logic is wrong — use a linter for style and review for correctness.'
      },
      'ar-msa': {
        definition: 'مراجعة الكود هي قراءة الزملاء لتغييرات بعضهم قبل الدمج، لإمساك الأخطاء ونشر المعرفة.',
        simple: 'مراجعة الكود عين إضافية قبل شحن الكود.',
        whenToUse: 'كل Pull Request إلى فرع مشترك بلا استثناء؛ وأبقِ المراجعات صغيرة ولطيفة.',
        mistakes: 'المراجعة للأسلوب فقط بينما المنطق خطأ — فوض الأسلوب للـ Linter وراجع الصحة.'
      }
    }
  },
  {
    id: 'open-source',
    name: 'Open Source',
    category: 'tools',
    subcategory: 'Collaboration',
    difficulty: 'beginner',
    popularity: 86,
    related: ['github', 'license', 'repository'],
    prerequisites: ['github'],
    resources: [],
    content: {
      en: {
        definition: 'Open source is the practice of publishing source code under licenses that let anyone read, use, modify, and redistribute it.',
        simple: 'Open source is a shared kitchen: anyone can look at the recipe and improve the dish.',
        whenToUse: 'Publishing libraries and tools for community benefit — but read the license before you reuse code.',
        mistakes: 'Public repository does not mean free to use: the license defines what you may do.'
      },
      'ar-msa': {
        definition: 'المصدر المفتوح هو نشر الكود تحت تراخيص تتيح لأي شخص قراءته واستخدامه وتعديله وإعادة توزيعه.',
        simple: 'المصدر المفتوح مطبخ مشترك: يمكن لأي شخص رؤية الوصفة وتحسين الطبق.',
        whenToUse: 'نشر المكتبات والأدوات لمنفعة المجتمع — لكن اقرأ الترخيص قبل إعادة الاستخدام.',
        mistakes: 'المستودع العام لا يعني الاستخدام مجاني: الترخيص يحدد ما يحق لك.'
      }
    }
  },
  {
    id: 'dev-server',
    name: 'Dev Server',
    category: 'tools',
    subcategory: 'Build tools',
    difficulty: 'beginner',
    popularity: 78,
    related: ['vite', 'build'],
    prerequisites: ['vite'],
    resources: [],
    content: {
      en: {
        definition: 'A dev server is the local server your build tool runs during development, serving modules directly for instant feedback as you save.',
        simple: 'The dev server is your private preview of the app while you code.',
        whenToUse: 'Always during development; switch to the production build before measuring performance.',
        mistakes: 'Performance measured on the dev server is meaningless — always profile the production build.'
      },
      'ar-msa': {
        definition: 'سيرفر التطوير سيرفر محلي يشغله جهاز البناء أثناء التطوير، يقدم الوحدات مباشرة لاستجابة فورية عند الحفظ.',
        simple: 'سيرفر التطوير معاينتك الخاصة للتطبيق أثناء الكود.',
        whenToUse: 'دائمًا أثناء التطوير؛ وانتقل لبناء الإنتاج قبل قياس الأداء.',
        mistakes: 'الأداء المقاس على سيرفر التطوير بلا معنى — قس دائمًا بناء الإنتاج.'
      }
    }
  },
  {
    id: 'bundler',
    name: 'Bundler',
    category: 'tools',
    subcategory: 'Build tools',
    difficulty: 'intermediate',
    popularity: 77,
    related: ['vite', 'build', 'tree-shaking'],
    prerequisites: ['build'],
    resources: [],
    content: {
      en: {
        definition: 'A bundler is a build tool that resolves your import graph and combines modules into a small number of optimized files the browser loads efficiently.',
        simple: 'A bundler takes your many files and packs them into a few shippable ones.',
        whenToUse: 'Any production frontend; Vite uses Rollup for production bundling.',
        mistakes: 'One giant bundle wastes load time — split by route and vendor.'
      },
      'ar-msa': {
        definition: 'أداة الحزم تحل رسم استيراداتك وتدمج الوحدات في عدد صغير من الملفات المحسنة التي تحملها المتصفحات بكفاءة.',
        simple: 'أداة الحزم تأخذ ملفاتك الكثيرة وتحزمها في ملفات قليلة قابلة للشحن.',
        whenToUse: 'أي واجهة إنتاج؛ و Vite يستخدم Rollup لحزم الإنتاج.',
        mistakes: 'الحزمة الواحدة العملاقة تهدر زمن التحميل — قسّمها حسب المسار والمورد.'
      }
    }
  },
  {
    id: 'devtools',
    name: 'DevTools',
    category: 'tools',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 83,
    related: ['debugging', 'debugger', 'browser'],
    prerequisites: ['browser'],
    resources: [],
    content: {
      en: {
        definition: 'DevTools are the browser built-in developer tools: DOM inspector, JavaScript console, network monitor, storage viewer, and performance profiler.',
        simple: 'DevTools is the X-ray machine for any web page.',
        whenToUse: 'Debugging layout, inspecting network requests, checking storage keys, and profiling slow code.',
        mistakes: 'Debugging only with console.log misses the power of the Network and Performance panels.'
      },
      'ar-msa': {
        definition: 'الـ DevTools أدوات المطور المدمجة في المتصفح: فاحص DOM ولوحة JavaScript ومراقب الشبكة وعارض التخزين ومحلل الأداء.',
        simple: 'الـ DevTools آلة أشعة سينية لأي صفحة ويب.',
        whenToUse: 'تنقيح التخطيط وفحص طلبات الشبكة ومعاينة مفاتيح التخزين وتحليل الكود البطيء.',
        mistakes: 'التنقيح بـ console.log فقط يفوتك قوة لوحتي Network و Performance.'
      }
    }
  },
  {
    id: 'breakpoint',
    name: 'Breakpoint',
    category: 'tools',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 79,
    related: ['debugger', 'devtools', 'debugging'],
    prerequisites: ['debugger'],
    resources: [],
    content: {
      en: {
        definition: 'A breakpoint is a marker on a line of code where the debugger pauses execution so you can inspect variables and step forward.',
        simple: 'A breakpoint is a stop sign you plant on a line to freeze the program there.',
        whenToUse: 'When console.log is not enough and you need to watch values change over time.',
        mistakes: 'Breakpoints left in committed code surprise other developers — use debugger statements only while hunting.'
      },
      'ar-msa': {
        definition: 'نقطة التوقف علامة على سطر كود يوقف عنده المصحح التنفيذ لتتأمل المتغيرات وتتقدم خطوة بخطوة.',
        simple: 'نقطة التوقف لافتة توقف تغرسها على سطر لتجميد البرنامج هناك.',
        whenToUse: 'عندما لا يكفي console.log وتحتاج مراقبة القيم وهي تتغير عبر الزمن.',
        mistakes: 'نقاط التوقف المتروكة في الكود الملتزم تفاجئ بقية المطورين — استخدم debugger أثناء الصيد فقط.'
      }
    }
  },
  {
    id: 'eslint',
    name: 'ESLint',
    category: 'tools',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 81,
    related: ['linter', 'formatter', 'typescript'],
    prerequisites: ['linter'],
    resources: [{ label: 'ESLint — Docs', url: 'https://eslint.org/docs/latest/', verified: false }],
    content: {
      en: {
        definition: 'ESLint is the standard linter for JavaScript and TypeScript, with plugin ecosystems covering rules for React Hooks, accessibility, and more.',
        simple: 'ESLint is the referee that keeps your whole codebase honest.',
        whenToUse: 'This app runs ESLint with TypeScript and React Hooks rules; run lint in CI alongside tests.',
        mistakes: 'Disabling a rule with a comment instead of understanding why it fired.'
      },
      'ar-msa': {
        definition: 'الـ ESLint هو المعيار للتنقيح في JavaScript و TypeScript، مع منظومة إضافات تغطي قواعد React Hooks وإمكانية الوصول وغيرها.',
        simple: 'الـ ESLint هو الحكم الذي يبقي قاعدة كودك كلها أمينة.',
        whenToUse: 'هذا التطبيق يشغل ESLint مع قواعد TypeScript و React Hooks؛ شغّل lint في CI مع الاختبارات.',
        mistakes: 'تعطيل قاعدة بتعليق بدل فهم سبب إطلاقها.'
      }
    }
  },
  {
    id: 'command',
    name: 'Command',
    category: 'tools',
    subcategory: 'Environment',
    difficulty: 'beginner',
    popularity: 76,
    related: ['cli', 'terminal', 'shell'],
    prerequisites: ['terminal'],
    resources: [],
    content: {
      en: {
        definition: 'A command is a typed instruction to a program or shell, usually a name followed by flags and arguments.',
        simple: 'A command is a sentence you type to make the computer do something.',
        example: {
          text: 'git status is the command; --short is a flag.',
          code: "git status --short",
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'الأمر تعليمات مكتوبة لبرنامج أو Shell، عادة اسم يتبعه أعلام ووسائط.',
        simple: 'الأمر جملة تكتبها ليقوم الحاسوب بفعل شيء.'
      }
    }
  },
  {
    id: 'remote',
    name: 'Remote',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 75,
    related: ['git', 'push', 'pull', 'github'],
    prerequisites: ['git'],
    resources: [],
    content: {
      en: {
        definition: 'In Git, a remote is a named pointer to an external repository copy (usually on GitHub) that you push to and pull from.',
        simple: 'A remote is your project address book entry for the online copy.',
        example: {
          text: 'origin is the conventional name for the main remote.',
          code: "git remote -v\ngit remote add upstream https://github.com/other/repo.git",
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'في Git، الـ Remote مؤشر مسمى إلى نسخة مستودع خارجية (عادة على GitHub) تدفع إليها وتسحب منها.',
        simple: 'الـ Remote هو مدخل دفتر عناوين مشروعك للنسخة الإلكترونية.'
      }
    }
  }
];
