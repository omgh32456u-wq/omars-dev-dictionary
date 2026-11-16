import type { Term } from '../types';

// Omar's Dev Dictionary — additional Mobile & Modern Technologies terms.

export const MODERN_EXTRA_TERMS: Term[] = [
  {
    id: 'swift',
    name: 'Swift',
    category: 'modern',
    subcategory: 'Languages',
    difficulty: 'intermediate',
    popularity: 76,
    related: ['ios', 'sdk'],
    prerequisites: [],
    resources: [{ label: 'Swift — About', url: 'https://www.swift.org/about/', verified: false }],
    content: {
      en: {
        definition: 'Swift is Apple modern typed programming language for iOS, macOS, and other Apple platforms, designed for safety and performance.',
        simple: 'Swift is the language of iPhone apps today.',
        whenToUse: 'Any native iOS or macOS development; SwiftUI is its modern UI framework.'
      },
      'ar-msa': {
        definition: 'Swift هي لغة Apple المصنفة الحديثة لتطبيقات iOS و macOS ومنصات Apple الأخرى، مصممة للسلامة والأداء.',
        simple: 'Swift هي لغة تطبيقات الـ iPhone اليوم.',
        whenToUse: 'أي تطوير أصلي لـ iOS أو macOS؛ و SwiftUI هي إطار واجهاتها الحديث.'
      }
    }
  },
  {
    id: 'training',
    name: 'Training',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 78,
    related: ['machine-learning', 'inference', 'dataset'],
    prerequisites: ['machine-learning'],
    resources: [],
    content: {
      en: {
        definition: 'Training is the process of fitting a model to a dataset by repeatedly adjusting its parameters to reduce prediction error.',
        simple: 'Training is the model doing its homework, millions of times, with corrections.',
        whenToUse: 'Training needs large datasets and heavy compute; most product teams consume pre-trained models instead.',
        mistakes: 'Overfitting: the model memorizes the homework instead of learning the concept.'
      },
      'ar-msa': {
        definition: 'التدريب هو عملية ملاءمة نموذج لبيانات عبر تعديل معاملاته مرارًا لتقليل خطأ التنبؤ.',
        simple: 'التدريب هو النموذج يحل واجباته ملايين المرات مع تصحيح.',
        whenToUse: 'يحتاج التدريب بيانات ضخمة وحسابًا ثقيلًا؛ ومعظم فرق المنتجات تستهلك نماذج مدرّبة مسبقًا بدلًا من ذلك.',
        mistakes: 'الإفراط في التلاءم: النموذج يحفظ الواجب بدل أن يتعلم المفهوم.'
      }
    }
  },
  {
    id: 'dataset',
    name: 'Dataset',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'beginner',
    popularity: 77,
    related: ['training', 'machine-learning'],
    prerequisites: ['machine-learning'],
    resources: [],
    content: {
      en: {
        definition: 'A dataset is the organized collection of examples a model is trained or evaluated on.',
        simple: 'A dataset is the textbook the model studies from.',
        whenToUse: 'Quality beats quantity: a small clean dataset often outperforms a huge noisy one.',
        mistakes: 'Biased datasets produce biased models — the data decides the ceiling.'
      },
      'ar-msa': {
        definition: 'مجموعة البيانات هي المجموعة المنظمة من الأمثلة التي يدرّب عليها النموذج أو يقيّم بها.',
        simple: 'مجموعة البيانات هي الكتاب الذي يدرس منه النموذج.',
        whenToUse: 'الجودة تغلب الكمية: مجموعة صغيرة نظيفة تتفوق غالبًا على ضخمة مشوشة.',
        mistakes: 'البيانات المتحيزة تنتج نماذج متحيزة — فالبيانات تحدد السقف.'
      }
    }
  },
  {
    id: 'vector',
    name: 'Vector',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 76,
    related: ['embeddings', 'semantic-search'],
    prerequisites: ['embeddings'],
    resources: [],
    content: {
      en: {
        definition: 'A vector is an ordered list of numbers representing a point in multi-dimensional space; embeddings turn meaning into vectors.',
        simple: 'A vector is coordinates for meaning: nearby coordinates mean nearby ideas.',
        whenToUse: 'Vector databases index millions of vectors for fast nearest-neighbor search.',
        mistakes: 'Distance in vector space measures statistical similarity, not truth or correctness.'
      },
      'ar-msa': {
        definition: 'المتجه قائمة مرتبة من الأرقام تمثل نقطة في فضاء متعدد الأبعاد؛ والـ Embeddings تحول المعنى إلى متجهات.',
        simple: 'المتجه إحداثيات للمعنى: الإحداثيات المتجاورة تعني أفكارًا متجاورة.',
        whenToUse: 'قواعد بيانات المتجهات تفهرس ملايين المتجهات للبحث السريع عن أقرب جار.',
        mistakes: 'المسافة في فضاء المتجهات تقيس التشابه الإحصائي لا الحقيقة ولا الصحة.'
      }
    }
  },
  {
    id: 'semantic-search',
    name: 'Semantic Search',
    category: 'modern',
    subcategory: 'Intelligence',
    difficulty: 'intermediate',
    popularity: 75,
    related: ['vector', 'embeddings', 'search'],
    prerequisites: ['embeddings'],
    resources: [],
    content: {
      en: {
        definition: 'Semantic search finds results by meaning rather than exact characters, comparing the vector of the query with the vectors of the content.',
        simple: 'Semantic search understands that a car and an automobile are the same thing.',
        whenToUse: 'When users describe what they want instead of typing the exact keyword; combine with keyword search for precision.',
        mistakes: 'Pure semantic search misses exact identifiers — exact-name search still matters (this app keeps both).'
      },
      'ar-msa': {
        definition: 'البحث الدلالي يجد النتائج بالمعنى لا بالحروف، بمقارنة متجه الاستعلام بمتجهات المحتوى.',
        simple: 'البحث الدلالي يفهم أن السيارة والعربية شيء واحد.',
        whenToUse: 'عندما يصف المستخدمون ما يريدون بدل كتابة الكلمة الدقيقة؛ وادمجه مع بحث الكلمات للدقة.',
        mistakes: 'البحث الدلالي الخالص يفوّت المعرفات الدقيقة — فالبحث بالاسم الدقيق يبقى مهمًا (وهذا التطبيق يحتفظ بهما).'
      }
    }
  },
  {
    id: 'cloud',
    name: 'Cloud',
    category: 'modern',
    subcategory: 'Infrastructure',
    difficulty: 'beginner',
    popularity: 85,
    related: ['hosting', 'serverless', 'deploy'],
    prerequisites: ['hosting'],
    resources: [],
    content: {
      en: {
        definition: 'The cloud is renting computing, storage, and services on demand from providers like AWS, Google Cloud, and Azure, instead of owning servers.',
        simple: 'The cloud is someone else computers, rented by the hour.',
        whenToUse: 'Anything that must scale, stay available, or reach users worldwide.',
        mistakes: 'The cloud is pay-as-you-go: forgotten resources keep billing silently — audit and alert.'
      },
      'ar-msa': {
        definition: 'السحابة هي استئجار الحوسبة والتخزين والخدمات عند الطلب من مزودين مثل AWS و Google Cloud و Azure، بدل امتلاك السيرفرات.',
        simple: 'السحابة حواسيب الغير، تؤجر بالساعة.',
        whenToUse: 'كل ما يجب أن يتوسع أو يبقى متاحًا أو يصل للمستخدمين عالميًا.',
        mistakes: 'السحابة دفع حسب الاستخدام: الموارد المنسية تستمر في الفوترة بصمت — راقب ونبّه.'
      }
    }
  }
];
