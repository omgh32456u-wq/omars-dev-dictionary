import type { Term } from '../types';

// Omar's Dev Dictionary — additional Fundamentals terms (batch 4).

export const FUNDAMENTALS_4_TERMS: Term[] = [
  {
    id: 'regex',
    name: 'Regex',
    category: 'fundamentals',
    subcategory: 'Techniques',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['string-methods', 'string'],
    prerequisites: ['string'],
    resources: [{ label: 'MDN — Regular expressions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions', verified: false }],
    content: {
      en: {
        definition: 'A regular expression (regex) is a pattern language for matching text: character classes, quantifiers, anchors, and groups.',
        simple: 'Regex is a very compact way of saying: I am looking for text shaped like this.',
        example: {
          text: 'This app strips URLs before speech with one.',
          code: "text.replace(/https?:\\/\\/\\S+/g, 'link');\n/^v\\d+\\.\\d+\\.\\d+$/.test('v1.2.3');  // true",
          codeLang: 'js'
        },
        mistakes: 'Catastrophic backtracking: nested quantifiers on hostile input can freeze the page — keep patterns simple and anchored.'
      },
      'ar-msa': {
        definition: 'التعبير النمطي لغة أنماط لمطابقة النص: أصناف أحرف ومقادير ومراسي ومجموعات.',
        simple: 'الـ Regex طريقة مضغوطة جدًا لقول: أبحث عن نص بهذا الشكل.',
        mistakes: 'الرجوع الكارثي: المقادير المتداخلة على مدخل معادٍ قد تجمد الصفحة — أبق الأنماط بسيطة ومرساة.'
      }
    }
  },
  {
    id: 'comment',
    name: 'Comments',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'beginner',
    popularity: 76,
    related: ['clean-code', 'readability'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Comments are annotations the compiler ignores, explaining intent and context that the code cannot express by itself.',
        simple: 'Comments are post-it notes for the next reader — usually future you.',
        example: {
          text: 'Explain why, not what.',
          code: "// Fallback to MSA: Egyptian voices may be missing on this device\nconst lang = variant === 'ar-eg' && !hasVoice ? 'ar-msa' : variant;",
          codeLang: 'js'
        },
        whenToUse: 'Comment the why (decisions, workarounds, constraints); the what should be readable from the code itself.',
        mistakes: 'Comments that narrate the obvious become lies the moment the code changes — prefer better names, then comments.'
      },
      'ar-msa': {
        definition: 'التعليقات ملاحظات يتجاهلها المترجم، تشرح القصد والسياق الذي لا يستطيع الكود التعبير عنه بنفسه.',
        simple: 'التعليقات أوراق لاصقة للقارئ التالي — وعادة هو أنت في المستقبل.',
        whenToUse: 'علق السبب (القرارات والحلول والقيود)؛ أما ماذا فيجب أن يقرأ من الكود نفسه.',
        mistakes: 'التعليقات التي تروي البديهي تصبح أكاذيب لحظة تغير الكود — فضل الأسماء الأفضل ثم التعليقات.'
      }
    }
  },
  {
    id: 'naming-conventions',
    name: 'Naming Conventions',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'beginner',
    popularity: 75,
    related: ['clean-code', 'comment'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Naming conventions are the agreed rules for identifiers: camelCase for variables and functions, PascalCase for classes and React components, UPPER_SNAKE for constants, kebab-case for files.',
        simple: 'Naming conventions are grammar for names: anyone can read who is who at a glance.',
        example: {
          text: 'The shapes used across this codebase.',
          code: "const maxRecents = 20;             // camelCase value\nconst API_BASE_URL = '/api';        // constant\nfunction TermPage() {}              // React component\n// file: term-page.tsx               // kebab-case file",
          codeLang: 'js'
        },
        whenToUse: 'Follow the language ecosystem convention; consistency beats personal taste.'
      },
      'ar-msa': {
        definition: 'أعراف التسمية هي القواعد المتفق عليها للمعرفات: camelCase للمتغيرات والدوال و PascalCase للأصناف ومكونات React و UPPER_SNAKE للثوابت و kebab-case للملفات.',
        simple: 'أعراف التسمية قواعد نحوية للأسماء: أي أحد يقرأ من هو من بنظرة واحدة.',
        whenToUse: 'اتبع عرف منظومة اللغة؛ فالاستمرارية تغلب الذوق الشخصي.'
      }
    }
  },
  {
    id: 'code-formatting',
    name: 'Code Formatting',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'beginner',
    popularity: 72,
    related: ['linter', 'formatter', 'clean-code'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Code formatting is the consistent arrangement of whitespace, line breaks, and punctuation across a codebase, usually enforced by a tool.',
        simple: 'Formatting is the uniform handwriting of the whole team.',
        whenToUse: 'Automate it completely (format on save); never argue about it in code review.',
        mistakes: 'Mixing formatting changes with logic changes in one commit hides real diffs.'
      },
      'ar-msa': {
        definition: 'تنسيق الكود هو الترتيب المتسق للمسافات وفواصل الأسطر وعلامات الترقيم عبر قاعدة الكود، ويفرض عادة بأداة.',
        simple: 'التنسيق هو خط اليد الموحد للفريق كله.',
        whenToUse: 'أتمته تمامًا (تنسيق عند الحفظ)؛ ولا تجادل فيه أثناء مراجعة الكود.',
        mistakes: 'خلط تغييرات التنسيق بتغييرات المنطق في Commit واحد يخفي الفروقات الحقيقية.'
      }
    }
  },
  {
    id: 'readable-code',
    name: 'Readable Code',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'beginner',
    popularity: 74,
    related: ['clean-code', 'naming-conventions'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Readable code prioritizes how easily a human can understand it — through naming, structure, and flow — over how compact it is.',
        simple: 'Readable code lets a stranger understand it without calling you.',
        whenToUse: 'Optimize for the reader: your future self, your teammates, and the person debugging at 2 AM.',
        mistakes: 'Density is not intelligence — three clear lines beat one clever line.'
      },
      'ar-msa': {
        definition: 'الكود المقروء يجعل سهولة فهم الإنسان له أولوية — بالتسمية والبنية والتدفق — على مدى ضغطه.',
        simple: 'الكود المقروء يتيح لغريب أن يفهمه دون أن يتصل بك.',
        whenToUse: 'حسّن للقارئ: نسختك المستقبلية وزملاؤك ومن ينقح الساعة الثانية فجرًا.',
        mistakes: 'الكثافة ليست ذكاء — ثلاثة أسطر واضحة تغلب سطرًا ذكيًا واحدًا.'
      }
    }
  }
];
