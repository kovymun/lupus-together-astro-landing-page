from fastapi import FastAPI

app = FastAPI()


# Test GET Request
@app.get("/")
async def read_root():
    return {"message": "Lupus Together Backend is running!"}
