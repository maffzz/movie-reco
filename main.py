from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import random
from pathlib import Path

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],)

@app.get("/random-movie")
def get_random_movie():
    movies_path = Path(__file__).parent / "movies.json"
    with open(movies_path, "r") as f:
        movies = json.load(f)
    return random.choice(movies)