import type { Term } from '../types';

// Omar's Dev Dictionary — additional Fundamentals terms (batch 3).

export const FUNDAMENTALS_3_TERMS: Term[] = [
  {
    id: 'string-methods',
    name: 'String Methods',
    category: 'fundamentals',
    subcategory: 'Data types',
    difficulty: 'beginner',
    popularity: 78,
    related: ['string', 'map-filter-reduce'],
    prerequisites: ['string'],
    resources: [],
    content: {
      en: {
        definition: 'String methods are the built-in operations on strings: searching (includes, indexOf), slicing (slice, substring), casing (toLowerCase), and trimming (trim).',
        simple: 'String methods are the text toolbox: cut, search, capitalize, clean.',
        example: {
          text: 'Search normalization in this app uses several.',
          code: "const q = '  Git ';\nq.trim().toLowerCase();      // 'git'\nq.includes('it');            // true\n'api-key'.replaceAll('-', ' '); // 'api key'",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'دوال السلاسل هي العمليات المدمجة عليها: البحث (includes و indexOf) والتقطيع (slice) والحالة (toLowerCase) والتقليم (trim).',
        simple: 'دوال السلاسل صندوق أدوات النص: قص وابحث وكبّر ونظف.'
      }
    }
  },
  {
    id: 'sorting',
    name: 'Sorting',
    category: 'fundamentals',
    subcategory: 'Techniques',
    difficulty: 'beginner',
    popularity: 82,
    related: ['algorithms', 'big-o', 'map-filter-reduce'],
    prerequisites: ['algorithms'],
    resources: [],
    content: {
      en: {
        definition: 'Sorting arranges items in an order; efficient general sorts (like merge sort) run in O(n log n), and comparators define custom orders.',
        simple: 'Sorting is lining the class up by height — the comparator decides what counts as taller.',
        example: {
          text: 'This app glossary sorts by name or popularity.',
          code: "const sorted = [...terms].sort((a, b) => b.popularity - a.popularity);\n// strings: localeCompare respects Arabic letters\nnames.sort((a, b) => a.localeCompare(b));",
          codeLang: 'js'
        },
        mistakes: 'Array.prototype.sort mutates in place — copy first when the original order matters; and numbers need a comparator, or 10 sorts before 2.'
      },
      'ar-msa': {
        definition: 'الترتيب يرتّب العناصر في تسلسل؛ فالترتيبات العامة الكفوءة مثل merge sort تعمل في O(n log n)، والمقارنات تحدد الترتيب المخصص.',
        simple: 'الترتيب هو صف الفصل حسب الطول — والمقارنة تحدد ما يعتبر أطول.',
        mistakes: 'الدالة sort تعدل في المكان — انسخ أولًا إن كان الترتيب الأصلي مهمًا؛ والأرقام تحتاج مقارنًا وإلا رتب 10 قبل 2.'
      }
    }
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    category: 'fundamentals',
    subcategory: 'Techniques',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['algorithms', 'big-o', 'sorting'],
    prerequisites: ['algorithms', 'sorting'],
    resources: [],
    content: {
      en: {
        definition: 'Binary search finds a target in a sorted collection by repeatedly halving the search range, running in O(log n).',
        simple: 'Binary search is the dictionary technique: open in the middle, cut half, repeat.',
        example: {
          text: 'Only works on sorted input.',
          code: "function binarySearch(sorted, target) {\n  let lo = 0, hi = sorted.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (sorted[mid] === target) return mid;\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}",
          codeLang: 'js'
        },
        whenToUse: 'Lookups in sorted arrays of meaningful size — but for key lookup a hash map is usually simpler and faster.'
      },
      'ar-msa': {
        definition: 'البحث الثنائي يجد هدفًا في مجموعة مرتبة بشطر نطاق البحث مرارًا، ويعمل في O(log n).',
        simple: 'البحث الثنائي هو تقنية القاموس: افتح في المنتصف، اقطع النصف، كرر.',
        whenToUse: 'البحث في مصفوفات مرتبة ذات حجم معتبر — لكن للبحث بمفتاح، خريطة التجزئة أبسط وأسرع غالبًا.'
      }
    }
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    category: 'fundamentals',
    subcategory: 'Data structures',
    difficulty: 'intermediate',
    popularity: 74,
    related: ['data-structures', 'array-vs-linked-list', 'stack', 'queue'],
    prerequisites: ['data-structures'],
    resources: [],
    content: {
      en: {
        definition: 'A linked list stores each item in a node holding the value plus a pointer to the next node, so insertion and removal are cheap but random access is O(n).',
        simple: 'A linked list is a treasure hunt: each clue points to the next one.',
        example: {
          text: 'A node and a push operation.',
          code: "class Node {\n  constructor(value) { this.value = value; this.next = null; }\n}\nconst head = new Node('Git');\nhead.next = new Node('API');",
          codeLang: 'js'
        },
        whenToUse: 'When you insert or remove at the front constantly; for indexed access, arrays win.'
      },
      'ar-msa': {
        definition: 'القائمة المتصلة تخزن كل عنصر في عقدة تحمل القيمة ومؤشرًا للعقدة التالية، فتصبح الإضافة والإزالة رخيصتين لكن الوصول العشوائي O(n).',
        simple: 'القائمة المتصلة صيد كنز: كل ورقة تشير إلى التالية.',
        whenToUse: 'عندما تضيف أو تحذف من المقدمة باستمرار؛ أما للوصول بالفهرس فالمصفوفات تفوز.'
      }
    }
  },
  {
    id: 'graph',
    name: 'Graph',
    category: 'fundamentals',
    subcategory: 'Data structures',
    difficulty: 'intermediate',
    popularity: 76,
    related: ['data-structures', 'tree', 'linked-list'],
    prerequisites: ['data-structures'],
    resources: [],
    content: {
      en: {
        definition: 'A graph is a data structure of nodes (vertices) connected by edges, either directed or undirected, modeling networks, relations, and dependencies.',
        simple: 'A graph is a friendship map: people are dots, friendships are lines.',
        example: {
          text: 'Adjacency list — the common representation.',
          code: "const graph = {\n  Git: ['GitHub', 'Branch'],\n  Branch: ['Merge'],\n  Merge: ['Git']\n};",
          codeLang: 'js'
        },
        whenToUse: 'Modeling this dictionary term relations (prerequisites and related terms) is literally a graph.'
      },
      'ar-msa': {
        definition: 'الرسم البياني بنية بيانات من عقد تربطها حواف، موجهة أو غير موجهة، تمثل الشبكات والعلاقات والاعتماديات.',
        simple: 'الرسم البياني خريطة صداقات: الأشخاص نقاط والصداقات خطوط.',
        whenToUse: 'تمثيل علاقات مصطلحات هذا القاموس (المتطلبات والمصطلحات ذات الصلة) هو رسم بياني حرفيًا.'
      }
    }
  },
  {
    id: 'tree',
    name: 'Tree',
    category: 'fundamentals',
    subcategory: 'Data structures',
    difficulty: 'intermediate',
    popularity: 77,
    related: ['data-structures', 'graph', 'dom'],
    prerequisites: ['data-structures'],
    resources: [],
    content: {
      en: {
        definition: 'A tree is a hierarchical graph with one root and no cycles: each node has children, and there is exactly one path from the root to any node.',
        simple: 'A tree is a family chart: one ancestor at the top, everyone below exactly once.',
        example: {
          text: 'The DOM and this app category hierarchy are trees.',
          code: "const categories = {\n  id: 'tools',\n  children: [\n    { id: 'git', children: [] },\n    { id: 'ci-cd', children: [] }\n  ]\n};",
          codeLang: 'js'
        },
        whenToUse: 'Hierarchies everywhere: the DOM, file systems, JSON, and component trees are all trees.'
      },
      'ar-msa': {
        definition: 'الشجرة رسم بياني هرمي بجذر واحد وبلا دورات: لكل عقدة أبناء، ويوجد مسار واحد بالضبط من الجذر إلى أي عقدة.',
        simple: 'الشجرة شجرة عائلة: سلف واحد في الأعلى، وكل واحد تحته مرة واحدة بالضبط.',
        whenToUse: 'التسلسلات الهرمية في كل مكان: الـ DOM ونظام الملفات و JSON وشجرة المكونات كلها أشجار.'
      }
    }
  }
];
