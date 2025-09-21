# backend/app/routers/alerts.py
from fastapi import APIRouter, Depends
from app.db import get_session
from app.models import Alert
from sqlmodel import select

router = APIRouter()

@router.get("/")
def list_alerts(limit: int = 50, session=Depends(get_session)):
    stmt = select(Alert).order_by(Alert.timestamp.desc()).limit(limit)
    rows = session.exec(stmt).all()
    return rows
