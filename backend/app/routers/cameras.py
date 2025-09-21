# backend/app/routers/cameras.py
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import select
from app.db import get_session
from app.models import Camera

router = APIRouter()

@router.post("/", response_model=Camera)
def add_camera(cam: Camera, session=Depends(get_session)):
    session.add(cam)
    session.commit()
    session.refresh(cam)
    return cam

@router.get("/", response_model=list[Camera])
def list_cameras(session=Depends(get_session)):
    cams = session.exec(select(Camera)).all()
    return cams
