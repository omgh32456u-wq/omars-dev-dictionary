import type { Term } from '../types';

// Omar's Dev Dictionary — additional Web Development terms.

export const WEB_EXTRA_TERMS: Term[] = [
  {
    id: 'spa',
    name: 'SPA',
    category: 'web',
    subcategory: 'Architecture',
    difficulty: 'intermediate',
    popularity: 84,
    related: ['routing', 'react', 'browser'],
    prerequisites: ['javascript', 'routing'],
    resources: [],
    content: {
      en: {
        definition: 'A SPA (Single-Page Application) loads one HTML page and then re-renders its content client-side as the user navigates, using routing instead of full page loads.',
        simple: 'A SPA is a website that never actually changes page — it swaps screens inside one page.',
        howItWorks: 'The server sends the app shell once; JavaScript then fetches data and swaps views, keeping the URL in sync with the router.',
        whenToUse: 'Highly interactive apps like dashboards and editors; for content sites, consider server rendering for first-paint speed.',
        mistakes: 'Shipping a huge JS bundle makes first paint slow — code-split and lazy-load routes.'
      },
      'ar-msa': {
        definition: 'الـ SPA تطبيق صفحة واحدة يحمّل صفحة HTML واحدة ثم يعيد عرض محتواه في المتصفح أثناء تنقل المستخدم عبر التوجيه بدل تحميل صفحات جديدة.',
        simple: 'الـ SPA موقع لا يبدّل صفحته فعليًا — بل يبدل الشاشات داخل صفحة واحدة.',
        howItWorks: 'يرسل السيرفر هيكل التطبيق مرة واحدة؛ ثم يجلب JavaScript البيانات ويبدل العروض مزامنًا عنوان URL مع الموجه.',
        whenToUse: 'التطبيقات عالية التفاعل مثل لوحات التحكم والمحررات؛ وللمواقع المحتوى فكر في العرض من السيرفر لسرعة أول ظهور.',
        mistakes: 'شحن حزمة JavaScript ضخمة يبطئ أول ظهور — قسّم الكود وحمل المسارات ببطء.'
      }
    }
  },
  {
    id: 'service-worker',
    name: 'Service Worker',
    category: 'web',
    subcategory: 'Browser',
    difficulty: 'advanced',
    popularity: 78,
    related: ['pwa', 'caching', 'offline-first'],
    prerequisites: ['pwa'],
    resources: [{ label: 'MDN — Service Worker API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API', verified: false }],
    content: {
      en: {
        definition: 'A service worker is a background script the browser runs separately from the page, acting as a programmable network proxy that intercepts requests and can serve cached responses.',
        simple: 'A service worker is a doorman between your app and the network, allowed to serve from a locker instead of the internet.',
        howItWorks: 'It listens for fetch events, applies its cache strategy, and either serves the cached shell or passes the request to the network.',
        whenToUse: 'Offline support, installable PWAs, and instant loads for content apps — exactly what this dictionary uses.',
        mistakes: 'A stale service worker can serve an old app for weeks; always ship a sensible update strategy (autoUpdate here).'
      },
      'ar-msa': {
        definition: 'الـ Service Worker سكربت خلفي يشغله المتصفح بمعزل عن الصفحة، يعمل كوكيل شبكة قابل للبرمجة يلتقط الطلبات ويقدم استجابات مخزنة.',
        simple: 'الـ Service Worker بواب بين تطبيقك والشبكة، يحق له التقديم من خزانة بدل الإنترنت.',
        howItWorks: 'يستمع لأحداث fetch ويطبق استراتيجية ذاكرته المؤقتة ثم إما يقدم الهيكل المخزن أو يمرر الطلب للشبكة.',
        whenToUse: 'الدعم دون اتصال وتطبيقات PWA القابلة للتثبيت والتحميل الفوري — وهذا ما يستخدمه هذا القاموس.',
        mistakes: 'الـ Service Worker القديم قد يقدم نسخة قديمة لأسابيع؛ وأرسل دائمًا استراتيجية تحديث معقولة (autoUpdate هنا).'
      }
    }
  },
  {
    id: 'jsx',
    name: 'JSX',
    category: 'web',
    subcategory: 'Languages',
    difficulty: 'intermediate',
    popularity: 86,
    related: ['react', 'component', 'javascript'],
    prerequisites: ['react'],
    resources: [{ label: 'React — Writing markup with JSX', url: 'https://react.dev/learn/writing-markup-with-jsx', verified: false }],
    content: {
      en: {
        definition: 'JSX is a syntax extension that lets you write HTML-like markup inside JavaScript; a build step compiles it into plain function calls that produce element objects.',
        simple: 'JSX lets you write HTML inside your JavaScript — then the compiler translates it.',
        example: {
          text: 'The compiler turns this into React.createElement calls.',
          code: "const title = <h1>Omar's Dev Dictionary</h1>;",
          codeLang: 'tsx'
        },
        mistakes: 'JSX is not HTML: class becomes className, style takes an object, and every tag must close.'
      },
      'ar-msa': {
        definition: 'الـ JSX امتداد صياغي يتيح كتابة ترميز يشبه HTML داخل JavaScript؛ وخطوة بناء تحوله إلى استدعاءات دوال تنتج كائنات عناصر.',
        simple: 'الـ JSX يتيح كتابة HTML داخل JavaScript — ثم يترجمه المترجم.',
        mistakes: 'الـ JSX ليس HTML: class تصبح className و style تأخذ كائنًا، وكل وسم يجب أن يغلق.'
      }
    }
  },
  {
    id: 'offline-first',
    name: 'Offline-First',
    category: 'web',
    subcategory: 'Architecture',
    difficulty: 'intermediate',
    popularity: 74,
    related: ['pwa', 'service-worker', 'local-storage'],
    prerequisites: ['pwa', 'service-worker'],
    resources: [],
    content: {
      en: {
        definition: 'Offline-first is an architecture where the app assumes no network and works locally by default, syncing opportunistically when a connection appears.',
        simple: 'Offline-first means the app works before the internet does.',
        whenToUse: 'Reference apps, note-taking tools, and anything used on unreliable connections — this dictionary bundles all its content, so every term works fully offline.',
        mistakes: 'Offline-first multiplies state complexity: now you must reason about conflicts and sync, not just fetch.'
      },
      'ar-msa': {
        definition: 'الـ Offline-First معمارية يفترض فيها التطبيق غياب الشبكة ويعمل محليًا افتراضيًا، فيزامن عند ظهور اتصال.',
        simple: 'الـ Offline-First يعني أن التطبيق يعمل قبل أن يعمل الإنترنت.',
        whenToUse: 'تطبيقات المراجع وأدوات الملاحظات وكل ما يستخدم على اتصالات غير موثوقة — وهذا القاموس يدمج كل محتواه، فكل مصطلح يعمل دون إنترنت.',
        mistakes: 'الـ Offline-First يضاعف تعقيد الحالة: عليك الآن التفكير في التعارضات والمزامنة، لا الجلب فقط.'
      }
    }
  },
  {
    id: 'webview',
    name: 'WebView',
    category: 'web',
    subcategory: 'Browser',
    difficulty: 'intermediate',
    popularity: 70,
    related: ['hybrid-app', 'capacitor', 'browser'],
    prerequisites: ['browser'],
    resources: [],
    content: {
      en: {
        definition: 'A WebView is an embeddable browser engine inside a native app, used to render web content (HTML, CSS, JavaScript) as part of the native UI.',
        simple: 'A WebView is a mini-browser embedded inside a mobile app.',
        whenToUse: 'Hybrid apps (Capacitor, Cordova) and in-app help or policy pages.',
        mistakes: 'A WebView is not the full browser: it misses some APIs, extensions, and updates differently.'
      },
      'ar-msa': {
        definition: 'الـ WebView محرك متصفح قابل للتضمين داخل تطبيق أصلي، يعرض محتوى الويب (HTML و CSS و JavaScript) كجزء من الواجهة الأصلية.',
        simple: 'الـ WebView متصفح مصغر مدمج داخل تطبيق موبايل.',
        whenToUse: 'التطبيقات الهجينة (Capacitor و Cordova) وصفحات المساعدة والسياسات داخل التطبيق.',
        mistakes: 'الـ WebView ليس المتصفح الكامل: تنقصه بعض الواجهات والإضافات ويحدث بشكل مختلف.'
      }
    }
  },
  {
    id: 'fetch',
    name: 'fetch()',
    category: 'web',
    subcategory: 'Browser',
    difficulty: 'beginner',
    popularity: 89,
    related: ['promise', 'http', 'api'],
    prerequisites: ['promise', 'http'],
    resources: [{ label: 'MDN — fetch', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch', verified: false }],
    content: {
      en: {
        definition: 'fetch() is the browser API for making HTTP requests; it returns a Promise that resolves to the Response once headers arrive.',
        simple: 'fetch() is how JavaScript asks the network for something.',
        example: {
          text: 'Always check response.ok — fetch only rejects on network failure, not HTTP errors.',
          code: "const res = await fetch('/api/terms');\nif (!res.ok) throw new Error('HTTP ' + res.status);\nconst terms = await res.json();",
          codeLang: 'js'
        },
        mistakes: 'A 404 or 500 does NOT reject the Promise — you must check response.ok yourself.'
      },
      'ar-msa': {
        definition: 'الدالة fetch() واجهة المتصفح لطلبات HTTP؛ وتعيد Promise يستقر إلى الاستجابة عند وصول الترويسات.',
        simple: 'الـ fetch() هي طريقة JavaScript لطلب شيء من الشبكة.',
        mistakes: 'خطأ 404 أو 500 لا يرفض الـ Promise — عليك فحص response.ok بنفسك.'
      }
    }
  }
];
