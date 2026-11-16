// Omar's Dev Dictionary — shared content and data types.
// Canonical technical names (Git, API, JavaScript, ...) always keep their
// English spelling in every language variant.

export type LangCode = 'en' | 'ar-msa' | 'ar-eg' | 'ar-sa';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type CategoryId =
  | 'fundamentals'
  | 'web'
  | 'tools'
  | 'backend'
  | 'architecture'
  | 'modern';

export type DiagramId =
  | 'browser-server'
  | 'api-request'
  | 'http-lifecycle'
  | 'frontend-backend-db'
  | 'git-areas'
  | 'branch-merge'
  | 'auth-flow'
  | 'cicd-pipeline'
  | 'db-relations'
  | 'react-state';

export interface Resource {
  label: string;
  url: string;
  /** true only when the URL has been opened and confirmed to resolve */
  verified: boolean;
}

export interface TermExample {
  /** prose only — never contains code; safe for speech */
  text: string;
  code?: string;
  codeLang?: string;
}

export interface TermContent {
  definition: string;
  simple: string;
  howItWorks?: string;
  example?: TermExample;
  analogy?: string;
  mistakes?: string;
  whenToUse?: string;
}

export interface Term {
  id: string;
  /** canonical English name, never translated */
  name: string;
  category: CategoryId;
  subcategory?: string;
  difficulty: Difficulty;
  /** 0–100, higher = more popular */
  popularity: number;
  related: string[];
  prerequisites: string[];
  resources: Resource[];
  diagrams?: DiagramId[];
  /** 'en' is required for every term; 'ar-msa' is the complete Arabic baseline;
 *  'ar-eg' / 'ar-sa' may override selected sections and fall back to 'ar-msa'. */
  content: Partial<Record<LangCode, TermContent>>;
}

export interface CategoryMeta {
  id: CategoryId;
  en: string;
  ar: string;
  descriptionEn: string;
  descriptionAr: string;
}

export interface LearningPath {
  id: string;
  en: string;
  ar: string;
  descriptionEn: string;
  descriptionAr: string;
  /** ordered term ids; every id must exist in the dictionary */
  steps: string[];
}
