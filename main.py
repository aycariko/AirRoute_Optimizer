from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from auth import login_routes
from dashboard import dashboard_routes

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

# En önemlisi bu 2 satır:
app.include_router(login_routes)
app.include_router(dashboard_routes)

@app.get("/")
def read_root():
    return {"message": "AirRoute Optimizer API'ye hoş geldiniz 🚀"}
