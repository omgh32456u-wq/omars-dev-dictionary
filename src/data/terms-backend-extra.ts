import type { Term } from '../types';

// Omar's Dev Dictionary — additional Backend & Databases terms.

export const BACKEND_EXTRA_TERMS: Term[] = [
  {
    id: 'transaction',
    name: 'Transaction',
    category: 'backend',
    subcategory: 'Operations',
    difficulty: 'intermediate',
    popularity: 77,
    related: ['database', 'sql', 'acid'],
    prerequisites: ['database', 'sql'],
    resources: [],
    content: {
      en: {
        definition: 'A transaction groups several database operations into one all-or-nothing unit: if any step fails, everything rolls back.',
        simple: 'A transaction is a promise: all steps happen, or none of them do.',
        example: {
          text: 'Classic money transfer wrapped in BEGIN/COMMIT.',
          code: "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- or ROLLBACK on failure",
          codeLang: 'sql'
        },
        mistakes: 'Long-running transactions hold locks and block everyone else — keep them short.'
      },
      'ar-msa': {
        definition: 'المعاملة (Transaction) تجمع عدة عمليات قاعدة بيانات في وحدة كل شيء أو لا شيء: إذا فشلت خطوة ترجع كلها.',
        simple: 'المعاملة وعد: إما أن تحدث كل الخطوات أو لا تحدث أي منها.',
        mistakes: 'المعاملات الطويلة تمسك الأقفال وتعطل الجميع — أبقها قصيرة.'
      }
    }
  },
  {
    id: 'acid',
    name: 'ACID',
    category: 'backend',
    subcategory: 'Operations',
    difficulty: 'advanced',
    popularity: 70,
    related: ['transaction', 'database'],
    prerequisites: ['transaction'],
    resources: [],
    content: {
      en: {
        definition: 'ACID (Atomicity, Consistency, Isolation, Durability) are the four guarantees a reliable database makes about transactions.',
        simple: 'ACID is the database promising: no half-done work, ever.',
        whenToUse: 'Banks, orders, and anything where a half-finished write is a disaster.'
      },
      'ar-msa': {
        definition: 'الـ ACID (الذرية والاتساق والعزل والمتانة) هي الضمانات الأربع التي تقدمها قاعدة البيانات الموثوقة عن المعاملات.',
        simple: 'الـ ACID وعد قاعدة البيانات: لا عمل نصف منجَز أبدًا.',
        whenToUse: 'البنوك والطلبات وكل ما يكون فيه نصف كتابة كارثة.'
      }
    }
  },
  {
    id: 'orm',
    name: 'ORM',
    category: 'backend',
    subcategory: 'Tools',
    difficulty: 'intermediate',
    popularity: 78,
    related: ['sql', 'database', 'repository-pattern'],
    prerequisites: ['sql', 'database'],
    resources: [],
    content: {
      en: {
        definition: 'An ORM (Object-Relational Mapper) maps database tables to code objects, letting you query with method calls instead of raw SQL.',
        simple: 'An ORM is a translator between your objects and your tables.',
        whenToUse: 'Great for standard CRUD; drop to raw SQL for complex reporting queries.',
        mistakes: 'ORM-generated N+1 queries silently hammer the database — watch the query log.'
      },
      'ar-msa': {
        definition: 'الـ ORM يخربط جداول قاعدة البيانات مع كائنات الكود، فتستعلم باستدعاءات دوال بدل SQL خام.',
        simple: 'الـ ORM مترجم بين كائناتك وجداولك.',
        whenToUse: 'ممتاز لعمليات CRUD القياسية؛ وانزل إلى SQL الخام لاستعلامات التقارير المعقدة.',
        mistakes: 'استعلامات N+1 المولدة من ORM تدق على قاعدة البيانات بصمت — راقب سجل الاستعلامات.'
      }
    }
  },
  {
    id: 'rate-limiting',
    name: 'Rate Limiting',
    category: 'backend',
    subcategory: 'Security',
    difficulty: 'intermediate',
    popularity: 74,
    related: ['middleware', 'api', 'security'],
    prerequisites: ['middleware', 'api'],
    resources: [],
    content: {
      en: {
        definition: 'Rate limiting caps how many requests a client may make in a time window, protecting the service from abuse and runaway loops.',
        simple: 'Rate limiting is a bouncer counting how many times you knock per minute.',
        whenToUse: 'Any public API — especially login endpoints, to slow brute-force attempts.',
        mistakes: 'Rate limits alone do not stop a determined attacker; combine with monitoring and lockouts.'
      },
      'ar-msa': {
        definition: 'تحديد المعدل يضع سقفًا لعدد الطلبات التي يجوز للعميل إرسالها في نافذة زمنية، حماية للخدمة من الإساءة والحلقات الهاربة.',
        simple: 'تحديد المعدل حارس يعد كم مرة تطرق في الدقيقة.',
        whenToUse: 'أي API عام — خصوصًا نقاط تسجيل الدخول لإبطاء محاولات الاختراق بالقوة.',
        mistakes: 'حدود المعدل وحدها لا توقف مهاجمًا مصممًا؛ ادمجها بالمراقبة والإقفال.'
      }
    }
  }
];
