# backend/app/db.py
import os
from sqlmodel import create_engine, SQLModel, Session
from app.models import Camera, Detection, Alert, Zone, User

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./smartcrowd.db")
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(DATABASE_URL, echo=False, connect_args=connect_args)

def init_db():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session
