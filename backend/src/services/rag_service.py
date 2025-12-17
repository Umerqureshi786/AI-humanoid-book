import os
from typing import List, Optional
from qdrant_client import QdrantClient
from qdrant_client.http.models import Filter, FieldCondition, MatchValue
from openai import OpenAI
from backend.src.models.chat import Query, Answer

class RAGService:
    def __init__(self, collection_name: str):
        self.collection_name = collection_name
        self.openai_client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
        self.qdrant_client = QdrantClient(
            url=os.environ.get("QDRANT_URL"),
            api_key=os.environ.get("QDRANT_API_KEY"),
        )
        self.embedding_model = "text-embedding-3-small"
        self.chat_model = "gpt-3.5-turbo"

    def get_embedding(self, text: str) -> List[float]:
        text = text.replace("\n", " ")
        return self.openai_client.embeddings.create(input=[text], model=self.embedding_model).data[0].embedding

    def retrieve_chunks(self, query_vector: List[float], limit: int = 5) -> List[str]:
        search_result = self.qdrant_client.search(
            collection_name=self.collection_name,
            query_vector=query_vector,
            limit=limit,
        )
        return [hit.payload["text"] for hit in search_result]

    def generate_answer(self, query_text: str, context: List[str]) -> str:
        # Placeholder for OpenAI Agents / ChatKit SDK integration
        # For now, a simple prompt to demonstrate RAG
        messages = [
            {"role": "system", "content": "You are a helpful assistant that answers questions based on the provided context. If the answer is not found in the context, respond with 'This information is not explicitly covered in the book.'"},
            {"role": "user", "content": f"Context: {" ".join(context)}\n\nQuestion: {query_text}"}
        ]
        response = self.openai_client.chat.completions.create(
            model=self.chat_model,
            messages=messages
        )
        return response.choices[0].message.content

    def query_full_book(self, query: Query) -> Answer:
        query_vector = self.get_embedding(query.query_text)
        retrieved_chunks = self.retrieve_chunks(query_vector)
        answer_text = self.generate_answer(query.query_text, retrieved_chunks)
        # Placeholder for citation extraction
        citations = [chunk[:50] + "..." for chunk in retrieved_chunks] # Simple placeholder
        return Answer(answer_text=answer_text, citations=citations)

    def query_selected_text(self, query: Query) -> Answer:
        # For selected-text-only mode, bypass vector retrieval
        context = [query.selected_text] if query.selected_text else []
        answer_text = self.generate_answer(query.query_text, context)
        citations = ["Selected text"] # Simple placeholder
        return Answer(answer_text=answer_text, citations=citations)
