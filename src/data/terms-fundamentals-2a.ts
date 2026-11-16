import type { Term } from '../types';

// Omar's Dev Dictionary — additional Fundamentals terms (batch 2a).

export const FUNDAMENTALS_2A_TERMS: Term[] = [
  {
    id: 'null-undefined',
    name: 'null and undefined',
    category: 'fundamentals',
    subcategory: 'Data types',
    difficulty: 'beginner',
    popularity: 85,
    related: ['data-types', 'truthiness'],
    prerequisites: ['data-types'],
    resources: [],
    content: {
      en: {
        definition: 'undefined means a variable was declared but never given a value; null is an intentional assignment meaning deliberately empty.',
        simple: 'undefined is an empty box nobody filled; null is a box you consciously left empty.',
        example: {
          text: 'Distinguish them deliberately.',
          code: "let a;            // undefined\nconst b = null;   // intentional emptiness\na === b;          // false",
          codeLang: 'js'
        },
        mistakes: 'Loose equality says null == undefined is true, but strict equality says they are different — decide which meaning you intend.'
      },
      'ar-msa': {
        definition: 'الـ undefined يعني أن متغيرًا أُعلن ولم يُعطَ قيمة قط؛ أما null فإسناد مقصود يعني الفراغ المتعمد.',
        simple: 'الـ undefined صندوق فارغ لم يملأه أحد؛ و null صندوق تركته فارغًا عمدًا.',
        mistakes: 'المساواة الفضفاضة تقول null == undefined صحيح، لكن الصارمة تقول إنهما مختلفان — قرر أي معنى تقصد.'
      }
    }
  },
  {
    id: 'type-coercion',
    name: 'Type Coercion',
    category: 'fundamentals',
    subcategory: 'Data types',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['data-types', 'equality', 'operators'],
    prerequisites: ['data-types'],
    resources: [],
    content: {
      en: {
        definition: 'Type coercion is the automatic conversion of a value from one type to another during an operation — the classic source of JavaScript surprises.',
        simple: 'Coercion is JavaScript guessing what you meant and turning your value into something else.',
        example: {
          text: 'Classic coercion traps.',
          code: "'5' + 3;    // '53' (string wins)\n'5' - 3;    // 2   (number wins)\ntrue + 1;   // 2",
          codeLang: 'js'
        },
        mistakes: 'Never rely on coercion for logic — convert types explicitly with Number(), String(), or Boolean().'
      },
      'ar-msa': {
        definition: 'تحويل النوع هو التحويل التلقائي لقيمة من نوع إلى آخر أثناء عملية — وهو المصدر الكلاسيكي لمفاجآت JavaScript.',
        simple: 'التحويل هو JavaScript يخمن ما قصدته ويحول قيمتك إلى شيء آخر.',
        mistakes: 'لا تعتمد على التحويل التلقائي في المنطق — حول الأنواع صراحة بـ Number() أو String() أو Boolean().'
      }
    }
  },
  {
    id: 'equality',
    name: 'Equality (== vs ===)',
    category: 'fundamentals',
    subcategory: 'Logic',
    difficulty: 'beginner',
    popularity: 84,
    related: ['operators', 'type-coercion'],
    prerequisites: ['operators'],
    resources: [],
    content: {
      en: {
        definition: '== compares values after coercing their types, while === (strict equality) compares both value and type with no conversion.',
        simple: '== is a lenient judge; === checks ID cards as well as faces.',
        example: {
          text: 'The canonical example.',
          code: "1 == '1';   // true  (coerced)\n1 === '1';  // false (different types)",
          codeLang: 'js'
        },
        whenToUse: 'Default to === everywhere; use == only when you explicitly want null and undefined treated the same.'
      },
      'ar-msa': {
        definition: 'الـ == يقارن القيم بعد تحويل الأنواع، بينما === (المساواة الصارمة) يقارن القيمة والنوع معًا دون تحويل.',
        simple: 'الـ == قاضٍ متساهل؛ أما === فيفحص بطاقة الهوية مع الوجه.',
        whenToUse: 'اعتمد === افتراضيًا في كل مكان؛ واستخدم == فقط عندما تريد صراحة معاملة null و undefined بنفس الطريقة.'
      }
    }
  },
  {
    id: 'truthiness',
    name: 'Truthiness',
    category: 'fundamentals',
    subcategory: 'Logic',
    difficulty: 'beginner',
    popularity: 79,
    related: ['boolean', 'conditions', 'type-coercion'],
    prerequisites: ['boolean'],
    resources: [],
    content: {
      en: {
        definition: 'Truthiness is how a non-boolean value behaves inside a condition: falsy values (false, 0, empty string, null, undefined, NaN) skip the block, everything else runs it.',
        simple: 'Truthiness is JavaScript asking each value: would you act like true or false in a condition?',
        example: {
          text: 'Short-circuit defaults rely on truthiness.',
          code: "const name = userInput || 'Guest';\nif (!items.length) { renderEmptyState(); }",
          codeLang: 'js'
        },
        mistakes: 'A legitimate 0 or empty string can accidentally trigger the empty branch — check explicitly when zero is meaningful.'
      },
      'ar-msa': {
        definition: 'الصدقية هي سلوك قيمة غير منطقية داخل الشرط: القيم الخادعة (false و 0 والسلسلة الفارغة و null و undefined و NaN) تتخطى المقطع، وكل ما عداها ينفذه.',
        simple: 'الصدقية هي JavaScript يسأل كل قيمة: هل ستتصرف مثل true أم false في الشرط؟',
        mistakes: 'الصفر أو السلسلة الفارغة المشروعة قد تطلق فرع الفراغ سهوًا — افحص صراحة عندما يكون الصفر ذا معنى.'
      }
    }
  },
  {
    id: 'template-literal',
    name: 'Template Literal',
    category: 'fundamentals',
    subcategory: 'Data types',
    difficulty: 'beginner',
    popularity: 82,
    related: ['string'],
    prerequisites: ['string'],
    resources: [],
    content: {
      en: {
        definition: 'A template literal is a string written with backticks that embeds expressions inside ${} and can span multiple lines.',
        simple: 'Template literals let you drop variables straight into text without gluing plus signs.',
        example: {
          text: 'Interpolation and multiline in one syntax.',
          code: "const name = 'Omar';\nconst msg = `Welcome, ${name}!\nYou have ${3 + 4} terms to review.`;",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'القالب الحرفي سلسلة تكتب بعلامات الاقتباس المائلة وتتضمن تعبيرات داخل ${} ويمكن أن تمتد لأسطر متعددة.',
        simple: 'القوالب الحرفية تتيح إسقاط المتغيرات مباشرة في النص دون لصق علامات زائد.'
      }
    }
  }
];
