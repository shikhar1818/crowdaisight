# backend/app/routers/heatmap.py
from fastapi import APIRouter, Depends
from app.db import get_session
from app.models import Detection
from sqlmodel import select
from app.services.heatmap_service import compute_heatmap
import json

router = APIRouter()

@router.get("/{camera_id}")
def get_heatmap(camera_id: int, grid: int = 10, last_n: int = 1, session=Depends(get_session)):
    # use last detection(s)
    stmt = select(Detection).where(Detection.camera_id == camera_id).order_by(Detection.timestamp.desc()).limit(last_n)
    rows = session.exec(stmt).all()
    if not rows:
        return {"camera_id": camera_id, "grid_size": grid, "cells": [[0]*grid for _ in range(grid)], "timestamp": None}
    # take boxes from most recent
    boxes = []
    try:
        boxes = json.loads(rows[0].raw_boxes_json) if rows[0].raw_boxes_json else []
    except:
        boxes = []
    # assume frame size placeholder - update if worker sends frame_w/frame_h later
    frame_w, frame_h = 1280, 720
    grid_cells = compute_heatmap(boxes, frame_w, frame_h, grid_size=grid)
    return {"camera_id": camera_id, "grid_size": grid, "cells": grid_cells, "timestamp": rows[0].timestamp.isoformat()}
