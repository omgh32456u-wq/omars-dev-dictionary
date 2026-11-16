import type { Term } from '../types';
import { FUNDAMENTALS_TERMS } from './terms-fundamentals';
import { FUNDAMENTALS_EXTRA_TERMS } from './terms-fundamentals-extra';
import { FUNDAMENTALS_2A_TERMS } from './terms-fundamentals-2a';
import { FUNDAMENTALS_2B_TERMS } from './terms-fundamentals-2b';
import { FUNDAMENTALS_3_TERMS } from './terms-fundamentals-3';
import { FUNDAMENTALS_4_TERMS } from './terms-fundamentals-4';
import { WEB_TERMS } from './terms-web';
import { WEB_EXTRA_TERMS } from './terms-web-extra';
import { WEB_2_TERMS } from './terms-web-2';
import { WEB_3_TERMS } from './terms-web-3';
import { TOOLS_TERMS } from './terms-tools';
import { TOOLS_EXTRA_TERMS } from './terms-tools-extra';
import { TOOLS_2_TERMS } from './terms-tools-2';
import { BACKEND_TERMS } from './terms-backend';
import { BACKEND_EXTRA_TERMS } from './terms-backend-extra';
import { BACKEND_2_TERMS } from './terms-backend-2';
import { ARCHITECTURE_TERMS } from './terms-architecture';
import { ARCHITECTURE_EXTRA_A_TERMS } from './terms-architecture-extra-a';
import { ARCHITECTURE_EXTRA_B_TERMS } from './terms-architecture-extra-b';
import { ARCHITECTURE_2_TERMS } from './terms-architecture-2';
import { MODERN_TERMS } from './terms-modern';
import { MODERN_EXTRA_TERMS } from './terms-modern-extra';
import { MODERN_2_TERMS } from './terms-modern-2';
import { FINAL_BATCH_TERMS } from './terms-final-batch';

// Omar's Dev Dictionary — the full term list, merged from category files.
// The three original seed terms (Git, Branch, API) live in their category files.

export const TERMS: Term[] = [
  ...FUNDAMENTALS_TERMS,
  ...FUNDAMENTALS_EXTRA_TERMS,
  ...FUNDAMENTALS_2A_TERMS,
  ...FUNDAMENTALS_2B_TERMS,
  ...FUNDAMENTALS_3_TERMS,
  ...FUNDAMENTALS_4_TERMS,
  ...WEB_TERMS,
  ...WEB_EXTRA_TERMS,
  ...WEB_2_TERMS,
  ...WEB_3_TERMS,
  ...TOOLS_TERMS,
  ...TOOLS_EXTRA_TERMS,
  ...TOOLS_2_TERMS,
  ...BACKEND_TERMS,
  ...BACKEND_EXTRA_TERMS,
  ...BACKEND_2_TERMS,
  ...ARCHITECTURE_TERMS,
  ...ARCHITECTURE_EXTRA_A_TERMS,
  ...ARCHITECTURE_EXTRA_B_TERMS,
  ...ARCHITECTURE_2_TERMS,
  ...MODERN_TERMS,
  ...MODERN_EXTRA_TERMS,
  ...MODERN_2_TERMS,
  ...FINAL_BATCH_TERMS
];
