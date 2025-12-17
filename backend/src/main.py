from fastapi import FastAPI
from backend.src.api import chat

app = FastAPI()

app.include_router(chat.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}
