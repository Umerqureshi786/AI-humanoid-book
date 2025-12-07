---
id: 0002
title: User says hi
stage: general
date: 2025-12-07
surface: agent
model: gemini-1.5-flash
feature: none
branch: unknown
user: unknown
command: hi
labels: []
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:

tests:

---

## Prompt

hi

## Response snapshot

Hello! How can I help you today?

## Outcome

- ✅ Impact: none
- 🧪 Tests: none
- 📁 Files:
 - history/prompts/general/0002-user-says-hi.general.prompt.md
- 🔁 Next prompts: User's next command
- 🧠 Reflection: Created a PHR for the initial user greeting.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): initial greeting
- Next experiment (smallest change to try): none
