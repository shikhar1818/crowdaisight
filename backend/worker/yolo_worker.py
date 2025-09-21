# backend/worker/yolo_worker.py
import time, requests, os
import cv2
from ultralytics import YOLO

BACKEND_URL = os.getenv("BACKEND_URL", "http://127.0.0.1:8000/api/detections/result")
MODEL_PATH = os.getenv("MODEL_PATH", "yolov8n.pt")
CAMERA_ID = int(os.getenv("CAMERA_ID", "1"))
SOURCE = os.getenv("SOURCE", "0")  # "0" for webcam, or path/rtsp url
SEND_INTERVAL = float(os.getenv("SEND_INTERVAL", "0.8"))

def parse_source(src):
    try:
        return int(src)
    except:
        return src

def run():
    print("Loading model:", MODEL_PATH)
    model = YOLO(MODEL_PATH)
    src = parse_source(SOURCE)
    cap = cv2.VideoCapture(src)
    while True:
        ret, frame = cap.read()
        if not ret:
            print("No frame, sleeping...")
            time.sleep(1)
            continue
        h, w = frame.shape[:2]
        # inference
        result = model(frame, imgsz=640)[0]
        boxes = []
        people_count = 0
        for b in result.boxes:
            cls = int(b.cls.cpu().numpy())
            if cls == 0:
                x1,y1,x2,y2 = b.xyxy[0].cpu().numpy().tolist()
                boxes.append([x1/w, y1/h, x2/w, y2/h])
                people_count += 1
        payload = {
            "camera_id": CAMERA_ID,
            "people_count": people_count,
            "boxes": boxes,
            "frame_w": w,
            "frame_h": h
        }
        try:
            requests.post(BACKEND_URL, json=payload, timeout=2)
        except Exception as e:
            print("Failed to post:", e)
        time.sleep(SEND_INTERVAL)

if __name__ == "__main__":
    run()
