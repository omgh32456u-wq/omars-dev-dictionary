import type { Term } from '../types';

// Omar's Dev Dictionary — Software Engineering & Architecture terms.

export const ARCHITECTURE_TERMS: Term[] = [
  {
    id: 'framework',
    name: 'Framework',
    category: 'architecture',
    subcategory: 'Building blocks',
    difficulty: 'beginner',
    popularity: 90,
    related: ['library', 'react', 'dependency'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A framework is a pre-built application skeleton that calls your code: it owns the flow, and you fill in the parts it asks for.',
        simple: 'A framework is a house with the walls already built — you decorate the rooms.',
        whenToUse: 'When you want conventions and structure instead of inventing everything yourself.',
        mistakes: 'Do not fight the framework; learn its way before inventing your own.'
      },
      'ar-msa': {
        definition: 'الإطار (Framework) هيكل تطبيق جاهز يستدعي كودك: هو يملك التدفق، وأنت تملأ الأجزاء التي يطلبها.',
        simple: 'الـ Framework بيت مبني الجدران — أنت تفرش الغرف.',
        whenToUse: 'عندما تريد أعرافًا وبنية جاهزة بدل اختراع كل شيء بنفسك.',
        mistakes: 'لا تحارب الإطار؛ تعلم طريقته قبل أن تخترع طريقتك.'
      }
    }
  },
  {
    id: 'library',
    name: 'Library',
    category: 'architecture',
    subcategory: 'Building blocks',
    difficulty: 'beginner',
    popularity: 89,
    related: ['framework', 'package', 'dependency', 'npm'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A library is a collection of reusable code (functions, components, utilities) that your code calls when needed — you stay in control of the flow.',
        simple: 'A library is a toolbox you reach into; a framework is a boss that calls you.',
        whenToUse: 'Use libraries for focused capabilities (dates, charts, validation) without surrendering your architecture.',
        mistakes: 'Adding a library for something a few lines of code can do bloats your bundle.'
      },
      'ar-msa': {
        definition: 'المكتبة (Library) مجموعة كود قابل لإعادة الاستخدام يستدعيها كودك عند الحاجة، وتبقى أنت المتحكم في التدفق.',
        simple: 'المكتبة صندوق أدوات تمد يدك إليه؛ أما الـ Framework فهو مدير يستدعيك.',
        whenToUse: 'استخدم المكتبات لقدرات محددة دون تسليم معماريتك.',
        mistakes: 'إضافة مكتبة لشيء تفعله أسطر قليلة تنفخ حزمتك.'
      }
    }
  },
  {
    id: 'component',
    name: 'Component',
    category: 'architecture',
    subcategory: 'UI architecture',
    difficulty: 'beginner',
    popularity: 91,
    related: ['react', 'props', 'state'],
    prerequisites: [],
    diagrams: ['react-state'],
    resources: [],
    content: {
      en: {
        definition: 'A component is a self-contained, reusable piece of UI that receives inputs (props), may hold local state, and renders output.',
        simple: 'A component is a Lego brick of your interface: build once, snap in anywhere.',
        example: {
          text: 'A React component from this very app.',
          code: "function DifficultyBadge({ level }: { level: 'beginner' | 'intermediate' | 'advanced' }) {\n  return <span className={'badge badge-' + level}>{level}</span>;\n}",
          codeLang: 'tsx'
        },
        whenToUse: 'Whenever the same UI pattern appears twice — extract it.'
      },
      'ar-msa': {
        definition: 'المكون (Component) قطعة واجهة مستقلة قابلة لإعادة الاستخدام تستقبل مدخلات (Props) وقد تحمل حالة محلية وتنتج مخرجات.',
        simple: 'المكون قطعة ليغو في واجهتك: ابنها مرة وركبها في أي مكان.',
        whenToUse: 'كلما تكرر نمط الواجهة نفسه — استخرجه كمكون.'
      }
    }
  },
  {
    id: 'state',
    name: 'State',
    category: 'architecture',
    subcategory: 'UI architecture',
    difficulty: 'beginner',
    popularity: 92,
    related: ['component', 'props', 'hook'],
    prerequisites: ['component'],
    diagrams: ['react-state'],
    resources: [],
    content: {
      en: {
        definition: 'State is data that can change over time and that the UI must react to — the current search text, the open menu, the fetched terms.',
        simple: 'State is your app\u2019s memory of what is happening right now.',
        example: {
          text: 'State changes re-render the component.',
          code: "const [query, setQuery] = useState('');",
          codeLang: 'tsx'
        },
        mistakes: 'Keeping everything in one global blob makes changes hard to trace; keep state as local as possible.'
      },
      'ar-msa': {
        definition: 'الحالة (State) بيانات قابلة للتغير بمرور الوقت ويجب أن تتفاعل معها الواجهة — نص البحث الحالي، القائمة المفتوحة، المصطلحات المحمّلة.',
        simple: 'الحالة هي ذاكرة تطبيقك لما يحدث الآن.',
        mistakes: 'وضع كل شيء في كتلة عامة واحدة يصعب تتبع التغييرات؛ أبقِ الحالة محلية قدر الإمكان.'
      }
    }
  },
  {
    id: 'props',
    name: 'Props',
    category: 'architecture',
    subcategory: 'UI architecture',
    difficulty: 'beginner',
    popularity: 88,
    related: ['component', 'state'],
    prerequisites: ['component'],
    diagrams: ['react-state'],
    resources: [],
    content: {
      en: {
        definition: 'Props are the read-only inputs a parent component passes down to a child component to configure it.',
        simple: 'Props are the arguments of a component; the child must not rewrite them.',
        example: {
          text: 'Props flow one way: down.',
          code: '<TermCard name="Git" difficulty="beginner" />',
          codeLang: 'tsx'
        },
        mistakes: 'Mutating props directly breaks the one-way data flow — derive or lift state instead.'
      },
      'ar-msa': {
        definition: 'الـ Props هي المدخلات للقراءة فقط التي يمررها المكون الأب إلى المكون الابن لتهيئته.',
        simple: 'الـ Props وسائط المكون؛ والابن لا يحق له تعديلها.',
        mistakes: 'تعديل الـ Props مباشرة يكسر تدفق البيانات أحادي الاتجاه — استنتج القيم أو ارفع الحالة بدلًا من ذلك.'
      }
    }
  },
  {
    id: 'hook',
    name: 'Hook',
    category: 'architecture',
    subcategory: 'UI architecture',
    difficulty: 'intermediate',
    popularity: 87,
    related: ['state', 'react', 'component'],
    prerequisites: ['component', 'state'],
    diagrams: ['react-state'],
    resources: [],
    content: {
      en: {
        definition: 'A Hook is a React function (name starting with use) that lets a function component use state, effects, and other React features.',
        simple: 'Hooks are the plugs function components use to draw power from React.',
        example: {
          text: 'This app\u2019s usePrefs hook wraps the prefs store.',
          code: 'const [prefs, setPrefs] = usePrefs();',
          codeLang: 'tsx'
        },
        mistakes: 'Hooks must be called unconditionally at the top level — never inside if statements or loops.',
        whenToUse: 'Any time a component needs state, subscriptions, or side effects.'
      },
      'ar-msa': {
        definition: 'الـ Hook دالة في React (اسمها يبدأ بـ use) تتيح للمكون الدالي استخدام الحالة والتأثيرات وميزات React الأخرى.',
        simple: 'الـ Hooks مقابس كهربائية تستخدمها المكونات الدالية لتشتغل من React.',
        mistakes: 'يجب استدعاء الـ Hooks دائمًا وبلا شروط في أعلى المكون — وليس داخل if أو حلقات أبدًا.',
        whenToUse: 'كلما احتاج مكون إلى حالة أو اشتراكات أو تأثيرات جانبية.'
      }
    }
  },
  {
    id: 'react',
    name: 'React',
    category: 'architecture',
    subcategory: 'Frameworks',
    difficulty: 'beginner',
    popularity: 96,
    related: ['component', 'hook', 'state', 'jsx'],
    prerequisites: ['javascript'],
    diagrams: ['react-state'],
    resources: [{ label: 'React — Learn', url: 'https://react.dev/learn', verified: false }],
    content: {
      en: {
        definition: 'React is a JavaScript UI library where you describe the interface as a tree of components and React efficiently updates the DOM when state changes.',
        simple: 'React lets you write HTML-looking components and updates the page for you when data changes.',
        whenToUse: 'Interactive single-page apps — this dictionary itself is built with React 18.',
        mistakes: 'Mutating state directly instead of replacing it — React will not see the change.'
      },
      'ar-msa': {
        definition: 'React مكتبة JavaScript لواجهات المستخدم، تصف فيها الواجهة كشجرة من المكونات ويحدث React شجرة DOM بكفاءة عند تغير الحالة.',
        simple: 'React يتيح لك كتابة مكونات تشبه HTML ويحدّث الصفحة نيابة عنك عند تغير البيانات.',
        whenToUse: 'تطبيقات الصفحة الواحدة التفاعلية — وهذا القاموس نفسه مبني بـ React 18.',
        mistakes: 'تعديل الحالة مباشرة بدل استبدالها — فلن يلاحظ React التغيير.'
      }
    }
  },
  {
    id: 'routing',
    name: 'Routing',
    category: 'architecture',
    subcategory: 'UI architecture',
    difficulty: 'beginner',
    popularity: 86,
    related: ['react', 'spa'],
    prerequisites: ['react'],
    resources: [],
    content: {
      en: {
        definition: 'Routing maps URLs to screens inside a single-page application, so each view has a shareable address without full page reloads.',
        simple: 'Routing gives every screen its own address inside one app.',
        example: {
          text: 'This app uses HashRouter: /#/term/git opens the Git page.',
          code: '<Route path="/term/:id" element={<TermPage />} />',
          codeLang: 'tsx'
        },
        whenToUse: 'Any SPA with more than one screen; keep URLs shareable and the back button working.'
      },
      'ar-msa': {
        definition: 'التوجيه (Routing) يربط عناوين URL بالشاشات داخل تطبيق الصفحة الواحدة، فلكل شاشة عنوان قابل للمشاركة دون إعادة تحميل كاملة.',
        simple: 'التوجيه يمنح كل شاشة عنوانها الخاص داخل التطبيق.',
        whenToUse: 'أي تطبيق صفحة واحدة بأكثر من شاشة؛ وأبقِ الروابط قابلة للمشاركة وزر الرجوع يعمل.'
      }
    }
  },
  {
    id: 'dependency',
    name: 'Dependency',
    category: 'architecture',
    subcategory: 'Building blocks',
    difficulty: 'beginner',
    popularity: 84,
    related: ['package', 'npm', 'library'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A dependency is an external package your project needs to run or build, declared in package.json and installed by the package manager.',
        simple: 'A dependency is a tool you borrowed from the community instead of building yourself.',
        whenToUse: 'Declare every borrowed code as a dependency so installs are reproducible — never vendor files by hand.',
        mistakes: 'Unused dependencies grow the bundle and attack surface; prune them regularly.'
      },
      'ar-msa': {
        definition: 'الاعتمادية (Dependency) حزمة خارجية يحتاجها مشروعك للتشغيل أو البناء، معرفة في package.json ويثبتها مدير الحزم.',
        simple: 'الاعتمادية أداة استعرتها من المجتمع بدل بنائها بنفسك.',
        whenToUse: 'أعلن كل كود مستعار كاعتمادية ليكون التثبيت قابلًا للتكرار — ولا تنسخ ملفات يدويًا أبدًا.',
        mistakes: 'الاعتماديات غير المستخدمة تضخم الحزمة وتوسع سطح الهجوم؛ قلمها بانتظام.'
      }
    }
  },
  {
    id: 'module',
    name: 'Module',
    category: 'architecture',
    subcategory: 'Code organization',
    difficulty: 'beginner',
    popularity: 85,
    related: ['import', 'export', 'package'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A module is a file (or group of files) that encapsulates related functionality behind explicit imports and exports.',
        simple: 'A module is a labeled drawer in a filing cabinet: open only what you need.',
        example: {
          text: 'This app\u2019s tts module exports the speech provider.',
          code: "import { speech } from './lib/tts';",
          codeLang: 'ts'
        }
      },
      'ar-msa': {
        definition: 'الوحدة (Module) ملف أو مجموعة ملفات تحتوي وظائف مترابطة خلف استيرادات وتصديرات صريحة.',

simple: 'الوحدة درج معلم في خزانة ملفات: افتح ما تحتاجه فقط.'
      }
    }
  },
  {
    id: 'package',
    name: 'Package',
    category: 'architecture',
    subcategory: 'Building blocks',
    difficulty: 'beginner',
    popularity: 83,
    related: ['package-manager', 'npm', 'dependency'],
    prerequisites: ['package-manager'],
    resources: [],
    content: {
      en: {
        definition: 'A package is a distributable, versioned bundle of modules, described by a manifest like package.json, installable from a registry.',
        simple: 'A package is a module that ships in a box with a version number.',
        whenToUse: 'Publish reusable code as a package instead of copy-pasting files between projects.'
      },
      'ar-msa': {
        definition: 'الحزمة (Package) رزمة قابلة للتوزيع ومرقمة من الوحدات، موصوفة ببيان مثل package.json وقابلة للتثبيت من سجل.',
        simple: 'الحزمة وحدة تسافر في صندوق عليه رقم إصدار.',
        whenToUse: 'انشر الكود القابل لإعادة الاستخدام كحزمة بدل نسخ الملفات بين المشاريع.'
      }
    }
  },
  {
    id: 'architecture',
    name: 'Architecture',
    category: 'architecture',
    subcategory: 'Foundations',
    difficulty: 'intermediate',
    popularity: 88,
    related: ['design-pattern', 'mvc', 'repository-pattern'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Software architecture is the set of high-level structural decisions — how components are divided, connected, and constrained — that shapes a system over its whole life.',
        simple: 'Architecture is the city plan: buildings can change, but the street layout is expensive to move.',
        whenToUse: 'Decide it early, revisit it deliberately, and document the why behind each boundary.'
      },
      'ar-msa': {
        definition: 'معمارية البرمجيات هي مجموعة القرارات البنيوية عالية المستوى — كيف تقسم المكونات وتتصل وتقيد — التي تشكل النظام عبر عمره كله.',
        simple: 'المعمارية مخطط المدينة: يمكن تغيير المباني، لكن تحريك الشوارع مكلف.',
        whenToUse: 'قررها مبكرًا وراجعها بعناية، ووثق السبب وراء كل حدود.'
      }
    }
  },
  {
    id: 'design-pattern',
    name: 'Design Pattern',
    category: 'architecture',
    subcategory: 'Patterns',
    difficulty: 'intermediate',
    popularity: 84,
    related: ['architecture', 'mvc', 'repository-pattern'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A design pattern is a named, reusable solution to a problem that recurs across many software projects.',
        simple: 'A design pattern is a proven recipe card for a problem every developer eventually meets.',
        whenToUse: 'Patterns are vocabulary: use them to solve known problems, not to decorate simple code.'
      },
      'ar-msa': {
        definition: 'نمط التصميم (Design Pattern) حل مسمى وقابل لإعادة الاستخدام لمشكلة تتكرر في مشاريع برمجية كثيرة.',
        simple: 'نمط التصميم بطاقة وصفة مجربة لمشكلة يقابلها كل مطور في النهاية.',
        whenToUse: 'الأنماط مفردات لغة: استخدمها لحل مشكلات معروفة، لا لتزيين كود بسيط.'
      }
    }
  },
  {
    id: 'mvc',
    name: 'MVC',
    category: 'architecture',
    subcategory: 'Patterns',
    difficulty: 'intermediate',
    popularity: 79,
    related: ['design-pattern', 'architecture'],
    prerequisites: ['design-pattern'],
    resources: [],
    content: {
      en: {
        definition: 'MVC (Model-View-Controller) separates an application into data (Model), presentation (View), and input coordination (Controller).',
        simple: 'MVC splits the app into three rooms: the data room, the display room, and the reception.',
        whenToUse: 'Classic server-rendered apps; modern frontend frameworks often use component-based separation instead.'
      },
      'ar-msa': {
        definition: 'الـ MVC يفصل التطبيق إلى بيانات (Model) وعرض (View) وتنسيق المدخلات (Controller).',
        simple: 'الـ MVC يقسم التطبيق إلى ثلاث غرف: غرفة البيانات وغرفة العرض والاستقبال.',
        whenToUse: 'التطبيقات الكلاسيكية المعروضة من السيرفر؛ أما أطر الواجهات الحديثة فتستخدم غالبًا فصلًا قائمًا على المكونات.'
      }
    }
  },
  {
    id: 'repository-pattern',
    name: 'Repository Pattern',
    category: 'architecture',
    subcategory: 'Patterns',
    difficulty: 'advanced',
    popularity: 72,
    related: ['design-pattern', 'database', 'mvc'],
    prerequisites: ['design-pattern', 'database'],
    resources: [],
    content: {
      en: {
        definition: 'The Repository Pattern places a typed interface between the domain logic and data access, so business code calls methods like findById instead of SQL.',
        simple: 'The Repository Pattern is a reception desk between your logic and the database.',
        whenToUse: 'When you want to swap storage engines or test business rules without a database.',
        example: {
          text: 'This app\u2019s store layer is a small repository.',
          code: "userStore.update((d) => toggleFavorite(d, 'git'));",
          codeLang: 'ts'
        }
      },
      'ar-msa': {
        definition: 'نمط المستودع (Repository Pattern) يضع واجهة مصنفة بين منطق النطاق والوصول للبيانات، فيستدعي كود الأعمال دوال مثل findById بدل SQL.',
        simple: 'نمط المستودع مكتب استقبال بين منطقك وقاعدة البيانات.',
        whenToUse: 'عندما تريد تغيير محرك التخزين أو اختبار قواعد الأعمال دون قاعدة بيانات.'
      }
    }
  },
  {
    id: 'caching',
    name: 'Caching',
    category: 'architecture',
    subcategory: 'Performance',
    difficulty: 'intermediate',
    popularity: 83,
    related: ['performance', 'memory', 'index'],
    prerequisites: ['performance'],
    resources: [],
    content: {
      en: {
        definition: 'Caching stores computed or fetched data in a fast nearby place so repeated requests reuse it instead of redoing the work.',
        simple: 'Caching is keeping a copy of the answer on a sticky note next to the phone.',
        whenToUse: 'Cache read-heavy data with a clear invalidation rule; the hardest part of caching is knowing when the note is stale.',
        mistakes: 'A cache you never invalidate shows users yesterday\u2019s data — and stale caches cause the strangest bugs.'
      },
      'ar-msa': {
        definition: 'التخزين المؤقت (Caching) يحفظ البيانات المحسوبة أو المجلوبة في مكان قريب سريع ليعيد الطلبات المتكررة استخدامها بدل إعادة العمل.',
        simple: 'التخزين المؤقت هو كتابة الإجابة على ورقة لاصقة بجوار الهاتف.',
        whenToUse: 'خزن مؤقتًا البيانات كثيرة القراءة بقاعدة إبطال واضحة؛ وأصعب جزء هو معرفة متى تصبح الورقة قديمة.',
        mistakes: 'الذاكرة المؤقتة التي لا تبطل أبدًا تعرض على المستخدمين بيانات الأمس — وتسبب أغرب الأخطاء.'
      }
    }
  },
  {
    id: 'performance',
    name: 'Performance',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 86,
    related: ['caching', 'memory', 'optimization', 'lazy-loading'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Performance is how efficiently an application uses resources (time, memory, network) to respond to the user — usually measured as latency, throughput, and frame rate.',
        simple: 'Performance is how fast the app feels and how little it wastes.',
        whenToUse: 'Measure before optimizing; most users feel page load time, input latency, and animation smoothness.',
        mistakes: 'Optimizing code that was never slow wastes time and adds complexity — profile first.'
      },
      'ar-msa': {
        definition: 'الأداء (Performance) هو مدى كفاءة التطبيق في استخدام الموارد للاستجابة للمستخدم — ويقاس عادة بالكمون والإنتاجية ومعدل الإطارات.',
        simple: 'الأداء هو مدى سرعة شعور التطبيق وقلة هدره.',
        whenToUse: 'قس قبل التحسين؛ فمعظم المستخدمين يشعرون بزمن التحميل وكمون الإدخال وسلاسة الحركة.',
        mistakes: 'تحسين كود لم يكن بطيئًا أصلًا مضيعة وقت وتعقيد إضافي — اعمل Profile أولًا.'
      }
    }
  },
  {
    id: 'memory',
    name: 'Memory',
    category: 'architecture',
    subcategory: 'Performance',
    difficulty: 'intermediate',
    popularity: 82,
    related: ['performance', 'garbage-collection', 'call-stack'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Memory is the working space where a program keeps its data while running; managed runtimes reclaim it automatically via garbage collection.',
        simple: 'Memory is the desk you work on: too much clutter and everything slows down.',
        whenToUse: 'Care about it when you hold big lists, large images, or long-lived caches in the browser.',
        mistakes: 'Forgetting to remove event listeners and timers keeps objects alive forever — a memory leak.'
      },
      'ar-msa': {
        definition: 'الذاكرة (Memory) هي مساحة العمل التي يحتفظ فيها البرنامج ببياناته أثناء التشغيل؛ وبيئات الإدارة تستردها تلقائيًا عبر تجميع القمامة.',
        simple: 'الذاكرة هي مكتبك الذي تعمل عليه: كثرت الفوضى فتباطأ كل شيء.',
        whenToUse: 'اهتم بها عندما تحتفظ بقوائم ضخمة أو صور كبيرة أو ذاكرات مؤقتة طويلة العمر.',
        mistakes: 'نسيان إزالة مستمعي الأحداث والمؤقتات يبقي الكائنات حية إلى الأبد — تسريب ذاكرة.'
      }
    }
  },
  {
    id: 'security',
    name: 'Security',
    category: 'architecture',
    subcategory: 'Security',
    difficulty: 'intermediate',
    popularity: 87,
    related: ['encryption', 'hashing', 'authentication', 'api-key'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Security is the discipline of protecting a system\u2019s data and users from unauthorized access, tampering, and attacks like injection or XSS.',
        simple: 'Security means assuming every input is hostile until proven safe.',
        whenToUse: 'From the first line of code: validate inputs, hash passwords, and never trust the client.',
        mistakes: 'The classic web mistakes: storing plain passwords, leaking secrets into the bundle, and trusting client-side checks.'
      },
      'ar-msa': {
        definition: 'الأمن (Security) هو حماية بيانات النظام ومستخدميه من الوصول غير المصرح والعبث والهجمات مثل الحقن و XSS.',
        simple: 'الأمن يعني افتراض أن كل مدخل معاد حتى تثبت سلامته.',
        whenToUse: 'من أول سطر كود: تحقق من المدخلات وعم كلمات المرور ولا تثق بالعميل أبدًا.',
        mistakes: 'الأخطاء الكلاسيكية في الويب: تخزين كلمات مرور صريحة، وتسريب الأسرار إلى الحزمة، والثقة بفحوص الواجهة.'
      }
    }
  },
  {
    id: 'encryption',
    name: 'Encryption',
    category: 'architecture',
    subcategory: 'Security',
    difficulty: 'intermediate',
    popularity: 84,
    related: ['hashing', 'https', 'security'],
    prerequisites: ['security'],
    resources: [],
    content: {
      en: {
        definition: 'Encryption transforms readable data (plaintext) into unreadable form (ciphertext) using a key, so only key-holders can restore it.',
        simple: 'Encryption is a lockable box: whoever has the key can open it.',
        whenToUse: 'Encrypt data in transit (HTTPS/TLS) and sensitive data at rest.',
        mistakes: 'Encryption is reversible with the key; for passwords you need hashing, not encryption.'
      },
      'ar-msa': {
        definition: 'التشفير (Encryption) يحول البيانات المقروءة إلى شكل غير مقروء باستخدام مفتاح، فلا يستطيع إعادتها إلا من يملك المفتاح.',
        simple: 'التشفير صندوق بقفل: من يملك المفتاح يستطيع فتحه.',
        whenToUse: 'شفر البيانات أثناء النقل (HTTPS/TLS) والبيانات الحساسة في السكون.',
        mistakes: 'التشفير قابل للعكس بالمفتاح؛ أما كلمات المرور فتحتاج Hashing لا تشفيرًا.'
      }
    }
  },
  {
    id: 'hashing',
    name: 'Hashing',
    category: 'architecture',
    subcategory: 'Security',
    difficulty: 'intermediate',
    popularity: 82,
    related: ['encryption', 'authentication', 'security'],
    prerequisites: ['encryption'],
    resources: [],
    content: {
      en: {

definition: 'Hashing maps data of any size to a fixed-length fingerprint that cannot be reversed; identical inputs always produce identical hashes.',
        simple: 'Hashing is a blender: you can make a smoothie from fruit, but never fruit from a smoothie.',
        whenToUse: 'Password storage (with slow, salted algorithms like bcrypt or Argon2), file integrity, and cache keys.',
        mistakes: 'Never use fast hashes like MD5 or SHA-1 for passwords — they are trivially brute-forced.'
      },
      'ar-msa': {
        definition: 'التجزئة (Hashing) تحول بيانات أي حجم إلى بصمة ثابتة الطول لا يمكن عكسها؛ والمدخلات المتطابقة تعطي دائمًا نفس البصمة.',
        simple: 'التجزئة خلاط فواكه: تستطيع صنع العصير من الفاكهة، لكن لا تستطيع استرجاع الفاكهة من العصير.',
        whenToUse: 'تخزين كلمات المرور (بخوارزميات بطيئة مثل bcrypt أو Argon2)، وسلامة الملفات، ومفاتيح الذاكرة المؤقتة.',
        mistakes: 'لا تستخدم تجزئات سريعة مثل MD5 أو SHA-1 لكلمات المرور — تكسر بالقوة الغاشمة بسهولة.'
      }
    }
  },
  {
    id: 'testing',
    name: 'Testing',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 88,
    related: ['unit-testing', 'integration-testing', 'tdd', 'ci-cd'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Testing is the practice of verifying that code behaves as intended, using automated checks at multiple levels: unit, integration, and end-to-end.',
        simple: 'Testing is rehearsing your code before the live show.',
        whenToUse: 'Write tests for anything you would be embarrassed to break: search, payment, and data integrity first.',
        mistakes: 'A test that passes without asserting anything is decoration, not a test.'
      },
      'ar-msa': {
        definition: 'الاختبار (Testing) هو التحقق من أن الكود يعمل كما هو مقصود، باستخدام فحوص آلية على مستويات متعددة: وحدة وتكامل ونهاية إلى نهاية.',
        simple: 'الاختبار بروفة للكود قبل العرض المباشر.',
        whenToUse: 'اكتب اختبارات لكل ما ستحرجه لو انكسر: البحث والدفع وسلامة البيانات أولًا.',
        mistakes: 'الاختبار الذي ينجح دون أي تأكيد هو زينة لا اختبار.'
      }
    }
  },
  {
    id: 'refactoring',
    name: 'Refactoring',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 84,
    related: ['testing', 'technical-debt'],
    prerequisites: ['testing'],
    resources: [],
    content: {
      en: {
        definition: 'Refactoring is improving the internal structure of code without changing its external behavior, done in small verified steps.',
        simple: 'Refactoring is reorganizing your room without moving the door.',
        whenToUse: 'Before adding a nontrivial feature to messy code, and continuously in small doses — never one big rewrite.',
        mistakes: 'Refactoring without tests is guesswork; add characterization tests first.'
      },
      'ar-msa': {
        definition: 'إعادة الهيكلة (Refactoring) هي تحسين البنية الداخلية للكود دون تغيير سلوكه الخارجي، بخطوات صغيرة متحقق منها.',
        simple: 'إعادة الهيكلة ترتيب غرفتك دون تحريك الباب.',
        whenToUse: 'قبل إضافة ميزة كبيرة إلى كود فوضوي، وباستمرار بجرعات صغيرة — ولا تعد كتابة كل شيء مرة واحدة أبدًا.',
        mistakes: 'إعادة الهيكلة بدون اختبارات تخمين؛ اكتب اختبارات توصيف أولًا.'
      }
    }
  },
  {
    id: 'technical-debt',
    name: 'Technical Debt',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 83,
    related: ['refactoring', 'legacy-code'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Technical debt is the accumulated future cost of shortcuts taken today: quick fixes, missing tests, outdated patterns that slow every later change.',
        simple: 'Technical debt is a credit card for code: fast now, expensive later.',
        whenToUse: 'Take it deliberately for real deadlines, track it in issues, and pay it back on schedule.',
        mistakes: 'Ignoring debt compounds interest — eventually every feature takes weeks instead of days.'
      },
      'ar-msa': {
        definition: 'الدين التقني (Technical Debt) هو التكلفة المستقبلية المتراكمة للاختصارات المتخذة اليوم: إصلاحات سريعة واختبارات ناقصة وأنماط قديمة تبطئ كل تغيير لاحق.',
        simple: 'الدين التقني بطاقة ائتمان للكود: سريع الآن، غالٍ لاحقًا.',
        whenToUse: 'خذه عمدًا لمواعيد حقيقية، وتتبعه في Issues، وسدده بجدول.',
        mistakes: 'تجاهل الدين يراكم الفوائد — حتى تصبح كل ميزة تستغرق أسابيع بدل أيام.'
      }
    }
  },
  {
    id: 'pwa',
    name: 'PWA',
    category: 'architecture',
    subcategory: 'Delivery',
    difficulty: 'intermediate',
    popularity: 81,
    related: ['service-worker', 'offline-first', 'deploy'],
    prerequisites: ['deploy'],
    resources: [{ label: 'MDN — Progressive web apps', url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps', verified: false }],
    content: {
      en: {
        definition: 'A PWA (Progressive Web App) is a web app enhanced with a manifest and a service worker so it can be installed, work offline, and load fast.',
        simple: 'A PWA is a website that behaves like a native app: installable and working without internet.',
        howItWorks: 'The service worker precaches the app shell; the manifest gives the name, icons, and display mode; the cache serves the app offline.',
        whenToUse: 'Content apps and tools that must open instantly anywhere — like this dictionary, which is installable and reads its bundled content offline.',
        mistakes: 'The cache only helps if the service worker updates correctly; a bad update strategy strands users on an old version.'
      },
      'ar-msa': {
        definition: 'الـ PWA تطبيق ويب محسن بـ Manifest و Service Worker ليكون قابلًا للتثبيت ويعمل دون إنترنت ويحمل بسرعة.',
        simple: 'الـ PWA موقع يتصرف مثل تطبيق أصلي: قابل للتثبيت ويعمل بلا إنترنت.',
        howItWorks: 'الـ Service Worker يخزن هيكل التطبيق مسبقًا؛ والـ Manifest يعطي الاسم والأيقونات ونمط العرض؛ والذاكرة المؤقتة تخدم التطبيق دون اتصال.',
        whenToUse: 'تطبيقات المحتوى والأدوات التي يجب أن تفتح فورًا في أي مكان — مثل هذا القاموس القابل للتثبيت الذي يقرأ محتواه المدمج دون إنترنت.',
        mistakes: 'الذاكرة المؤقتة لا تفيد إلا إذا حدث الـ Service Worker بشكل صحيح؛ واستراتيجية تحديث سيئة تترك المستخدمين في نسخة قديمة.'
      }
    }
  }
];
