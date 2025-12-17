import os
import argparse
from langchain.text_splitter import RecursiveCharacterTextSplitter
from qdrant_client import QdrantClient, models
from openai import OpenAI

# Initialize the OpenAI client
openai_client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Initialize the Qdrant client
qdrant_client = QdrantClient(
    url=os.environ.get("QDRANT_URL"),
    api_key=os.environ.get("QDRANT_API_KEY"),
)

def get_embedding(text, model="text-embedding-3-small"):
   text = text.replace("\n", " ")
   return openai_client.embeddings.create(input = [text], model=model).data[0].embedding

def ingest_documents(directory: str, collection_name: str):
    # Create a new collection in Qdrant if it doesn't exist
    try:
        qdrant_client.recreate_collection(
            collection_name=collection_name,
            vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE),
        )
    except Exception as e:
        print(f"Collection already exists: {e}")


    # Read all Markdown files from the specified directory
    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            with open(os.path.join(directory, filename), "r", encoding="utf-8") as f:
                content = f.read()

            # Chunk the content
            text_splitter = RecursiveCharacterTextSplitter(
                chunk_size=700,
                chunk_overlap=100,
                length_function=len,
            )
            chunks = text_splitter.split_text(content)

            # Generate embeddings and store them in Qdrant
            for i, chunk in enumerate(chunks):
                embedding = get_embedding(chunk)
                qdrant_client.upsert(
                    collection_name=collection_name,
                    points=[
                        models.PointStruct(
                            id=f"{filename}-{i}",
                            vector=embedding,
                            payload={"text": chunk, "source": filename},
                        )
                    ],
                )

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Ingest Markdown documents into Qdrant.")
    parser.add_argument("--path", type=str, required=True, help="The path to the directory with Markdown files.")
    parser.add_argument("--collection", type=str, required=True, help="The name of the Qdrant collection.")
    args = parser.parse_args()

    ingest_documents(args.path, args.collection)
