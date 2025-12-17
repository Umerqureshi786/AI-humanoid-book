from pydantic import BaseModel
from typing import List, Optional

class Query(BaseModel):
    query_text: str
    mode: str
    selected_text: Optional[str] = None

class Answer(BaseModel):
    answer_text: str
    citations: List[str]
