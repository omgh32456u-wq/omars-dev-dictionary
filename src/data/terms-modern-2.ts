import type { Term } from '../types';

// Omar's Dev Dictionary — additional Modern terms (batch 2).

export const MODERN_2_TERMS: Term[] = [
  {
    id: 'rag',
    name: 'RAG',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 79,
    related: ['llm', 'embeddings', 'vector', 'semantic-search'],
    prerequisites: ['llm', 'embeddings'],
    resources: [],
    content: {
      en: {
        definition: 'RAG (Retrieval-Augmented Generation) retrieves relevant documents with vector search, then feeds them to the LLM as context so its answer is grounded in real data.',
        simple: 'RAG means: open the right book pages first, then let the AI answer from those pages.',
        howItWorks: 'Your content is embedded into vectors at index time; at query time the nearest passages are fetched and injected into the prompt.',
        whenToUse: 'Question-answering over your own documents — it reduces hallucination and keeps answers current without retraining.',
        mistakes: 'Retrieval quality caps everything: if the wrong passages are fetched, the best model still answers wrong.'
      },
      'ar-msa': {
        definition: 'الـ RAG يسترجع مستندات ذات صلة بالبحث المتجهي ثم يقدمها للـ LLM كسياق لتكون إجابته مؤسسة على بيانات حقيقية.',
        simple: 'الـ RAG يعني: افتح صفحات الكتاب الصحيحة أولًا، ثم دع الذكاء الاصطناعي يجيب من تلك الصفحات.',
        howItWorks: 'يُدمج محتواك في متجهات عند الفهرسة؛ وعند الاستعلام تُجلب أقرب المقاطع وتُحقن في الـ Prompt.',
        whenToUse: 'الإجابة عن الأسئلة على مستنداتك — يقلل الهلوسة ويبقي الإجابات محدثة دون إعادة تدريب.',
        mistakes: 'جودة الاسترجاع تحدد السقف: إن جُلبت مقاطع خاطئة فأفضل نموذج يجيب خطأ.'
      }
    }
  },
  {
    id: 'fine-tuning',
    name: 'Fine-Tuning',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'advanced',
    popularity: 74,
    related: ['training', 'llm', 'dataset'],
    prerequisites: ['training', 'llm'],
    resources: [],
    content: {
      en: {
        definition: 'Fine-tuning continues training a pre-trained model on a smaller, focused dataset so it specializes in your domain or style.',
        simple: 'Fine-tuning is sending a university graduate to a specialized course.',
        whenToUse: 'When prompting and RAG cannot capture a consistent style or format; try them first — they are cheaper.',
        mistakes: 'Fine-tuning teaches style, not fresh facts: for up-to-date knowledge use retrieval, not tuning.'
      },
      'ar-msa': {
        definition: 'الضبط الدقيق يكمل تدريب نموذج مدرّب مسبقًا على مجموعة بيانات أصغر ومركزة ليتخصص في مجالك أو أسلوبك.',
        simple: 'الضبط الدقيق إرسال خريج جامعي إلى دورة متخصصة.',
        whenToUse: 'عندما يعجز الـ Prompting و RAG عن إنتاج أسلوب أو صيغة ثابتين؛ جرّبهما أولًا فهما أرخص.',
        mistakes: 'الضبط الدقيق يعلم الأسلوب لا الحقائق الجديدة: للمعرفة المحدثة استخدم الاسترجاع لا الضبط.'
      }
    }
  },
  {
    id: 'hallucination',
    name: 'Hallucination',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'beginner',
    popularity: 81,
    related: ['llm', 'rag', 'token'],
    prerequisites: ['llm'],
    resources: [],
    content: {
      en: {
        definition: 'Hallucination is when an LLM produces fluent, confident text that is factually wrong or invented, because it predicts plausible tokens rather than verified truth.',
        simple: 'Hallucination is the AI telling a very convincing story that happens to be false.',
        whenToUse: 'Mitigate with retrieval (RAG), citation requirements, and human review for anything consequential.',
        mistakes: 'Fluency is not evidence: confident tone never means the answer was verified.'
      },
      'ar-msa': {
        definition: 'الهلوسة هي أن ينتج الـ LLM نصًا سلسًا واثقًا لكنه خاطئ واقعيًا أو مُخترع، لأنه يتنبأ بـ Tokens معقولة لا بحقيقة موثقة.',
        simple: 'الهلوسة هي الذكاء الاصطناعي يحكي قصة مقنعة جدًا تصادف أنها غير صحيحة.',
        whenToUse: 'خففها بالاسترجاع (RAG) وإلزام الاستشهاد ومراجعة بشرية لكل ما له عواقب.',
        mistakes: 'الطلاقة ليست دليلًا: النبرة الواثقة لا تعني أبدًا أن الإجابة تم التحقق منها.'
      }
    }
  },
  {
    id: 'context-window',
    name: 'Context Window',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 78,
    related: ['llm', 'token', 'prompt'],
    prerequisites: ['llm', 'token'],
    resources: [],
    content: {
      en: {
        definition: 'The context window is the maximum number of tokens a model can consider at once — your prompt plus retrieved documents plus generated answer must all fit inside it.',
        simple: 'The context window is the model whiteboard: everything must fit on it at the same time.',
        whenToUse: 'Long documents must be chunked and retrieved selectively; stuffing everything in wastes accuracy and money.',
        mistakes: 'Bigger windows tempt you to paste everything — relevant retrieval beats raw size almost every time.'
      },
      'ar-msa': {
        definition: 'نافذة السياق أقصى عدد Tokens يستطيع النموذج اعتبارها مرة واحدة — والـ Prompt والمستندات المسترجعة والإجابة كلها يجب أن تسع فيها.',
        simple: 'نافذة السياق هي السبورة البيضاء للنموذج: كل شيء يجب أن يكون عليها في اللحظة نفسها.',
        whenToUse: 'المستندات الطويلة تشطر وتسترجع انتقائيًا؛ وحشو كل شيء يهدر الدقة والمال.',
        mistakes: 'النوافذ الأكبر تغري بلصق كل شيء — الاسترجاع المناسب يغلب الحجم الخام في كل مرة تقريبًا.'
      }
    }
  },
  {
    id: 'app-store',
    name: 'App Store',
    category: 'modern',
    subcategory: 'Distribution',
    difficulty: 'beginner',
    popularity: 80,
    related: ['ios', 'apk', 'deploy'],
    prerequisites: ['ios'],
    resources: [],
    content: {
      en: {
        definition: 'The App Store is Apple marketplace for iOS apps: apps pass review, are signed, and updates flow to users through it.',
        simple: 'The App Store is the official shop for iPhone apps, with a strict doorman.',
        whenToUse: 'iOS distribution must go through it; plan for review times in your release schedule.',
        mistakes: 'Submitting on Friday and expecting review over the weekend — schedule releases with review latency in mind.'
      },
      'ar-msa': {
        definition: 'الـ App Store متجر Apple لتطبيقات iOS: تمر التطبيقات بالمراجعة والتوقيع وتتدفق التحديثات عبره.',
        simple: 'الـ App Store هو المتجر الرسمي لتطبيقات الـ iPhone، بحارس صارم.',
        whenToUse: 'توزيع iOS يجب أن يمر عبره؛ وضع أزمنة المراجعة في جدول إصدارك.',
        mistakes: 'التقديم يوم الجمعة وتوقع المراجعة في عطلة نهاية الأسبوع — جدول الإصدارات مع تأخير المراجعة.'
      }
    }
  },
  {
    id: 'aab',
    name: 'AAB',
    category: 'modern',
    subcategory: 'Distribution',
    difficulty: 'beginner',
    popularity: 71,
    related: ['apk', 'android', 'deploy'],
    prerequisites: ['apk'],
    resources: [],
    content: {
      en: {
        definition: 'An AAB (Android App Bundle) is the publishing format for Google Play: Play receives the bundle and generates optimized APKs per device.',
        simple: 'AAB is the smart shipping box; Play assembles the exact APK each phone needs.',
        whenToUse: 'Google Play requires AAB for new apps; keep APK for manual sideloading and testing.',
        mistakes: 'Trying to install an AAB directly on a phone — it is a publishing container, not an installer.'
      },
      'ar-msa': {
        definition: 'ملف AAB صيغة النشر لـ Google Play: يستلم Play الحزمة ويولد APKs محسنة لكل جهاز.',
        simple: 'الـ AAB صندوق شحن ذكي؛ و Play يجمّع الـ APK الذي يحتاجه كل هاتف بالضبط.',
        whenToUse: 'يطلب Google Play صيغة AAB للتطبيقات الجديدة؛ وأبق APK للتثبيت اليدوي والاختبار.',
        mistakes: 'محاولة تثبيت AAB مباشرة على هاتف — إنه حاوية نشر لا مثبت.'
      }
    }
  }
];
