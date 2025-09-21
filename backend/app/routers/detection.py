# backend/app/routers/detections.py
from fastapi import APIRouter, Depends, HTTPException
from app.db import get_session
from app.services.detection_service import store_detection
from app.models import Detection
from sqlmodel import select
import json

router = APIRouter()

@router.post("/result")
def post_result(payload: dict, session=Depends(get_session)):
    camera_id = int(payload.get("camera_id", 0))
    people_count = int(payload.get("people_count", 0))
    boxes = payload.get("boxes", [])
    det = store_detection(session, camera_id, people_count, boxes)
    return {"status": "ok", "detection_id": det.id}

@router.get("/last")
def last_detection(camera_id: int, session=Depends(get_session)):
    stmt = select(Detection).where(Detection.camera_id == camera_id).order_by(Detection.timestamp.desc()).limit(1)
    res = session.exec(stmt).first()
    if not res:
        return {"camera_id": camera_id, "people_count": 0, "timestamp": None}
    boxes = []
    try:
        boxes = json.loads(res.raw_boxes_json) if res.raw_boxes_json else []
    except:
        boxes = []
    return {
        "camera_id": camera_id,
        "people_count": res.people_count,
        "timestamp": res.timestamp.isoformat(),
        "boxes": boxes
    }
