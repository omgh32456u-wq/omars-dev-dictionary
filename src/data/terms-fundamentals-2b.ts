import type { Term } from '../types';

// Omar's Dev Dictionary — additional Fundamentals terms (batch 2b).

export const FUNDAMENTALS_2B_TERMS: Term[] = [
  {
    id: 'destructuring',
    name: 'Destructuring',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'beginner',
    popularity: 81,
    related: ['objects', 'arrays'],
    prerequisites: ['objects', 'arrays'],
    resources: [],
    content: {
      en: {
        definition: 'Destructuring unpacks values from arrays or objects into distinct variables in a single statement.',
        simple: 'Destructuring is opening a package and putting each item on its own shelf at once.',
        example: {
          text: 'Object and array destructuring together.',
          code: "const { name, difficulty } = term;\nconst [first, second] = ['Git', 'API'];",
          codeLang: 'js'
        },
        whenToUse: 'Function parameters, React props, and any time you read two or more fields from one object.'
      },
      'ar-msa': {
        definition: 'التفكيك يستخرج القيم من المصفوفات أو الكائنات إلى متغيرات منفصلة في عبارة واحدة.',
        simple: 'التفكيك هو فتح طرد ووضع كل غرض على رفه في حركة واحدة.',
        whenToUse: 'معاملات الدوال و React props وكل مرة تقرأ فيها حقلين أو أكثر من كائن واحد.'
      }
    }
  },
  {
    id: 'spread-rest',
    name: 'Spread and Rest',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['destructuring', 'arrays', 'objects'],
    prerequisites: ['destructuring'],
    resources: [],
    content: {
      en: {
        definition: 'Spread (...) expands an iterable or object into individual elements, while rest (...) collects remaining elements into one — same syntax, opposite direction.',
        simple: 'Spread opens the box; rest gathers what is left into a new box.',
        example: {
          text: 'Copy without mutating — the pattern this app stores use.',
          code: "const updated = { ...user, name: 'Omar Mohamed' };\nfunction sum(...nums) { return nums.reduce((a, b) => a + b, 0); }",
          codeLang: 'js'
        },
        mistakes: 'Spread is a shallow copy: nested objects are still shared — clone deeper if you mutate children.'
      },
      'ar-msa': {
        definition: 'الـ spread (...) يفرد قابلاً للمرور أو كائنًا إلى عناصر مفردة، بينما الـ rest (...) يجمع العناصر المتبقية في واحد — نفس الصياغة باتجاهين متعاكسين.',
        simple: 'الـ spread يفتح الصندوق؛ والـ rest يجمع ما تبقى في صندوق جديد.',
        mistakes: 'الـ spread نسخة سطحية: الكائنات المتداخلة تبقى مشتركة — انسخ أعمق إن كنت ستعدل الأبناء.'
      }
    }
  },
  {
    id: 'switch',
    name: 'switch',
    category: 'fundamentals',
    subcategory: 'Control flow',
    difficulty: 'beginner',
    popularity: 76,
    related: ['conditions'],
    prerequisites: ['conditions'],
    resources: [],
    content: {
      en: {
        definition: 'switch compares one expression against a series of case values and runs the first matching branch, falling through unless you break.',
        simple: 'switch is a vending machine: one input, many labeled buttons, one dispenses.',
        example: {
          text: 'Every case needs a break (or return).',
          code: "switch (difficulty) {\n  case 'beginner':\n    return 'green';\n  case 'intermediate':\n    return 'amber';\n  case 'advanced':\n    return 'red';\n  default:\n    return 'gray';\n}",
          codeLang: 'js'
        },
        mistakes: 'Forgetting break makes execution fall through into the next case — a classic silent bug.'
      },
      'ar-msa': {
        definition: 'الـ switch يقارن تعبيرًا واحدًا بسلسلة قيم case ويشغل أول فرع مطابق، ويستمر في السقوط ما لم تستخدم break.',
        simple: 'الـ switch آلة بيع: مدخل واحد وأزرار ملصقة كثيرة وزر واحد يوزع.',
        mistakes: 'نسيان break يجعل التنفيذ يسقط في الحالة التالية — خطأ صامت كلاسيكي.'
      }
    }
  },
  {
    id: 'ternary',
    name: 'Ternary Operator',
    category: 'fundamentals',
    subcategory: 'Control flow',
    difficulty: 'beginner',
    popularity: 78,
    related: ['conditions', 'operators'],
    prerequisites: ['conditions'],
    resources: [],
    content: {
      en: {
        definition: 'The ternary operator (condition ? a : b) is an expression that evaluates to one of two values depending on a condition.',
        simple: 'The ternary is a one-line if: pick one of two values.',
        example: {
          text: 'Useful inside JSX.',
          code: "const label = isLearned ? 'Learned' : 'Not yet';",
          codeLang: 'tsx'
        },
        whenToUse: 'Short value choices; once you need branches with statements, use if.'
      },
      'ar-msa': {
        definition: 'المعامل الثلاثي (شرط ? أ : ب) تعبير يعطي إحدى قيمتين حسب الشرط.',
        simple: 'الثلاثي هو if في سطر: اختر إحدى قيمتين.',
        whenToUse: 'اختيارات القيم القصيرة؛ وإذا احتجت فروعًا بجمل فاستخدم if.'
      }
    }
  },
  {
    id: 'map-filter-reduce',
    name: 'map, filter, reduce',
    category: 'fundamentals',
    subcategory: 'Data structures',
    difficulty: 'beginner',
    popularity: 88,
    related: ['arrays', 'callback', 'pure-function'],
    prerequisites: ['arrays', 'callback'],
    resources: [],
    content: {
      en: {
        definition: 'map transforms every element, filter keeps elements passing a test, and reduce folds the array into a single value — the three workhorses of array processing.',
        simple: 'map changes each item, filter picks the good ones, reduce squeezes everything into one result.',
        example: {
          text: 'This app search pipeline is exactly this pattern.',
          code: "const names = terms\n  .filter((t) => t.category === 'tools')\n  .map((t) => t.name)\n  .reduce((all, name) => `${all}, ${name}`, '');",
          codeLang: 'js'
        },
        mistakes: 'Chaining map then filter then map again makes three passes — combine transformations when it stays readable.'
      },
      'ar-msa': {
        definition: 'الـ map يحول كل عنصر، و filter يبقي العناصر الناجحة من فحص، و reduce يطوي المصفوفة إلى قيمة واحدة — وهي أحصنة العمل الثلاثة لمعالجة المصفوفات.',
        simple: 'الـ map يغير كل عنصر، و filter يلتقط الجيد، و reduce يعصر الكل في نتيجة واحدة.',
        mistakes: 'سلسلة map ثم filter ثم map مرة أخرى تمر ثلاث مرات — ادمج التحويلات حين تبقى مقروءة.'
      }
    }
  }
];
