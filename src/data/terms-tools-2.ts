import type { Term } from '../types';

// Omar's Dev Dictionary — additional Tools terms (batch 2).

export const TOOLS_2_TERMS: Term[] = [
  {
    id: 'git-tag',
    name: 'git tag',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 74,
    related: ['git', 'semver', 'release'],
    prerequisites: ['git'],
    resources: [],
    content: {
      en: {
        definition: 'git tag assigns a permanent, human-readable label (like v1.0.0) to a specific commit, typically marking a release.',
        simple: 'A tag is a plaque nailed to one commit: this exact state shipped.',
        example: {
          text: 'Tag the release commit.',
          code: "git tag -a v1.0.0 -m 'First stable release'\ngit push origin v1.0.0",
          codeLang: 'bash'
        },
        whenToUse: 'One tag per release; CI can build and publish from tags automatically.'
      },
      'ar-msa': {
        definition: 'أمر git tag يعلق ملصقًا دائمًا مقروءًا (مثل v1.0.0) على Commit محدد، عادة لوسم إصدار.',
        simple: 'الـ tag لوحة تسمّر على Commit واحد: هذه الحالة بعينها شُحنت.',
        whenToUse: 'Tag واحد لكل إصدار؛ ويمكن لـ CI أن يبني وينشر من الـ tags تلقائيًا.'
      }
    }
  },
  {
    id: 'git-log',
    name: 'git log',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 73,
    related: ['git', 'commit', 'repository'],
    prerequisites: ['git', 'commit'],
    resources: [],
    content: {
      en: {
        definition: 'git log shows the commit history — messages, authors, dates, and hashes — with rich flags for filtering and formatting.',
        simple: 'git log is the diary reader of your repository.',
        example: {
          text: 'The most useful shapes.',
          code: "git log --oneline        # one line per commit\ngit log -p src/app.ts   # history of one file, with diffs\ngit log --author=Omar   # filter by author",
          codeLang: 'bash'
        },
        whenToUse: 'Answering when did this change and why — pair with git blame for a single line.'
      },
      'ar-msa': {
        definition: 'أمر git log يعرض تاريخ الـ Commits — الرسائل والمؤلفين والتواريخ والتجزئات — بأعلام غنية للتصفية والتنسيق.',
        simple: 'الـ git log قارئ مذكرات مستودعك.',
        whenToUse: 'للإجابة عن متى حدث هذا التغيير ولماذا — واقرنه بـ git blame لسطر واحد.'
      }
    }
  },
  {
    id: 'git-stash',
    name: 'git stash',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'intermediate',
    popularity: 72,
    related: ['git', 'commit', 'branch'],
    prerequisites: ['git'],
    resources: [],
    content: {
      en: {
        definition: 'git stash shelves your uncommitted changes temporarily so you can switch context, then pops them back later.',
        simple: 'stash is a drawer for half-done work when someone interrupts you.',
        example: {
          text: 'Park work, handle the urgent fix, resume.',
          code: "git stash         # park changes\ngit switch main   # do something else\ngit switch feature && git stash pop   # resume",
          codeLang: 'bash'
        },
        mistakes: 'Stashes are easy to forget — list them with git stash list before assuming the drawer is empty.'
      },
      'ar-msa': {
        definition: 'أمر git stash يرفع تغييراتك غير الملتزمة مؤقتًا لتنتقل إلى سياق آخر ثم تعيدها لاحقًا.',
        simple: 'الـ stash درج للعمل نصف المنجَز حين يقاطعك أحدهم.',
        mistakes: 'الـ stashes سهلة النسيان — اعرضها بـ git stash list قبل أن تفترض أن الدرج فارغ.'
      }
    }
  },
  {
    id: 'gitignore',
    name: '.gitignore',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 76,
    related: ['git', 'repository', 'security'],
    prerequisites: ['git'],
    resources: [],
    content: {
      en: {
        definition: '.gitignore is the file listing paths Git must never track: dependencies, build output, environment files, and OS junk.',
        simple: '.gitignore is the do-not-enter list for your repository.',
        example: {
          text: 'This app own ignore file.',
          code: "node_modules\ndist\ndev-dist\n.env\n.env.*",
          codeLang: 'text'
        },
        whenToUse: 'Add it on day one; once a secret is committed, ignoring the file later does not scrub history — rotate the secret.'
      },
      'ar-msa': {
        definition: 'ملف .gitignore هو قائمة المسارات التي لا يجوز لـ Git تتبعها أبدًا: الاعتماديات ومخرجات البناء وملفات البيئة وحطام النظام.',
        simple: 'الـ .gitignore قائمة ممنوع الدخول لمستودعك.',
        whenToUse: 'أضفه من اليوم الأول؛ فبعد Commit سرٍّ، تجاهل الملف لاحقًا لا ينظف التاريخ — بدّل السر.'
      }
    }
  },
  {
    id: 'lockfile',
    name: 'Lockfile',
    category: 'tools',
    subcategory: 'Dependencies',
    difficulty: 'beginner',
    popularity: 75,
    related: ['package-manager', 'npm', 'dependency'],
    prerequisites: ['package-manager'],
    resources: [],
    content: {
      en: {
        definition: 'A lockfile (package-lock.json) pins the exact versions of every installed package and sub-package, so every machine and CI gets identical dependency trees.',
        simple: 'The lockfile is the exact ingredient list of your last successful bake.',
        whenToUse: 'Commit it always, install with npm ci in CI, and never edit it by hand.',
        mistakes: 'Deleting the lockfile to fix an install means every teammate resolves different versions — the bug moves, it does not die.'
      },
      'ar-msa': {
        definition: 'ملف القفل (package-lock.json) يثبت الإصدارات الدقيقة لكل حزمة وحزمة فرعية مثبتة، فتحصل كل الأجهزة و CI على نفس أشجار الاعتماديات.',
        simple: 'ملف القفل هو قائمة المكونات الدقيقة لآخر خبز ناجح.',
        whenToUse: 'التزم به دائمًا، وثبت بـ npm ci في CI، ولا تعدله يدويًا أبدًا.',
        mistakes: 'حذف ملف القفل لإصلاح تثبيت يعني أن كل زميل يحصل على إصدارات مختلفة — الخطأ ينتقل ولا يموت.'
      }
    }
  }
];
