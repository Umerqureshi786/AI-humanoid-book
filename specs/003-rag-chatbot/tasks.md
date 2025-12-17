# Tasks: RAG Chatbot

**Input**: Design documents from `specs/003-rag-chatbot/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 [P] Initialize FastAPI backend project in `backend/`
- [ ] T002 [P] Initialize React frontend project in `frontend/`
- [ ] T003 [P] Configure linting and formatting tools for both projects

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [ ] T004 Setup Qdrant client in `backend/src/services/qdrant_client.py`
- [ ] T005 Implement data ingestion script in `backend/scripts/ingest.py` to:
    - [ ] Read all Markdown files from a specified directory
    - [ ] Chunk the content into 500-800 token chunks with overlap
    - [ ] Generate embeddings using OpenAI embedding models
    - [ ] Store embeddings and metadata in Qdrant

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Full-Book Query (Priority: P1) 🎯 MVP

**Goal**: As a user, I want to ask a question to the chatbot and get an answer based on the entire content of the book.

**Independent Test**: Can be tested by asking a question and verifying the answer and citations.

### Implementation for User Story 1

- [ ] T006 [US1] Create `Query` and `Answer` models in `backend/src/models/chat.py`
- [ ] T007 [US1] Implement RAG service in `backend/src/services/rag_service.py` to:
    - [ ] Receive a query
    - [ ] Retrieve relevant chunks from Qdrant
    - [ ] Use OpenAI Agents / ChatKit SDK to generate an answer
    - [ ] Include citations in the answer
- [ ] T008 [US1] Implement the `/query` endpoint in `backend/src/api/chat.py`
- [ ] T009 [P] [US1] Create a React-based chatbot widget in `frontend/src/components/Chatbot.js`
- [ ] T010 [US1] Integrate the chatbot widget with the backend API in `frontend/src/App.js`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Selected-Text Query (Priority: P2)

**Goal**: As a user, I want to select a piece of text and ask a question about it.

**Independent Test**: Can be tested by selecting text, asking a question, and verifying the answer.

### Implementation for User Story 2

- [ ] T011 [US2] Extend the RAG service in `backend/src/services/rag_service.py` to handle selected-text queries.
- [ ] T012 [US2] Update the `/query` endpoint in `backend/src/api/chat.py` to accept selected text.
- [ ] T013 [US2] Implement text selection functionality in the frontend in `frontend/src/App.js`.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Hallucination Handling (Priority: P1)

**Goal**: As a user, I want the chatbot to inform me when it cannot find an answer.

**Independent Test**: Can be tested by asking an out-of-scope question.

### Implementation for User Story 3

- [ ] T014 [US3] Implement hallucination handling logic in the RAG service in `backend/src/services/rag_service.py`.

**Checkpoint**: All user stories should now be independently functional.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T015 [P] Add comprehensive documentation to `backend/` and `frontend/`
- [ ] T016 [P] Add unit and integration tests using `pytest` for the backend
- [ ] T017 [P] Add unit and integration tests for the frontend
- [ ] T018 Security hardening of the backend API
- [ ] T019 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup
- **User Stories (Phase 3-5)**: Depend on Foundational
- **Polish (Phase N)**: Depends on all user stories

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational
- **User Story 2 (P2)**: Can start after Foundational
- **User Story 3 (P3)**: Can start after Foundational

### Within Each User Story

- Backend tasks should be completed before frontend tasks.

### Parallel Opportunities

- Backend and frontend setup can be done in parallel.
- Backend and frontend work for different user stories can be done in parallel by different team members.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery

1. Complete Setup + Foundational
2. Add User Story 1 → Test independently
3. Add User Story 2 → Test independently
4. Add User Story 3 → Test independently

### Parallel Team Strategy

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
