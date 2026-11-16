import type { Term } from '../types';

// Omar's Dev Dictionary — additional Architecture terms (part A).

export const ARCHITECTURE_EXTRA_A_TERMS: Term[] = [
  {
    id: 'import',
    name: 'import',
    category: 'architecture',
    subcategory: 'Code organization',
    difficulty: 'beginner',
    popularity: 84,
    related: ['module', 'export', 'package'],
    prerequisites: ['module'],
    resources: [],
    content: {
      en: {
        definition: 'The import statement brings named values from another module into the current file, so you can use them without duplicating code.',
        simple: 'import is borrowing a tool from another drawer.',
        example: {
          text: 'Named imports and default imports.',
          code: "import { speech } from './lib/tts';\nimport TERMS from './data/terms';",
          codeLang: 'ts'
        }
      },
      'ar-msa': {
        definition: 'عبارة import تجلب قيمًا مسماه من وحدة أخرى إلى الملف الحالي لتستخدمها دون تكرار الكود.',
        simple: 'الـ import استعارة أداة من درج آخر.'
      }
    }
  },
  {
    id: 'export',
    name: 'export',
    category: 'architecture',
    subcategory: 'Code organization',
    difficulty: 'beginner',
    popularity: 83,
    related: ['module', 'import'],
    prerequisites: ['module'],
    resources: [],
    content: {
      en: {
        definition: 'The export statement marks values in a module as publicly usable by other modules that import them.',
        simple: 'export is putting your tools in the shared drawer for others.',
        example: {
          text: 'This app exports the speech provider for the UI.',
          code: "export function chunkText(text: string): string[] {\n  return [];\n}",
          codeLang: 'ts'
        }
      },
      'ar-msa': {
        definition: 'عبارة export تجعل القيم في وحدة متاحة لاستيرادها بقية الوحدات.',
        simple: 'الـ export هو وضع أدواتك في الدرج المشترك لغيرك.'
      }
    }
  },
  {
    id: 'garbage-collection',
    name: 'Garbage Collection',
    category: 'architecture',
    subcategory: 'Performance',
    difficulty: 'intermediate',
    popularity: 78,
    related: ['memory', 'memory-leak'],
    prerequisites: ['memory'],
    resources: [],
    content: {
      en: {
        definition: 'Garbage collection is the runtime automatically freeing memory occupied by objects that are no longer reachable from any running code.',
        simple: 'Garbage collection is a robot that sweeps away objects nobody is using anymore.',
        whenToUse: 'GC frees you from manual memory management, but references you forget keep objects alive — remove listeners and clear caches.',
        mistakes: 'Assuming GC means you can never leak memory — forgotten listeners and timers are the classic leak.'
      },
      'ar-msa': {
        definition: 'تجميع القمامة هو استرداد بيئة التشغيل تلقائيًا للذاكرة التي تشغلها كائنات لم يعد يمكن الوصول إليها من أي كود عامل.',
        simple: 'تجميع القمامة روبوت يكنس الكائنات التي لم يستخدمها أحد بعد الآن.',
        whenToUse: 'الـ GC يعفيك من إدارة الذاكرة يدويًا، لكن المراجع المنسية تبقي الكائنات حية — أزل المستمعين وامسح الذاكرات المؤقتة.',
        mistakes: 'افتراض أن GC يعني استحالة تسريب الذاكرة — المستمعون والمؤقتات المنسيون هم التسريب الكلاسيكي.'
      }
    }
  },
  {
    id: 'memory-leak',
    name: 'Memory Leak',
    category: 'architecture',
    subcategory: 'Performance',
    difficulty: 'intermediate',
    popularity: 77,
    related: ['garbage-collection', 'memory'],
    prerequisites: ['garbage-collection'],
    resources: [],
    content: {
      en: {
        definition: 'A memory leak is memory that stays allocated even though the program no longer needs it, usually because a forgotten reference keeps objects alive.',
        simple: 'A memory leak is a closet you keep stuffing but never clean.',
        whenToUse: 'In SPAs, leaks usually come from event listeners, timers, or subscriptions not removed on unmount.',
        mistakes: 'Blaming the browser first — most leaks are your own forgotten subscriptions.'
      },
      'ar-msa': {
        definition: 'تسريب الذاكرة ذاكرة تبقى محجوزة رغم أن البرنامج لم يعد يحتاجها، غالبًا لأن مرجعًا منسيًا يبقي الكائنات حية.',
        simple: 'تسريب الذاكرة خزانة تملؤها ولا تنظفها أبدًا.',
        whenToUse: 'في تطبيقات SPA تأتي التسريبات غالبًا من مستمعي أحداث ومؤقتات واشتراكات لا تزال عند التفكيك.',
        mistakes: 'اتهام المتصفح أولًا — معظم التسريبات اشتراكاتك المنسية أنت.'
      }
    }
  },
  {
    id: 'integration-testing',
    name: 'Integration Testing',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 79,
    related: ['testing', 'unit-testing', 'e2e-testing'],
    prerequisites: ['testing'],
    resources: [],
    content: {
      en: {
        definition: 'Integration testing verifies that multiple units work correctly together — for example, that search combined with filters returns the right terms.',
        simple: 'Integration tests check that the bricks hold together, not just that each brick is fine.',
        whenToUse: 'Between unit tests (too small) and e2e tests (too slow) — test the seams where units meet.',
        mistakes: 'Integration tests that mock everything test nothing but the mocks.'
      },
      'ar-msa': {
        definition: 'اختبار التكامل يتحقق من أن وحدات متعددة تعمل معًا بشكل صحيح — مثلًا أن البحث مع التصفية يعيد المصطلحات الصحيحة.',
        simple: 'اختبارات التكامل تفحص أن الطوب يتماسك، لا أن كل طوبة سليمة وحدها.',
        whenToUse: 'بين اختبارات الوحدة (صغيرة جدًا) واختبارات النهاية (بطيئة جدًا) — اختبر الحدود التي تلتقي عندها الوحدات.',
        mistakes: 'اختبارات التكامل التي تسخر كل شيء لا تختبر إلا السخريات.'
      }
    }
  },
  {
    id: 'e2e-testing',
    name: 'E2E Testing',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'advanced',
    popularity: 76,
    related: ['testing', 'integration-testing', 'browser'],
    prerequisites: ['integration-testing'],
    resources: [],
    content: {
      en: {
        definition: 'End-to-end testing drives the real application in a real browser the way a user would: clicking, typing, and asserting what appears.',
        simple: 'E2E tests are robots that use your app like a human.',
        whenToUse: 'A thin layer of E2E tests on the critical paths (search, open term, change settings), with unit and integration tests below.',
        mistakes: 'A hundred flaky E2E tests slow CI to a crawl — keep the E2E layer thin and stable.'
      },
      'ar-msa': {
        definition: 'اختبار النهاية إلى النهاية يقود التطبيق الحقيقي في متصفح حقيقي كما يفعل المستخدم: نقرًا وكتابة وتأكيدًا لما يظهر.',
        simple: 'اختبارات E2E روبوتات تستخدم تطبيقك مثل البشر.',
        whenToUse: 'طبقة رقيقة من اختبارات E2E على المسارات الحرجة (البحث، فتح مصطلح، تغيير الإعدادات)، مع اختبارات وحدة وتكامل تحتها.',
        mistakes: 'مئة اختبار E2E مهزوز يبطئ CI حتى الزحف — أبق طبقة E2E رقيقة وثابتة.'
      }
    }
  },
  {
    id: 'tdd',
    name: 'TDD',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 78,
    related: ['testing', 'unit-testing', 'refactoring'],
    prerequisites: ['unit-testing'],
    resources: [],
    content: {
      en: {
        definition: 'TDD (Test-Driven Development) is the red-green-refactor cycle: write a failing test, write the simplest code that passes, then refactor.',
        simple: 'TDD means: write the exam question before the lesson, then teach until the answer fits.',
        whenToUse: 'Best for pure logic and content rules; UI pixel details are cheaper to verify visually.',
        mistakes: 'Writing all tests up front and never running them — TDD is a loop, not a stockpile.'
      },
      'ar-msa': {
        definition: 'الـ TDD هي دورة أحمر-أخضر-إعادة هيكلة: اكتب اختبارًا فاشلًا ثم أبسط كود ينجح ثم أعد الهيكلة.',
        simple: 'الـ TDD يعني: اكتب سؤال الامتحان قبل الدرس، ثم درس حتى تناسب الإجابة.',
        whenToUse: 'الأفضل للمنطق الصافي وقواعد المحتوى؛ أما تفاصيل واجهة البكسل فأرخص فحصًا بصريًا.',
        mistakes: 'كتابة كل الاختبارات مقدمًا وعدم تشغيلها — الـ TDD حلقة لا مخزن.'
      }
    }
  },
  {
    id: 'assertion',
    name: 'Assertion',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 74,
    related: ['unit-testing', 'testing'],
    prerequisites: ['unit-testing'],
    resources: [],
    content: {
      en: {
        definition: 'An assertion is a check inside a test that fails loudly when the actual value does not match the expected value.',
        simple: 'An assertion is the moment the test says: prove it.',
        example: {
          text: 'This app tests assert against its real content.',
          code: "assert.strictEqual(terms.length, 250);\nassert.ok(term.content['ar-msa'] != null);",
          codeLang: 'ts'
        }
      },
      'ar-msa': {
        definition: 'التأكيد فحص داخل اختبار يفشل بصوت عالٍ عندما لا تطابق القيمة الفعلية القيمة المتوقعة.',
        simple: 'التأكيد هو اللحظة التي يقول فيها الاختبار: أثبت ذلك.'
      }
    }
  }
];
