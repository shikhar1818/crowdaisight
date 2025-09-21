# backend/app/services/detection_service.py
import json, asyncio
from datetime import datetime
from app.models import Detection, Alert, Camera
from app.managers import manager

def _async_broadcast(payload, camera_id):
    # schedule broadcast
    asyncio.create_task(manager.broadcast(payload, camera_id=str(camera_id)))

def store_detection(session, camera_id: int, people_count: int, boxes: list):
    det = Detection(camera_id=camera_id, people_count=people_count, raw_boxes_json=json.dumps(boxes))
    session.add(det)
    session.commit()
    session.refresh(det)

    # create alert if threshold crossed
    cam = session.get(Camera, camera_id)
    threshold = cam.threshold_count if cam else 50
    if people_count > threshold:
        alert = Alert(camera_id=camera_id, severity="high", message=f"Overcrowding detected: {people_count} people")
        session.add(alert)
        session.commit()
        session.refresh(alert)
        _async_broadcast({
            "type": "alert",
            "camera_id": camera_id,
            "severity": alert.severity,
            "message": alert.message,
            "timestamp": alert.timestamp.isoformat()
        }, camera_id)

    # broadcast detection
    _async_broadcast({
        "type": "detection",
        "camera_id": camera_id,
        "people_count": people_count,
        "timestamp": det.timestamp.isoformat()
    }, camera_id)
    return det
