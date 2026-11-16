import type { Term } from '../types';

// Omar's Dev Dictionary — additional Programming Fundamentals terms (types,
// concurrency primitives, and core data structures).

export const FUNDAMENTALS_EXTRA_TERMS: Term[] = [
  {
    id: 'string',
    name: 'String',
    category: 'fundamentals',
    subcategory: 'Data types',
    difficulty: 'beginner',
    popularity: 90,
    related: ['data-types'],
    prerequisites: ['data-types'],
    resources: [{ label: 'MDN — String', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String', verified: false }],
    content: {
      en: {
        definition: 'A string is an immutable sequence of characters used to represent text.',
        simple: 'A string is text: letters, numbers, and symbols inside quotes.',
        example: {
          text: 'Strings can be joined and sliced.',
          code: "const name = 'Git';\nname.toUpperCase();    // 'GIT'\nname.slice(0, 2);      // 'Gi'",
          codeLang: 'js'
        },
        mistakes: 'Strings cannot be changed in place — every method returns a new string.'
      },
      'ar-msa': {
        definition: 'السلسلة النصية (String) سلسلة أحرف غير قابلة للتعديل تستخدم لتمثيل النص.',
        simple: 'السلسلة نص: أحرف وأرقام ورموز بين علامتي اقتباس.',
        mistakes: 'لا يمكن تعديل السلاسل في مكانها — كل دالة تعيد سلسلة جديدة.'
      }
    }
  },
  {
    id: 'number',
    name: 'Number',
    category: 'fundamentals',
    subcategory: 'Data types',
    difficulty: 'beginner',
    popularity: 87,
    related: ['data-types'],
    prerequisites: ['data-types'],
    resources: [],
    content: {
      en: {
        definition: 'A number is a numeric value; JavaScript uses one IEEE 754 double-precision type for integers and decimals.',
        simple: 'A number is any numeric value: 3, -5.5, or 0.1.',
        example: {
          text: 'Careful with binary fractions.',
          code: "0.1 + 0.2;                 // 0.30000000000000004\nNumber.isInteger(5);        // true\nNumber.parseInt('42', 10);  // 42",
          codeLang: 'js'
        },
        mistakes: 'Floating-point math is not exact — 0.1 + 0.2 is not exactly 0.3; compare with a tolerance or count in integers.'
      },
      'ar-msa': {
        definition: 'الرقم قيمة عددية؛ يستخدم JavaScript نوعًا عشريًا مزدوج الدقة واحدًا للأعداد الصحيحة والكسور.',
        simple: 'الرقم أي قيمة عددية: 3 أو -5.5 أو 0.1.',
        mistakes: 'حساب الفاصلة العائمة غير دقيق تمامًا — 0.1 + 0.2 ليست 0.3 بالضبط؛ قارن بهامش تسامح أو اعد بالأعداد الصحيحة.'
      }
    }
  },
  {
    id: 'boolean',
    name: 'Boolean',
    category: 'fundamentals',
    subcategory: 'Data types',
    difficulty: 'beginner',
    popularity: 85,
    related: ['data-types', 'operators'],
    prerequisites: ['data-types'],
    resources: [],
    content: {
      en: {
        definition: 'A boolean is a logical value with exactly two states: true or false.',
        simple: 'Boolean is the yes/no type: true or false, nothing else.',
        example: {
          text: 'Comparison produces booleans; truthiness is not the same.',
          code: "const isReady = 5 > 3;\nif ('') { }  // falsy — block skipped",
          codeLang: 'js'
        },
        mistakes: 'Do not confuse truthiness (0, empty string, null are falsy) with the actual boolean false.'
      },
      'ar-msa': {
        definition: 'القيمة المنطقية (Boolean) قيمة بحالتين فقط: صحيح أو خطأ.',
        simple: 'الـ Boolean نوع نعم/لا: صحيح أو خطأ فقط.',
        mistakes: 'لا تخلط بين الصدقية (0 والسلسلة الفارغة و null خادعة) والقيمة false الحقيقية.'
      }
    }
  },
  {
    id: 'promise',
    name: 'Promise',
    category: 'fundamentals',
    subcategory: 'Concurrency',
    difficulty: 'intermediate',
    popularity: 91,
    related: ['asynchronous-programming', 'async-await', 'event-loop'],
    prerequisites: ['asynchronous-programming'],
    resources: [{ label: 'MDN — Promise', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise', verified: false }],
    content: {
      en: {
        definition: 'A Promise is an object representing the eventual result of an async operation — it is pending, then settles exactly once as fulfilled or rejected.',
        simple: 'A Promise is an IOU: the value will arrive later, exactly once.',
        example: {
          text: 'then handles success, catch handles failure.',
          code: "fetch('/api/terms')\n  .then((res) => res.json())\n  .catch((err) => console.error(err));",
          codeLang: 'js'
        },
        mistakes: 'A Promise that is created but never awaited does nothing — and errors inside it vanish silently.'
      },
      'ar-msa': {
        definition: 'الـ Promise كائن يمثل النتيجة النهائية لعملية غير متزامنة — يبدأ معلقًا ثم يستقر مرة واحدة: ناجح أو مرفوض.',
        simple: 'الـ Promise سند دين: ستصل القيمة لاحقًا، ولمرة واحدة فقط.',
        mistakes: 'الـ Promise الذي ينشأ ولا ينتظر لا يفعل شيئًا — وأخطاؤه تختفي بصمت.'
      }
    }
  },
  {
    id: 'async-await',
    name: 'async/await',
    category: 'fundamentals',
    subcategory: 'Concurrency',
    difficulty: 'intermediate',
    popularity: 92,
    related: ['promise', 'asynchronous-programming', 'try-catch'],
    prerequisites: ['promise'],
    resources: [],
    content: {
      en: {
        definition: 'async/await is syntax that lets asynchronous code be written and read like synchronous code: an async function returns a Promise, and await pauses inside it until the Promise settles.',
        simple: 'async/await lets you write async code that reads like normal top-to-bottom code.',
        example: {
          text: 'Combine with try/catch for errors.',
          code: "async function load() {\n  try {\n    const res = await fetch('/api/terms');\n    return await res.json();\n  } catch (e) {\n    console.error('load failed', e);\n    return [];\n  }\n}",
          codeLang: 'js'
        },
        mistakes: 'await only works inside async functions, and forgetting it returns the Promise instead of the value.'
      },
      'ar-msa': {
        definition: 'الـ async/await صيغة تتيح كتابة الكود غير المتزامن وقراءته ككود متزامن: الدالة async تعيد Promise، و await يوقف داخلها حتى يستقر.',
        simple: 'الـ async/await يجعلك تكتب كودًا غير متزامن يقرأ ككود عادي من أعلى لأسفل.',
        mistakes: 'الـ await يعمل داخل دوال async فقط، ونسيانه يعيد الـ Promise بدل القيمة.'
      }
    }
  },
  {
    id: 'try-catch',
    name: 'try/catch',
    category: 'fundamentals',
    subcategory: 'Errors',
    difficulty: 'beginner',
    popularity: 88,
    related: ['exceptions', 'promise'],
    prerequisites: ['exceptions'],
    resources: [],
    content: {
      en: {
        definition: 'try/catch is a language construct that runs a block of code and catches any exception thrown in it, so the program can recover instead of crashing.',
        simple: 'try/catch is a safety net: fall, but do not break.',
        example: {
          text: 'The catch receives the thrown error.',
          code: "try {\n  JSON.parse('oops');\n} catch (e) {\n  console.log(e.message); // recover\n}",
          codeLang: 'js'
        },
        mistakes: 'Catching an error and doing nothing hides the bug — log it or recover deliberately.'
      },
      'ar-msa': {
        definition: 'الـ try/catch بنية لغوية تشغل مقطع كود وتلتقط أي استثناء يرمى فيه، فيستطيع البرنامج التعافي بدل الانهيار.',
        simple: 'الـ try/catch شبكة أمان: اقع، لكن لا تنكسر.',
        mistakes: 'التقاط الخطأ دون فعل شيء يخفي الخلل — سجله أو تعاف بشكل مقصود.'
      }
    }
  },
  {
    id: 'stack',
    name: 'Stack',
    category: 'fundamentals',
    subcategory: 'Data structures',
    difficulty: 'beginner',
    popularity: 80,
    related: ['queue', 'data-structures', 'call-stack'],
    prerequisites: ['data-structures'],
    resources: [],
    content: {
      en: {
        definition: 'A stack is a linear data structure where items are added and removed at the same end (LIFO: last in, first out).',
        simple: 'A stack is a pile of plates: you only touch the top plate.',
        example: {
          text: 'Undo history is a stack.',
          code: "const history = [];\nhistory.push('open');\nhistory.push('edit');\nhistory.pop(); // 'edit' (undone)",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'المكدس (Stack) بنية بيانات خطية تدخل العناصر من طرف واحد وتخرج منه (آخر داخل أول خارج).',
        simple: 'المكدس كومة أطباق: لا تلمس إلا الطبق الأعلى.'
      }
    }
  },
  {
    id: 'queue',
    name: 'Queue',
    category: 'fundamentals',
    subcategory: 'Data structures',
    difficulty: 'beginner',
    popularity: 79,
    related: ['stack', 'data-structures'],
    prerequisites: ['data-structures'],
    resources: [],
    content: {
      en: {
        definition: 'A queue is a linear data structure where items are added at one end and removed from the other (FIFO: first in, first out).',
        simple: 'A queue is a checkout line: first come, first served.',
        example: {
          text: 'Task scheduling uses queues.',
          code: "const jobs = [];\njobs.push('job1');\njobs.push('job2');\njobs.shift(); // 'job1' processed first",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'الطابور (Queue) بنية بيانات خطية تضاف العناصر في طرف وتخرج من الطرف الآخر (أول داخل أول خارج).',
        simple: 'الطابور طابور كاشير: أول الواصل أول المخدم.'
      }
    }
  },
  {
    id: 'hash-map',
    name: 'Hash Map',
    category: 'fundamentals',
    subcategory: 'Data structures',
    difficulty: 'intermediate',
    popularity: 83,
    related: ['data-structures', 'hashing', 'objects'],
    prerequisites: ['data-structures'],
    resources: [],
    content: {
      en: {
        definition: 'A hash map (hash table) stores key-value pairs and uses a hash of the key to find values in near-constant time.',
        simple: 'A hash map is a cloakroom with numbered hooks: give the ticket (key), get the coat (value) instantly.',
        example: {
          text: 'JavaScript objects and Map are hash maps.',
          code: "const seen = new Map();\nseen.set('git', true);\nseen.get('git'); // true",
          codeLang: 'js'
        },
        whenToUse: 'The default answer for lookup by key; if you need insertion order or non-string keys, use Map.'
      },
      'ar-msa': {
        definition: 'خريطة التجزئة تخزن أزواج مفتاح-قيمة وتستخدم تجزئة المفتاح لإيجاد القيم في زمن شبه ثابت.',
        simple: 'خريطة التجزئة غرفة حفظ معاطف بخانات مرقمة: أعطِ التذكرة (المفتاح) فتستلم المعطف (القيمة) فورًا.',
        whenToUse: 'الجواب الافتراضي للبحث بالمفتاح؛ وإذا احتجت ترتيب الإدخال أو مفاتيح غير نصية فاستخدم Map.'
      }
    }
  },
  {
    id: 'big-o',
    name: 'Big O Notation',
    category: 'fundamentals',
    subcategory: 'Techniques',
    difficulty: 'intermediate',
    popularity: 84,
    related: ['algorithms', 'performance'],
    prerequisites: ['algorithms'],
    resources: [],
    content: {
      en: {
        definition: 'Big O notation describes how an algorithm cost (time or space) grows as input size grows, ignoring constants: O(1), O(log n), O(n), O(n log n), O(n^2).',
        simple: 'Big O answers one question: when the input gets 10 times bigger, how much slower does it get?',
        example: {
          text: 'Finding an item by key is O(1); scanning a list is O(n); nested loops are O(n^2).',
          code: "// O(n) — one pass\nfor (const t of terms) { check(t); }\n// O(n^2) — nested pass\nfor (const a of terms) for (const b of terms) pair(a, b);",
          codeLang: 'js'
        },
        mistakes: 'Big O ignores constants and small inputs — an O(n^2) algorithm can still beat O(n log n) when n is tiny.'
      },
      'ar-msa': {
        definition: 'ترميز Big O يصف كيف تنمو تكلفة الخوارزمية (زمنًا أو ذاكرة) مع نمو حجم المدخلات، متجاهلًا الثوابت: O(1) و O(log n) و O(n) و O(n^2).',

simple: 'Big O يجيب عن سؤال واحد: عندما تصبح المدخلات أكبر عشر مرات، كم يصبح أبطأ؟',
        mistakes: 'الـ Big O يتجاهل الثوابت والمدخلات الصغيرة — خوارزمية O(n^2) قد تتفوق على O(n log n) عندما تكون n صغيرة.'
      }
    }
  },
  {
    id: 'pure-function',
    name: 'Pure Function',
    category: 'fundamentals',
    subcategory: 'Techniques',
    difficulty: 'intermediate',
    popularity: 81,
    related: ['functions', 'immutability', 'testing'],
    prerequisites: ['functions'],
    resources: [],
    content: {
      en: {
        definition: 'A pure function always returns the same output for the same input and has no side effects — it does not read or write anything outside its parameters.',
        simple: 'A pure function is a vending machine: same coins in, same snack out, every single time.',
        example: {
          text: 'This app content helpers are pure functions.',
          code: "function addTax(price) { return price * 1.15; }  // pure\nfunction logAndAdd(price) { console.log(price); return price * 1.15; }  // impure",
          codeLang: 'js'
        },
        whenToUse: 'Pure functions are trivially testable and safe to reuse; keep side effects at the edges of your architecture.'
      },
      'ar-msa': {
        definition: 'الدالة النقية تعيد دائمًا نفس المخرجات لنفس المدخلات ولا تأثيرات جانبية لها — لا تقرأ ولا تكتب شيئًا خارج معاملاتها.',
        simple: 'الدالة النقية آلة بيع: نفس العملات تدخل، نفس الوجبة تخرج، في كل مرة.',
        whenToUse: 'الدوال النقية سهلة الاختبار وآمنة لإعادة الاستخدام؛ وأبقِ التأثيرات الجانبية على حواف معماريتك.'
      }
    }
  },
  {
    id: 'immutability',
    name: 'Immutability',
    category: 'fundamentals',
    subcategory: 'Techniques',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['constants', 'pure-function', 'state'],
    prerequisites: ['objects'],
    resources: [],
    content: {
      en: {
        definition: 'Immutability is the practice of never changing data after creation — instead, creating new values — which makes change detection and history trivially reliable.',
        simple: 'Immutability means: do not scribble on the document; write a new one.',
        example: {
          text: 'This app stores return new objects, never mutate.',
          code: "const user = { name: 'Omar' };\nconst renamed = { ...user, name: 'Omar Mohamed' };\nuser.name;     // still 'Omar'",
          codeLang: 'js'
        },
        mistakes: 'Deep cloning big objects on every keystroke is wasteful; update only the branches that change.'
      },
      'ar-msa': {
        definition: 'عدم القابلية للتغيير هي ممارسة عدم تعديل البيانات بعد إنشائها — بل إنشاء قيم جديدة — ما يجعل كشف التغيير والتاريخ موثوقين بسهولة.',
        simple: 'عدم القابلية للتغيير: لا تكتب فوق المستند؛ اكتب مستندًا جديدًا.',
        mistakes: 'النسخ العميق للكائنات الضخمة مع كل ضغطة مفتاح هدر؛ حدّث الفروع المتغيرة فقط.'
      }
    }
  }
];
