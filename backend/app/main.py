# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db import init_db
from app.routers import cameras, detections, heatmap, forecast, ws as ws_router, alerts

app = FastAPI(title="Smart Crowd Backend")

# Allow your local frontend; in production restrict this to your domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    init_db()

app.include_router(cameras.router, prefix="/api/cameras", tags=["cameras"])
app.include_router(detections.router, prefix="/api/detections", tags=["detections"])
app.include_router(heatmap.router, prefix="/api/heatmap", tags=["heatmap"])
app.include_router(forecast.router, prefix="/api/forecast", tags=["forecast"])
app.include_router(alerts.router, prefix="/api/alerts", tags=["alerts"])
app.include_router(ws_router.router, prefix="/ws", tags=["ws"])
