# Quickstart

This document provides a quick overview of how to get started with the RAG chatbot project.

## Prerequisites

-   Python 3.11
-   Poetry for dependency management
-   Access to OpenAI API
-   A Qdrant Cloud account

## Backend Setup

1.  Clone the repository.
2.  Navigate to the `backend` directory.
3.  Install the dependencies: `poetry install`
4.  Set up the environment variables in a `.env` file:
    ```
    OPENAI_API_KEY=...
    QDRANT_URL=...
    QDRANT_API_KEY=...
    ```
5.  Run the backend server: `poetry run uvicorn src.api.main:app --reload`

## Frontend Setup

1.  Navigate to the `frontend` directory.
2.  Install the dependencies: `npm install`
3.  Run the frontend development server: `npm start`

## Data Ingestion

1.  Place the book's Markdown files in a directory.
2.  Run the ingestion script to process the files, generate embeddings, and store them in Qdrant:
    `python scripts/ingest.py --path /path/to/markdown/files`
