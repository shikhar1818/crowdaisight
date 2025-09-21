export async function fetchCameras() {
  const res = await fetch("http://127.0.0.1:8000/api/cameras");
  return res.json();
}

export async function fetchLatestDetection(cameraId: number) {
  const res = await fetch(`http://127.0.0.1:8000/api/detections/last?camera_id=${cameraId}`);
  return res.json();
}

export function connectWebSocket(cameraId: number, onMessage: (msg: any) => void) {
  const ws = new WebSocket(`ws://127.0.0.1:8000/ws/stream/${cameraId}`);
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    onMessage(msg);
  };
  return ws;
}
