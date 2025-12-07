---
id: 0001
title: User says hi
stage: general
date: 2025-12-06
surface: agent
model: gemini-1.5-flash
feature: none
branch: master
user: HP
command: hi
labels: ["interaction"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - history/prompts/general/0001-user-says-hi.general.prompt.md
tests:
---

## Prompt

hi

## Response snapshot

Hello! How can I help you today?

## Outcome

- ✅ Impact: Minimal, initial greeting.
- 🧪 Tests: N/A
- 📁 Files: No files modified.
- 🔁 Next prompts: Waiting for user's next command.
- 🧠 Reflection: Recorded initial interaction.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
