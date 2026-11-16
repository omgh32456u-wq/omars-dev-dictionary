import type { Term } from '../types';

// Omar's Dev Dictionary — Development Tools & Workflow terms.
// Git and Branch are original seed terms, rebuilt to the full content model.

export const TOOLS_TERMS: Term[] = [
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 98,
    related: ['github', 'commit', 'branch', 'merge', 'repository'],
    prerequisites: [],
    diagrams: ['git-areas'],
    resources: [
      { label: 'Git — Official documentation', url: 'https://git-scm.com/doc', verified: false },
      { label: 'Pro Git book', url: 'https://git-scm.com/book/en/v2', verified: false }
    ],
    content: {
      en: {
        definition: 'Git is a distributed version control system that records snapshots of a project\u2019s files over time, letting developers review history, undo mistakes, and collaborate without overwriting each other\u2019s work.',
        simple: 'Git is a time machine for your project folder: it saves checkpoints you can always return to.',
        howItWorks: 'Git stores each Commit as a snapshot pointing to a previous snapshot. Files move through three areas: the Working Directory, the Staging Area, and the Repository. The branch pointer called HEAD marks where you currently are.',
        example: {
          text: 'The essential daily cycle: edit, stage, commit.',
          code: "git status                 # what changed\ngit add src/app.ts         # stage changes\ngit commit -m 'Add search' # save a snapshot",
          codeLang: 'bash'
        },
        analogy: 'Git is like a save-game system with unlimited slots and a note on every save.',
        mistakes: 'Committing secrets (API keys, .env files) is the classic irreversible mistake — Git history remembers everything pushed to a shared remote. Another common error is confusing git add (stage) with git commit (save).',
        whenToUse: 'Any project bigger than a throwaway experiment, and always before refactoring.'
      },
      'ar-msa': {
        definition: 'Git نظام تحكم في الإصدارات موزّع يسجّل لقطات من ملفات المشروع عبر الزمن، فيتيح للمطورين مراجعة التاريخ والتراجع عن الأخطاء والتعاون دون الكتابة فوق عمل بعضهم.',
        simple: 'Git آلة زمن لمجلد مشروعك: تحفظ نقاط استرجاع يمكنك العودة إليها دائمًا.',
        howItWorks: 'يخزن Git كل Commit كلقطة تشير إلى اللقطة السابقة. وتنتقل الملفات عبر ثلاث مناطق: دليل العمل ومنطقة Staging والمستودع. والمؤشر HEAD يحدد موقعك الحالي.',
        example: {
          text: 'الدورة اليومية الأساسية: عدّل، أدرج في Staging، ثم Commit.'
        },
        analogy: 'Git مثل نظام حفظ الألعاب بخانات لا نهائية وملاحظة على كل حفظ.',
        mistakes: 'عمل Commit لأسرار مثل مفاتيح API وملفات .env هو الخطأ الكلاسيكي الذي لا يمكن التراجع عنه — فتاريخ Git يتذكر كل ما دُفع إلى المستودع المشترك. وخطأ شائع آخر هو الخلط بين git add (الإدراج) و git commit (الحفظ).',
        whenToUse: 'أي مشروع أكبر من تجربة سريعة، ودائمًا قبل إعادة هيكلة الكود.'
      },
      'ar-eg': {
        simple: 'Git زي ماكينة الزمن بتاعة مجلد مشروعك: بتحفظ Checkpoints تقدر ترجعلها في أي وقت.'
      },
      'ar-sa': {
        simple: 'Git كأنه آلة زمن لمجلد مشروعك: يخزن لك نقاط ترجوع لها وقت ما تبغى.'
      }
    }
  },
  {
    id: 'repository',
    name: 'Repository',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 92,
    related: ['git', 'clone', 'commit', 'github'],
    prerequisites: ['git'],
    resources: [],
    content: {
      en: {
        definition: 'A repository is the complete home of a project under version control: its files, folders, and the entire history of changes.',
        simple: 'A repository is your project plus its diary of every change ever made.',
        example: {
          text: 'Turn a folder into a Git repository.',
          code: "git init            # start a new repository\ngit clone <url>     # copy an existing one",
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'المستودع (Repository) هو الموطن الكامل للمشروع تحت نظام التحكم بالإصدارات: ملفاته ومجلداته وكامل تاريخ تغييراته.',
        simple: 'المستودع مشروعك مضافًا إليه مذكرات كل تغيير حدث فيه.'
      }
    }
  },
  {
    id: 'commit',
    name: 'Commit',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 93,
    related: ['git', 'staging', 'push', 'repository'],
    prerequisites: ['git', 'staging'],
    diagrams: ['git-areas'],
    resources: [],
    content: {
      en: {
        definition: 'A commit is a saved snapshot of staged changes, recorded permanently in the repository history with a unique ID, author, and message.',
        simple: 'A commit is a checkpoint with a label saying what you did and why.',
        example: {
          text: 'Good messages say why, not just what.',
          code: "git commit -m 'Fix empty state flash when list is still loading'",
          codeLang: 'bash'
        },
        mistakes: 'Messages like update stuff or fix bug tell your future self nothing; write the why.'
      },
      'ar-msa': {
        definition: 'الـ Commit لقطة محفوظة من التغييرات المدرجة في Staging، تُسجل نهائيًا في تاريخ المستودع بمعرف فريد ومؤلف ورسالة.',
        simple: 'الـ Commit نقطة حفظ تحمل ملصقًا يشرح ماذا فعلت ولماذا.',
        mistakes: 'رسائل مثل fixed أو done لا تخبر نسختك المستقبلية بشيء؛ اكتب السبب.'
      }
    }
  },
  {
    id: 'branch',
    name: 'Branch',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 91,
    related: ['git', 'merge', 'rebase', 'pull-request'],
    prerequisites: ['git', 'commit'],
    diagrams: ['branch-merge'],
    resources: [],
    content: {
      en: {
        definition: 'A branch is a movable label pointing to a line of commits, letting you develop a feature or fix in isolation without disturbing the main line.',
        simple: 'A branch is a parallel timeline: try things freely, then bring the good parts back.',
        howItWorks: 'Creating a branch just writes a new pointer — files are not copied. Each branch moves forward independently, and Merge or Rebase reunites the lines.',
        example: {
          text: 'The feature-branch routine.',
          code: "git switch -c feature/search   # create + switch\ngit add . && git commit -m 'Add search'\ngit switch main               # back to main",
          codeLang: 'bash'
        },
        analogy: 'A branch is a draft copy of a document: the original stays untouched until you merge the draft back.',
        mistakes: 'Long-lived branches drift far from main and become painful to merge; merge back often.',
        whenToUse: 'One branch per feature, fix, or experiment — never develop risky work directly on main.'
      },
      'ar-msa': {
        definition: 'الـ Branch مؤشر متحرك يشير إلى خط من الـ Commits، ويتيح تطوير ميزة أو إصلاح بمعزل عن الخط الرئيسي دون إزعاجه.',
        simple: 'الـ Branch خط زمني متوازٍ: جرّب بحرية ثم أعِد الأجزاء الجيدة.',
        howItWorks: 'إنشاء Branch يكتب مؤشرًا جديدًا فقط — لا تُنسخ الملفات. ويتقدم كل Branch باستقلال، ثم يعيد Merge أو Rebase توحيد الخطوط.',
        analogy: 'الـ Branch مثل نسخة مسودة من مستند: يبقى الأصل سليمًا حتى تدمج المسودة.',
        mistakes: 'الـ Branches طويلة العمر تبعد عن main ويصبح دمجها مؤلمًا؛ ادمج باستمرار.',
        whenToUse: 'Branch واحد لكل ميزة أو إصلاح أو تجربة — ولا تطور عملًا خطرًا على main مباشرة أبدًا.'
      },
      'ar-eg': {
        simple: 'الـ Branch زي نسخة مسودة من الكود: بتشتغل فيها براحتك، والأصل زي ما هو، ولما تخلص تعمل Merge.'
      },
      'ar-sa': {
        simple: 'الـ Branch مثل نسخة تجريبية من الكود: تشتغل فيها براحتك والأصل ما يتغير، وإذا خلصت تسوي Merge.'
      }
    }
  },
  {
    id: 'merge',
    name: 'Merge',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 88,
    related: ['branch', 'conflict', 'rebase', 'git'],
    prerequisites: ['branch'],
    diagrams: ['branch-merge'],
    resources: [],
    content: {
      en: {
        definition: 'Merge combines the commits of one branch into another, preserving both histories and creating a merge commit when the lines have diverged.',
        simple: 'Merge pours one branch\u2019s work into another, keeping both stories.',
        example: {
          text: 'Bring a feature back into main.',
          code: "git switch main\ngit merge feature/search",
          codeLang: 'bash'
        },
        mistakes: 'An unhandled conflict left in files will break the build — always run tests after a merge.'
      },
      'ar-msa': {
        definition: 'الـ Merge يدمج Commits فرع في فرع آخر، محافظًا على التاريخين معًا ومنشئًا Commit دمج عند تباعد الخطوط.',
        simple: 'الـ Merge يصبّ عمل فرع في آخر، فيحفظ القصتين معًا.',
        mistakes: 'ترك تعارض غير معالج داخل الملفات يعطل البناء — شغّل الاختبارات بعد كل دمج.'
      }
    }
  },
  {
    id: 'rebase',
    name: 'Rebase',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'intermediate',
    popularity: 80,
    related: ['merge', 'branch', 'commit'],
    prerequisites: ['merge'],
    resources: [],
    content: {
      en: {
        definition: 'Rebase replays your branch\u2019s commits on top of another branch\u2019s latest commit, producing a straight, linear history instead of a merge commit.',
        simple: 'Rebase moves your work as if you had started it from the newest main.',
        example: {
          text: 'Update a feature branch before opening a PR.',
          code: "git switch feature/search\ngit rebase main",
          codeLang: 'bash'
        },
        mistakes: 'Never rebase commits that others already pulled — rewriting shared history breaks their repositories.',
        whenToUse: 'To keep a clean linear history on your own branch; prefer merge for shared branches.'
      },
      'ar-msa': {
        definition: 'الـ Rebase يعيد تشغيل Commits فرعك فوق آخر Commit في فرع آخر، فينتج تاريخًا خطيًا مستقيمًا بدلاً من Commit دمج.',
        simple: 'الـ Rebase ينقل عملك وكأنك بدأته من أحدث نسخة من main.',
        mistakes: 'لا تعمل Rebase أبدًا لـ Commits سحبها آخرون — فإعادة كتابة تاريخ مشترك تكسر مستودعاتهم.',
        whenToUse: 'لإبقاء تاريخ فرعك أنيقًا وخطيًا؛ ويفضَّل Merge للفروع المشتركة.'
      }
    }
  },
  {
    id: 'pull-request',
    name: 'Pull Request',
    category: 'tools',
    subcategory: 'Collaboration',
    difficulty: 'beginner',
    popularity: 90,
    related: ['branch', 'merge', 'github', 'code-review'],
    prerequisites: ['branch', 'github'],
    resources: [],
    content: {
      en: {
        definition: 'A Pull Request (PR) is a proposal to merge one branch into another, opened on a platform like GitHub where teammates review the diff, comment, request changes, and approve.',
        simple: 'A PR says: here is my work — please review it before it joins main.',
        howItWorks: 'The PR shows every commit and changed line, runs CI checks automatically, and records the discussion; merging applies the change.',
        whenToUse: 'Always for team projects: it is where review, automated checks, and discussion live.',
        mistakes: 'Giant PRs of 2,000 lines never get reviewed properly — keep them small and focused.'
      },
      'ar-msa': {
        definition: 'الـ Pull Request اقتراح لدمج فرع في آخر، يُفتح على منصة مثل GitHub ليراجع الزملاء التغييرات ويعلقوا ويطلبوا تعديلات ويوافقوا.',
        simple: 'الـ PR يقول: هذا عملي — من فضلكم راجعوه قبل أن ينضم إلى main.',
        howItWorks: 'يعرض الـ PR كل Commit وكل سطر متغير، ويشغّل فحوص CI تلقائيًا، ويحفظ النقاش؛ والدمج يطبق التغيير.',
        whenToUse: 'دائمًا في مشاريع الفريق: فهو موضع المراجعة والفحوص الآلية والنقاش.',
        mistakes: 'الـ PRs العملاقة بآلاف الأسطر لا تُراجع جيدًا — أبقها صغيرة ومركزة.'
      }
    }
  },
  {
    id: 'clone',
    name: 'Clone',
    category: 'tools',
    subcategory: 'Version control',

difficulty: 'beginner',
    popularity: 87,
    related: ['repository', 'git', 'fork'],
    prerequisites: ['git'],
    resources: [],
    content: {
      en: {
        definition: 'Clone downloads a full copy of a remote repository — files plus the entire commit history — to your machine.',
        simple: 'Clone copies the whole project and its diary to your computer.',
        example: {
          text: 'Get a local working copy.',
          code: 'git clone https://github.com/user/repo.git',
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'الـ Clone ينزّل نسخة كاملة من مستودع بعيد — الملفات وكامل تاريخ الـ Commits — إلى جهازك.',
        simple: 'الـ Clone ينسخ المشروع كاملًا ومذكراته إلى حاسوبك.'
      }
    }
  },
  {
    id: 'fork',
    name: 'Fork',
    category: 'tools',
    subcategory: 'Collaboration',
    difficulty: 'beginner',
    popularity: 85,
    related: ['clone', 'pull-request', 'github'],
    prerequisites: ['clone'],
    resources: [],
    content: {
      en: {
        definition: 'Fork creates your own server-side copy of someone else\u2019s repository, so you can change it freely and later propose your changes back via a Pull Request.',
        simple: 'Fork photocopies someone else project into your account; you edit your copy, not theirs.',
        mistakes: 'Forking is not cloning: a fork lives on the platform as your copy; a clone is the local download.'
      },
      'ar-msa': {
        definition: 'الـ Fork ينشئ نسختك الخاصة على المنصة من مستودع شخص آخر، لتعدلها بحرية ثم تقترح تعديلاتك عبر Pull Request.',
        simple: 'الـ Fork يصوّر مستودع غيرك في حسابك؛ فتعدل نسختك أنت لا نسخته.',
        mistakes: 'الـ Fork ليس Clone: الـ Fork نسختك على المنصة، والـ Clone التنزيل المحلي.'
      }
    }
  },
  {
    id: 'push',
    name: 'Push',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 86,
    related: ['pull', 'commit', 'remote', 'git'],
    prerequisites: ['commit'],
    resources: [],
    content: {
      en: {
        definition: 'Push uploads your local commits to a remote repository, sharing them with collaborators.',
        simple: 'Push publishes your saved checkpoints to the shared copy online.',
        example: {
          text: 'Send your branch to the remote.',
          code: "git push -u origin feature/search   # first time\ngit push                          # after that",
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'الـ Push يرفع الـ Commits المحلية إلى مستودع بعيد، فيشاركها مع بقية الفريق.',
        simple: 'الـ Push ينشر نقاط الحفظ إلى النسخة المشتركة على الإنترنت.'
      }
    }
  },
  {
    id: 'pull',
    name: 'Pull',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 85,
    related: ['push', 'merge', 'fetch', 'git'],
    prerequisites: ['push'],
    resources: [],
    content: {
      en: {
        definition: 'Pull downloads new commits from a remote repository and merges them into your current branch in one step.',
        simple: 'Pull brings the team\u2019s latest work down into your copy.',
        example: {
          text: 'Stay up to date before you start working.',
          code: "git switch main\ngit pull",
          codeLang: 'bash'
        },
        whenToUse: 'Pull at the start of your day and before merging — small, frequent pulls cause fewer conflicts.'
      },
      'ar-msa': {
        definition: 'الـ Pull ينزّل الـ Commits الجديدة من مستودع بعيد ويدمجها في فرعك الحالي في خطوة واحدة.',
        simple: 'الـ Pull ينزل أحدث عمل الفريق إلى نسختك.',
        whenToUse: 'اعمل Pull في بداية يومك وقبل الدمج — فالسحب المتكرر الصغير يقلل التعارضات.'
      }
    }
  },
  {
    id: 'staging',
    name: 'Staging',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'beginner',
    popularity: 78,
    related: ['git', 'commit', 'repository'],
    prerequisites: ['git'],
    diagrams: ['git-areas'],
    resources: [],
    content: {
      en: {
        definition: 'The staging area is the preparation zone between your working directory and the repository: only files you add there are included in the next commit.',
        simple: 'Staging is a shopping basket: you pick which changes go into the next checkpoint.',
        example: {
          text: 'Stage selectively for clean commits.',
          code: "git add src/app.ts     # stage one file\ngit add .             # stage everything\ngit restore --staged src/app.ts   # unstage",
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'منطقة Staging هي منطقة التحضير بين دليل عملك والمستودع: الملفات التي تضيفها إليها فقط تدخل في الـ Commit القادم.',
        simple: 'الـ Staging سلة تسوق: تختار أي التغييرات تدخل نقطة الحفظ القادمة.'
      }
    }
  },
  {
    id: 'conflict',
    name: 'Conflict',
    category: 'tools',
    subcategory: 'Version control',
    difficulty: 'intermediate',
    popularity: 77,
    related: ['merge', 'rebase', 'git'],
    prerequisites: ['merge'],
    resources: [],
    content: {
      en: {
        definition: 'A merge conflict happens when two branches changed the same lines differently, so Git cannot auto-decide and asks a human to choose.',
        simple: 'A conflict is two edits fighting over the same line; you must pick the winner.',
        example: {
          text: 'Resolve the markers, then finish the merge.',
          code: "<<<<<<< HEAD\nconst limit = 10;\n=======\nconst limit = 25;\n>>>>>>> feature/search",
          codeLang: 'text'
        },
        mistakes: 'Committing the <<<<<<< markers is the classic sign of an unfinished resolution.'
      },
      'ar-msa': {
        definition: 'تعارض الدمج يحدث عندما يعدل فرعان نفس الأسطر بشكل مختلف، فلا يستطيع Git الحسم تلقائيًا ويطلب من إنسان أن يختار.',
        simple: 'التعارض تعديلان يتشاجران على نفس السطر؛ وعليك أن تختار الفائز.',
        mistakes: 'الـ Commit مع بقاء علامات <<<<<<< دليل كلاسيكي على حل غير مكتمل.'
      }
    }
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    subcategory: 'Collaboration',
    difficulty: 'beginner',
    popularity: 95,
    related: ['git', 'pull-request', 'fork', 'github-actions', 'open-source'],
    prerequisites: ['git'],
    resources: [{ label: 'GitHub Docs', url: 'https://docs.github.com', verified: false }],
    content: {
      en: {
        definition: 'GitHub is a hosting platform for Git repositories with collaboration layers on top: pull requests, issues, code review, project boards, and CI through GitHub Actions.',
        simple: 'GitHub is the social home of Git: your code lives there and people discuss it.',
        whenToUse: 'Hosting open-source or team repositories, tracking issues, and running CI/CD.'
      },
      'ar-msa': {
        definition: 'GitHub منصة استضافة لمستودعات Git مع طبقات تعاون فوقها: Pull Requests وIssues ومراجعة الكود ولوحات المشاريع وCI عبر GitHub Actions.',
        simple: 'GitHub هو البيت الاجتماعي لـ Git: يعيش كودك هناك ويناقشه الناس.',
        whenToUse: 'استضافة المشاريع مفتوحة المصدر أو مشاريع الفريق، وتتبع المشكلات، وتشغيل CI/CD.'
      }
    }
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    category: 'tools',
    subcategory: 'Automation',
    difficulty: 'intermediate',
    popularity: 84,
    related: ['github', 'ci-cd', 'deploy', 'testing'],
    prerequisites: ['github'],
    diagrams: ['cicd-pipeline'],
    resources: [{ label: 'GitHub Actions documentation', url: 'https://docs.github.com/en/actions', verified: false }],
    content: {
      en: {
        definition: 'GitHub Actions is GitHub\u2019s built-in CI/CD system: workflows defined in YAML run automatically on events like push or pull request, on GitHub\u2019s servers.',
        simple: 'GitHub Actions is a robot team that builds and tests your code every time you push.',
        example: {
          text: 'A workflow file lives in .github/workflows/.',
          code: "name: CI\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      - run: npm test",
          codeLang: 'yaml'
        }
      },
      'ar-msa': {
        definition: 'GitHub Actions هو نظام CI/CD المدمج في GitHub: تُعرَّف سير العمل بملفات YAML وتشتغل تلقائيًا عند أحداث مثل push أو pull request على سيرفرات GitHub.',
        simple: 'GitHub Actions فريق روبوتات يبني ويختبر كودك كل مرة تدفع.',
        example: {
          text: 'ملف السير يعيش في مجلد .github/workflows/.'
        }
      }
    }
  },
  {
    id: 'ci-cd',
    name: 'CI/CD',
    category: 'tools',
    subcategory: 'Automation',
    difficulty: 'intermediate',
    popularity: 86,
    related: ['github-actions', 'build', 'deploy', 'unit-testing'],
    prerequisites: ['build', 'unit-testing'],
    diagrams: ['cicd-pipeline'],
    resources: [],
    content: {
      en: {
        definition: 'CI/CD is the practice of automatically building and testing every change (Continuous Integration) and automatically releasing verified changes (Continuous Deployment/Delivery).',
        simple: 'CI/CD means machines verify every change and ship the good ones automatically.',
        howItWorks: 'On every push, a pipeline runs install → build → test; if everything passes, the change is deployed to staging or production.',
        whenToUse: 'Any product with more than one developer, or any app released frequently.'
      },
      'ar-msa': {
        definition: 'الـ CI/CD هي ممارسة البناء والاختبار التلقائيين لكل تغيير (التكامل المستمر) والإصدار التلقائي للتغييرات الموثقة (النشر المستمر).',
        simple: 'الـ CI/CD تعني أن الآلات تتحقق من كل تغيير وتشحن الجيد منها تلقائيًا.',
        howItWorks: 'عند كل push يشغّل Pipeline: تثبيت ثم بناء ثم اختبار؛ وإذا نجح كل شيء يُنشر التغيير إلى Staging أو الإنتاج.',
        whenToUse: 'أي منتج يعمل عليه أكثر من مطور، أو أي تطبيق يُصدر كثيرًا.'
      }
    }
  },
  {
    id: 'terminal',
    name: 'Terminal',
    category: 'tools',
    subcategory: 'Environment',
    difficulty: 'beginner',
    popularity: 90,
    related: ['shell', 'cli', 'command', 'npm'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A terminal is the application window that gives you a text interface to run shell commands on your computer.',
        simple: 'The terminal is a chat window where you talk to your computer with words.',
        example: {
          text: 'Everyday developer commands.',
          code: "cd projects/omars-dev-dictionary   # change folder\nls                                  # list files\nnpm run dev                         # start the app",
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'الطرفية (Terminal) تطبيق يمنحك واجهة نصية لتنفيذ أوامر Shell على حاسوبك.',
        simple: 'الطرفية نافذة محادثة تتحدث فيها مع حاسوبك بالكلمات.'
      }
    }
  },
  {
    id: 'shell',
    name: 'Shell',
    category: 'tools',
    subcategory: 'Environment',
    difficulty: 'beginner',
    popularity: 80,
    related: ['terminal', 'cli', 'bash'],
    prerequisites: ['terminal'],
    resources: [],
    content: {
      en: {
        definition: 'A shell is the command interpreter that reads the line you type, expands it, and asks the operating system to run it — examples are Bash and zsh.',
        simple: 'The shell is the brain behind the terminal window; the terminal is just its face.',
        whenToUse: 'Automating file tasks, running tools, and controlling dev servers.'
      },
      'ar-msa': {
        definition: 'الـ Shell هو مفسّر الأوامر الذي يقرأ ما تكتبه ويوسّعه ويطلب من نظام التشغيل تنفيذه — مثل Bash و zsh.',
        simple: 'الـ Shell هو العقل خلف نافذة الطرفية؛ والطرفية مجرد وجهه.',
        whenToUse: 'أتمتة مهام الملفات وتشغيل الأدوات والتحكم في سيرفرات التطوير.'
      }
    }
  },
  {
    id: 'cli',
    name: 'CLI',
    category: 'tools',

subcategory: 'Environment',
    difficulty: 'beginner',
    popularity: 79,
    related: ['terminal', 'shell', 'npm'],
    prerequisites: ['terminal'],
    resources: [],
    content: {
      en: {
        definition: 'A CLI (Command-Line Interface) is any program you operate by typing commands and flags instead of clicking buttons.',
        simple: 'A CLI is a program whose buttons are words.',
        example: {
          text: 'git and npm are both CLIs.',
          code: "git --version\nnpm --version",
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'الـ CLI واجهة سطر الأوامر: برنامج يشغّله المستخدم بكتابة أوامر وأعلام بدلًا من النقر على الأزرار.',
        simple: 'الـ CLI برنامج أزراره كلمات.'
      }
    }
  },
  {
    id: 'package-manager',
    name: 'Package Manager',
    category: 'tools',
    subcategory: 'Dependencies',
    difficulty: 'beginner',
    popularity: 84,
    related: ['npm', 'package', 'dependency', 'nodejs'],
    prerequisites: ['cli'],
    resources: [],
    content: {
      en: {
        definition: 'A package manager downloads, installs, versions, and removes reusable libraries for your project, tracking them in a lock file for reproducible installs.',
        simple: 'A package manager is an app store for code libraries.',
        whenToUse: 'Never copy library files by hand; declare the dependency and let the manager install it.'
      },
      'ar-msa': {
        definition: 'مدير الحزم ينزّل المكتبات القابلة لإعادة الاستخدام ويثبتها ويحدّثها ويزيلها، متتبعًا إياها في ملف قفل لتثبيت قابل للتكرار.',
        simple: 'مدير الحزم متجر تطبيقات لكن لمكتبات الكود.',
        whenToUse: 'لا تنسخ ملفات المكتبات يدويًا أبدًا؛ أعلن الاعتمادية ودع المدير يثبتها.'
      }
    }
  },
  {
    id: 'npm',
    name: 'npm',
    category: 'tools',
    subcategory: 'Dependencies',
    difficulty: 'beginner',
    popularity: 88,
    related: ['package-manager', 'nodejs', 'package', 'dependency'],
    prerequisites: ['package-manager'],
    resources: [{ label: 'npm Docs', url: 'https://docs.npmjs.com', verified: false }],
    content: {
      en: {
        definition: 'npm is the default package manager for Node.js: it installs libraries from the npm registry and runs the scripts defined in package.json.',
        simple: 'npm installs JavaScript libraries and runs your project chores.',
        example: {
          text: 'The commands you will use daily.',
          code: "npm install             # add dependencies from package.json\nnpm install react       # add one package\nnpm run dev             # run a script",
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'الـ npm مدير الحزم الافتراضي لـ Node.js: يثبّت المكتبات من سجل npm ويشغّل السكربتات المعرفة في package.json.',
        simple: 'الـ npm يثبت مكتبات JavaScript ويشغّل مهام مشروعك.'
      }
    }
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'tools',
    subcategory: 'Runtimes',
    difficulty: 'beginner',
    popularity: 92,
    related: ['javascript', 'npm', 'server', 'runtime'],
    prerequisites: ['javascript'],
    resources: [{ label: 'Node.js — Learn', url: 'https://nodejs.org/en/learn', verified: false }],
    content: {
      en: {
        definition: 'Node.js is a JavaScript runtime built on the V8 engine that lets JavaScript run outside the browser — for servers, CLIs, and build tools.',
        simple: 'Node.js takes JavaScript out of the browser so it can run servers and tools.',
        whenToUse: 'Backend APIs, build tooling like Vite, and any script that needs the file system.'
      },
      'ar-msa': {
        definition: 'الـ Node.js بيئة تشغيل لـ JavaScript مبنية على محرك V8 تتيح لـ JavaScript العمل خارج المتصفح — للسيرفرات وأدوات سطر الأوامر وأدوات البناء.',
        simple: 'الـ Node.js يخرج بـ JavaScript من المتصفح ليدير سيرفرات وأدوات.',
        whenToUse: 'واجهات API الخلفية، وأدوات البناء مثل Vite، وأي سكربت يحتاج نظام الملفات.'
      }
    }
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'tools',
    subcategory: 'Build tools',
    difficulty: 'beginner',
    popularity: 83,
    related: ['build', 'dev-server', 'bundler', 'npm'],
    prerequisites: ['nodejs', 'npm'],
    resources: [{ label: 'Vite — Guide', url: 'https://vite.dev/guide', verified: false }],
    content: {
      en: {
        definition: 'Vite is a frontend build tool that serves modules natively during development for instant startup, then bundles optimized production files on build.',
        simple: 'Vite makes dev servers start instantly and production bundles small.',
        whenToUse: 'Modern SPA and PWA projects — like this very app, which is built with Vite.'
      },
      'ar-msa': {
        definition: 'الـ Vite أداة بناء للواجهات الأمامية تقدم الوحدات أصلًا في التطوير لبدء فوري، ثم تحزم ملفات إنتاج محسّنة عند البناء.',
        simple: 'الـ Vite يجعل سيرفر التطوير يبدأ فورًا وحزم الإنتاج صغيرة.',
        whenToUse: 'مشاريع SPA و PWA الحديثة — مثل هذا التطبيق نفسه، المبني بـ Vite.'
      }
    }
  },
  {
    id: 'build',
    name: 'Build',
    category: 'tools',
    subcategory: 'Build tools',
    difficulty: 'beginner',
    popularity: 85,
    related: ['vite', 'deploy', 'minification', 'tree-shaking'],
    prerequisites: [],
    diagrams: ['cicd-pipeline'],
    resources: [],
    content: {
      en: {
        definition: 'A build is the step that transforms source code into optimized output a browser or runtime can ship: bundled, minified files with hashed names.',
        simple: 'The build squeezes your readable source into small, fast files for real users.',
        example: {
          text: 'Type-check then bundle.',
          code: "npm run build   # outputs to dist/",
          codeLang: 'bash'
        }
      },
      'ar-msa': {
        definition: 'الـ Build هي الخطوة التي تحول الكود المصدر إلى مخرجات محسّنة قابلة للشحن: ملفات مدمجة مصغرة بأسماء ممزوجة.',
        simple: 'الـ Build يعصر مصدرك المقروء إلى ملفات صغيرة سريعة للمستخدمين الحقيقيين.'
      }
    }
  },
  {
    id: 'deploy',
    name: 'Deploy',
    category: 'tools',
    subcategory: 'Delivery',
    difficulty: 'beginner',
    popularity: 84,
    related: ['build', 'ci-cd', 'hosting', 'pwa'],
    prerequisites: ['build'],
    diagrams: ['cicd-pipeline'],
    resources: [],
    content: {
      en: {
        definition: 'Deploying means copying the built application to the place it is served from — a static host, a server, or an app store — so real users can reach it.',
        simple: 'Deploying is moving your finished app to the shop shelf.',
        whenToUse: 'After CI passes; automate it so releases are boring and repeatable.'
      },
      'ar-msa': {
        definition: 'الـ Deploy يعني نسخ التطبيق المبني إلى المكان الذي يُقدَّم منه — استضافة ثابتة أو سيرفر أو متجر تطبيقات — ليصل إليه المستخدمون الحقيقيون.',
        simple: 'الـ Deploy هو نقل تطبيقك الجاهز إلى رف المتجر.',
        whenToUse: 'بعد نجاح CI؛ وأتمته لكي تصبح الإصدارات مملة ومتكررة بأمان.'
      }
    }
  },
  {
    id: 'environment-variables',
    name: 'Environment Variables',
    category: 'tools',
    subcategory: 'Configuration',
    difficulty: 'intermediate',
    popularity: 82,
    related: ['build', 'deploy', 'security', 'api-key'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'Environment variables are named values provided by the environment (not hard-coded in source), letting the same code run differently in development, staging, and production.',
        simple: 'Environment variables are per-environment settings: same code, different flavors.',
        example: {
          text: 'In Vite, only variables starting with VITE_ reach the browser.',
          code: "const apiUrl = import.meta.env.VITE_API_URL;\nconst key = process.env.API_SECRET;   // server-side only",
          codeLang: 'ts'
        },
        mistakes: 'Anything prefixed VITE_ is public in the browser bundle — never put secrets there; secrets belong on the server.',
        whenToUse: 'API URLs, feature flags, and secrets — each environment gets its own values.'
      },
      'ar-msa': {
        definition: 'متغيرات البيئة قيم مسمّاة يوفرها المحيط (لا تُكتب في الكود)، فتسمح لنفس الكود بالعمل بشكل مختلف في التطوير والاختبار والإنتاج.',
        simple: 'متغيرات البيئة إعدادات لكل محيط: نفس الكود بنكهات مختلفة.',
        mistakes: 'كل ما يبدأ بـ VITE_ يصبح علنيًا في حزمة المتصفح — لا تضع أسرارًا هناك؛ الأسرار مكانها السيرفر.',
        whenToUse: 'عناوين API وأعلام الميزات والأسرار — ولكل محيط قيمه الخاصة.'
      }
    }
  },
  {
    id: 'debugger',
    name: 'Debugger',
    category: 'tools',
    subcategory: 'Quality',
    difficulty: 'intermediate',
    popularity: 81,
    related: ['debugging', 'breakpoint', 'devtools'],
    prerequisites: ['debugging'],
    resources: [],
    content: {
      en: {
        definition: 'A debugger is a tool that pauses a running program at chosen points so you can inspect variables, step line by line, and watch the call stack.',
        simple: 'A debugger is a pause button for your program, with x-ray vision into variables.',
        example: {
          text: 'The debugger statement or DevTools breakpoints pause execution.',
          code: "function total(items) {\n  debugger; // pauses here when DevTools is open\n  return items.reduce((sum, i) => sum + i.price, 0);\n}",
          codeLang: 'js'
        }
      },
      'ar-msa': {
        definition: 'الـ Debugger أداة توقف برنامجًا يعمل عند نقاط تختارها لتتأمل المتغيرات وتتقدم سطرًا سطرًا وتراقب مكدس الاستدعاء.',
        simple: 'الـ Debugger زر إيقاف مؤقت لبرنامجك، مع رؤية أشعة إكس للمتغيرات.'
      }
    }
  },
  {
    id: 'linter',
    name: 'Linter',
    category: 'tools',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 80,
    related: ['formatter', 'static-analysis', 'eslint'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A linter statically analyzes source code for suspicious patterns and rule violations — unused variables, unsafe equality, hooks misuse — before the code ever runs.',
        simple: 'A linter is a strict teacher reading your code before it runs and marking mistakes.',
        whenToUse: 'From day one of any project; this app uses ESLint with TypeScript and React Hooks rules.'
      },
      'ar-msa': {
        definition: 'الـ Linter يحلل الكود ساكنًا بحثًا عن أنماط مريبة ومخالفات للقواعد — متغيرات غير مستخدمة ومساواة غير آمنة وسوء استخدام Hooks — قبل تشغيل الكود.',
        simple: 'الـ Linter معلم صارم يقرأ كودك قبل تشغيله ويشير إلى الأخطاء.',
        whenToUse: 'من اليوم الأول في أي مشروع؛ هذا التطبيق يستخدم ESLint مع قواعد TypeScript و React Hooks.'
      }
    }
  },
  {
    id: 'formatter',
    name: 'Formatter',
    category: 'tools',
    subcategory: 'Quality',
    difficulty: 'beginner',
    popularity: 78,
    related: ['linter'],
    prerequisites: [],
    resources: [],
    content: {
      en: {
        definition: 'A formatter rewrites source files to a consistent style — spacing, quotes, line breaks — so the whole team\u2019s code looks identical without manual cleanup.',
        simple: 'A formatter makes everyone\u2019s code wear the same uniform.',
        whenToUse: 'Run it on save or before each commit to end style debates forever.'
      },
      'ar-msa': {
        definition: 'الـ Formatter يعيد كتابة الملفات بأسلوب موحد — المسافات وعلامات الاقتباس وفواصل الأسطر — ليبدو كود الفريق كله متطابقًا دون تنظيف يدوي.',
        simple: 'الـ Formatter يجعل كود الجميع يرتدي الزي نفسه.',
        whenToUse: 'شغّله عند الحفظ أو قبل كل Commit لتنتهي نقاشات الأسلوب إلى الأبد.'
      }
    }
  },
  {
    id: 'unit-testing',
    name: 'Unit Testing',
    category: 'tools',
    subcategory: 'Testing',
    difficulty: 'beginner',
    popularity: 85,
    related: ['testing', 'integration-testing', 'tdd', 'assertion'],

prerequisites: ['functions'],
    resources: [],
    content: {
      en: {
        definition: 'Unit testing verifies one small piece of code — usually a function — in isolation, feeding it inputs and asserting the outputs.',
        simple: 'A unit test checks one brick of your building, not the whole building.',
        example: {
          text: 'A Node test with assert.',
          code: "import test from 'node:test';\nimport assert from 'node:assert';\n\nfunction addTax(price: number): number { return price * 1.15; }\n\ntest('addTax adds 15%', () => {\n  assert.strictEqual(addTax(100), 115);\n});",
          codeLang: 'ts'
        },
        whenToUse: 'For pure logic first; this dictionary app tests its content, search, storage, and speech helpers this way.'
      },
      'ar-msa': {
        definition: 'اختبار الوحدة يتحقق من قطعة صغيرة من الكود — غالبًا دالة — بمعزلها، بإعطائها مدخلات والتأكد من مخرجاتها.',
        simple: 'اختبار الوحدة يفحص طوبة واحدة من مبناك، لا المبنى كله.',
        whenToUse: 'للمنطق الصافي أولًا؛ وهذا القاموس يختبر محتواه وبحثه وتخزينه ودوال الصوت بهذه الطريقة.'
      }
    }
  }
];
