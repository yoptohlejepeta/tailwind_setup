from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles



app = FastAPI(
    docs_url="/",
    redoc_url=None,
    title="TAILWIND Setup",
)

app.mount("/static", StaticFiles(directory="./static"), name="static")

templates = Jinja2Templates(directory="./templates")

@app.get("/hello")
async def read_root():
    return {"message": "Hello World"}

# @app.get("/index")
# async def read_root(request: Request):
#     return templates.TemplateResponse("index.html", {"request": request})