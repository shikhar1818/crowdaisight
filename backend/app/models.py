# backend/app/models.py
from typing import Optional
from datetime import datetime
from sqlmodel import SQLModel, Field

class Camera(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    location: Optional[str] = None
    rtsp_url: Optional[str] = None
    is_active: bool = True
    threshold_count: Optional[int] = 50
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Zone(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    camera_id: Optional[int] = Field(default=None, foreign_key="camera.id")
    name: str
    x1: float = 0.0
    y1: float = 0.0
    x2: float = 1.0
    y2: float = 1.0
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Detection(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    camera_id: Optional[int] = Field(default=None, foreign_key="camera.id", index=True)
    timestamp: datetime = Field(default_factory=datetime.utcnow, index=True)
    people_count: int = 0
    raw_boxes_json: Optional[str] = None
    avg_density: Optional[float] = None

class Alert(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    camera_id: Optional[int] = Field(default=None, foreign_key="camera.id", index=True)
    timestamp: datetime = Field(default_factory=datetime.utcnow, index=True)
    severity: str = "low"
    message: str = ""
    handled: bool = False

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str
    full_name: Optional[str] = None
    hashed_password: str
    is_admin: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
