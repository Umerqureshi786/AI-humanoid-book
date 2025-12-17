# RAG Chatbot Extension Constitution

This constitution defines the principles for the RAG Chatbot extension for the "Physical AI & Humanoid Robotics" book.

## Core Principles

### 1. Single Source of Truth
- The chatbot must treat the book content as the only authoritative source.
- No external knowledge may be introduced.

### 2. Scientific Accuracy
- Responses must preserve the scientific meaning of retrieved text.
- Speculative or inferred answers are prohibited.

### 3. Traceability & Citations
- Every answer must be traceable to specific book sections.
- References must align with the book’s APA-style citations.

### 4. Query Scope Control
- The chatbot must support:
  a) Full-book retrieval mode
  b) Selected-text-only mode
- Selected-text mode must bypass vector retrieval entirely.

### 5. Hallucination Prevention
- If the answer is not found in the provided context, the chatbot must respond:
  “This information is not explicitly covered in the book.”

### 6. System Architecture Constraints
- Embeddings: OpenAI embedding models
- Vector Store: Qdrant Cloud (Free Tier)
- Backend: FastAPI
- Generation: OpenAI Agents / ChatKit SDK

### 7. Reproducibility & Auditability
- Chunking, embedding, and retrieval parameters must be documented.
- Prompt instructions must be version-controlled.

### 8. Performance & Reliability
- Average response time < 3 seconds
- Chatbot failures must not affect static site availability.

### 9. Academic Integrity
- Plagiarism tolerance is 0%.
- Quotations must be clearly identified.

### 10. Deployment Compatibility
- Must integrate cleanly with Docusaurus and GitHub Pages.

## Governance

This constitution governs the RAG Chatbot extension. Amendments require documentation, approval, and a migration plan.

**Version**: 1.0.0 | **Ratified**: 2025-12-17 | **Last Amended**: 2025-12-17
