---
id: 0002
title: Create RAG Chatbot Constitution
stage: constitution
date: 2025-12-17
surface: agent
model: gemini-2.5-flash
feature: rag-chatbot
branch: main
user: HP
command: /sp.constitution Scope: RAG Chatbot Extension (Separate from Book Constitution)
labels: [constitution, rag-chatbot]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/chatbot-constitution.md
tests:
[]
---

## Prompt

/sp.constitution  Scope: RAG Chatbot Extension (Separate from Book Constitution)

Project:
Integrated RAG Chatbot for the "Physical AI & Humanoid Robotics" book
published using Docusaurus.

Purpose:
Define non-negotiable principles governing the behavior, accuracy,
grounding, and system design of the RAG chatbot. This constitution
does NOT replace or modify the existing book constitution.

Core Principles:

1. Single Source of Truth
- The chatbot must treat the book content as the only authoritative source.
- No external knowledge may be introduced.

2. Scientific Accuracy
- Responses must preserve the scientific meaning of retrieved text.
- Speculative or inferred answers are prohibited.

3. Traceability & Citations
- Every answer must be traceable to specific book sections.
- References must align with the book’s APA-style citations.

4. Query Scope Control
- The chatbot must support:
  a) Full-book retrieval mode
  b) Selected-text-only mode
- Selected-text mode must bypass vector retrieval entirely.

5. Hallucination Prevention
- If the answer is not found in the provided context, the chatbot must respond:
  “This information is not explicitly covered in the book.”

6. System Architecture Constraints
- Embeddings: OpenAI embedding models
- Vector Store: Qdrant Cloud (Free Tier)
- Backend: FastAPI
- Generation: OpenAI Agents / ChatKit SDK

7. Reproducibility & Auditability
- Chunking, embedding, and retrieval parameters must be documented.
- Prompt instructions must be version-controlled.

8. Performance & Reliability
- Average response time < 3 seconds
- Chatbot failures must not affect static site availability.

9. Academic Integrity
- Plagiarism tolerance is 0%.
- Quotations must be clearly identified.

10. Deployment Compatibility
- Must integrate cleanly with Docusaurus and GitHub Pages.

## Response snapshot

I have created a new constitution for the RAG chatbot.
The new constitution is located at `.specify/memory/chatbot-constitution.md`.

## Outcome

- ✅ Impact: Created a new constitution for the RAG chatbot.
- 🧪 Tests: No tests were run.
- 📁 Files: Created .specify/memory/chatbot-constitution.md
- 🔁 Next prompts: null
- 🧠 Reflection: The user's request was contradictory. I decided to create a new file for the new constitution instead of overwriting the existing one, based on the explicit instruction not to modify the existing constitution.

## Evaluation notes (flywheel)

- Failure modes observed: Contradictory user instructions.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (if applicable): null
