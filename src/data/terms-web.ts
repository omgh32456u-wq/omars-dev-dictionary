import type { Term } from '../types';

// Omar's Dev Dictionary — Web Development terms.

export const WEB_TERMS: Term[] = [
  {
    id: 'html',
    name: 'HTML',
    category: 'web',
    subcategory: 'Structure',
    difficulty: 'beginner',
    popularity: 95,
    related: ['css', 'javascript', 'dom'],
    prerequisites: [],
    resources: [{ label: 'MDN — HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', verified: false }],
    content: {
      en: {
        definition: 'HTML (HyperText Markup Language) is the markup language that defines the structure and content of web pages using elements and tags.',
        simple: 'HTML is the skeleton of a page: headings, paragraphs, images, links, buttons.',
        example: {
          text: 'Elements wrap content in tags.',
          code: "<h1>My Dictionary</h1>\n<p>Learn to program.</p>\n<a href=\"/glossary\">Open glossary</a>",
          codeLang: 'html'
        }
      },
      'ar-msa': {
        definition: 'HTML لغة ترميز تُعرّف بنية صفحات الويب ومحتواها باستخدام العناصر والوسوم.',
        simple: 'HTML هيكل الصفحة العظمي: عناوين وفقرات وصور وروابط وأزرار.'
      }
    }
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'web',
    subcategory: 'Style',
    difficulty: 'beginner',
    popularity: 94,
    related: ['html', 'responsive-design', 'dom'],
    prerequisites: ['html'],
    resources: [{ label: 'MDN — CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', verified: false }],
    content: {
      en: {
        definition: 'CSS (Cascading Style Sheets) is the language that describes how HTML elements look — colors, spacing, layout, and animation.',
        simple: 'CSS is the clothing and makeup of the page: it makes the skeleton look good.',
        example: {
          text: 'A rule selects elements and styles them.',
          code: "button {\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n}",
          codeLang: 'css'
        }
      },
      'ar-msa': {
        definition: 'CSS لغة تصف مظهر عناصر HTML — الألوان والمسافات والتخطيط والحركة.',
        simple: 'CSS ملابس الصفحة وزينتها: تجعل الهيكل يبدو جميلًا.'
      }
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'web',
    subcategory: 'Languages',
    difficulty: 'beginner',
    popularity: 98,
    related: ['typescript', 'dom', 'nodejs'],
    prerequisites: ['html', 'css'],
    resources: [{ label: 'MDN — JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', verified: false }],
    content: {
      en: {
        definition: 'JavaScript is the programming language of the web: it runs in browsers to make pages interactive and on servers via runtimes like Node.js.',
        simple: 'JavaScript is what makes pages alive: clicks, typing, loading data without refresh.',
        example: {
          text: 'React to a click.',
          code: "document.querySelector('button')\n  .addEventListener('click', () => {\n    console.log('clicked!');\n  });",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'JavaScript لغة برمجة الويب: تعمل في المتصفحات لجعل الصفحات تفاعلية وعلى السيرفرات عبر بيئات مثل Node.js.',
        simple: 'JavaScript هي ما يجعل الصفحات حية: النقر والكتابة وتحميل البيانات دون تحديث.'
      }
    }
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'web',
    subcategory: 'Languages',
    difficulty: 'intermediate',
    popularity: 92,
    related: ['javascript'],
    prerequisites: ['javascript'],
    resources: [{ label: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', verified: false }],
    content: {
      en: {
        definition: 'TypeScript is JavaScript plus a static type system: types are checked before the code runs, catching mistakes early.',
        simple: 'TypeScript is JavaScript with a spell-checker for your data shapes.',
        example: {
          text: 'Types document what a function accepts.',
          code: "function greet(name: string): string {\n  return 'Hi, ' + name;\n}\ngreet(42); // error before the app even runs",
          codeLang: 'ts'
        }
      },
      'ar-msa': {
        definition: 'TypeScript هي JavaScript مع نظام أنواع ثابت: تُفحص الأنواع قبل التشغيل فتُكشف الأخطاء مبكرًا.',
        simple: 'TypeScript مثل JavaScript مع مدقق إملائي لأشكال بياناتك.'
      }
    }
  },
  {
    id: 'dom',
    name: 'DOM',
    category: 'web',
    subcategory: 'Browser',
    difficulty: 'beginner',
    popularity: 90,
    related: ['html', 'javascript', 'events'],
    prerequisites: ['html', 'javascript'],
    resources: [{ label: 'MDN — DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', verified: false }],
    diagrams: ['react-state'],
    content: {
      en: {
        definition: 'The DOM (Document Object Model) is the browser live in-memory tree representation of an HTML page, which scripts can read and modify.',
        simple: 'The DOM is the page as JavaScript sees it: a family tree of elements you can change.',
        example: {
          text: 'querySelector finds a node; changes update the page instantly.',
          code: "const el = document.querySelector('#title');\nel.textContent = 'New title';",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'الـ DOM تمثيل المتصفح الحي للصفحة كشجرة عناصر في الذاكرة، يمكن للسكربتات قراءتها وتعديلها.',
        simple: 'الـ DOM هي الصفحة كما يراها JavaScript: شجرة عناصر تستطيع تغييرها.'
      }
    }
  },
  {
    id: 'events',
    name: 'Events',
    category: 'web',
    subcategory: 'Browser',
    difficulty: 'beginner',
    popularity: 89,
    related: ['dom', 'javascript', 'callback'],
    prerequisites: ['dom'],
    resources: [],
    content: {
      en: {
        definition: 'Events are signals the browser emits when something happens — a click, a keypress, a page load — which code can listen for and respond to.',
        simple: 'Events are doorbells: your code waits for them, then reacts.',
        example: {
          text: 'Add a listener with addEventListener.',
          code: "form.addEventListener('submit', (e) => {\n  e.preventDefault();\n  save();\n});",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'الأحداث إشارات يطلقها المتصفح عند حدوث شيء — نقرة أو ضغطة زر أو اكتمال تحميل — يمكن للكود الاستماع إليها والاستجابة.',
        simple: 'الأحداث مثل جرس الباب: ينتظر كودك رنينها ثم يتصرف.'
      }
    }
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    category: 'web',
    subcategory: 'Style',
    difficulty: 'beginner',
    popularity: 88,
    related: ['css', 'accessibility'],
    prerequisites: ['css'],
    resources: [{ label: 'MDN — Responsive design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design', verified: false }],
    content: {
      en: {
        definition: 'Responsive design builds one layout that adapts gracefully to any screen size using flexible units, media queries, and modern CSS layout.',
        simple: 'One page that looks right on phone, tablet, and desktop.',
        example: {
          text: 'Media queries apply rules per viewport width.',
          code: ".grid { display: grid; grid-template-columns: 1fr; }\n@media (min-width: 768px) {\n  .grid { grid-template-columns: 1fr 2fr; }\n}",
          codeLang: 'css'
        }
      },
      'ar-msa': {
        definition: 'التصميم المتجاوب يعني بناء تخطيط واحد يتكيف بسلاسة مع أي مقاس شاشة باستخدام وحدات مرنة واستعلامات الوسائط وتخطيطات CSS الحديثة.',
        simple: 'صفحة واحدة تبدو صحيحة على الهاتف والتابلت والحاسوب.'
      }
    }
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    category: 'web',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 85,
    related: ['html', 'responsive-design'],
    prerequisites: ['html'],
    resources: [{ label: 'MDN — Accessibility', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility', verified: false }],
    content: {
      en: {
        definition: 'Accessibility (a11y) is the practice of building sites that everyone can use, including people using screen readers, keyboards, or other assistive technology.',
        simple: 'Accessibility means the web works for everybody, not only mouse users with perfect eyesight.',
        example: {
          text: 'Semantic elements and labels carry meaning to assistive tech.',
          code: '<label for="q">Search</label>\n<input id="q" type="search" aria-label="Search terms" />',
          codeLang: 'html'
        }
      },
      'ar-msa': {
        definition: 'إمكانية الوصول (a11y) هي بناء مواقع يستطيع الجميع استخدامها، بمن فيهم مستخدمو قارئات الشاشة ولوحات المفاتيح والتقنيات المساعدة.',
        simple: 'إمكانية الوصول تعني أن الويب يعمل للجميع، لا لمستخدمي الفأرة وحدهم.'
      }
    }
  },
  {
    id: 'http',
    name: 'HTTP',
    category: 'web',
    subcategory: 'Protocols',
    difficulty: 'intermediate',
    popularity: 93,
    related: ['https', 'rest', 'json', 'api'],
    prerequisites: ['client', 'server'],
    resources: [{ label: 'MDN — HTTP', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP', verified: false }],
    diagrams: ['http-lifecycle', 'browser-server'],
    content: {
      en: {
        definition: 'HTTP (HyperText Transfer Protocol) is the request-response protocol browsers and servers use to exchange web resources.',
        simple: 'HTTP is the language of requests and answers between browser and server.',
        example: {
          text: 'A request has a method, path, and headers; a response has a status code and body.',
          code: "GET /api/terms?limit=10 HTTP/1.1\nHost: example.com\n\nHTTP/1.1 200 OK\nContent-Type: application/json",
          codeLang: 'http'
        }
      },
      'ar-msa': {
        definition: 'HTTP بروتوكول الطلب والاستجابة الذي يستخدمه المتصفح والسيرفر لتبادل موارد الويب.',
        simple: 'HTTP هي لغة الطلبات والأجوبة بين المتصفح والسيرفر.'
      }
    }
  },
  {
    id: 'https',
    name: 'HTTPS',
    category: 'web',
    subcategory: 'Protocols',
    difficulty: 'beginner',
    popularity: 90,
    related: ['http', 'encryption'],
    prerequisites: ['http'],
    resources: [{ label: 'MDN — HTTPS', url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTTPS', verified: false }],
    content: {
      en: {
        definition: 'HTTPS is HTTP over TLS: traffic is encrypted and authenticated so nobody between the browser and server can read or alter it.',
        simple: 'HTTPS is HTTP inside a sealed envelope instead of a postcard.',
        whenToUse: 'Always in production — browsers warn users on plain HTTP and many APIs refuse it.'
      },
      'ar-msa': {
        definition: 'HTTPS هو HTTP فوق TLS: يُشفَّر المرور ويُوثَّق بحيث لا يستطيع أحد بين المتصفح والسيرفر قراءته أو تعديله.',
        simple: 'HTTPS مثل HTTP داخل ظرف مختوم بدلاً من بطاقة بريدية مكشوفة.'
      }
    }
  },
  {
    id: 'rest',
    name: 'REST',
    category: 'web',
    subcategory: 'APIs',
    difficulty: 'intermediate',
    popularity: 89,
    related: ['api', 'http', 'json'],
    prerequisites: ['http', 'api'],
    resources: [],
    diagrams: ['api-request'],
    content: {
      en: {
        definition: 'REST (Representational State Transfer) is an architectural style for APIs where resources are addressed by URL and manipulated with standard HTTP methods.',
        simple: 'REST means: give every thing a URL, then use GET, POST, PUT, DELETE on it.',
        example: {
          text: 'Same resource, different methods.',
          code: "GET    /api/terms          # list\nGET    /api/terms/git      # one item\nPOST   /api/terms          # create\nDELETE /api/terms/git      # remove",
          codeLang: 'http'
        }
      },
      'ar-msa': {
        definition: 'REST نمط معماري لواجهات API تُعنون فيه الموارد بعناوين URL وتُدار بطرق HTTP القياسية.',

simple: 'REST تعني: أعطِ كل شيء عنوان URL ثم استخدم GET و POST و PUT و DELETE عليه.'
      }
    }
  },
  {
    id: 'json',
    name: 'JSON',
    category: 'web',
    subcategory: 'Data',
    difficulty: 'beginner',
    popularity: 92,
    related: ['api', 'javascript', 'rest'],
    prerequisites: ['javascript'],
    resources: [{ label: 'MDN — JSON', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON', verified: false }],
    content: {
      en: {
        definition: 'JSON (JavaScript Object Notation) is a lightweight text format for structured data, readable by humans and almost every language.',
        simple: 'JSON is how data travels: a text version of objects and lists.',
        example: {
          text: 'Parse text into values, and back.',
          code: "const text = '{\"id\": 1, \"name\": \"Git\"}';\nconst value = JSON.parse(text);\nJSON.stringify(value); // back to text",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'JSON صيغة نصية خفيفة للبيانات المنظمة، مقروءة للبشر ومعتمدة في كل اللغات تقريبًا.',
        simple: 'JSON هي طريقة سفر البيانات: نسخة نصية من الكائنات والقوائم.'
      }
    }
  },
  {
    id: 'cookies',
    name: 'Cookies',
    category: 'web',
    subcategory: 'Browser',
    difficulty: 'intermediate',
    popularity: 84,
    related: ['local-storage', 'session-storage', 'authentication'],
    prerequisites: ['http'],
    resources: [{ label: 'MDN — Cookies', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies', verified: false }],
    content: {
      en: {
        definition: 'Cookies are small strings the server asks the browser to store and send back with every matching request, traditionally used for sessions.',
        simple: 'Cookies are a hand-stamp the site gives your browser so it remembers you next time.',
        whenToUse: 'Use them for data that must travel to the server automatically; use local storage for client-only data.'
      },
      'ar-msa': {
        definition: 'الكوكيز سلاسل نصية صغيرة يطلب السيرفر من المتصفح تخزينها وإعادتها مع كل طلب مطابق، وتُستخدم تقليديًا للجلسات.',
        simple: 'الكوكيز مثل ختم على يد متصفحك حتى يتذكرك الموقع في المرة القادمة.'
      }
    }
  },
  {
    id: 'local-storage',
    name: 'Local Storage',
    category: 'web',
    subcategory: 'Browser',
    difficulty: 'beginner',
    popularity: 83,
    related: ['session-storage', 'cookies'],
    prerequisites: ['javascript'],
    resources: [{ label: 'MDN — localStorage', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage', verified: false }],
    content: {
      en: {
        definition: 'Local Storage is a browser API that persists key-value string pairs on the device with no expiration, across sessions and reloads.',
        simple: 'Local Storage is a tiny permanent notebook your page keeps on the device.',
        example: {
          text: 'This app stores your preferences in Local Storage.',
          code: "localStorage.setItem('odd:prefs:v1', JSON.stringify(prefs));\nconst saved = localStorage.getItem('odd:prefs:v1');",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'Local Storage واجهة في المتصفح تحفظ أزواج مفتاح-قيمة نصية على الجهاز دون انتهاء صلاحية، عبر الجلسات وإعادة التحميل.',
        simple: 'Local Storage دفتر ملاحظات صغير دائم تحتفظ به صفحتك على الجهاز.'
      }
    }
  },
  {
    id: 'session-storage',
    name: 'Session Storage',
    category: 'web',
    subcategory: 'Browser',
    difficulty: 'beginner',
    popularity: 78,
    related: ['local-storage', 'cookies'],
    prerequisites: ['local-storage'],
    resources: [{ label: 'MDN — sessionStorage', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage', verified: false }],
    content: {
      en: {
        definition: 'Session Storage works like Local Storage but clears its data when the browser tab or session ends.',
        simple: 'Session Storage is Local Storage that throws the notes away when you close the tab.',
        whenToUse: 'Use it for temporary UI state that should not survive a tab close.'
      },
      'ar-msa': {
        definition: 'Session Storage يعمل مثل Local Storage لكنه يمسح بياناته عند إغلاق علامة التبويب أو الجلسة.',
        simple: 'Session Storage نسخة من Local Storage ترمي الملاحظات عند إغلاق التبويب.'
      }
    }
  },
  {
    id: 'cors',
    name: 'CORS',
    category: 'web',
    subcategory: 'Security',
    difficulty: 'advanced',
    popularity: 82,
    related: ['http', 'api', 'browser'],
    prerequisites: ['http', 'browser'],
    resources: [{ label: 'MDN — CORS', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS', verified: false }],
    content: {
      en: {
        definition: 'CORS (Cross-Origin Resource Sharing) is the browser-enforced rule system that decides when a page may fetch resources from a different origin, via server response headers.',
        simple: 'CORS is the browser asking a foreign server: do you allow my site to read your data?',
        mistakes: 'CORS failures are seen by the browser, not fixable from client code alone — the server must send the right headers.'
      },
      'ar-msa': {
        definition: 'CORS نظام قواعد يفرضها المتصفح ليحدد متى يجوز لصفحة جلب موارد من مصدر مختلف، عبر ترويسات استجابة السيرفر.',
        simple: 'CORS هو المتصفح يسأل سيرفرًا أجنبيًا: هل تسمح لموقعي بقراءة بياناتك؟'
      }
    }
  },
  {
    id: 'websocket',
    name: 'WebSocket',
    category: 'web',
    subcategory: 'Protocols',
    difficulty: 'advanced',
    popularity: 76,
    related: ['http', 'server', 'client'],
    prerequisites: ['http'],
    resources: [{ label: 'MDN — WebSocket', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket', verified: false }],
    content: {
      en: {
        definition: 'WebSocket is a protocol that upgrades an HTTP connection into a persistent, bidirectional channel both client and server can push messages through.',
        simple: 'WebSocket is a phone call that stays open, instead of sending letters back and forth.',
        whenToUse: 'Use it for chats, live scores, and anything needing real-time updates.'
      },
      'ar-msa': {
        definition: 'WebSocket بروتوكول يرقّي اتصال HTTP إلى قناة دائمة ثنائية الاتجاه يستطيع العميل والسيرفر إرسال الرسائل عبرها.',
        simple: 'WebSocket مكالمة هاتفية تبقى مفتوحة، بدلاً من تبادل الرسائل ذهابًا وإيابًا.'
      }
    }
  },
  {
    id: 'browser',
    name: 'Browser',
    category: 'web',
    subcategory: 'Browser',
    difficulty: 'beginner',
    popularity: 91,
    related: ['dom', 'client', 'server'],
    prerequisites: [],
    diagrams: ['browser-server'],
    resources: [],
    content: {
      en: {
        definition: 'A browser is the application that fetches web resources, renders HTML/CSS into a visual page, runs JavaScript, and manages the DOM, storage, and network APIs.',
        simple: 'The browser is the translator that turns code into the page you see and interact with.',
        howItWorks: 'It downloads HTML, builds the DOM tree, applies CSS, executes scripts, and paints pixels — then keeps listening for events.'
      },
      'ar-msa': {
        definition: 'المتصفح تطبيق يجلب موارد الويب ويعرض HTML و CSS كصفحة مرئية وينفذ JavaScript ويدير DOM وواجهات التخزين والشبكة.',
        simple: 'المتصفح مترجم يحول الكود إلى الصفحة التي تراها وتتفاعل معها.'
      }
    }
  },
  {
    id: 'client',
    name: 'Client',
    category: 'web',
    subcategory: 'Architecture',
    difficulty: 'beginner',
    popularity: 87,
    related: ['server', 'browser', 'frontend'],
    prerequisites: [],
    diagrams: ['browser-server'],
    resources: [],
    content: {
      en: {
        definition: 'A client is the program that initiates requests in a network conversation — most often the user browser or app.',
        simple: 'The client is the one who asks; the server is the one who answers.',
        whenToUse: 'Say client when you mean the device side of any request-response exchange.'
      },
      'ar-msa': {
        definition: 'العميل هو البرنامج الذي يبدأ الطلبات في محادثة الشبكة — غالبًا متصفح المستخدم أو تطبيقه.',
        simple: 'العميل هو من يطلب، والسيرفر هو من يجيب.'
      }
    }
  },
  {
    id: 'server',
    name: 'Server',
    category: 'web',
    subcategory: 'Architecture',
    difficulty: 'beginner',
    popularity: 90,
    related: ['client', 'backend', 'database'],
    prerequisites: ['client'],
    diagrams: ['browser-server', 'frontend-backend-db'],
    resources: [],
    content: {
      en: {
        definition: 'A server is a program (usually on remote hardware) that listens for requests, processes them, and sends responses back to clients.',
        simple: 'The server is the kitchen: it receives orders and sends back dishes.',
        whenToUse: 'Servers hold business logic, databases, and secrets — things that must never live in the browser.'
      },
      'ar-msa': {
        definition: 'السيرفر برنامج — عادة على جهاز بعيد — يستمع للطلبات ويعالجها ويعيد الاستجابات للعملاء.',
        simple: 'السيرفر هو المطبخ: يستقبل الطلبات ويرسل الأطباق.'
      }
    }
  },
  {
    id: 'frontend',
    name: 'Frontend',
    category: 'web',
    subcategory: 'Architecture',
    difficulty: 'beginner',
    popularity: 92,
    related: ['backend', 'client', 'react'],
    prerequisites: ['html', 'css', 'javascript'],
    diagrams: ['frontend-backend-db'],
    resources: [],
    content: {
      en: {
        definition: 'The frontend is the part of an application that runs on the user device: layout, interaction, and everything the user sees and touches.',
        simple: 'Frontend is everything the user sees; it lives in their browser.',
        whenToUse: 'Frontend work covers HTML, CSS, JavaScript, accessibility, and performance of the user interface.'
      },
      'ar-msa': {
        definition: 'الواجهة الأمامية (Frontend) هي جزء التطبيق الذي يعمل على جهاز المستخدم: التخطيط والتفاعل وكل ما يراه المستخدم.',
        simple: 'الـ Frontend كل ما يراه المستخدم؛ يعمل داخل متصفحه.'
      }
    }
  },
  {
    id: 'backend',
    name: 'Backend',
    category: 'web',
    subcategory: 'Architecture',
    difficulty: 'beginner',
    popularity: 91,
    related: ['frontend', 'server', 'database', 'api'],
    prerequisites: ['server'],
    diagrams: ['frontend-backend-db'],
    resources: [],
    content: {
      en: {
        definition: 'The backend is the part of an application that runs on servers: data storage, business rules, authentication, and API logic.',
        simple: 'Backend is the hidden engine room: users never see it, but it powers everything.',
        whenToUse: 'Backend work covers servers, databases, queues, and security rules.'
      },
      'ar-msa': {
        definition: 'الواجهة الخلفية (Backend) هي جزء التطبيق الذي يعمل على السيرفرات: تخزين البيانات وقواعد العمل والمصادقة ومنطق API.',
        simple: 'الـ Backend غرفة المحركات الخفية: لا يراها المستخدم لكنها تشغّل كل شيء.'
      }
    }
  },
  {
    id: 'full-stack',
    name: 'Full Stack',
    category: 'web',
    subcategory: 'Architecture',
    difficulty: 'beginner',
    popularity: 86,
    related: ['frontend', 'backend'],
    prerequisites: ['frontend', 'backend'],
    resources: [],
    content: {
      en: {
        definition: 'Full stack describes development that spans both frontend and backend — the whole slice of an application from UI to database.',
        simple: 'A full stack developer builds the parts users see and the parts they never see.',
        whenToUse: 'The label describes breadth of responsibility, not a specific technology.'
      },
      'ar-msa': {
        definition: 'المصطلح Full Stack يصف تطويرًا يشمل الواجهة الأمامية والخلفية معًا — الشريحة كاملة من الواجهة إلى قاعدة البيانات.',
        simple: 'مطور الـ Full Stack يبني ما يراه المستخدم وما لا يراه أبدًا.'
      }
    }
  },
  {
    id: 'api',

name: 'API',
    category: 'web',
    subcategory: 'APIs',
    difficulty: 'beginner',
    popularity: 97,
    related: ['rest', 'http', 'json', 'api-endpoint', 'api-key'],
    prerequisites: [],
    diagrams: ['api-request'],
    resources: [{ label: 'MDN — What is an API?', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction', verified: false }],
    content: {
      en: {
        definition: 'An API (Application Programming Interface) is a defined contract that lets one program request services or data from another program without knowing its internal code.',
        simple: 'An API is a waiter: you order from the menu, the kitchen stays hidden, and your food arrives.',
        howItWorks: 'The client sends a structured request (method, endpoint, parameters, headers); the provider validates it, runs its logic, and returns a structured response.',
        example: {
          text: 'A public API: request a term, receive JSON.',
          code: "fetch('/api/terms/git')\n  .then((res) => res.json())\n  .then((term) => console.log(term.name));",
          codeLang: 'js'
        },
        mistakes: 'Treating an API as a database — an API is a contract that can change or rate-limit you, not a table you own.',
        whenToUse: 'Whenever two systems must exchange data or features in a controlled, documented way.'
      },
      'ar-msa': {
        definition: 'الـ API عقد معرّف يتيح لبرنامج طلب خدمات أو بيانات من برنامج آخر دون معرفة كوده الداخلي.',
        simple: 'الـ API مثل نادل في مطعم: تطلب من القائمة، ويبقى المطبخ مخفيًا، ثم يصل طعامك.',
        howItWorks: 'يرسل العميل طلبًا منظمًا (طريقة، مسار، معاملات، ترويسات)؛ ثم يتحقق الطرف المزود وينفذ منطقه ويعيد استجابة منظمة.',
        example: {
          text: 'مثال: نطلب مصطلحًا من API ونستقبل JSON.'
        },
        mistakes: 'التعامل مع الـ API وكأنه قاعدة بيانات — الـ API عقد قد يتغير أو يحدد استخدامك، وليس جدولًا تملكه.',
        whenToUse: 'كلما احتاج نظامان تبادل البيانات أو الميزات بطريقة موثقة ومنضبطة.'
      }
    }
  },
  {
    id: 'authentication',
    name: 'Authentication',
    category: 'web',
    subcategory: 'Security',
    difficulty: 'intermediate',
    popularity: 90,
    related: ['authorization', 'encryption', 'hashing'],
    prerequisites: ['http'],
    diagrams: ['auth-flow'],
    resources: [],
    content: {
      en: {
        definition: 'Authentication is verifying who a user is — typically by checking credentials like a password or token.',
        simple: 'Authentication answers: who are you, really?',
        mistakes: 'Never store plain passwords; hash them. And never mix up authentication (who you are) with authorization (what you may do).',
        whenToUse: 'Any area of an app with personal data or actions done in the user name.'
      },
      'ar-msa': {
        definition: 'المصادقة هي التحقق من هوية المستخدم — عادة بمطابقة بيانات اعتماد مثل كلمة المرور أو رمز مميز.',
        simple: 'المصادقة تجيب: من أنت فعلًا؟',
        mistakes: 'لا تخزن كلمات المرور نصًا صريحًا أبدًا؛ بل عمّها بالتجزئة. ولا تخلط بين المصادقة (من أنت) والتصريح (ما يُسمح لك به).'
      }
    }
  },
  {
    id: 'authorization',
    name: 'Authorization',
    category: 'web',
    subcategory: 'Security',
    difficulty: 'intermediate',
    popularity: 86,
    related: ['authentication'],
    prerequisites: ['authentication'],
    diagrams: ['auth-flow'],
    resources: [],
    content: {
      en: {
        definition: 'Authorization is deciding what an authenticated user is allowed to do — which resources they may read, change, or delete.',
        simple: 'Authorization answers: now that we know you, what doors can you open?',
        whenToUse: 'Enforce it on the server; hiding a button on the client is not authorization, it is decoration.'
      },
      'ar-msa': {
        definition: 'التصريح هو تحديد ما يُسمح للمستخدم المصادَق عليه بفعله — أي الموارد يجوز له قراءتها أو تغييرها أو حذفها.',
        simple: 'التصريح يجيب: الآن بعد أن عرفناك، أي الأبواب يمكنك فتحها؟',
        whenToUse: 'فرضه على السيرفر؛ فإخفاء زر في الواجهة ليس تصريحًا بل مجرد زينة.'
      }
    }
  }
];
