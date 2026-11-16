import type { Term } from '../types';

// Omar's Dev Dictionary — Databases & Backend terms.

export const BACKEND_TERMS: Term[] = [
  {
    id: 'database',
    name: 'Database',
    category: 'backend',
    subcategory: 'Storage',
    difficulty: 'beginner',
    popularity: 94,
    related: ['sql', 'nosql', 'schema', 'query'],
    prerequisites: [],
    diagrams: ['db-relations'],
    resources: [],
    content: {
      en: {
        definition: 'A database is an organized system for storing, retrieving, and managing data persistently, so information survives restarts and concurrent users.',
        simple: 'A database is a super-organized filing cabinet that never forgets.',
        howItWorks: 'Data lives in structured containers (tables or documents). A query engine reads and writes them, enforcing rules, indexes, and transactions.',
        whenToUse: 'Any data that must outlive the page or be shared between users belongs in a database, not a variable.',
        analogy: 'A database is a library with a catalog: you never rummage, you look things up by address.'
      },
      'ar-msa': {
        definition: 'قاعدة البيانات نظام منظم لتخزين البيانات واسترجاعها وإدارتها بشكل دائم، فتبقى المعلومات بعد إعادة التشغيل ومع تعدد المستخدمين.',
        simple: 'قاعدة البيانات خزانة ملفات فائقة التنظيم لا تنسى أبدًا.',
        howItWorks: 'تسكن البيانات في حاويات منظمة (جداول أو مستندات). ومحرك الاستعلام يقرأها ويكتبها مفروضًا القواعد والفهارس والمعاملات.',
        whenToUse: 'أي بيانات يجب أن تعيش أطول من الصفحة أو تُشارك بين المستخدمين مكانها قاعدة البيانات لا المتغير.',
        analogy: 'قاعدة البيانات مكتبة بفهرس: لا تقلب الرفوف عشوائيًا بل تسأل الفهرس عن العنوان.'
      }
    }
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'backend',
    subcategory: 'Languages',
    difficulty: 'intermediate',
    popularity: 92,
    related: ['database', 'query', 'nosql', 'postgresql', 'sqlite'],
    prerequisites: ['database'],
    diagrams: ['db-relations'],
    resources: [],
    content: {
      en: {
        definition: 'SQL (Structured Query Language) is the standard language for defining, querying, and modifying relational databases — their tables, rows, and relations.',
        simple: 'SQL is how you politely ask a database for exactly the data you want.',
        example: {
          text: 'Read the rows you need, nothing more.',
          code: "SELECT name, difficulty\nFROM terms\nWHERE category = 'tools'\nORDER BY name;",
          codeLang: 'sql'
        },
        mistakes: 'Never build SQL by string concatenation — use parameterized queries or an ORM to prevent SQL injection.'
      },
      'ar-msa': {
        definition: 'الـ SQL لغة معيارية لتعريف قواعد البيانات العلائقية والاستعلام عنها وتعديلها — جداولها وصفوفها وعلاقاتها.',
        simple: 'الـ SQL هي الطريقة المهذبة لطلب البيانات التي تريدها بالضبط من قاعدة البيانات.',
        example: {
          text: 'اقرأ الصفوف التي تحتاجها فقط.'
        },
        mistakes: 'لا تبنِ SQL بدمج نصوص أبدًا — استخدم الاستعلامات المعلمية أو ORM لمنع حقن SQL.'
      }
    }
  },
  {
    id: 'nosql',
    name: 'NoSQL',
    category: 'backend',
    subcategory: 'Storage',
    difficulty: 'intermediate',
    popularity: 85,
    related: ['database', 'sql', 'firebase'],
    prerequisites: ['database'],
    resources: [],
    content: {
      en: {
        definition: 'NoSQL describes databases that store data without rigid tables — as documents, key-values, wide columns, or graphs — trading some SQL guarantees for flexibility and scale.',
        simple: 'NoSQL means storing data in flexible shapes instead of strict tables.',
        whenToUse: 'Great for rapidly changing schemas, huge scale, or hierarchical data; relational databases remain the default for strongly structured, transactional data.'
      },
      'ar-msa': {
        definition: 'الـ NoSQL يصف قواعد بيانات تخزن البيانات دون جداول صارمة — كمستندات أو مفاتيح-قيم أو أعمدة عريضة أو رسوم بيانية — مقابل التخلي عن بعض ضمانات SQL مقابل المرونة والتوسع.',
        simple: 'الـ NoSQL يعني تخزين البيانات بأشكال مرنة بدلًا من الجداول الصارمة.',
        whenToUse: 'ممتاز للمخططات سريعة التغير والنطاق الهائل والبيانات الشجرية؛ وتبقى قواعد البيانات العلائقية الخيار الافتراضي للبيانات المنظمة والمعاملات.'
      }
    }
  },
  {
    id: 'table',
    name: 'Table',
    category: 'backend',
    subcategory: 'Storage',
    difficulty: 'beginner',
    popularity: 83,
    related: ['database', 'row', 'column', 'primary-key', 'schema'],
    prerequisites: ['database'],
    diagrams: ['db-relations'],
    resources: [],
    content: {
      en: {
        definition: 'A table is the core container of a relational database: a grid of rows, each having the same defined columns, describing one kind of thing.',
        simple: 'A table is a spreadsheet inside your database: one row per item, one column per attribute.',
        example: {
          text: 'Create a terms table with typed columns.',
          code: "CREATE TABLE terms (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  popularity INTEGER\n);",
          codeLang: 'sql'
        }
      },
      'ar-msa': {
        definition: 'الجدول هو الحاوية الأساسية في قاعدة البيانات العلائقية: شبكة من الصفوف لكل منها نفس الأعمدة المعرّفة، تصف نوعًا واحدًا من الأشياء.',
        simple: 'الجدول مثل جدول بيانات داخل قاعدة بياناتك: صف لكل عنصر وعمود لكل خاصية.'
      }
    }
  },
  {
    id: 'row',
    name: 'Row',
    category: 'backend',
    subcategory: 'Storage',
    difficulty: 'beginner',
    popularity: 78,
    related: ['table', 'column', 'crud'],
    prerequisites: ['table'],
    resources: [],
    content: {
      en: {
        definition: 'A row (record) is one single item in a table: the set of column values describing exactly one entity.',
        simple: 'A row is one line in the spreadsheet: one user, one order, one term.',
        whenToUse: 'Row = one thing. If you find yourself repeating values across rows, the schema probably needs another table.'
      },
      'ar-msa': {
        definition: 'الصف (Row) هو عنصر واحد في الجدول: مجموعة قيم الأعمدة التي تصف كيانًا واحدًا بعينه.',
        simple: 'الصف سطر واحد في الجدول: مستخدم واحد، طلب واحد، مصطلح واحد.',
        whenToUse: 'الصف = شيء واحد. إن وجدت نفسك تكرر قيمًا عبر الصفوف فغالبًا يحتاج المخطط جدولًا آخر.'
      }
    }
  },
  {
    id: 'column',
    name: 'Column',
    category: 'backend',
    subcategory: 'Storage',
    difficulty: 'beginner',
    popularity: 78,
    related: ['table', 'row', 'data-types'],
    prerequisites: ['table'],
    resources: [],
    content: {
      en: {
        definition: 'A column is one attribute of a table: it has a name and a type, and every row supplies a value (or null) for it.',
        simple: 'A column is one question the table asks about every item, like name or price.',
        whenToUse: 'Columns are your data model contract; changing types later requires a migration.'
      },
      'ar-msa': {
        definition: 'العمود (Column) خاصية واحدة من الجدول: له اسم ونوع، وكل صف يقدم له قيمة أو null.',
        simple: 'العمود سؤال واحد يطرحه الجدول على كل عنصر، مثل name أو price.',
        whenToUse: 'الأعمدة عقد نموذج بياناتك؛ وتغيير الأنواع لاحقًا يتطلب Migration.'
      }
    }
  },
  {
    id: 'primary-key',
    name: 'Primary Key',
    category: 'backend',
    subcategory: 'Storage',
    difficulty: 'beginner',
    popularity: 80,
    related: ['table', 'row', 'foreign-key', 'index'],
    prerequisites: ['table'],
    diagrams: ['db-relations'],
    resources: [],
    content: {
      en: {
        definition: 'A primary key is the column (or set of columns) whose value uniquely identifies each row in a table; it cannot be null or duplicated.',
        simple: 'A primary key is the ID card number of every row: unique and mandatory.',
        whenToUse: 'Every table needs one — usually an auto-incrementing integer or a UUID — so rows can be addressed and referenced reliably.'
      },
      'ar-msa': {
        definition: 'المفتاح الأساسي هو العمود الذي يحدد هوية كل صف في الجدول بشكل فريد؛ ولا يمكن أن يكون null أو مكررًا.',
        simple: 'المفتاح الأساسي رقم بطاقة الهوية لكل صف: فريد وإلزامي.',
        whenToUse: 'كل جدول يحتاج واحدًا — عادة رقمًا يتزايد تلقائيًا أو UUID — ليكون للصفوف عنوان موثوق.'
      }
    }
  },
  {
    id: 'foreign-key',
    name: 'Foreign Key',
    category: 'backend',
    subcategory: 'Storage',
    difficulty: 'intermediate',
    popularity: 79,
    related: ['primary-key', 'table'],
    prerequisites: ['primary-key'],
    diagrams: ['db-relations'],
    resources: [],
    content: {
      en: {
        definition: 'A foreign key is a column that points to the primary key of another table, creating a relationship the database enforces.',
        simple: 'A foreign key is a sticky note saying: this row belongs to that row over there.',
        mistakes: 'Deleting a parent row while children still reference it fails unless you define what should happen (cascade or restrict).'
      },
      'ar-msa': {
        definition: 'المفتاح الأجنبي عمود يشير إلى المفتاح الأساسي في جدول آخر، مكونًا علاقة يفرضها محرك قاعدة البيانات.',
        simple: 'المفتاح الأجنبي ورقة لاصقة تقول: هذا الصف ينتمي إلى ذلك الصف هناك.',
        mistakes: 'حذف صف أب وبقاء أبناء يشيرون إليه يفشل ما لم تحدد ما يجب أن يحدث (Cascade أو Restrict).'
      }
    }
  },
  {
    id: 'query',
    name: 'Query',
    category: 'backend',
    subcategory: 'Operations',
    difficulty: 'beginner',
    popularity: 84,
    related: ['database', 'sql', 'index'],
    prerequisites: ['database'],
    resources: [],
    content: {
      en: {
        definition: 'A query is a structured request to a database — most often written in SQL — that reads or changes data.',
        simple: 'A query is the question you type to make the database hand over data.',
        example: {
          text: 'Count how many terms exist in each category.',
          code: "SELECT category, COUNT(*) AS total\nFROM terms\nGROUP BY category;",
          codeLang: 'sql'
        }
      },
      'ar-msa': {
        definition: 'الاستعلام (Query) طلب منظم لقاعدة بيانات — يكتب غالبًا بـ SQL — يقرأ البيانات أو يغيرها.',
        simple: 'الاستعلام هو السؤال الذي تكتبه لتسلم من قاعدة البيانات البيانات التي تريدها.'
      }
    }
  },
  {
    id: 'index',
    name: 'Index',
    category: 'backend',
    subcategory: 'Performance',
    difficulty: 'intermediate',
    popularity: 77,
    related: ['database', 'query', 'performance'],
    prerequisites: ['database'],
    resources: [],
    content: {
      en: {
        definition: 'A database index is an auxiliary lookup structure (often a B-tree) that lets the engine find rows without scanning the whole table.',
        simple: 'An index is the database book index: jump straight to the page instead of reading everything.',
        whenToUse: 'Index the columns you filter and join on; but every index slows writes slightly, so do not index everything.'
      },
      'ar-msa': {
        definition: 'فهرس قاعدة البيانات بنية بحث مساعدة (غالبًا B-tree) تتيح للمحرك إيجاد الصفوف دون مسح الجدول كاملًا.',
        simple: 'الفهرس هو فهرس الكتاب في قاعدة البيانات: اقفز إلى الصفحة بدل قراءة كل شيء.',
        whenToUse: 'افهرس الأعمدة التي ترشّح بها وتجمع بينها؛ لكن كل فهرس يبطئ الكتابة قليلًا فلا تفهرس كل شيء.'
      }
    }
  },
  {
    id: 'schema',
    name: 'Schema',
    category: 'backend',
    subcategory: 'Storage',
    difficulty: 'intermediate',
    popularity: 82,
    related: ['database', 'table', 'migration', 'primary-key'],
    prerequisites: ['database'],
    diagrams: ['db-relations'],
    resources: [],
    content: {
      en: {
        definition: 'A schema is the formal description of how data is organized: which tables exist, their columns and types, and the relationships between them.',
        simple: 'A schema is the blueprint of the database: what rooms exist and what goes in each.',
        whenToUse: 'Design it before coding; a well-designed schema prevents most data bugs.'
      },
      'ar-msa': {
        definition: 'المخطط (Schema) هو الوصف الرسمي لتنظيم البيانات: ما الجداول الموجودة وأعمدتها وأنواعها والعلاقات بينها.',
        simple: 'المخطط هو مخطط البناء لقاعدة البيانات: ما الغرف الموجودة وماذا يوضع في كل واحدة.',
        whenToUse: 'صممه قبل البرمجة؛ فالمخطط الجيد يمنع معظم أخطاء البيانات.'
      }
    }
  },
  {
    id: 'migration',
    name: 'Migration',
    category: 'backend',
    subcategory: 'Operations',
    difficulty: 'intermediate',
    popularity: 78,
    related: ['schema', 'database'],
    prerequisites: ['schema'],
    resources: [],
    content: {
      en: {
        definition: 'A migration is a versioned, scripted change to the database schema — adding a column, creating a table — applied in order so every environment evolves identically.',
        simple: 'A migration is a recipe that changes the database, applied step by step everywhere.',
        whenToUse: 'Never ALTER TABLE by hand in production; write a migration so staging and production stay identical.'
      },
      'ar-msa': {
        definition: 'الـ Migration تغيير مُرقم ومبرمج لمخطط قاعدة البيانات — إضافة عمود أو إنشاء جدول — يطبق بالترتيب لتتطور كل البيئات بشكل متطابق.',
        simple: 'الـ Migration وصفة تغير قاعدة البيانات، وتطبق خطوة بخطوة في كل مكان.',
        whenToUse: 'لا تعدل الجداول يدويًا في الإنتاج أبدًا؛ اكتب Migration لتبقى بيئتا الاختبار والإنتاج متطابقتين.'
      }
    }
  },
  {
    id: 'crud',
    name: 'CRUD',
    category: 'backend',
    subcategory: 'Operations',
    difficulty: 'beginner',
    popularity: 82,
    related: ['api', 'rest', 'sql'],
    prerequisites: ['database', 'api'],
    diagrams: ['api-request'],
    resources: [],
    content: {
      en: {
        definition: 'CRUD stands for Create, Read, Update, Delete — the four basic operations every data application performs.',
        simple: 'CRUD is the four verbs of data apps: make it, show it, change it, remove it.',
        example: {
          text: 'CRUD maps cleanly onto REST and SQL.',
          code: "POST   /api/terms   ~ INSERT   (Create)\nGET    /api/terms   ~ SELECT   (Read)\nPUT    /api/terms/1 ~ UPDATE   (Update)\nDELETE /api/terms/1 ~ DELETE   (Delete)",
          codeLang: 'http'
        }
      },
      'ar-msa': {
        definition: 'الـ CRUD اختصار لـ Create و Read و Update و Delete — العمليات الأربع الأساسية في كل تطبيق بيانات.',
        simple: 'الـ CRUD هي الأفعال الأربعة لتطبيقات البيانات: أنشئه، اقرأه، عدّله، احذفه.'
      }
    }
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'backend',
    subcategory: 'Platforms',
    difficulty: 'intermediate',
    popularity: 74,
    related: ['postgresql', 'database', 'authentication', 'api'],
    prerequisites: ['database', 'postgresql'],
    resources: [{ label: 'Supabase Docs', url: 'https://supabase.com/docs', verified: false }],
    content: {
      en: {
        definition: 'Supabase is an open-source backend-as-a-service platform built on PostgreSQL, providing a REST API over your schema, auth, storage, and realtime subscriptions.',
        simple: 'Supabase gives you a ready PostgreSQL database with auth and instant API, without writing a backend.',
        whenToUse: 'Great for prototypes and products that want a backend quickly; note that this dictionary itself works fully offline and stores data locally.'
      },
      'ar-msa': {
        definition: 'Supabase منصة مفتوحة المصدر توفر الخدمة الخلفية كخدمة مبنية على PostgreSQL، وتقدم REST API فوق مخططك مع مصادقة وتخزين واشتراكات فورية.',
        simple: 'Supabase يمنحك قاعدة PostgreSQL جاهزة مع مصادقة وAPI فوري دون كتابة Backend.',
        whenToUse: 'ممتاز للنماذج والمنتجات التي تريد backend سريعًا؛ علماً أن هذا القاموس نفسه يعمل دون إنترنت ويخزن البيانات محليًا.'
      }
    }
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'backend',
    subcategory: 'Platforms',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['nosql', 'authentication', 'database', 'api'],
    prerequisites: ['database'],
    resources: [{ label: 'Firebase Docs', url: 'https://firebase.google.com/docs', verified: false }],
    content: {
      en: {
        definition: 'Firebase is Google\u2019s backend platform: a NoSQL document store (Firestore), authentication, hosting, and analytics for mobile and web apps.',
        simple: 'Firebase is a rented backend from Google: database, login system, and hosting in one place.',
        whenToUse: 'Mobile apps and prototypes that need sync and auth fast; consider vendor lock-in before committing.',
        mistakes: 'Firestore charges per read — careless queries on large collections can become expensive.'
      },
      'ar-msa': {
        definition: 'Firebase منصة Google للخدمة الخلفية: مخزن مستندات NoSQL (Firestore) ومصادقة واستضافة وتحليلات لتطبيقات الويب والموبايل.',
        simple: 'Firebase backend مستأجر من Google: قاعدة بيانات ونظام دخول واستضافة في مكان واحد.',
        whenToUse: 'تطبيقات الموبايل والنماذج التي تحتاج مزامنة ومصادقة سريعة؛ وادرس الارتباط بالمورد قبل الالتزام.',
        mistakes: 'Firestore يحاسب على القراءة — الاستعلامات المهملة على مجموعات كبيرة قد تصبح مكلفة.'
      }
    }
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'backend',
    subcategory: 'Engines',
    difficulty: 'intermediate',
    popularity: 86,
    related: ['sql', 'database', 'supabase'],
    prerequisites: ['sql'],
    resources: [{ label: 'PostgreSQL — Documentation', url: 'https://www.postgresql.org/docs/', verified: false }],
    content: {
      en: {
        definition: 'PostgreSQL is a powerful open-source relational database engine known for standards compliance, rich types, transactions, and extensibility.',
        simple: 'PostgreSQL is the trusted, feature-rich database many serious products build on.',
        whenToUse: 'Default choice for relational backends today; also the engine underneath Supabase.'
      },
      'ar-msa': {
        definition: 'PostgreSQL محرك قاعدة بيانات علائقية مفتوح المصدر قوي، مشهور بالالتزام بالمعايير والأنواع الغنية والمعاملات وقابلية التوسعة.',
        simple: 'PostgreSQL قاعدة البيانات الموثوقة الغنية بالميزات التي تُبنى عليها منتجات جدية كثيرة.',
        whenToUse: 'الخيار الافتراضي للخدمات الخلفية العلائقية اليوم؛ وهو أيضًا المحرك أسفل Supabase.'
      }
    }
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    category: 'backend',
    subcategory: 'Engines',
    difficulty: 'beginner',
    popularity: 79,
    related: ['sql', 'database'],
    prerequisites: ['sql'],
    resources: [{ label: 'SQLite — Documentation', url: 'https://www.sqlite.org/docs.html', verified: false }],
    content: {
      en: {
        definition: 'SQLite is a serverless relational database that stores the entire database in a single file, embedded directly inside the application.',
        simple: 'SQLite is a whole database inside one file — no server, no setup.',
        whenToUse: 'Mobile apps, desktop tools, and local-first projects; this dictionary could use it someday, but today it relies on browser storage.'
      },
      'ar-msa': {
        definition: 'SQLite قاعدة بيانات علائقية بلا سيرفر تخزن القاعدة بأكملها في ملف واحد مدمج داخل التطبيق.',
        simple: 'SQLite قاعدة بيانات كاملة داخل ملف واحد — بلا سيرفر ولا إعداد.',
        whenToUse: 'تطبيقات الموبايل وأدوات سطح المكتب والمشاريع المحلية أولاً؛ وهذا القاموس قد يستخدمها مستقبلًا، لكنه اليوم يعتمد على تخزين المتصفح.'
      }
    }
  },
  {
    id: 'api-endpoint',
    name: 'API Endpoint',
    category: 'backend',
    subcategory: 'APIs',
    difficulty: 'beginner',
    popularity: 83,
    related: ['api', 'rest', 'http'],
    prerequisites: ['api'],
    diagrams: ['api-request'],
    resources: [],
    content: {
      en: {
        definition: 'An API endpoint is one specific URL plus method combination in an API — the exact address a client calls to perform one operation.',
        simple: 'An endpoint is one door in the API building, each leading to one operation.',
        example: {
          text: 'Endpoint = method + path.',
          code: "GET /api/terms        # endpoint: list terms\nGET /api/terms/git    # endpoint: one term",
          codeLang: 'http'
        }
      },
      'ar-msa': {
        definition: 'نقطة النهاية (Endpoint) هي مزيج محدد من URL وطريقة في API — العنوان الدقيق الذي يستدعيه العميل لتنفيذ عملية واحدة.',
        simple: 'الـ Endpoint باب واحد في مبنى الـ API، كل باب يؤدي إلى عملية واحدة.'
      }
    }
  },
  {
    id: 'middleware',
    name: 'Middleware',
    category: 'backend',
    subcategory: 'APIs',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['api', 'server'],
    prerequisites: ['server'],
    diagrams: ['auth-flow'],
    resources: [],
    content: {
      en: {
        definition: 'Middleware is code that sits in the request pipeline between the server receiving a request and the route handling it: logging, parsing, authentication, rate limiting.',
        simple: 'Middleware is airport security for requests: every request passes through the same checks before boarding.',
        howItWorks: 'Each middleware runs, may modify the request, and either passes control to the next handler or stops with a response.',
        whenToUse: 'Cross-cutting concerns: auth checks, CORS, body parsing, and logging that every route needs.'
      },
      'ar-msa': {
        definition: 'الـ Middleware كود يقف في مسار الطلب بين استقبال السيرفر للطلب وبين معالج المسار: تسجيل وتحليل ومصادقة وتحديد المعدل.',
        simple: 'الـ Middleware هو تفتيش المطار للطلبات: كل طلب يمر بنفس الفحوص قبل الصعود.',
        howItWorks: 'كل Middleware يعمل وقد يعدل الطلب، ثم إما يمرر التحكم للمعالج التالي أو يوقف بسبب استجابة.',
        whenToUse: 'الاهتمامات المشتركة: فحوص المصادقة و CORS وتحليل الجسم والتسجيل التي تحتاجها كل المسارات.'
      }
    }
  },
  {
    id: 'serverless',
    name: 'Serverless',
    category: 'backend',
    subcategory: 'Architecture',
    difficulty: 'intermediate',
    popularity: 78,
    related: ['api', 'functions', 'deploy'],
    prerequisites: ['api'],
    resources: [],
    content: {
      en: {
        definition: 'Serverless is a cloud model where you deploy individual functions and the provider runs, scales, and bills them per invocation — there are still servers, just not yours.',
        simple: 'Serverless means you write functions and the cloud worries about the machines.',
        mistakes: 'Cold starts add latency on the first call, and long-running work does not fit the short execution window.'
      },
      'ar-msa': {
        definition: 'الـ Serverless نموذج سحابي تنشر فيه دوال منفردة ويشغّلها المزود ويوسعها ويحاسبك على كل استدعاء — توجد سيرفرات، لكنها ليست سيرفراتك.',
        simple: 'الـ Serverless يعني أن تكتب دوالك وتقلق السحابة عن الأجهزة.',
        mistakes: 'البدء البارد يضيف تأخيرًا في أول استدعاء، والأعمال الطويلة لا تناسب نافذة التنفيذ القصيرة.'
      }
    }
  }
];
