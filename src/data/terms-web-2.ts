import type { Term } from '../types';

// Omar's Dev Dictionary — additional Web terms (batch 2).

export const WEB_2_TERMS: Term[] = [
  {
    id: 'http-status-codes',
    name: 'HTTP Status Codes',
    category: 'web',
    subcategory: 'Protocols',
    difficulty: 'beginner',
    popularity: 84,
    related: ['http', 'rest', 'api'],
    prerequisites: ['http'],
    resources: [],
    content: {
      en: {
        definition: 'HTTP status codes are the three-digit numbers in every response: 1xx information, 2xx success, 3xx redirect, 4xx client error, 5xx server error.',
        simple: 'Status codes are the response mood ring: 200 happy, 404 lost, 500 meltdown.',
        example: {
          text: 'The codes you will meet daily.',
          code: "200 OK             // success\n201 Created        // resource created\n301 Moved          // permanent redirect\n400 Bad Request    // your mistake\n401 Unauthorized   // not logged in\n403 Forbidden       // logged in, not allowed\n404 Not Found       // wrong address\n500 Internal Error // server bug",
          codeLang: 'http'
        },
        whenToUse: 'Return precise codes from your API: clients (and this dictionary) branch on them.'
      },
      'ar-msa': {
        definition: 'رموز حالة HTTP أرقام ثلاثية في كل استجابة: 1xx معلومات، 2xx نجاح، 3xx إعادة توجيه، 4xx خطأ العميل، 5xx خطأ السيرفر.',
        simple: 'رموز الحالة خاتم مزاج الاستجابة: 200 سعيد، 404 تائه، 500 انهيار.',
        whenToUse: 'أعد رموزًا دقيقة من الـ API: فالعملاء (وهذا القاموس) يتفرعون عليها.'
      }
    }
  },
  {
    id: 'http-headers',
    name: 'HTTP Headers',
    category: 'web',
    subcategory: 'Protocols',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['http', 'cors', 'caching'],
    prerequisites: ['http'],
    resources: [],
    content: {
      en: {
        definition: 'HTTP headers are key-value metadata attached to requests and responses — content types, auth tokens, caching rules, and CORS permissions.',
        simple: 'Headers are the envelope notes that travel with every request and response.',
        example: {
          text: 'A request and its headers.',
          code: "GET /api/terms HTTP/1.1\nAuthorization: Bearer eyJ...\nAccept: application/json\nCache-Control: no-cache",
          codeLang: 'http'
        },
        whenToUse: 'Content-Type, Authorization, and Cache-Control are the three you will set most.'
      },
      'ar-msa': {
        definition: 'ترويسات HTTP بيانات وصفية أزواج مفتاح-قيمة ترفق بالطلبات والاستجابات — أنواع المحتوى ورموز المصادقة وقواعد التخزين وأذونات CORS.',
        simple: 'الترويسات ملاحظات الظرف التي تسافر مع كل طلب واستجابة.',
        whenToUse: 'الـ Content-Type و Authorization و Cache-Control هي الثلاثة التي ستضبطها أكثر.'
      }
    }
  },
  {
    id: 'dns',
    name: 'DNS',
    category: 'web',
    subcategory: 'Protocols',
    difficulty: 'beginner',
    popularity: 78,
    related: ['domain', 'http', 'hosting'],
    prerequisites: ['domain'],
    resources: [],
    content: {
      en: {
        definition: 'DNS (Domain Name System) is the internet phone book: it translates domain names into the IP addresses servers actually use.',
        simple: 'DNS is how omar.dev becomes 76.223.x.x before the browser can connect.',
        whenToUse: 'When you buy a domain, you edit DNS records (A, CNAME) to point at your host.',
        mistakes: 'DNS changes propagate slowly — expect minutes to hours before the world sees your change.'
      },
      'ar-msa': {
        definition: 'الـ DNS هو دفتر هواتف الإنترنت: يترجم أسماء النطاقات إلى عناوين IP التي تستخدمها السيرفرات فعليًا.',
        simple: 'الـ DNS هو كيف يصبح omar.dev رقمًا مثل 76.223.x.x قبل أن يتصل المتصفح.',
        whenToUse: 'عند شرائك نطاقًا تعدل سجلات DNS (A و CNAME) لتشير إلى مستضيفك.',
        mistakes: 'تغييرات DNS تنتشر ببطء — توقع دقائق إلى ساعات قبل أن يرى العالم تغييرك.'
      }
    }
  },
  {
    id: 'semver',
    name: 'Semantic Versioning',
    category: 'web',
    subcategory: 'Delivery',
    difficulty: 'beginner',
    popularity: 79,
    related: ['package', 'package-manager', 'dependency'],
    prerequisites: ['package'],
    resources: [{ label: 'SemVer specification', url: 'https://semver.org', verified: false }],
    content: {
      en: {
        definition: 'Semantic Versioning (MAJOR.MINOR.PATCH) communicates the kind of change in a release: breaking, backward-compatible feature, or fix.',
        simple: 'SemVer is the traffic light of releases: red major, amber minor, green patch.',
        example: {
          text: 'What each digit means.',
          code: "1.4.2 → 1.4.3   // bug fix (PATCH)\n1.4.2 → 1.5.0   // new feature (MINOR)\n1.4.2 → 2.0.0   // breaking change (MAJOR)",
          codeLang: 'text'
        },
        whenToUse: 'Publish packages with it; and respect ^ and ~ ranges in package.json instead of guessing.'
      },
      'ar-msa': {
        definition: 'الإصدار الدلالي (رئيسي.ثانوي.ترقيعي) يواصل نوع التغيير في الإصدار: كاسر أو ميزة متوافقة أو إصلاح.',
        simple: 'الـ SemVer إشارة المرور للإصدارات: أحمر رئيسي، كهرماني ثانوي، أخضر ترقيع.',
        whenToUse: 'انشر الحزم به؛ واحترم نطاقات ^ و ~ في package.json بدل التخمين.'
      }
    }
  },
  {
    id: 'jwt',
    name: 'JWT',
    category: 'web',
    subcategory: 'Security',
    difficulty: 'intermediate',
    popularity: 82,
    related: ['authentication', 'authorization', 'hashing'],
    prerequisites: ['authentication'],
    resources: [],
    content: {
      en: {
        definition: 'A JWT (JSON Web Token) is a signed token carrying claims (like user id) that a server can verify without a database lookup.',
        simple: 'A JWT is a stamped wristband: the server checks the stamp, not a list.',
        howItWorks: 'It has three dot-separated parts: header, payload, and signature. The signature proves the payload was not tampered with.',
        whenToUse: 'Stateless API auth between mobile apps and servers; keep tokens short-lived and store them safely.',
        mistakes: 'A JWT is signed, not encrypted — anyone can read the payload, so never put secrets inside.'
      },
      'ar-msa': {
        definition: 'الـ JWT رمز موقّع يحمل مطالبات (مثل معرف المستخدم) يستطيع السيرفر التحقق منها دون بحث في قاعدة بيانات.',
        simple: 'الـ JWT سوار مختوم: السيرفر يفحص الختم لا القائمة.',
        howItWorks: 'له ثلاثة أجزاء تفصلها نقاط: ترويسة وحمولة وتوقيع. والتوقيع يثبت أن الحمولة لم تُعبث.',
        whenToUse: 'مصادقة API عديمة الحالة بين تطبيقات الموبايل والسيرفرات؛ وأبق الرموز قصيرة العمر وخزنها بأمان.',
        mistakes: 'الـ JWT موقّع لا مشفر — يمكن لأي أحد قراءة الحمولة، فلا تضع أسرارًا فيه أبدًا.'
      }
    }
  }
];
