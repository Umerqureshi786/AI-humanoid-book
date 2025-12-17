import os
from qdrant_client import QdrantClient

# Get the Qdrant URL and API key from the environment variables
qdrant_url = os.environ.get("QDRANT_URL")
qdrant_api_key = os.environ.get("QDRANT_API_KEY")
openai_api_key = os.environ.get("OPENAI_API_KEY")

# Initialize the Qdrant client
qdrant_client = QdrantClient(
    url=qdrant_url,
    api_key=qdrant_api_key,
)
