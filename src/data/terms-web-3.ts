import type { Term } from '../types';

// Omar's Dev Dictionary — web batch 3: completes accessibility references.

export const WEB_3_TERMS: Term[] = [
  {
    id: 'keyboard-navigation',
    name: 'Keyboard Navigation',
    category: 'web',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 71,
    related: ['accessibility', 'focus-management', 'screen-reader'],
    prerequisites: ['accessibility'],
    resources: [],
    content: {
      en: {
        definition: 'Keyboard navigation means every interactive element is reachable and operable with Tab, Shift+Tab, Enter, Space, and Escape — no pointer required.',
        simple: 'Keyboard navigation means the whole app works for hands that never touch a mouse.',
        whenToUse: 'Tab order must follow the visual order; every focusable control needs a visible focus ring; modals must trap and restore focus.',
        mistakes: 'Click-only widgets (a div with onClick) are invisible to keyboards — use buttons and links.'
      },
      'ar-msa': {
        definition: 'التنقل بلوحة المفاتيح يعني أن كل عنصر تفاعلي قابل للوصول والتشغيل بـ Tab و Shift+Tab و Enter و Space و Escape — دون حاجة لمؤشر.',
        simple: 'التنقل بلوحة المفاتيح يعني أن التطبيق كله يعمل لأيدٍ لا تلمس الفأرة أبدًا.',
        whenToUse: 'يجب أن يتبع ترتيب Tab الترتيب البصري؛ وكل عنصر قابل للتركيز يحتاج حلقة تركيز مرئية؛ والنوافذ المنبثقة تحصر التركيز وتعيده.',
        mistakes: 'الأدوات التي تعمل بالنقر فقط (div مع onClick) غير مرئية للوحة المفاتيح — استخدم الأزرار والروابط.'
      }
    }
  },
  {
    id: 'focus-management',
    name: 'Focus Management',
    category: 'web',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 69,
    related: ['keyboard-navigation', 'accessibility'],
    prerequisites: ['keyboard-navigation'],
    resources: [],
    content: {
      en: {
        definition: 'Focus management is deliberately controlling which element receives keyboard focus as screens change — moving focus into new content and restoring it when content closes.',
        simple: 'Focus management is guiding the keyboard spotlight to where the action is.',
        whenToUse: 'Route changes move focus to the new heading; dialogs focus their first control; closing a dialog returns focus to what opened it.',
        mistakes: 'After a route change, focus left behind on the old link means screen-reader users hear nothing change.'
      },
      'ar-msa': {
        definition: 'إدارة التركيز هي التحكم المقصود في العنصر الذي يستلم تركيز لوحة المفاتيح أثناء تغير الشاشات — نقل التركيز إلى المحتوى الجديد وإعادته عند إغلاق المحتوى.',
        simple: 'إدارة التركيز هي توجيه بقعة لوحة المفاتيح إلى حيث يحدث الفعل.',
        whenToUse: 'تغييرات المسار تنقل التركيز إلى العنوان الجديد؛ والحوارات تركز أول عنصر تحكم؛ وإغلاق الحوار يعيد التركيز لمن فتحه.',
        mistakes: 'بعد تغيير المسار، بقاء التركيز على الرابط القديم يعني أن مستخدمي قارئ الشاشة لا يسمعون أي تغيير.'
      }
    }
  },
  {
    id: 'screen-reader',
    name: 'Screen Reader',
    category: 'web',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 70,
    related: ['accessibility', 'keyboard-navigation', 'aria'],
    prerequisites: ['accessibility'],
    resources: [],
    content: {
      en: {
        definition: 'A screen reader is assistive software that reads the interface aloud (or renders it as braille), driven entirely by the semantic structure of the page.',
        simple: 'A screen reader is the ears of the page: it reads whatever the markup honestly says.',
        whenToUse: 'Test with one periodically (NVDA, VoiceOver, TalkBack); your semantic HTML is its script.',
        mistakes: 'A screen reader reads the DOM, not the pixels — visual-only cues are invisible to it.'
      },
      'ar-msa': {
        definition: 'قارئ الشاشة برنامج مساعد يقرأ الواجهة بصوت عالٍ (أو يعرضها بطريقة برايل)، مدفوعًا كليًا بالبنية الدلالية للصفحة.',
        simple: 'قارئ الشاشة هو أذن الصفحة: يقرأ ما يقوله ترميزك بصدق.',
        whenToUse: 'اختبر به دوريًا (NVDA و VoiceOver و TalkBack)؛ فالـ HTML الدلالي هو نصه.',
        mistakes: 'قارئ الشاشة يقرأ الـ DOM لا البكسلات — الإشارات البصرية وحدها غير مرئية له.'
      }
    }
  },
  {
    id: 'aria',
    name: 'ARIA',
    category: 'web',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 73,
    related: ['accessibility', 'screen-reader', 'html'],
    prerequisites: ['accessibility'],
    resources: [],
    content: {
      en: {
        definition: 'ARIA (Accessible Rich Internet Applications) is a set of HTML attributes (roles, states, labels) that communicate semantics native elements cannot express.',
        simple: 'ARIA is the footnote vocabulary for assistive tech when normal HTML is not enough.',
        example: {
          text: 'This app labels icon-only audio buttons.',
          code: '<button aria-label="Listen">🔊</button>',
          codeLang: 'html'
        },
        whenToUse: 'First rule of ARIA: prefer a native element. Use ARIA only where no native element fits — and never remove semantics you actually need.',
        mistakes: 'Sprinkling aria-* without testing in a real screen reader often makes things worse, not better.'
      },
      'ar-msa': {
        definition: 'الـ ARIA مجموعة سمات HTML (أدوار وحالات وملصقات) توصل دلالات لا تستطيع العناصر الأصلية التعبير عنها.',
        simple: 'الـ ARIA معجم الحواشي للتقنية المساعدة حين لا يكفي HTML العادي.',
        whenToUse: 'القاعدة الأولى في ARIA: فضّل العنصر الأصلي. واستخدمه فقط حيث لا يناسب عنصر أصلي — ولا تحذف دلالات تحتاجها فعلًا.',
        mistakes: 'نثر aria-* دون اختبار في قارئ شاشة حقيقي غالبًا يجعل الأمور أسوأ لا أفضل.'
      }
    }
  }
];
