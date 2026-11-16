import type { Term } from '../types';

// Omar's Dev Dictionary — additional Architecture terms (batch 2).

export const ARCHITECTURE_2_TERMS: Term[] = [
  {
    id: 'single-responsibility',
    name: 'Single Responsibility',
    category: 'architecture',
    subcategory: 'Patterns',
    difficulty: 'beginner',
    popularity: 77,
    related: ['clean-code', 'design-pattern', 'refactoring'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'The Single Responsibility principle says a module, class, or function should have exactly one reason to change.',
        simple: 'One piece of code, one job — the multi-tool that does everything does everything badly.',
        whenToUse: 'When a file name cannot describe its contents in one phrase, it probably has too many jobs.',
        mistakes: 'Splitting for the sake of splitting: responsibility is about reasons to change, not line count.'
      },
      'ar-msa': {
        definition: 'مبدأ المسؤولية الواحدة يقول إن الوحدة أو الصنف أو الدالة يجب أن يكون لها سبب واحد بالضبط للتغيير.',
        simple: 'قطعة كود واحدة، وظيفة واحدة — الأداة متعددة الاستخدامات تفعل كل شيء بشكل رديء.',
        whenToUse: 'إذا عجز اسم الملف عن وصف محتواه بعبارة واحدة فغالبًا لديه وظائف أكثر من اللازم.',
        mistakes: 'التقسيم لمجرد التقسيم: المسؤولية عن أسباب التغيير لا عن عدد الأسطر.'
      }
    }
  },
  {
    id: 'separation-of-concerns',
    name: 'Separation of Concerns',
    category: 'architecture',
    subcategory: 'Patterns',
    difficulty: 'beginner',
    popularity: 79,
    related: ['single-responsibility', 'architecture', 'clean-code'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Separation of concerns is dividing a program into distinct sections, each addressing a separate aspect — data, UI, logic — so they can change independently.',
        simple: 'Separation of concerns is giving each department its own office so one renovation does not stop the company.',
        whenToUse: 'This dictionary separates content, preferences, user data, translations, and speech into different modules for exactly this reason.'
      },
      'ar-msa': {
        definition: 'فصل الاهتمامات هو تقسيم البرنامج إلى أقسام مميزة، كل قسم يعالج جانبًا مستقلًا — البيانات والواجهة والمنطق — لتتغير باستقلال.',
        simple: 'فصل الاهتمامات منح كل قسم مكتبه الخاص فلا يوقف تجديدٌ واحدٌ الشركة كلها.',
        whenToUse: 'هذا القاموس يفصل المحتوى والتفضيلات وبيانات المستخدم والترجمات والصوت في وحدات مختلفة لهذا السبب بالضبط.'
      }
    }
  },
  {
    id: 'observability',
    name: 'Observability',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 76,
    related: ['logging', 'monitoring', 'debugging'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Observability is how well you can understand a running system from its outputs: logs, metrics, and traces that answer questions you did not anticipate.',
        simple: 'Observability means the system can be interviewed while it is running.',
        whenToUse: 'Structured logs, counters, and traces on every request path — debugging production blind is guesswork.'
      },
      'ar-msa': {
        definition: 'قابلية الرصد هي مدى قدرتك على فهم نظام يعمل من مخرجاته: سجلات ومقاييس وتتبعات تجيب عن أسئلة لم تتوقعها.',
        simple: 'قابلية الرصد تعني إمكانية استجواب النظام وهو يعمل.',
        whenToUse: 'سجلات منظمة وعدادات وتتبعات على كل مسار طلب — فتنقيح الإنتاج أعمى تخمين.'
      }
    }
  },
  {
    id: 'concurrency',
    name: 'Concurrency',
    category: 'architecture',
    subcategory: 'Performance',
    difficulty: 'advanced',
    popularity: 75,
    related: ['asynchronous-programming', 'event-loop', 'thread'],
    prerequisites: ['asynchronous-programming'],
    resources: [],
    content: {
      en: {
        definition: 'Concurrency is composing a program from independently progressing tasks; parallelism is literally running them at the same instant on multiple cores.',
        simple: 'Concurrency is juggling many balls; parallelism is having many hands.',
        whenToUse: 'JavaScript is single-threaded but concurrent through the event loop; true parallelism needs Web Workers or server threads.',
        mistakes: 'Sharing mutable state across concurrent tasks creates race conditions — share immutable data or use message passing.'
      },
      'ar-msa': {
        definition: 'التزامن هو تركيب برنامج من مهام تتقدم باستقلال؛ أما التوازي فتشغيلها فعليًا في اللحظة نفسها على أنوية متعددة.',
        simple: 'التزامن لعب عدة كرات؛ والتوازي امتلاك عدة أيدي.',
        whenToUse: 'الـ JavaScript أحادي الخيط لكنه متزامن عبر حلقة الأحداث؛ والتوازي الحقيقي يحتاج Web Workers أو خيوط السيرفر.',
        mistakes: 'مشاركة حالة قابلة للتغيير عبر مهام متزامنة تخلق حالات سباق — شارك بيانات غير قابلة للتغيير أو استخدم تمرير الرسائل.'
      }
    }
  },
  {
    id: 'web-worker',
    name: 'Web Worker',
    category: 'architecture',
    subcategory: 'Performance',
    difficulty: 'advanced',
    popularity: 72,
    related: ['concurrency', 'thread', 'browser'],
    prerequisites: ['concurrency', 'browser'],
    resources: [],
    content: {
      en: {
        definition: 'A Web Worker is a background thread in the browser that runs scripts without blocking the UI thread, communicating via message passing.',
        simple: 'A Web Worker is a helper cook in the back kitchen so the front counter never freezes.',
        whenToUse: 'Parsing huge files, heavy computation, and anything that would block the main thread for more than ~50ms.',
        mistakes: 'Workers cannot touch the DOM and share no memory (by default) — plan what crosses the message boundary.'
      },
      'ar-msa': {
        definition: 'الـ Web Worker خيط خلفي في المتصفح يشغل السكربتات دون حجب خيط الواجهة، ويتواصل عبر تمرير الرسائل.',
        simple: 'الـ Web Worker طباخ مساعد في المطبخ الخلفي فلا تتجمد الطاولة الأمامية أبدًا.',
        whenToUse: 'تحليل ملفات ضخمة وحسابات ثقيلة وكل ما قد يحجب الخيط الرئيسي أكثر من 50 مللي ثانية تقريبًا.',
        mistakes: 'الـ Workers لا تلمس الـ DOM ولا تشارك الذاكرة افتراضيًا — خطط لما يعبر حدود الرسائل.'
      }
    }
  }
];
