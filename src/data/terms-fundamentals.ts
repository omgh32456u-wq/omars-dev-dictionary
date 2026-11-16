import type { Term } from '../types';

// Omar's Dev Dictionary — Programming Fundamentals terms.
// Every term keeps its canonical English name; ar-msa is the complete Arabic
// baseline (definition + simple at minimum).

export const FUNDAMENTALS_TERMS: Term[] = [
  {
    id: 'variables',
    name: 'Variables',
    category: 'fundamentals',
    subcategory: 'Data',
    difficulty: 'beginner',
    popularity: 97,
    related: ['constants', 'data-types', 'scope'],
    prerequisites: [],
    resources: [{ label: 'MDN — Variables', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables', verified: false }],
    content: {
      en: {
        definition: 'A variable is a named reference to a value stored in memory that a program can read and update while it runs.',
        simple: 'A variable is a labeled box. You put a value in it, and later you can look inside the box by using its name.',
        example: {
          text: 'In JavaScript you create a variable and change what it holds.',
          code: "let score = 0;\nscore = score + 10;\nconsole.log(score); // 10",
          codeLang: 'js'
        },
        mistakes: 'Naming variables vaguely (like x or temp) makes code hard to read. Also, using a variable before declaring it is an error.'
      },
      'ar-msa': {
        definition: 'المتغير هو مرجع مسمى لقيمة مخزنة في الذاكرة يمكن للبرنامج قراءتها وتحديثها أثناء التشغيل.',
        simple: 'المتغير مثل صندوق عليه اسم؛ تضع فيه قيمة، ثم تصل إليها لاحقًا باستخدام اسمه.'
      }
    }
  },
  {
    id: 'constants',
    name: 'Constants',
    category: 'fundamentals',
    subcategory: 'Data',
    difficulty: 'beginner',
    popularity: 88,
    related: ['variables', 'immutability'],
    prerequisites: ['variables'],
    resources: [],
    content: {
      en: {
        definition: 'A constant is a binding whose value cannot be reassigned after it is declared.',
        simple: 'A constant is a box you are not allowed to replace with a different value after filling it once.',
        example: {
          text: 'JavaScript const forbids reassignment.',
          code: "const TAX_RATE = 0.15;\nTAX_RATE = 0.2; // TypeError",
          codeLang: 'js'
        },
        mistakes: 'A constant object can still be mutated: const does not freeze the object itself, only the binding.'
      },
      'ar-msa': {
        definition: 'الثابت هو ربط قيمته لا يمكن إعادة إسنادها بعد الإعلان عنه.',
        simple: 'الثابت صندوق لا يُسمح بتبديل ما بداخله بقيمة جديدة بعد وضعه أول مرة.'
      }
    }
  },
  {
    id: 'data-types',
    name: 'Data Types',
    category: 'fundamentals',
    subcategory: 'Data',
    difficulty: 'beginner',
    popularity: 93,
    related: ['variables', 'string', 'number', 'boolean'],
    prerequisites: ['variables'],
    resources: [{ label: 'MDN — JavaScript data types', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures', verified: false }],
    content: {
      en: {
        definition: 'A data type describes what kind of value a piece of data is — such as text, a number, a boolean, or a complex structure — and which operations are valid on it.',
        simple: 'Data types tell the program whether it is dealing with words, numbers, true/false, or something bigger.',
        example: {
          text: 'JavaScript has primitive and object types.',
          code: "typeof 'hi';   // 'string'\ntypeof 5;     // 'number'\ntypeof true;   // 'boolean'",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'نوع البيانات يصف طبيعة القيمة — نص أو رقم أو قيمة منطقية أو بنية أكبر — ويحدد العمليات الممكنة عليها.',
        simple: 'أنواع البيانات تخبر البرنامج هل يتعامل مع كلمات أم أرقام أم قيم صواب/خطأ.'
      }
    }
  },
  {
    id: 'operators',
    name: 'Operators',
    category: 'fundamentals',
    subcategory: 'Logic',
    difficulty: 'beginner',
    popularity: 86,
    related: ['data-types', 'conditions'],
    prerequisites: ['variables'],
    resources: [],
    content: {
      en: {
        definition: 'Operators are symbols that perform operations on values, such as arithmetic (+, -), comparison (===, <), and logical combination (&&, ||).',
        simple: 'Operators are like math and logic signs: they add, compare, or combine values.',
        example: {
          text: 'Comparison and logical operators produce booleans.',
          code: "3 + 4;       // 7\n3 < 4;       // true\ntrue && false; // false",
          codeLang: 'js'
        },
        mistakes: 'In JavaScript, == converts types before comparing while === does not; prefer === to avoid surprises.'
      },
      'ar-msa': {
        definition: 'العمليات (Operators) رموز تُجرى على القيم، مثل الحساب والمقارنة والدمج المنطقي.',
        simple: 'العمليات مثل علامات الرياضيات والمنطق: تجمع أو تقارن أو تدمج القيم.'
      }
    }
  },
  {
    id: 'conditions',
    name: 'Conditions',
    category: 'fundamentals',
    subcategory: 'Control flow',
    difficulty: 'beginner',
    popularity: 92,
    related: ['operators', 'loops'],
    prerequisites: ['operators'],
    resources: [],
    content: {
      en: {
        definition: 'Conditions let a program choose between different paths of execution based on whether an expression is true or false.',
        simple: 'Conditions are crossroads: if something is true, go this way; otherwise, go the other way.',
        example: {
          text: 'if / else if / else chooses a branch.',
          code: "if (score > 90) {\n  grade = 'A';\n} else if (score > 75) {\n  grade = 'B';\n} else {\n  grade = 'C';\n}",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'الشروط تمكّن البرنامج من اختيار مسارات تنفيذ مختلفة بناءً على صحة تعبير منطقي أو خطئه.',
        simple: 'الشروط مثل مفترق طراب: إن كان الشيء صحيحًا اسلك طريقًا، وإلا اسلك آخر.'
      }
    }
  },
  {
    id: 'loops',
    name: 'Loops',
    category: 'fundamentals',
    subcategory: 'Control flow',
    difficulty: 'beginner',
    popularity: 94,
    related: ['conditions', 'arrays'],
    prerequisites: ['conditions'],
    resources: [],
    content: {
      en: {
        definition: 'A loop repeats a block of code until a condition stops being met, so you can process many items without duplicating code.',
        simple: 'A loop is a wheel: the code inside spins again and again until you tell it to stop.',
        example: {
          text: 'for and for...of iterate over collections.',
          code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}\nfor (const item of ['a', 'b']) {\n  console.log(item);\n}",
          codeLang: 'js'
        },
        mistakes: 'A loop whose condition never becomes false runs forever — the classic infinite loop that freezes the page.'
      },
      'ar-msa': {
        definition: 'الحلقة تكرر تنفيذ مقطع من الكود حتى تتوقف عن تحقق شرط معين، فتتيح معالجة عناصر كثيرة دون تكرار الكود.',
        simple: 'الحلقة عجلة تدور بالمقطع الداخلي مرة بعد مرة حتى تطلب منها التوقف.'
      }
    }
  },
  {
    id: 'functions',
    name: 'Functions',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'beginner',
    popularity: 96,
    related: ['parameters', 'arguments', 'callback', 'pure-function'],
    prerequisites: ['variables'],
    resources: [],
    content: {
      en: {
        definition: 'A function is a named, reusable block of code that takes inputs, performs work, and usually returns a result.',
        simple: 'A function is a small machine: give it inputs and it gives you back an output.',
        example: {
          text: 'Declare it once, call it many times.',
          code: "function addTax(price) {\n  return price * 1.15;\n}\naddTax(100); // 115",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'الدالة مقطع كود مسمى وقابل لإعادة الاستخدام، يستقبل مدخلات وينجز عملًا ويعيد نتيجة عادة.',
        simple: 'الدالة آلة صغيرة: تعطيها مدخلات فتعيد لك مخرجات.'
      }
    }
  },
  {
    id: 'parameters',
    name: 'Parameters',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'beginner',
    popularity: 84,
    related: ['arguments', 'functions'],
    prerequisites: ['functions'],
    resources: [],
    content: {
      en: {
        definition: 'Parameters are the named placeholders a function declares in its signature, defining what inputs it accepts.',
        simple: 'Parameters are the empty labeled slots written when you build the function.',
        example: {
          text: 'width and height are parameters here.',
          code: "function area(width, height) {\n  return width * height;\n}",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'المعاملات (Parameters) أسماء فارغة يعلنها المبرمج في توقيع الدالة لتحدد المدخلات التي تقبلها.',
        simple: 'المعاملات خانات فارغة بأسماء تكتبها عند بناء الدالة.'
      }
    }
  },
  {
    id: 'arguments',
    name: 'Arguments',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'beginner',
    popularity: 82,
    related: ['parameters', 'functions'],
    prerequisites: ['parameters'],
    resources: [],
    content: {
      en: {
        definition: 'Arguments are the actual values a caller passes into a function when invoking it, filling its declared parameters.',
        simple: 'Arguments are the real values you drop into the slots when you use the function.',
        example: {
          text: 'Here 3 and 4 are the arguments.',
          code: "function area(width, height) {\n  return width * height;\n}\narea(3, 4); // 12",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'الوسائط (Arguments) هي القيم الفعلية التي يمررها المستدعي إلى الدالة عند استدعائها لتعبئة معاملاتها.',
        simple: 'الوسائط هي القيم الحقيقية التي تضعها في الخانات عند استخدام الدالة.'
      }
    }
  },
  {
    id: 'scope',
    name: 'Scope',
    category: 'fundamentals',
    subcategory: 'Structure',
    difficulty: 'intermediate',
    popularity: 85,
    related: ['variables', 'closure'],
    prerequisites: ['variables', 'functions'],
    resources: [],
    content: {
      en: {
        definition: 'Scope is the region of a program where a name, such as a variable, is visible and usable.',
        simple: 'Scope is like rooms in a house: a name declared in one room cannot be used from another room.',
        example: {
          text: 'Block scope hides inner names.',
          code: "function demo() {\n  let inner = 1;\n}\nconsole.log(inner); // ReferenceError",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'النطاق (Scope) هو منطقة البرنامج التي يكون فيها الاسم — مثل متغير — مرئيًا وقابلًا للاستخدام.',
        simple: 'النطاق مثل غرف في منزل: ما يُعلن داخل غرفة لا يُستخدم من غرفة أخرى.'
      }
    }
  },
  {
    id: 'arrays',
    name: 'Arrays',
    category: 'fundamentals',
    subcategory: 'Data structures',
    difficulty: 'beginner',
    popularity: 95,
    related: ['objects', 'loops', 'data-structures'],
    prerequisites: ['variables', 'loops'],
    resources: [],
    content: {
      en: {
        definition: 'An array is an ordered collection of values stored under one name and accessed by numeric index.',
        simple: 'An array is a numbered list: many items kept in one place, each with its own position.',
        example: {
          text: 'Indexing starts at zero.',
          code: "const colors = ['red', 'green', 'blue'];\ncolors[0];      // 'red'\ncolors.length;  // 3",
          codeLang: 'js'
        },
        mistakes: 'The first item is index 0, not 1 — off-by-one errors are the most common array bug.'
      },
      'ar-msa': {
        definition: 'المصفوفة مجموعة مرتبة من القيم مخزنة باسم واحد ويمكن الوصول إليها بفهرس رقمي.',
        simple: 'المصفوفة قائمة مرقمة: عناصر كثيرة في مكان واحد، ولكل عنصر موضعه.'
      }
    }
  }
];
const objects: Term = {
  id: 'objects',
  name: 'Objects',

category: 'fundamentals',
  subcategory: 'Data structures',
  difficulty: 'beginner',
  popularity: 92,
  related: ['arrays', 'json', 'classes'],
  prerequisites: ['variables'],
  resources: [],
  content: {
    en: {
      definition: 'An object is a collection of named properties (key-value pairs) that represents a single entity and the data attached to it.',
      simple: 'An object is a labeled folder: each pocket has a name and holds one thing.',
      example: {
        text: 'Object literal syntax in JavaScript.',
        code: "const user = { name: 'Omar', age: 20 };\nuser.name; // 'Omar'",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'الكائن (Object) مجموعة من الخصائص المسماة (أزواج مفتاح-قيمة) تمثل كيانًا واحدًا والبيانات المرتبطة به.',
      simple: 'الكائن مثل مجلد بعلامات: لكل خانة اسم وتحمل شيئًا واحدًا.'
    }
  }
};

const classes: Term = {
  id: 'classes',
  name: 'Classes',
  category: 'fundamentals',
  subcategory: 'Structure',
  difficulty: 'intermediate',
  popularity: 89,
  related: ['objects', 'methods', 'inheritance'],
  prerequisites: ['objects'],
  resources: [],
  content: {
    en: {
      definition: 'A class is a blueprint for creating objects that share the same shape and behavior, bundling data and methods together.',
      simple: 'A class is a cookie-cutter: one design, many cookies (objects) with the same shape.',
      example: {
        text: 'class syntax creates instances with new.',
        code: "class User {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return 'Hi, ' + this.name;\n  }\n}\nconst u = new User('Omar');\nu.greet(); // 'Hi, Omar'",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'الصنف (Class) قالب لإنشاء كائنات تتشارك نفس البنية والسلوك، حيث يجمع البيانات والدوال معًا.',
      simple: 'الصنف مثل قالب القطع: تصميم واحد ينتج كائنات كثيرة بنفس الشكل.'
    }
  }
};

const methods: Term = {
  id: 'methods',
  name: 'Methods',
  category: 'fundamentals',
  subcategory: 'Structure',
  difficulty: 'beginner',
  popularity: 87,
  related: ['functions', 'objects', 'classes'],
  prerequisites: ['functions', 'objects'],
  resources: [],
  content: {
    en: {
      definition: 'A method is a function attached to an object or class, invoked through that object using dot notation.',
      simple: 'A method is a function that lives inside an object and uses the object data.',
      example: {
        text: 'toUpperCase is a string method.',
        code: "'omar'.toUpperCase(); // 'OMAR'\n[1, 2, 3].map((n) => n * 2); // [2, 4, 6]",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'التابع (Method) دالة مرتبطة بكائن أو صنف، وتُستدعى من خلال ذلك الكائن باستخدام النقطة.',
      simple: 'التابع دالة تسكن داخل كائن وتستخدم بيانات الكائن نفسه.'
    }
  }
};

const recursion: Term = {
  id: 'recursion',
  name: 'Recursion',
  category: 'fundamentals',
  subcategory: 'Techniques',
  difficulty: 'intermediate',
  popularity: 83,
  related: ['functions', 'call-stack'],
  prerequisites: ['functions'],
  resources: [],
  content: {
    en: {
      definition: 'Recursion is when a function calls itself with a smaller input until it reaches a base case that stops the calls.',
      simple: 'Recursion is a Russian nesting doll: each call opens a smaller doll until you reach the smallest one.',
      example: {
        text: 'Classic factorial with a base case.',
        code: "function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nfactorial(5); // 120",
        codeLang: 'js'
      },
      mistakes: 'Forgetting the base case creates infinite recursion and a stack overflow crash.'
    },
    'ar-msa': {
      definition: 'الاستدعاء الذاتي (Recursion) هو استدعاء دالة لنفسها بمدخل أصغر حتى تصل إلى حالة أساسية توقف الاستدعاءات.',
      simple: 'الاستدعاء الذاتي مثل الدمى المتداخلة: كل استدعاء يفتح دمية أصغر حتى تصل لأصغرها.'
    }
  }
};

const algorithms: Term = {
  id: 'algorithms',
  name: 'Algorithms',
  category: 'fundamentals',
  subcategory: 'Techniques',
  difficulty: 'intermediate',
  popularity: 91,
  related: ['data-structures', 'big-o'],
  prerequisites: ['loops', 'functions'],
  resources: [],
  content: {
    en: {
      definition: 'An algorithm is a finite, unambiguous sequence of steps that solves a problem or performs a computation.',
      simple: 'An algorithm is a recipe: precise steps that turn input into the result you want.',
      example: {
        text: 'Linear search is a simple algorithm.',
        code: "function findIndex(list, target) {\n  for (let i = 0; i < list.length; i++) {\n    if (list[i] === target) return i;\n  }\n  return -1;\n}",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'الخوارزمية سلسلة خطوات محددة وغير غامضة تحل مسألة أو تنجز عملية حسابية.',
      simple: 'الخوارزمية وصفة طبخ: خطوات دقيقة تحوّل المدخلات إلى النتيجة المطلوبة.'
    }
  }
};

const dataStructures: Term = {
  id: 'data-structures',
  name: 'Data Structures',
  category: 'fundamentals',
  subcategory: 'Data structures',
  difficulty: 'intermediate',
  popularity: 90,
  related: ['arrays', 'objects', 'stack', 'hash-map'],
  prerequisites: ['arrays', 'objects'],
  resources: [],
  content: {
    en: {
      definition: 'A data structure is a specific way of organizing data in memory so that a program can use it efficiently for its purpose.',
      simple: 'Data structures are different containers — each one makes certain jobs fast and others slow.',
      example: {
        text: 'A stack pushes and pops from one end (LIFO).',
        code: "const stack = [];\nstack.push(1);\nstack.push(2);\nstack.pop(); // 2",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'هيكل البيانات طريقة محددة لتنظيم البيانات في الذاكرة ليستخدمها البرنامج بكفاءة لغرضه.',
      simple: 'هياكل البيانات حاويات مختلفة — كل واحدة تجعل بعض العمليات سريعة وأخرى بطيئة.'
    }
  }
};

const debugging: Term = {
  id: 'debugging',
  name: 'Debugging',
  category: 'fundamentals',
  subcategory: 'Workflow',
  difficulty: 'beginner',
  popularity: 89,
  related: ['debugger', 'console', 'breakpoint'],
  prerequisites: [],
  resources: [{ label: 'MDN — Console API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/console', verified: false }],
  content: {
    en: {
      definition: 'Debugging is the process of finding the cause of a defect in code and fixing it, using tools like logs and breakpoints.',
      simple: 'Debugging is detective work for your program: follow the clues until you catch the bug.',
      example: {
        text: 'console.log is the beginner main tool.',
        code: "console.log('state before save:', state);",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'التنقيح (Debugging) عملية إيجاد سبب عيب في الكود وإصلاحه باستخدام أدوات مثل السجلات ونقاط التوقف.',
      simple: 'التنقيح عمل تحقيقي في برنامجك: تتبع الأدلة حتى تقبض على الخلل.'
    }
  }
};

const exceptions: Term = {
  id: 'exceptions',
  name: 'Exceptions',
  category: 'fundamentals',
  subcategory: 'Errors',
  difficulty: 'intermediate',
  popularity: 88,
  related: ['try-catch'],
  prerequisites: ['functions'],
  resources: [],
  content: {
    en: {
      definition: 'An exception is a signal raised at runtime when an operation fails, interrupting normal flow unless it is caught and handled.',
      simple: 'An exception is your program raising its hand: something went wrong, deal with me now!',
      example: {
        text: 'try/catch handles failures gracefully.',
        code: "try {\n  JSON.parse('not json');\n} catch (error) {\n  console.error('Bad JSON:', error.message);\n}",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'الاستثناء إشارة تُطلق أثناء التشغيل عند فشل عملية، تقطع التدفق الطبيعي ما لم تُلتقط وتُعالج.',
      simple: 'الاستثناء برنامجك يرفع يده: حدث خطأ ما، تعامل معي الآن!'
    }
  }
};

const asynchronous: Term = {
  id: 'asynchronous-programming',
  name: 'Asynchronous Programming',
  category: 'fundamentals',
  subcategory: 'Concurrency',
  difficulty: 'intermediate',
  popularity: 93,
  related: ['promise', 'async-await', 'event-loop', 'callback'],
  prerequisites: ['functions', 'callback'],
  resources: [{ label: 'MDN — async function', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function', verified: false }],
  content: {
    en: {
      definition: 'Asynchronous programming lets a program start a slow operation, continue other work, and resume when the operation finishes — instead of blocking and waiting.',
      simple: 'Async is like ordering food and doing other things while the kitchen cooks, instead of standing at the counter.',
      example: {
        text: 'await pauses only inside an async function; the page stays responsive.',
        code: "async function loadUser() {\n  const response = await fetch('/api/me');\n  return response.json();\n}",
        codeLang: 'js'
      },
      mistakes: 'An async function always returns a Promise; forgetting await gives you the Promise object, not the value.'
    },
    'ar-msa': {
      definition: 'البرمجة غير المتزامنة تتيح للبرنامج بدء عملية بطيئة ومتابعة عمل آخر ثم استئناف التنفيذ عند اكتمالها، بدلًا من الانتظار الحاجب.',
      simple: 'غير المتزامن مثل طلب الطعام ثم إنجاز أمور أخرى بينما المطبخ يطبخ، بدلاً من الوقوف عند الطاولة.'
    }
  }
};

const callback: Term = {
  id: 'callback',
  name: 'Callback',
  category: 'fundamentals',
  subcategory: 'Techniques',
  difficulty: 'beginner',
  popularity: 86,
  related: ['functions', 'promise', 'asynchronous-programming'],
  prerequisites: ['functions'],
  resources: [],
  content: {
    en: {
      definition: 'A callback is a function passed as an argument to another function, to be executed later — typically when an event or operation completes.',
      simple: 'A callback is leaving your phone number: call me back when the result is ready.',
      example: {
        text: 'Array methods take callbacks.',
        code: "[1, 2, 3].forEach((n) => console.log(n));",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'الاستدعاء المرتد (Callback) دالة تُمرر كوسيطة إلى دالة أخرى لتنفيذها لاحقًا، عادة عند اكتمال عملية أو حدث.',
      simple: 'الاستدعاء المرتد مثل ترك رقم هاتفك: اتصل بي عندما تكون النتيجة جاهزة.'
    }
  }
};

const inheritance: Term = {
  id: 'inheritance',
  name: 'Inheritance',
  category: 'fundamentals',
  subcategory: 'Structure',
  difficulty: 'intermediate',
  popularity: 80,
  related: ['classes', 'objects'],
  prerequisites: ['classes'],
  resources: [],
  content: {
    en: {
      definition: 'Inheritance lets a class reuse and extend the behavior of another class, forming an is-a relationship between them.',
      simple: 'Inheritance is a child class inheriting its parent tools, then adding its own.',
      example: {
        text: 'extends creates the parent-child link.',
        code: "class Animal {\n  eat() { return 'eating'; }\n}\nclass Dog extends Animal {\n  bark() { return 'woof'; }\n}\nconst d = new Dog();\nd.eat();  // 'eating'\nd.bark(); // 'woof'",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'الوراثة تمكّن صنفًا من إعادة استخدام سلوك صنف آخر وتوسيعه، مكونة علاقة (is-a) بينهما.',
      simple: 'الوراثة أن يرث الصنف الابن أدوات الصنف الأب ثم يضيف أدواته الخاصة.'
    }
  }
};

const closure: Term = {
  id: 'closure',
  name: 'Closure',
  category: 'fundamentals',
  subcategory: 'Structure',
  difficulty: 'intermediate',
  popularity: 84,
  related: ['scope', 'functions'],
  prerequisites: ['scope'],
  resources: [],
  content: {
    en: {
      definition: 'A closure is a function bundled with the variables from the scope where it was created, so it keeps access to them after that scope exits.',
      simple: 'A closure is a backpack: the function carries the variables it grew up with, wherever it goes.',

example: {
        text: 'The inner function remembers count.',
        code: "function makeCounter() {\n  let count = 0;\n  return function () {\n    count += 1;\n    return count;\n  };\n}\nconst next = makeCounter();\nnext(); // 1\nnext(); // 2",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'الإغلاق (Closure) دالة مرفقة بمتغيرات النطاق الذي أُنشئت فيه، فتحتفظ بالوصول إليها حتى بعد خروج ذلك النطاق.',
      simple: 'الإغلاق حقيبة ظهر: تحمل الدالة معها المتغيرات التي نشأت معها أينما ذهبت.'
    }
  }
};

const callStack: Term = {
  id: 'call-stack',
  name: 'Call Stack',
  category: 'fundamentals',
  subcategory: 'Concurrency',
  difficulty: 'intermediate',
  popularity: 78,
  related: ['functions', 'stack', 'recursion'],
  prerequisites: ['functions'],
  resources: [],
  content: {
    en: {
      definition: 'The call stack is the runtime structure that tracks which functions are currently running, in last-in-first-out order.',
      simple: 'The call stack is a pile of plates: each function call adds a plate, each return removes one.',
      example: {
        text: 'Deep recursion overflows the call stack.',
        code: "function boom() {\n  return boom();\n}\nboom(); // RangeError: Maximum call stack size exceeded",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'مكدس الاستدعاء (Call Stack) بنية في بيئة التشغيل تتتبع الدوال قيد التنفيذ بترتيب آخر الداخل أول الخارج.',
      simple: 'مكدس الاستدعاء كومة أطباق: كل استدعاء دالة يضيف طبقًا، وكل عودة ترفع واحدًا.'
    }
  }
};

const eventLoop: Term = {
  id: 'event-loop',
  name: 'Event Loop',
  category: 'fundamentals',
  subcategory: 'Concurrency',
  difficulty: 'intermediate',
  popularity: 82,
  related: ['asynchronous-programming', 'callback', 'promise'],
  prerequisites: ['asynchronous-programming'],
  resources: [],
  content: {
    en: {
      definition: 'The event loop is the mechanism that lets a single-threaded runtime process async work: it runs the call stack to empty, then pulls queued callbacks onto it.',
      simple: 'The event loop is a waiter with one pair of hands: serve the table in front, then pick up the next ready order.',
      example: {
        text: 'setTimeout callbacks run after the synchronous code finishes.',
        code: "console.log('first');\nsetTimeout(() => console.log('third'), 0);\nconsole.log('second');\n// first, second, third",
        codeLang: 'js'
      }
    },
    'ar-msa': {
      definition: 'حلقة الأحداث (Event Loop) آلية تتيح لبيئة تنفيذ أحادية الخيط معالجة العمل غير المتزامن: تفرغ مكدس الاستدعاء ثم تسحب الاستدعاءات المرتدة المنتظرة إليه.',
      simple: 'حلقة الأحداث نادل بيد واحدة: يخدم الطاولة أمامه ثم يأخذ الطلب الجاهز التالي.'
    }
  }
};

FUNDAMENTALS_TERMS.push(
  objects,
  classes,
  methods,
  recursion,
  algorithms,
  dataStructures,
  debugging,
  exceptions,
  asynchronous,
  callback,
  inheritance,
  closure,
  callStack,
  eventLoop
);