import type { Term } from '../types';

// Omar's Dev Dictionary — final batch: completes remaining cross-references.

export const FINAL_BATCH_TERMS: Term[] = [
  {
    id: 'thread',
    name: 'Thread',
    category: 'architecture',
    subcategory: 'Performance',
    difficulty: 'intermediate',
    popularity: 74,
    related: ['concurrency', 'web-worker', 'call-stack'],
    prerequisites: ['concurrency'],
    resources: [],
    content: {
      en: {
        definition: 'A thread is an independent sequence of execution inside a process; threads in one process share memory, processes do not.',
        simple: 'Threads are workers in the same office: they share the whiteboard, and each works on its own task.',
        whenToUse: 'JavaScript runs your code on one main thread and offers Web Workers for true parallel work.',
        mistakes: 'More threads is not more speed for one task — coordination costs can eat the gains.'
      },
      'ar-msa': {
        definition: 'الخيط سلسلة تنفيذ مستقلة داخل عملية؛ تشترك الخيوط في العملية الواحدة بالذاكرة، ولا تشترك العمليات.',
        simple: 'الخيوط موظفون في المكتب نفسه: يتشاركون السبورة ويعمل كل منهم على مهمته.',
        whenToUse: 'يشغل JavaScript كودك على خيط رئيسي واحد ويقدم Web Workers للعمل المتوازي الحقيقي.',
        mistakes: 'كثرة الخيوط ليست سرعة أكبر لمهمة واحدة — تكاليف التنسيق قد تلتهم المكاسب.'
      }
    }
  },
  {
    id: 'logging',
    name: 'Logging',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 77,
    related: ['observability', 'debugging', 'monitoring'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Logging is recording structured events about what a program did, at levels like debug, info, warn, and error, so incidents can be investigated after the fact.',
        simple: 'Logging is the black-box recorder of your program.',
        whenToUse: 'Log with levels and context (ids, not dumps); never log secrets or personal data.',
        mistakes: 'console.log sprinkled everywhere is noise in production — use levels and structured fields.'
      },
      'ar-msa': {
        definition: 'التسجيل هو تسجيل أحداث منظمة عما فعل البرنامج، بمستويات مثل debug و info و warn و error، ليتمكن أحد التحقيق بعد وقوع الحادث.',
        simple: 'التسجيل هو مسجل الصندوق الأسود لبرنامجك.',
        whenToUse: 'سجل بمستويات وسياق (معرفات لا مفرغات)؛ ولا تسجل أسرارًا أو بيانات شخصية أبدًا.',
        mistakes: 'console.log المتناثر في كل مكان ضجيج في الإنتاج — استخدم المستويات والحقول المنظمة.'
      }
    }
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    category: 'architecture',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 76,
    related: ['observability', 'logging', 'hosting'],
    prerequisites: ['logging'],
    resources: [],
    content: {
      en: {
        definition: 'Monitoring continuously watches a running system against known signals — uptime, latency, error rate — and alerts when thresholds break.',
        simple: 'Monitoring is the smoke detector: it watches known dangers and screams when one appears.',
        whenToUse: 'Alert only on what needs a human; an alert nobody acts on is training the team to ignore alerts.',
        mistakes: 'Alerting on everything means alerting on nothing.'
      },
      'ar-msa': {
        definition: 'المراقبة تراقب نظامًا يعمل باستمرار مقابل إشارات معروفة — التشغيل والكمون ومعدل الأخطاء — وتنبه عند كسر العتبات.',
        simple: 'المراقبة كاشف الدخان: تراقب الأخطار المعروفة وتصرخ عند ظهورها.',
        whenToUse: 'نبه فقط على ما يحتاج إنسانًا؛ فالإنذار الذي لا يتحرك له أحد يدرّب الفريق على تجاهل الإنذارات.',
        mistakes: 'التنبيه على كل شيء يعني التنبيه على لا شيء.'
      }
    }
  },
  {
    id: 'release',
    name: 'Release',
    category: 'tools',
    subcategory: 'Delivery',
    difficulty: 'beginner',
    popularity: 76,
    related: ['git-tag', 'semver', 'ci-cd', 'deploy'],
    prerequisites: ['git-tag', 'semver'],
    resources: [],
    content: {
      en: {
        definition: 'A release is a named, versioned snapshot of the product that ships to users — cut from a tag, verified by CI, and deployed.',
        simple: 'A release is the moment a version leaves the workshop and reaches users.',
        whenToUse: 'Tag → build → test → deploy → announce; make releases boring and repeatable.',
        mistakes: 'Releasing on a Friday afternoon with no rollback plan — release when there is time to react.'
      },
      'ar-msa': {
        definition: 'الإصدار لقطة مسماه ومرقمة من المنتج تصل إلى المستخدمين — تقطع من Tag، ويوثقها CI، ثم تنشر.',
        simple: 'الإصدار هو لحظة خروج نسخة من الورشة ووصولها إلى المستخدمين.',
        whenToUse: 'Tag ثم بناء ثم اختبار ثم نشر ثم إعلان؛ اجعل الإصدارات مملة وقابلة للتكرار.',
        mistakes: 'الإصدار مساء الجمعة بلا خطة تراجع — أصدر متى يتوفر وقت للتفاعل.'
      }
    }
  },
  {
    id: 'http-cache',
    name: 'HTTP Caching',
    category: 'web',
    subcategory: 'Protocols',
    difficulty: 'intermediate',
    popularity: 74,
    related: ['http', 'http-headers', 'caching'],
    prerequisites: ['http-headers', 'caching'],
    resources: [],
    content: {
      en: {
        definition: 'HTTP caching is the protocol-level system of headers (Cache-Control, ETag, Last-Modified) that lets browsers and CDNs reuse responses instead of re-fetching them.',
        simple: 'HTTP caching is the post-it on the parcel saying how long the contents stay fresh.',
        example: {
          text: 'The two headers that matter most.',
          code: "Cache-Control: public, max-age=3600   # fresh for 1 hour\nETag: \"v1-abc123\"                      # revalidate cheaply",
          codeLang: 'http'
        },
        whenToUse: 'Hashed static assets: cache for a year. HTML and API data: revalidate always.',
        mistakes: 'Caching HTML aggressively strands users on stale versions after a deploy.'
      },
      'ar-msa': {
        definition: 'تخزين HTTP المؤقت هو نظام الترويسات على مستوى البروتوكول (Cache-Control و ETag و Last-Modified) الذي يتيح للمتصفحات وشبكات CDN إعادة استخدام الاستجابات بدل جلبها مجددًا.',
        simple: 'تخزين HTTP المؤقت ورقة لاصقة على الطرد تقول كم تبقى محتوياته طازجة.',
        whenToUse: 'الأصول الثابتة الممزوجة: خزن لسنة. و HTML وبيانات API: أعد التحقق دائمًا.',
        mistakes: 'تخزين HTML بشراهة يترك المستخدمين على نسخ قديمة بعد كل نشر.'
      }
    }
  },
  {
    id: 'accessibility-checklist',
    name: 'Accessibility Checklist',
    category: 'web',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 72,
    related: ['accessibility', 'keyboard-navigation', 'screen-reader'],
    prerequisites: ['accessibility'],
    resources: [],
    content: {
      en: {
        definition: 'An accessibility checklist is a short, repeatable list of a11y requirements — semantics, labels, focus, contrast, reduced motion — applied to every screen before shipping.',
        simple: 'The a11y checklist is the pre-flight list: run it before every release, not after complaints.',
        whenToUse: 'This app applies: semantic HTML, visible focus states, aria-labels on icon-only controls, logical properties for RTL, reduced-motion support, and honest status text.',
        mistakes: 'Treating accessibility as a final polish pass — it is cheapest when designed in from the first component.'
      },
      'ar-msa': {
        definition: 'قائمة فحص إمكانية الوصول قائمة قصيرة قابلة للتكرار من متطلبات a11y — الدلالات والملصقات والتركيز والتباين وتقليل الحركة — تطبق على كل شاشة قبل الشحن.',
        simple: 'قائمة a11y هي قائمة ما قبل الإقلاع: شغلها قبل كل إصدار لا بعد الشكاوى.',
        whenToUse: 'يطبق هذا التطبيق: HTML دلالي وحالات تركيز مرئية و aria-labels على الأزرار الأيقونية وخصائص منطقية للـ RTL ودعم تقليل الحركة ونصوص حالة صادقة.',
        mistakes: 'التعامل مع إمكانية الوصول كلمسة نهائية — إنها أرخص حين تصمم من أول مكون.'
      }
    }
  }
];
