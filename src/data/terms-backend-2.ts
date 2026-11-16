import type { Term } from '../types';

// Omar's Dev Dictionary — additional Backend terms (batch 2).

export const BACKEND_2_TERMS: Term[] = [
  {
    id: 'join',
    name: 'JOIN',
    category: 'backend',
    subcategory: 'Operations',
    difficulty: 'intermediate',
    popularity: 78,
    related: ['sql', 'table', 'foreign-key'],
    prerequisites: ['sql', 'foreign-key'],
    resources: [],
    content: {
      en: {
        definition: 'A JOIN combines rows from two related tables into one result set, following their foreign-key relationship.',
        simple: 'A JOIN is stitching two spreadsheets together along their shared column.',
        example: {
          text: 'Terms with their category names.',
          code: "SELECT t.name, c.label\nFROM terms t\nJOIN categories c ON t.category_id = c.id;",
          codeLang: 'sql'
        },
        whenToUse: 'The default tool for relational reads; N+1 queries in an ORM are just forgotten JOINs.'
      },
      'ar-msa': {
        definition: 'الـ JOIN يدمج صفوف جدولين مترابطين في مجموعة نتائج واحدة متتبعًا علاقة المفتاح الأجنبي.',
        simple: 'الـ JOIN خياطة جدولين بيانهما على العمود المشترك.',
        whenToUse: 'الأداة الافتراضية للقراءات العلائقية؛ واستعلامات N+1 في ORM مجرد JOINs منسية.'
      }
    }
  },
  {
    id: 'normalization',
    name: 'Normalization',
    category: 'backend',
    subcategory: 'Storage',
    difficulty: 'intermediate',
    popularity: 74,
    related: ['schema', 'table', 'foreign-key'],
    prerequisites: ['schema'],
    resources: [],
    content: {
      en: {
        definition: 'Normalization is organizing a relational schema so every fact is stored exactly once, eliminating duplicated and inconsistent data.',
        simple: 'Normalization means one fact lives in one place, and everything else points to it.',
        whenToUse: 'Design transactional schemas normalized first; denormalize deliberately for read-heavy reporting.',
        mistakes: 'Over-normalizing turns one screen into a twenty-way JOIN — normalize data, not convenience.'
      },
      'ar-msa': {
        definition: 'التطبيع هو تنظيم مخطط علائقي بحيث يخزن كل حقيقة مرة واحدة بالضبط، مزيحًا التكرار والتناقض.',
        simple: 'التطبيع يعني أن حقيقة واحدة تسكن مكانًا واحدًا، وكل ما عداها يشير إليها.',
        whenToUse: 'صمم مخططات المعاملات مطبعة أولًا؛ وأزل التطبع عمدًا لتقارير القراءة الكثيفة.',
        mistakes: 'المبالغة في التطبيع تحول شاشة واحدة إلى JOIN بعشرين اتجاهًا — طبّع البيانات لا الراحة.'
      }
    }
  },
  {
    id: 'pagination',
    name: 'Pagination',
    category: 'backend',
    subcategory: 'Operations',
    difficulty: 'beginner',
    popularity: 77,
    related: ['api', 'query', 'performance'],
    prerequisites: ['api'],
    resources: [],
    content: {
      en: {
        definition: 'Pagination splits a large result set into pages (limit + offset, or cursor-based) so clients never receive thousands of rows at once.',
        simple: 'Pagination is serving a book page by page instead of dropping the whole library on the reader.',
        example: {
          text: 'Two styles.',
          code: "-- offset style\nSELECT * FROM terms ORDER BY name LIMIT 20 OFFSET 40;\n-- cursor style (stable under inserts)\nSELECT * FROM terms WHERE id > 799 ORDER BY id LIMIT 20;",
          codeLang: 'sql'
        },
        whenToUse: 'Cursor pagination stays correct while data changes; offset pagination is simpler but can skip or repeat rows.'
      },
      'ar-msa': {
        definition: 'التقسيم إلى صفحات يشطر مجموعة نتائج كبيرة (بحد وإزاحة أو بمؤشر) فلا يستلم العميل آلاف الصفوف دفعة واحدة.',
        simple: 'التقسيم تقديم الكتاب صفحة صفحة بدل إسقاط المكتبة كلها على القارئ.',
        whenToUse: 'تقسيم المؤشر يبقى صحيحًا أثناء تغير البيانات؛ وتقسيم الإزاحة أبسط لكنه قد يتخطى أو يكرر الصفوف.'
      }
    }
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    subcategory: 'APIs',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['api', 'rest', 'json'],
    prerequisites: ['api', 'rest'],
    resources: [],
    content: {
      en: {
        definition: 'GraphQL is a query language for APIs where the client describes exactly the shape of data it wants, and the server returns precisely that — one endpoint, typed schema.',
        simple: 'GraphQL lets the client order à la carte instead of accepting fixed set menus (REST resources).',
        whenToUse: 'Apps with many different screens over the same data — mobile especially, where over-fetching costs battery.',
        mistakes: 'Nested resolvers can explode into N+1 database queries — batch and use DataLoader patterns.'
      },
      'ar-msa': {
        definition: 'الـ GraphQL لغة استعلام لواجهات API يصف فيها العميل شكل البيانات الذي يريده بالضبط فيعيدها السيرفر بدقة — نقطة نهاية واحدة ومخطط مصنف.',
        simple: 'الـ GraphQL يتيح للعميل الطلب من القائمة بدل قبول وجبات REST الجاهزة.',
        whenToUse: 'تطبيقات بشاشات كثيرة فوق نفس البيانات — الموبايل خصوصًا حيث الجلب الزائد يستهلك البطارية.',
        mistakes: 'المحللات المتداخلة قد تنفجر إلى استعلامات N+1 — جمع الدفعات واستخدم أنماط DataLoader.'
      }
    }
  }
];
