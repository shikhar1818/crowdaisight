# backend/app/routers/ws.py
from fastapi import APIRouter, WebSocket
from app.managers import manager

router = APIRouter()

@router.websocket("/stream/{camera_id}")
async def stream(websocket: WebSocket, camera_id: str):
    await manager.connect(websocket, camera_id)
    try:
        while True:
            # keep connection alive; client may send pings or keep-alive messages
            data = await websocket.receive_text()
            # we don't need to process client messages right now
    except Exception:
        manager.disconnect(websocket, camera_id)
