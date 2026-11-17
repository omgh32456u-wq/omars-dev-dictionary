# Omax — Product & UI Decisions
_Last updated: 2026-11-17_

> This is the source of truth for Omax decisions. Read it before continuing Omax work in a new chat or making any implementation changes. Update this file after every meaningful decision or completed phase. Do not rely on chat memory alone.

## Current phase and constraints
- Current phase: **Omax UI Foundation** only.
- The user reports the active Lovable workspace has **5 credits**. Treat this as a hard, scarce budget.
- Do not spend Lovable credits on planning, research, API wiring, prompt/persona setup, or backend work that can be prepared outside Lovable.
- Never send a Lovable implementation request without the user's explicit approval.
- Batch UI work carefully, preserve the existing app design, and avoid unrelated refactors.
- Do not claim a task is implemented or tested until verified.
- Workspace ID supplied by user: `16faba8ea1c151b1a41b`.
- Lovable project must be confirmed as the correct project/workspace before any implementation. GitHub repo linkage to the current Lovable project is **not yet verified**.

## Product placement and entry
- Add a medium-width, horizontal rectangular Omax card near the top of the home page, above the first/main content card.
- Tapping it opens a dedicated Omax AI chat page.
- Preserve the existing home layout and visual language; this is an addition, not a redesign.

## Chat page structure
- Initial chat screen is empty of messages, but should not feel visually barren.
- Top-left: two-line menu button (hamburger) for conversation navigation.
- Provide a clear **New Chat** action.
- Main area: conversation/messages when a chat starts.
- Bottom: compact, responsive composer/input bar.
- Composer includes:
  - `+` attachment button.
  - Multiline text input.
  - Send arrow button.
- The plus menu initially exposes image attachment. Keep the structure extensible for future attachment types.
- Ensure mobile keyboard/safe-area behavior and responsive tablet/desktop layout.

## Omax identity and motion
- Use the user's supplied **Omax X logo** as Omax's identity; do not substitute a generic AI icon or recreate the logo.
- Show the logo as a floating, subtly animated presence in the empty state / chat environment.
- Keep the animation restrained and premium.
- Defer the advanced animated 3D character, looking-around behavior, personalized greeting, and first-run name greeting until profile-name onboarding and a later phase are ready.
- The R-mark is the user's personal/app mark, not Omax's mark.

## Model selector (visual-only for now)
- Selector opens from the control beside the Omax logo/name or model label.
- Show:
  1. **Omax 1.0 Free** — selected with a check mark; current visible model.
  2. **Omax X-plain** — disabled, muted gray, lock icon, labelled Coming soon.
  3. **Omax Ultra** — disabled, muted gray, lock icon, labelled Coming soon.
- This is a future-facing visual presentation only. Do not imply the locked models are available, and do not implement fake model switching.
- No provider/model integration is part of the UI-only phase.

## Assistant behavior and teaching philosophy (later implementation)
- Primary model/provider planned: DeepSeek V4.1 Flash via the user's existing Token Harbor setup, subject to verifying the exact provider/model identifier and endpoint at implementation time.
- The API key/secret must remain server-side. Never expose it in client code, logs, commits, or chat. Never ask the user to paste the secret.
- Omax should specialize in programming education and explanations, especially **Python and JavaScript**, while still helping with C#, C++, and other languages.
- Answer the user's actual question first. Explain concepts clearly before suggesting videos, links, or references; do not reflexively dump links.
- For practical coding questions, provide real, usable code matching the requested language and interface/context (e.g. a working Hello World example in Python or JavaScript), with explanation and expected result where useful.
- Choose supporting references/videos only when they add value to the explanation.
- Omax should not claim to have executed code unless execution was actually performed.

## Context handoff / forward-to-Omax
- Every term card and every relevant term-detail section should have a **forward/share-to-Omax** action.
- Activating it opens Omax and passes the selected term/section as structured context.
- Omax should then ask what the user wants to do with that content (e.g. explain, simplify, compare, give an example, debug), rather than assuming a task.
- Preserve source identity (term ID/title, section ID/title, language) so context is unambiguous.
- Do not send unrelated page content when only one section was selected.

## Creator/video research and feedback (later phases)
- Conduct deep, evidence-based research to identify high-quality programming educators/content creators suitable for this platform.
- Evaluate teaching clarity, correctness, curriculum quality, language suitability (Arabic/English), relevance, and reputation. Do not rank solely by views or popularity.
- Build recommendations by topic/domain, not one generic creator list.
- Every recommended video should have a feedback record. When the user returns later, ask once whether they watched it and whether it helped; allow skip and never nag.
- Feedback options: 1–5 stars; outcome (understood / partly understood / not helpful / too long or complex); optional comment.
- Persist video ID/URL, topic/term, rating, outcome, timestamp, language, and recommendation context.
- Aggregate ratings with sample counts and confidence thresholds. A single rating or view count is not proof of quality.
- This requires persistent backend/database support for cross-user aggregation; local-only ratings are not sufficient for the intended platform behavior.

## Work deliberately deferred (not part of current UI phase)
- Connecting/configuring the LLM provider and server endpoint.
- System prompt/persona engineering and Omax-specific guardrails.
- Backend/database and conversation persistence.
- Cross-chat memory/context retrieval.
- Video/creator research and recommendation pipeline.
- Video rating collection and aggregation.
- Personalized first-run greeting and profile-name integration.
- Advanced 3D animated character.
- Audio/TTS enhancements.
- Production security, rate limits, abuse controls, and final QA.

## Implementation acceptance checklist for the UI phase
- [ ] Home card appears above the first/main content card and navigates to Omax.
- [ ] Dedicated chat page has menu, New Chat, empty state, composer, plus, image attachment affordance, and send arrow.
- [ ] Supplied X logo is used for Omax.
- [ ] Omax mark has subtle motion; no advanced character or personalized greeting yet.
- [ ] Model selector shows Omax 1.0 Free selected; X-plain and Ultra locked/Coming soon.
- [ ] Forward-to-Omax affordances exist on term cards and term sections, carrying correct context.
- [ ] Responsive behavior works on mobile, tablet, and desktop; keyboard and safe areas do not obscure composer.
- [ ] Existing app routes, dictionary behavior, theme, language/RTL, and speech features remain intact.
- [ ] Tests, typecheck, and production build pass; report exact commands/results.

## Change log
- 2026-11-17: Consolidated the user's Omax product vision, UI layout, model selector, teaching behavior, context handoff, creator research, feedback system, deferred work, and strict credit constraints.
