import type { Term } from '../types';

// Omar's Dev Dictionary — Mobile & Modern Technologies terms.

export const MODERN_TERMS: Term[] = [
  {
    id: 'android',
    name: 'Android',
    category: 'modern',
    subcategory: 'Platforms',
    difficulty: 'beginner',
    popularity: 88,
    related: ['apk', 'sdk', 'mobile-app'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Android is Google\u2019s open-source operating system for phones and tablets; apps are usually built with Kotlin or Java and distributed as APK files.',
        simple: 'Android is the operating system on most phones in the world.',
        whenToUse: 'Build for Android when you want to reach the largest mobile audience.'
      },
      'ar-msa': {
        definition: 'Android نظام تشغيل مفتوح المصدر من Google للهواتف والأجهزة اللوحية؛ وتبنى تطبيقاته عادة بـ Kotlin أو Java وتوزع كملفات APK.',
        simple: 'Android هو نظام التشغيل الموجود في معظم هواتف العالم.',
        whenToUse: 'طور لـ Android عندما تريد الوصول لأكبر جمهور موبايل.'
      }
    }
  },
  {
    id: 'ios',
    name: 'iOS',
    category: 'modern',
    subcategory: 'Platforms',
    difficulty: 'beginner',
    popularity: 85,
    related: ['swift', 'mobile-app'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'iOS is Apple\u2019s closed operating system for iPhone and iPad; native apps are built with Swift (or Objective-C) and distributed through the App Store.',
        simple: 'iOS is the operating system of the iPhone.',
        whenToUse: 'Build for iOS to reach Apple users, using Xcode on a Mac.'
      },
      'ar-msa': {
        definition: 'iOS نظام تشغيل مغلق من Apple لجهازي iPhone و iPad؛ وتبنى التطبيقات الأصلية بـ Swift أو Objective-C وتوزع عبر App Store.',
        simple: 'iOS هو نظام تشغيل الـ iPhone.',
        whenToUse: 'طور لـ iOS للوصول إلى مستخدمي Apple، باستخدام Xcode على جهاز Mac.'
      }
    }
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'modern',
    subcategory: 'Cross-platform',
    difficulty: 'intermediate',
    popularity: 83,
    related: ['dart', 'mobile-app'],
    prerequisites: [],
    resources: [{ label: 'Flutter — Docs', url: 'https://docs.flutter.dev', verified: false }],
    content: {
      en: {
        definition: 'Flutter is Google\u2019s UI toolkit for building natively compiled apps for mobile, web, and desktop from one Dart codebase, rendering its own pixels with Skia.',
        simple: 'Flutter lets one Dart codebase become an Android, iOS, web, and desktop app.',
        whenToUse: 'When you need one brand-consistent UI across many platforms from a single codebase.'
      },
      'ar-msa': {
        definition: 'Flutter مجموعة أدوات واجهات من Google لبناء تطبيقات مترجمة أصلاً للموبايل والويب وسطح المكتب من قاعدة كود واحدة بـ Dart، وترسم واجهاتها بنفسها عبر محرك Skia.',
        simple: 'Flutter يجعل قاعدة كود واحدة بـ Dart تصبح تطبيقًا لـ Android و iOS والويب وسطح المكتب.',
        whenToUse: 'عندما تحتاج واجهة واحدة متسقة الهوية عبر منصات كثيرة من كود واحد.'
      }
    }
  },
  {
    id: 'dart',
    name: 'Dart',
    category: 'modern',
    subcategory: 'Languages',
    difficulty: 'intermediate',
    popularity: 77,
    related: ['flutter'],
    prerequisites: [],
    resources: [{ label: 'Dart — Language', url: 'https://dart.dev/language', verified: false }],
    content: {
      en: {
        definition: 'Dart is a typed, garbage-collected language from Google optimized for UI, the language Flutter apps are written in.',
        simple: 'Dart is the language you write Flutter apps with.',
        whenToUse: 'Choose Dart when building Flutter apps; its hot reload makes UI iteration fast.'
      },
      'ar-msa': {
        definition: 'Dart لغة مصنفة من Google بذاكرة مدارة، محسنة لواجهات المستخدم، وهي لغة تطبيقات Flutter.',
        simple: 'Dart هي اللغة التي تكتب بها تطبيقات Flutter.',
        whenToUse: 'اختر Dart عند بناء تطبيقات Flutter؛ فإعادة التحميل الساخن يجعل تجربة تعديل الواجهة سريعة.'
      }
    }
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'modern',
    subcategory: 'Cross-platform',
    difficulty: 'intermediate',
    popularity: 82,
    related: ['react', 'javascript', 'mobile-app'],
    prerequisites: ['react', 'javascript'],
    resources: [{ label: 'React Native — Docs', url: 'https://reactnative.dev/docs/getting-started', verified: false }],
    content: {
      en: {
        definition: 'React Native builds native mobile apps using React components and JavaScript, mapping your components to real native UI widgets.',
        simple: 'React Native lets React developers build real iOS and Android apps.',
        whenToUse: 'When your team already knows React and needs true native widgets, not a web wrapper.',
        mistakes: 'Heavy computation in the JS thread drops frames — move heavy work to native modules.'
      },
      'ar-msa': {
        definition: 'React Native يبني تطبيقات موبايل أصلية باستخدام مكونات React و JavaScript، مترجمًا مكوناتك إلى عناصر واجهة أصلية حقيقية.',
        simple: 'React Native يتيح لمطوري React بناء تطبيقات iOS و Android أصلية حقيقية.',
        whenToUse: 'عندما يعرف فريقك React بالفعل ويحتاج عناصر واجهة أصلية حقيقية لا غلاف ويب.',
        mistakes: 'الحسابات الثقيلة في خيط JavaScript تسقط الإطارات — انقل العمل الثقيل إلى وحدات أصلية.'
      }
    }
  },
  {
    id: 'capacitor',
    name: 'Capacitor',
    category: 'modern',
    subcategory: 'Cross-platform',
    difficulty: 'beginner',
    popularity: 72,
    related: ['pwa', 'mobile-app', 'webview'],
    prerequisites: ['pwa'],
    resources: [{ label: 'Capacitor — Docs', url: 'https://capacitorjs.com/docs', verified: false }],
    content: {
      en: {
        definition: 'Capacitor wraps an existing web app in a native shell and exposes device APIs (camera, filesystem, notifications) through plugins, so a web app can ship to app stores.',
        simple: 'Capacitor puts your web app in a native container and gives it device superpowers.',
        whenToUse: 'When you have a web app and want to publish it to Google Play or the App Store without rewriting it.',
        mistakes: 'A Capacitor app is still a web app inside — do not expect native-level animation performance.'
      },
      'ar-msa': {
        definition: 'Capacitor يغلف تطبيق ويب موجود في قشرة أصلية ويكشف واجهات الجهاز (الكاميرا ونظام الملفات والإشعارات) عبر إضافات، فيمكن نشر تطبيق ويب في متاجر التطبيقات.',
        simple: 'Capacitor يضع تطبيقك الويب في حاوية أصلية ويمنحه قدرات الجهاز.',
        whenToUse: 'عندما لديك تطبيق ويب وتريد نشره في Google Play أو App Store دون إعادة كتابته.',
        mistakes: 'تطبيق Capacitor يبقى تطبيق ويب من الداخل — لا تتوقع أداء حركة بمستوى أصلي.'
      }
    }
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    category: 'modern',
    subcategory: 'Platforms',
    difficulty: 'beginner',
    popularity: 85,
    related: ['android', 'ios', 'native-app', 'hybrid-app'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A mobile app is software designed to run on a phone or tablet, either natively compiled, cross-platform, or as an installed PWA.',
        simple: 'A mobile app is any app that lives on your phone.',
        whenToUse: 'Mobile apps shine where the browser cannot go: offline-first use, background sync, and hardware access.'
      },
      'ar-msa': {
        definition: 'تطبيق الموبايل برنامج مصمم للعمل على الهاتف أو الجهاز اللوحي، سواء مترجم أصلاً أو متعدد المنصات أو كـ PWA مثبت.',
        simple: 'تطبيق الموبايل هو أي تطبيق يسكن هاتفك.',
        whenToUse: 'تتألق تطبيقات الموبايل حيث لا يستطيع المتصفح الذهاب: العمل دون اتصال والمزامنة الخلفية والوصول للعتاد.'
      }
    }
  },
  {
    id: 'native-app',
    name: 'Native App',
    category: 'modern',
    subcategory: 'Platforms',
    difficulty: 'beginner',
    popularity: 79,
    related: ['mobile-app', 'hybrid-app', 'android', 'ios'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A native app is compiled for one specific platform (Android or iOS) using that platform\u2019s language and UI toolkit.',
        simple: 'A native app is written for one platform in that platform\u2019s own tools.',
        whenToUse: 'When you need the platform look and feel, maximum performance, or deep hardware access.'
      },
      'ar-msa': {
        definition: 'التطبيق الأصلي يترجم لمنصة واحدة بعينها (Android أو iOS) بلغة تلك المنصة وأدوات واجهاتها.',
        simple: 'التطبيق الأصلي مكتوب لمنصة واحدة بأدوات المنصة نفسها.',
        whenToUse: 'عندما تحتاج مظهر المنصة وأداءها الأقصى أو وصولاً عميقًا للعتاد.'
      }
    }
  },
  {
    id: 'hybrid-app',
    name: 'Hybrid App',
    category: 'modern',
    subcategory: 'Platforms',
    difficulty: 'beginner',
    popularity: 74,
    related: ['mobile-app', 'native-app', 'capacitor', 'webview'],
    prerequisites: ['native-app'],
    resources: [],
    content: {
      en: {
        definition: 'A hybrid app ships a web app inside a native container (usually a WebView), so one web codebase can run on many stores.',
        simple: 'A hybrid app is a website wearing a native app costume.',
        whenToUse: 'Fast multi-store delivery for content-centric apps; go native when performance or deep hardware is critical.'
      },
      'ar-msa': {
        definition: 'التطبيق الهجين يوزع تطبيق ويب داخل حاوية أصلية (غالبًا WebView)، فتشتغل قاعدة كود ويب واحدة في متاجر كثيرة.',
        simple: 'التطبيق الهجين موقع ويب يرتدي زي تطبيق أصلي.',
        whenToUse: 'توصيل سريع لمتاجر متعددة لتطبيقات المحتوى؛ وانتقل للأصلي عندما يكون الأداء أو العتاد حاسمًا.'
      }
    }
  },
  {
    id: 'apk',
    name: 'APK',
    category: 'modern',
    subcategory: 'Distribution',
    difficulty: 'beginner',
    popularity: 76,
    related: ['android', 'package'],
    prerequisites: ['android'],
    resources: [],
    content: {
      en: {
        definition: 'An APK (Android Package) is the installable file format for Android apps, containing compiled code, resources, and a signature.',
        simple: 'An APK is the installer file you hand an Android phone.',
        whenToUse: 'Build an APK for manual installs and testing; use AAB for Play Store publishing.'
      },
      'ar-msa': {
        definition: 'ملف APK هو صيغة التثبيت لتطبيقات Android، ويحوي الكود المترجم والموارد والتوقيع.',
        simple: 'ملف APK هو ملف التثبيت الذي تعطيه لهاتف Android.',
        whenToUse: 'ابنِ APK للتثبيت اليدوي والاختبار؛ واستخدم AAB للنشر في Play Store.'
      }
    }
  },
  {
    id: 'sdk',
    name: 'SDK',
    category: 'modern',
    subcategory: 'Tools',
    difficulty: 'beginner',
    popularity: 82,
    related: ['api', 'library'],
    prerequisites: ['api'],
    resources: [],
    content: {
      en: {
        definition: 'An SDK (Software Development Kit) is a bundle of tools, libraries, docs, and samples a platform provides so developers can build for it.',
        simple: 'An SDK is the complete starter kit for developing on a platform.',
        whenToUse: 'Use the official SDK for each platform you target — it is the supported path.'
      },
      'ar-msa': {
        definition: 'الـ SDK حزمة أدوات ومكتبات ووثائق وأمثلة توفرها منصة ليتمكن المطورون من البناء عليها.',
        simple: 'الـ SDK هو حقيبة البداية الكاملة للتطوير على منصة.',
        whenToUse: 'استخدم الـ SDK الرسمي لكل منصة تستهدفها — فهو الطريق المدعوم.'
      }
    }
  },
  {
    id: 'api-key',
    name: 'API Key',
    category: 'modern',
    subcategory: 'Security',
    difficulty: 'beginner',
    popularity: 84,
    related: ['api', 'authentication', 'environment-variables', 'security'],
    prerequisites: ['api'],
    resources: [],
    content: {
      en: {
        definition: 'An API key is a secret string that identifies and authorizes a caller to an API, tracked and rate-limited by the provider.',

simple: 'An API key is a membership card the API checks at the door.',
        whenToUse: 'Keep keys in environment variables on the server; never ship them in frontend bundles.',
        mistakes: 'A key committed to a public repository is compromised the second it is pushed — rotate it immediately.'
      },
      'ar-msa': {
        definition: 'مفتاح الـ API سلسلة سرية تعرف المستدعي وتصرح له باستخدام الـ API، ويتتبعها المزود ويحدد معدل استخدامها.',
        simple: 'مفتاح الـ API بطاقة عضوية يفحصها الـ API عند الباب.',
        whenToUse: 'احفظ المفاتيح في متغيرات البيئة على السيرفر؛ ولا تشحنها في حزم الواجهات أبدًا.',
        mistakes: 'المفتاح المدفوع إلى مستودع عام يعد مخترقًا لحظة دفعه — بدله فورًا.'
      }
    }
  },
  {
    id: 'ai',
    name: 'AI',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'beginner',
    popularity: 94,
    related: ['machine-learning', 'neural-network', 'llm'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'AI (Artificial Intelligence) is the field of building systems that perform tasks that normally require human intelligence: understanding language, recognizing images, making decisions.',
        simple: 'AI is teaching machines to do things that normally need human brains.',
        whenToUse: 'Modern developers meet AI mostly as ready models and APIs you call — you rarely train models yourself.'
      },
      'ar-msa': {
        definition: 'الذكاء الاصطناعي هو مجال بناء أنظمة تنجز مهام تتطلب عادة ذكاءً بشريًا: فهم اللغة والتعرف على الصور واتخاذ القرارات.',
        simple: 'الذكاء الاصطناعي هو تعليم الآلات أشياء تحتاج عادة عقولًا بشرية.',
        whenToUse: 'يقابل المطورون الحديثون الذكاء الاصطناعي غالبًا كنماذج وواجهات API جاهزة تستدعيها — ونادرًا ما يدربون النماذج بأنفسهم.'
      }
    }
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 90,
    related: ['ai', 'neural-network', 'training', 'dataset'],
    prerequisites: ['ai'],
    resources: [],
    content: {
      en: {
        definition: 'Machine learning is the practice of fitting models to data so they can predict or classify new data they have never seen, instead of being explicitly programmed with rules.',
        simple: 'Machine learning is showing the computer thousands of examples until it learns the pattern by itself.',
        whenToUse: 'Prediction, classification, and generation problems where writing explicit rules is impossible.',
        mistakes: 'Garbage in, garbage out: a model is only as good as the data it was trained on.'
      },
      'ar-msa': {
        definition: 'تعلم الآلة هو تدريب النماذج على بيانات لتتمكن من التنبؤ ببيانات جديدة لم ترها، بدلًا من برمجتها بقواعد صريحة.',
        simple: 'تعلم الآلة هو عرض آلاف الأمثلة على الحاسوب حتى يتعلم النمط بنفسه.',
        whenToUse: 'مشكلات التنبؤ والتصنيف والتوليد حيث يستحيل كتابة قواعد صريحة.',
        mistakes: 'مدخلات رديئة تعني مخرجات رديئة: النموذج بجودة البيانات التي درب عليها.'
      }
    }
  },
  {
    id: 'neural-network',
    name: 'Neural Network',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 85,
    related: ['machine-learning', 'llm', 'ai'],
    prerequisites: ['machine-learning'],
    resources: [],
    content: {
      en: {
        definition: 'A neural network is a model of layered mathematical units whose connection weights are learned from data, loosely inspired by biological neurons.',
        simple: 'A neural network is a stack of adjustable filters that learn to turn input into meaning.',
        whenToUse: 'The engine inside modern AI: vision, speech, and language models are all neural networks.'
      },
      'ar-msa': {
        definition: 'الشبكة العصبية نموذج من طبقات وحدات رياضية تتعلم أوزان اتصالاتها من البيانات، بإلهام فضفاض من الخلايا العصبية البيولوجية.',
        simple: 'الشبكة العصبية كومة مرشحات قابلة للضبط تتعلم تحويل المدخلات إلى معنى.',
        whenToUse: 'المحرك داخل الذكاء الاصطناعي الحديث: نماذج الرؤية والصوت واللغة كلها شبكات عصبية.'
      }
    }
  },
  {
    id: 'llm',
    name: 'LLM',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 91,
    related: ['ai', 'token', 'inference', 'prompt', 'embeddings'],
    prerequisites: ['ai', 'neural-network'],
    resources: [],
    content: {
      en: {
        definition: 'An LLM (Large Language Model) is a neural network trained on huge text corpora to predict the next token, giving it the ability to converse, translate, and reason over language.',
        simple: 'An LLM is a very well-read text predictor: that is why it can chat, summarize, and write code.',
        whenToUse: 'Chat assistants, code helpers, summarization, and classification of text.',
        mistakes: 'An LLM predicts plausible text, not verified truth — always treat its output as a draft to be checked.'
      },
      'ar-msa': {
        definition: 'الـ LLM شبكة عصبية دربت على نصوص ضخمة للتنبؤ بالـ Token التالي، فاكتسبت القدرة على المحادثة والترجمة والاستدلال على اللغة.',
        simple: 'الـ LLM متنبئ نصي واسع الاطلاع: لهذا يستطيع المحادثة والتلخيص وكتابة الكود.',
        whenToUse: 'مساعدو المحادثة ومساعدو الكود والتلخيص وتصنيف النصوص.',
        mistakes: 'الـ LLM يتنبأ بنص معقول لا بحقيقة موثقة — عامل مخرجاته دائمًا كمسودة تحتاج فحصًا.'
      }
    }
  },
  {
    id: 'prompt',
    name: 'Prompt',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'beginner',
    popularity: 88,
    related: ['llm', 'token'],
    prerequisites: ['llm'],
    resources: [],
    content: {
      en: {
        definition: 'A prompt is the text input you give an AI model to direct its output; prompt engineering is the craft of writing inputs that get reliable results.',
        simple: 'A prompt is the instruction you hand the AI: the clearer the ask, the better the answer.',
        whenToUse: 'Every LLM interaction starts with a prompt; structure and examples in the prompt improve results.',
        mistakes: 'Vague prompts get vague answers — state the task, the format, and the constraints.'
      },
      'ar-msa': {
        definition: 'الـ Prompt هو النص الذي تعطيه لنموذج الذكاء الاصطناعي لتوجيه مخرجاته؛ وهندسة الـ Prompt هي فن كتابة مدخلات تحصل على نتائج موثوقة.',
        simple: 'الـ Prompt هو التعليمات التي تسلمها للذكاء الاصطناعي: كلما كان الطلب أوضح كانت الإجابة أفضل.',
        whenToUse: 'كل تفاعل مع LLM يبدأ بـ Prompt؛ وبنية الـ Prompt وأمثلته تحسن النتائج.',
        mistakes: 'الـ Prompts الغامضة تعطي إجابات غامضة — حدد المهمة والصيغة والقيود.'
      }
    }
  },
  {
    id: 'token',
    name: 'Token',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'beginner',
    popularity: 86,
    related: ['llm', 'inference', 'prompt'],
    prerequisites: ['llm'],
    resources: [],
    content: {
      en: {
        definition: 'In AI, a token is the unit of text an LLM reads and writes — often a word fragment — and the basis for how usage is measured and billed.',
        simple: 'A token is a small piece of text; roughly four characters in English.',
        whenToUse: 'Context windows and API pricing are counted in tokens; long prompts cost more and can overflow the window.',
        mistakes: 'Confusing AI tokens with auth tokens: same word, completely different meanings.'
      },
      'ar-msa': {
        definition: 'في الذكاء الاصطناعي، الـ Token هو وحدة النص التي يقرأها ويكتبها الـ LLM — غالبًا جزء من كلمة — وهو أساس قياس الاستخدام وحسابه.',
        simple: 'الـ Token قطعة صغيرة من النص؛ نحو أربعة أحرف في الإنجليزية.',
        whenToUse: 'نوافذ السياق وأسعار API تحسب بالـ Tokens؛ والـ Prompts الطويلة تكلف أكثر وقد تفيض عن النافذة.',
        mistakes: 'الخلط بين توكنات الذكاء الاصطناعي وتوكنات المصادقة: نفس الكلمة بمعنيين مختلفين تمامًا.'
      }
    }
  },
  {
    id: 'inference',
    name: 'Inference',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 82,
    related: ['llm', 'neural-network', 'training'],
    prerequisites: ['llm'],
    resources: [],
    content: {
      en: {
        definition: 'Inference is running a trained model on new input to produce output — as opposed to training, which is fitting the model to data.',
        simple: 'Training is studying; inference is taking the exam.',
        whenToUse: 'When you call an AI API you are paying for inference: input tokens in, output tokens out.'
      },
      'ar-msa': {
        definition: 'الاستدلال (Inference) هو تشغيل نموذج مدرب على مدخلات جديدة لإنتاج مخرجات — في مقابل التدريب الذي هو ملاءمة النموذج للبيانات.',
        simple: 'التدريب هو المذاكرة؛ والاستدلال هو دخول الامتحان.',
        whenToUse: 'عندما تستدعي واجهة ذكاء اصطناعي فأنت تدفع مقابل الاستدلال: توكنات دخل وتوكنات خرج.'
      }
    }
  },
  {
    id: 'embeddings',
    name: 'Embeddings',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['llm', 'vector', 'semantic-search'],
    prerequisites: ['llm'],
    resources: [],
    content: {
      en: {
        definition: 'Embeddings are vectors of numbers that represent the meaning of text (or images) so that similar meanings sit close together in space and can be compared mathematically.',
        simple: 'Embeddings turn meaning into coordinates, so similar ideas become nearby points.',
        whenToUse: 'Semantic search, clustering, and retrieval-augmented generation (RAG).',
        mistakes: 'Embeddings capture similarity, not exact meaning — a vector search still benefits from keyword search alongside it.'
      },
      'ar-msa': {
        definition: 'الـ Embeddings متجهات رقمية تمثل معنى النص أو الصورة بحيث تتقارب المعاني المتشابهة في الفضاء ويمكن مقارنتها رياضيًا.',
        simple: 'الـ Embeddings تحول المعنى إلى إحداثيات، فتصبح الأفكار المتشابهة نقاطًا متجاورة.',
        whenToUse: 'البحث الدلالي والتجميع والتوليد المعزز بالاسترجاع (RAG).',
        mistakes: 'الـ Embeddings تلتقط التشابه لا المعنى الدقيق — فالبحث المتجهي يستفيد من بحث الكلمات المفتاحية بجانبه.'
      }
    }
  }
];
