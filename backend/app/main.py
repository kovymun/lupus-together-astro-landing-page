from fastapi import FastAPI

app = FastAPI()


# Config Health check endpoint
@app.get("/")
def read_root():
    return {"status": "FastAPI backend is running"}
