from fastapi import APIRouter
from backend.src.models.chat import Query, Answer
from backend.src.services.rag_service import RAGService

router = APIRouter()
rag_service = RAGService(collection_name="book_content") # Use a meaningful collection name

@router.post("/query", response_model=Answer)
async def query_chatbot(query: Query):
    if query.mode == "full-book":
        answer = rag_service.query_full_book(query)
    elif query.mode == "selected-text":
        answer = rag_service.query_selected_text(query)
    else:
        # Handle invalid mode, though Pydantic enum should prevent this
        answer = Answer(answer_text="Invalid query mode.", citations=[])
    return answer
