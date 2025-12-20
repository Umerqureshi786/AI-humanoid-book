---
id: 0005
title: Integrate Chatbot into Docusaurus
stage: implement
date: 2025-12-20
surface: agent
model: gemini
feature: rag-chatbot
branch: 003-rag-chatbot
user: HP
command: RAG chatbot implemented successfully on my docusaurus physical AI and humanoid book but not appearing on webpage
labels: ["docusaurus", "integration", "swizzle", "react"]
links:
  spec: specs/003-rag-chatbot/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - humanoid-book/src/components/Chatbot.jsx
 - humanoid-book/src/theme/Root.tsx
tests:
 - npm run typecheck (PASSED)
---

## Prompt

RAG chatbot implemented successfully on my docusaurus physical AI and humanoid book but not appearing on webpage

## Response snapshot

Command: cp frontend/src/components/Chatbot.jsx humanoid-book/src/components/Chatbot.jsx
...
Command: write_file humanoid-book/src/theme/Root.tsx
...
Command: npm run typecheck
Output: 
> humanoid-book@0.0.0 typecheck
> tsc

## Outcome

- ✅ Impact: The Chatbot component is now integrated into the Docusaurus site as a global floating widget via `src/theme/Root.tsx`.
- 🧪 Tests: `npm run typecheck` passed, confirming correct integration and type safety.
- 📁 Files: Created `humanoid-book/src/components/Chatbot.jsx` (copied from frontend) and `humanoid-book/src/theme/Root.tsx`.
- 🔁 Next prompts: N/A
- 🧠 Reflection: The user had a standalone React component but hadn't connected it to the Docusaurus app. Using `Root` swizzling is the standard way to inject global components.

## Evaluation notes (flywheel)

- Failure modes observed: N/A
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
