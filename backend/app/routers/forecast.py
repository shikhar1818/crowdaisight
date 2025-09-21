# backend/app/routers/forecast.py
from fastapi import APIRouter, Depends
from app.db import get_session
from app.models import Detection
from sqlmodel import select
from app.services.forecast_service import forecast_counts

router = APIRouter()

@router.get("/{camera_id}")
def get_forecast(camera_id: int, minutes: int = 5, session=Depends(get_session)):
    # gather last N detections (one per minute ideally)
    stmt = select(Detection).where(Detection.camera_id == camera_id).order_by(Detection.timestamp.desc()).limit(30)
    rows = session.exec(stmt).all()
    counts = [r.people_count for r in reversed(rows)]
    # steps equal to minutes
    preds = forecast_counts(counts, steps=minutes)
    return {"camera_id": camera_id, "predictions": preds, "interval_seconds": 60}
