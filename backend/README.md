# RAG Chatbot Backend

This directory contains the FastAPI backend for the RAG Chatbot.

## Setup

1.  **Dependencies**: Install Python dependencies using `pip`:
    ```bash
    pip install -r requirements.txt
    ```
    (Note: `requirements.txt` is generated from `pyproject.toml` using `pip freeze > requirements.txt` or similar.)

2.  **Environment Variables**: Create a `.env` file in the project root with the following:
    ```
    OPENAI_API_KEY=your_openai_api_key
    QDRANT_URL=your_qdrant_url
    QDRANT_API_KEY=your_qdrant_api_key
    ```

3.  **Run Migrations / Data Ingestion**:
    - Place your Markdown book content in a directory.
    - Run the ingestion script:
      ```bash
      python scripts/ingest.py --path /path/to/your/markdown/files --collection book_content
      ```

4.  **Run the application**:
    ```bash
    uvicorn src.main:app --reload
    ```

## API Endpoints

-   `POST /query`: Query the RAG chatbot.
    -   **Request Body**:
        ```json
        {
          "query_text": "What is AI?",
          "mode": "full-book",
          "selected_text": null
        }
        ```
    -   **Response Body**:
        ```json
        {
          "answer_text": "AI is...",
          "citations": ["chapter1.md...", "chapter2.md..."]
        }
        ```
