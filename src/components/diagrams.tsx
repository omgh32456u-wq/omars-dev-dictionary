import type { DiagramId } from '../types';
import { t } from '../i18n/strings';

// Omar's Dev Dictionary — educational diagram components.
// Each diagram teaches one concept, is readable on mobile (scalable SVG,
// viewBox), and stays understandable without any animation.

interface DiagramText {
  browser: string;
  server: string;
  request: string;
  response: string;
  db: string;
  frontend: string;
  backend: string;
  working: string;
  staging: string;
  repo: string;
  main: string;
  feature: string;
  merged: string;
  auth: string;
  token: string;
  user: string;
  buildStep: string;
  testStep: string;
  deployStep: string;
  gitUser: string;
}

const EN_TEXT: DiagramText = {
  browser: 'Browser',
  server: 'Server',
  request: 'Request (GET /api/terms)',
  response: 'Response (200 + JSON)',
  db: 'Database',
  frontend: 'Frontend',
  backend: 'Backend',
  working: 'Working Directory',
  staging: 'Staging Area',
  repo: 'Repository',
  main: 'main',
  feature: 'feature/search',
  merged: 'merge commit',
  auth: 'Auth Server',
  token: 'Token (JWT)',
  user: 'User',
  buildStep: 'Build',
  testStep: 'Test',
  deployStep: 'Deploy',
  gitUser: 'You'
};

const AR_TEXT: DiagramText = {
  browser: 'المتصفح',
  server: 'السيرفر',
  request: 'طلب (GET /api/terms)',
  response: 'استجابة (200 + JSON)',
  db: 'قاعدة البيانات',
  frontend: 'الواجهة الأمامية',
  backend: 'الواجهة الخلفية',
  working: 'دليل العمل',
  staging: 'منطقة Staging',
  repo: 'المستودع',
  main: 'main',
  feature: 'feature/search',
  merged: 'Commit الدمج',
  auth: 'سيرفر المصادقة',
  token: 'رمز JWT',
  user: 'المستخدم',
  buildStep: 'بناء',
  testStep: 'اختبار',
  deployStep: 'نشر',
  gitUser: 'أنت'
};

function textsFor(lang: 'en' | 'ar'): DiagramText {
  return lang === 'ar' ? AR_TEXT : EN_TEXT;
}

function Box({
  x, y, w, h, label, accent
}: { x: number; y: number; w: number; h: number; label: string; accent?: boolean }) {
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={h} rx={8}
        fill={accent ? 'var(--accent-soft)' : 'var(--surface)'}
        stroke={accent ? 'var(--accent)' : 'var(--border)'}
        strokeWidth={1.5}
      />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize={13} fill="var(--text)">
        {label}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, label }: { x1: number; y1: number; x2: number; y2: number; label?: string }) {
  return (
    <g stroke="var(--text-soft)" fill="var(--text-soft)">
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={1.5} markerEnd="url(#arrowhead)" />
      {label && (
        <text
          x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 6}
          textAnchor="middle" fontSize={11} fill="var(--text-soft)" stroke="none"
        >
          {label}
        </text>
      )}
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-soft)" />
      </marker>
    </defs>
  );
}

export function BrowserServerDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 140" role="img" aria-label={`${x.browser} ↔ ${x.server}`}>
        <Defs />
        <Box x={20} y={50} w={110} h={44} label={x.browser} />
        <Box x={230} y={50} w={110} h={44} label={x.server} />
        <Arrow x1={132} y1={62} x2={228} y2={62} label={x.request} />
        <Arrow x1={228} y1={84} x2={132} y2={84} label={x.response} />
      </svg>
      <figcaption>{lang === 'ar' ? 'يتصفح المستخدم عبر المتصفح: طلب ثم استجابة.' : 'The user browser sends a request; the server sends back a response.'}</figcaption>
    </figure>
  );
}

export function ApiRequestDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 150" role="img" aria-label="API request lifecycle">
        <Defs />
        <Box x={20} y={55} w={90} h={40} label={x.frontend} />
        <Box x={150} y={55} w={70} h={40} label="API" accent />
        <Box x={260} y={55} w={80} h={40} label={x.db} />
        <Arrow x1={112} y1={60} x2={148} y2={60} label="GET" />
        <Arrow x1={152} y1={94} x2={114} y2={94} label="JSON" />
        <Arrow x1={222} y1={75} x2={258} y2={75} label="SQL" />
      </svg>
      <figcaption>{lang === 'ar' ? 'الـ API وسيط منظّم: يستقبل الطلب، يسأل قاعدة البيانات، ويعيد JSON.' : 'The API mediates: it receives the request, queries the database, and returns JSON.'}</figcaption>
    </figure>
  );
}

export function HttpLifecycleDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 170" role="img" aria-label="HTTP request lifecycle">
        <Defs />
        <Box x={130} y={15} w={100} h={36} label={x.browser} />
        <Box x={130} y={120} w={100} h={36} label={x.server} />
        <Arrow x1={150} y1={53} x2={150} y2={118} label="1. request" />
        <Arrow x1={210} y1={118} x2={210} y2={53} label="2. response" />
        <text x={180} y={88} textAnchor="middle" fontSize={11} fill="var(--text-soft)">DNS → TCP → TLS → HTTP</text>
      </svg>
      <figcaption>{lang === 'ar' ? 'حياة طلب HTTP: العنوان فالاتصال فالتشفير فالطلب والاستجابة.' : 'An HTTP request lifecycle: resolve, connect, secure, exchange.'}</figcaption>
    </figure>
  );
}

export function FrontendBackendDbDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 110" role="img" aria-label="Frontend, Backend, Database">
        <Defs />
        <Box x={20} y={35} w={90} h={40} label={x.frontend} />
        <Box x={150} y={35} w={90} h={40} label={x.backend} accent />
        <Box x={270} y={35} w={70} h={40} label={x.db} />
        <Arrow x1={112} y1={55} x2={148} y2={55} label="API" />
        <Arrow x1={242} y1={55} x2={268} y2={55} label="SQL" />
      </svg>
      <figcaption>{lang === 'ar' ? 'ثلاث طبقات: الواجهة تتحدث مع الخلفية عبر API، والخلفية تتحدث مع قاعدة البيانات.' : 'Three layers: the frontend talks to the backend via an API; the backend talks to the database.'}</figcaption>
    </figure>
  );
}

export function GitAreasDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 110" role="img" aria-label="Git areas">
        <Defs />
        <Box x={15} y={35} w={100} h={40} label={x.working} />
        <Box x={135} y={35} w={90} h={40} label={x.staging} />
        <Box x={245} y={35} w={100} h={40} label={x.repo} accent />
        <Arrow x1={117} y1={48} x2={133} y2={48} label="git add" />
        <Arrow x1={227} y1={64} x2={243} y2={64} label="git commit" />
      </svg>
      <figcaption>{lang === 'ar' ? 'مناطق Git الثلاث: التعديلات تُدرج في Staging ثم تُحفظ Commit في المستودع.' : 'Git three areas: changes are staged, then committed into the repository.'}</figcaption>
    </figure>
  );
}

export function BranchMergeDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 130" role="img" aria-label="Branch and merge workflow">
        <Defs />
        <circle cx={40} cy={95} r={7} fill="var(--accent)" />
        <text x={40} y={118} textAnchor="middle" fontSize={11} fill="var(--text-soft)">{x.main}</text>
        <circle cx={140} cy={95} r={6} fill="var(--border)" />
        <line x1={46} y1={95} x2={254} y2={95} stroke="var(--border)" strokeWidth={2} />
        <circle cx={40} cy={35} r={7} fill="var(--accent)" />
        <line x1={40} y1={42} x2={140} y2={35} stroke="var(--text-soft)" strokeWidth={1.5} />
        <circle cx={140} cy={35} r={6} fill="var(--text-soft)" />
        <text x={140} y={20} textAnchor="middle" fontSize={11} fill="var(--text-soft)">{x.feature}</text>
        <Arrow x1={148} y1={40} x2={252} y2={90} label="git merge" />
        <circle cx={260} cy={95} r={8} fill="var(--ok)" />
        <text x={278} y={88} fontSize={11} fill="var(--text-soft)">{x.merged}</text>
      </svg>
      <figcaption>{lang === 'ar' ? 'الـ Branch يتفرع من main، يتقدم، ثم يعود بـ Merge.' : 'A branch forks from main, moves forward, and returns via a merge.'}</figcaption>
    </figure>
  );
}

export function AuthFlowDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 150" role="img" aria-label="Authentication flow">
        <Defs />
        <Box x={20} y={55} w={70} h={40} label={x.user} />
        <Box x={140} y={55} w={90} h={40} label={x.auth} accent />
        <Box x={270} y={55} w={70} h={40} label={x.server} />
        <Arrow x1={92} y1={62} x2={138} y2={62} label="1. login" />
        <Arrow x1={138} y1={90} x2={92} y2={90} label={x.token} />
        <Arrow x1={232} y1={75} x2={268} y2={75} label="2. verify" />
      </svg>
      <figcaption>{lang === 'ar' ? 'المستخدم يسلم بياناته فيستلم رمزًا، ويقدم الرمز مع كل طلب لاحق.' : 'The user logs in, receives a token, and presents it with later requests.'}</figcaption>
    </figure>
  );
}

export function CicdPipelineDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 100" role="img" aria-label="CI/CD pipeline">
        <Defs />
        <Box x={15} y={30} w={70} h={40} label={x.buildStep} />
        <Box x={115} y={30} w={70} h={40} label={x.testStep} accent />
        <Box x={215} y={30} w={70} h={40} label={x.deployStep} />
        <Arrow x1={87} y1={50} x2={113} y2={50} />
        <Arrow x1={187} y1={50} x2={213} y2={50} />
        <text x={250} y={20} fontSize={11} fill="var(--text-soft)" textAnchor="middle">push</text>
      </svg>
      <figcaption>{lang === 'ar' ? 'كل push يشغل أنبوبًا: بناء، اختبار، ثم نشر عند النجاح.' : 'Every push triggers the pipeline: build, test, then deploy on success.'}</figcaption>
    </figure>
  );
}

export function DbRelationsDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 150" role="img" aria-label="Database relations">
        <Defs />
        <Box x={25} y={30} w={110} h={44} label="categories" />
        <Box x={25} y={95} w={110} h={44} label="terms" accent />
        <Box x={235} y={95} w={100} h={44} label={x.db} />
        <Arrow x1={80} y1={76} x2={80} y2={93} label="1 → many" />
        <Arrow x1={137} y1={117} x2={233} y2={117} label="foreign key" />
      </svg>
      <figcaption>{lang === 'ar' ? 'علاقة واحد-إلى-متعدد: تصنيف واحد يحوي مصطلحات كثيرة عبر مفتاح أجنبي.' : 'A one-to-many relation: one category holds many terms through a foreign key.'}</figcaption>
    </figure>
  );
}

export function ReactStateDiagram({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const x = textsFor(lang);
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 150" role="img" aria-label="React state and component tree">
        <Defs />
        <Box x={130} y={15} w={100} h={36} label="App" accent />
        <Box x={30} y={90} w={100} h={40} label="SearchBar" />
        <Box x={230} y={90} w={100} h={40} label="TermList" />
        <Arrow x1={160} y1={53} x2={80} y2={88} label="state ↓" />
        <Arrow x1={200} y1={53} x2={280} y2={88} label="state ↓" />
        <Arrow x1={100} y1={88} x2={165} y2={53} label="events ↑" />
      </svg>
      <figcaption>{lang === 'ar' ? 'الحالة تنزل إلى المكونات، والأحداث تصعد لتغييرها.' : 'State flows down to components; events flow up to change it.'}</figcaption>
    </figure>
  );
}

const DIAGRAM_COMPONENTS: Record<DiagramId, (props: { lang?: 'en' | 'ar' }) => JSX.Element> = {
  'browser-server': BrowserServerDiagram,
  'api-request': ApiRequestDiagram,
  'http-lifecycle': HttpLifecycleDiagram,
  'frontend-backend-db': FrontendBackendDbDiagram,
  'git-areas': GitAreasDiagram,
  'branch-merge': BranchMergeDiagram,
  'auth-flow': AuthFlowDiagram,
  'cicd-pipeline': CicdPipelineDiagram,
  'db-relations': DbRelationsDiagram,
  'react-state': ReactStateDiagram
};

export function DiagramById({ id, lang }: { id: DiagramId; lang: 'en' | 'ar' }) {
  const Component = DIAGRAM_COMPONENTS[id];
  if (Component == null) return null;
  return <Component lang={lang} />;
}

export function DiagramSection({ ids, lang }: { ids: DiagramId[]; lang: 'en' | 'ar' }) {
  if (ids.length === 0) return null;
  return (
    <section className="section">
      <h2>{t(lang, 'diagramHeading')}</h2>
      {ids.map((id) => (
        <DiagramById key={id} id={id} lang={lang} />
      ))}
    </section>
  );
}
