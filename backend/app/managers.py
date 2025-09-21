# backend/app/managers.py
from typing import Dict, List
from fastapi import WebSocket

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, List[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, camera_id: str = "global"):
        await websocket.accept()
        self.active_connections.setdefault(camera_id, []).append(websocket)

    def disconnect(self, websocket: WebSocket, camera_id: str = "global"):
        if camera_id in self.active_connections:
            if websocket in self.active_connections[camera_id]:
                self.active_connections[camera_id].remove(websocket)

    async def broadcast(self, message: dict, camera_id: str = "global"):
        conns = []
        conns += self.active_connections.get(camera_id, [])
        conns += self.active_connections.get("global", [])
        for conn in conns:
            try:
                await conn.send_json(message)
            except:
                pass

manager = ConnectionManager()
