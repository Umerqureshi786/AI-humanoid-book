# Feature Specification: RAG Chatbot

**Feature Branch**: `003-rag-chatbot`
**Created**: 2025-12-17
**Status**: Draft
**Input**: User description: "Scope: RAG Chatbot Feature Specification (Separate from Book Content) Project: Integrated Retrieval-Augmented Generation (RAG) Chatbot for the “Physical AI & Humanoid Robotics” book published using Docusaurus. Objective: Define functional and non-functional requirements for an embedded RAG chatbot that answers user questions using only the book’s content, while preserving scientific accuracy, traceability, and academic rigor."

## User Scenarios & Testing

### User Story 1 - Full-Book Query (Priority: P1)

As a user, I want to ask a question to the chatbot and get an answer based on the entire content of the book, so that I can quickly find information without having to read the whole book.

**Why this priority**: This is the primary use case for the chatbot.

**Independent Test**: Can be tested by asking a question that can be answered by the book's content and verifying that the answer is correct and traceable.

**Acceptance Scenarios**:

1.  **Given** the chatbot is in "full-book" mode, **When** I ask a question, **Then** the chatbot should provide an answer based on the book's content.
2.  **Given** the chatbot provides an answer, **When** I check the answer, **Then** it should be accurate and include citations to the relevant book sections.

### User Story 2 - Selected-Text Query (Priority: P2)

As a user, I want to select a piece of text from the book and ask a question about it, so that I can get a more focused answer.

**Why this priority**: This provides a more controlled way to interact with the chatbot.

**Independent Test**: Can be tested by selecting a piece of text, asking a question about it, and verifying the answer.

**Acceptance Scenarios**:

1.  **Given** I have selected a piece of text, **When** I ask a question about it, **Then** the chatbot should provide an answer based only on the selected text.
2.  **Given** the chatbot provides an answer, **When** I check the answer, **Then** it should be accurate and not contain any information from outside the selected text.

### User Story 3 - Hallucination Handling (Priority: P1)

As a user, I want the chatbot to inform me when it cannot find an answer to my question in the book, so that I am not misled by a fabricated answer.

**Why this priority**: This is crucial for maintaining the scientific accuracy and integrity of the chatbot.

**Independent Test**: Can be tested by asking a question that cannot be answered by the book's content and verifying the chatbot's response.

**Acceptance Scenarios**:

1.  **Given** I ask a question that is not covered in the book, **When** the chatbot responds, **Then** it should state that the information is not explicitly covered in the book.

### Edge Cases

-   What happens when the user asks a question in a language other than English?
-   How does the system handle very long or very short user queries?
-   What happens if the user selects a very large or very small piece of text for selected-text query mode?

## Requirements

### Functional Requirements

-   **FR-1**: The system shall ingest all book content from Docusaurus-compatible Markdown files as the primary knowledge source.
-   **FR-2**: The system shall split book content into semantically coherent chunks (500–800 tokens with overlap) suitable for vector retrieval.
-   **FR-3**: The system shall generate vector embeddings using OpenAI embedding models.
-   **FR-4**: The system shall store embeddings in Qdrant Cloud (Free Tier), including metadata such as chapter, section, and source URL.
-   **FR-5**: The chatbot shall retrieve relevant chunks from the entire book corpus using vector similarity search.
-   **FR-6**: The chatbot shall accept user-selected text and generate responses using only that text, bypassing vector retrieval entirely.
-   **FR-7**: The system shall provide retrieved context to an OpenAI Agent via the ChatKit SDK for grounded answer generation.
-   **FR-8**: If retrieved or provided context is insufficient, the chatbot shall respond with: “This information is not explicitly covered in the book.”
-   **FR-9**: The chatbot shall include references to relevant book sections or chapters used in generating each response.
-   **FR-10**: The chatbot shall be embedded into the Docusaurus website and provide controls for selecting query mode (full book vs selected text).

### Non-Functional Requirements

-   **NFR-1**: All responses must preserve the original scientific meaning of the source material without distortion.
-   **NFR-2**: Average response time shall be under 3 seconds for standard queries.
-   **NFR-3**: Backend failures must not impact the static Docusaurus site.
-   **NFR-4**: API keys and backend services must not be exposed to the client.
-   **NFR-5**: The system shall operate within Qdrant Cloud Free Tier limitations.

### Key Entities

-   **Book Content**: The source material for the RAG chatbot, in Markdown format.
-   **Chunk**: A semantically coherent piece of the book content, with a size of 500-800 tokens.
-   **Embedding**: A vector representation of a chunk, generated by an OpenAI model.
-   **Query**: A question asked by the user.
-   **Answer**: A response generated by the chatbot.

## Success Criteria

### Measurable Outcomes

-   **SC-1**: The chatbot should answer at least 95% of test questions correctly, where correctness is defined as being accurate and traceable to the book's content.
-   **SC-2**: The average response time for a query should be less than 3 seconds.
-   **SC-3**: The chatbot should correctly identify at least 99% of out-of-scope questions and respond with the predefined message.
-   **SC-4**: The static Docusaurus site should remain fully available even if the chatbot's backend is down.