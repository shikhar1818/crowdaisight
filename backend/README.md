# Smart Crowd Backend (SQLite + YOLOv8n CPU demo)

## Setup (local)

1. Create and activate venv:
   python -m venv venv
   source venv/bin/activate   # mac/linux
   venv\Scripts\activate      # windows

2. Install dependencies:
   pip install -r requirements.txt

3. Run FastAPI:
   cd backend
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

4. (Optional) Start YOLO worker (in another terminal):
   export BACKEND_URL=http://127.0.0.1:8000/api/detections/result
   export SOURCE=0               # webcam, or path to video, or rtsp://...
   python worker/yolo_worker.py

## Frontend (Lovable) integration
- Point fetch requests to http://127.0.0.1:8000
- WebSocket: ws://127.0.0.1:8000/ws/stream/{camera_id}
- Example endpoint used by frontend: GET http://127.0.0.1:8000/api/detections/last?camera_id=1
