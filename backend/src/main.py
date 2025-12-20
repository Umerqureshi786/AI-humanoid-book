from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.src.api import chat

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://umerqureshi786.github.io",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}
