# backend/app/services/heatmap_service.py
from typing import List, Tuple

def compute_heatmap(boxes: List[Tuple[float,float,float,float]], frame_w:int, frame_h:int, grid_size=10):
    grid = [[0 for _ in range(grid_size)] for __ in range(grid_size)]
    for box in boxes:
        x1,y1,x2,y2 = box
        # normalize if necessary
        if max(box) <= 1.0:
            x1 *= frame_w; x2 *= frame_w; y1 *= frame_h; y2 *= frame_h
        cx = (x1 + x2) / 2.0
        cy = (y1 + y2) / 2.0
        gx = min(int(cx / (frame_w / grid_size)), grid_size - 1)
        gy = min(int(cy / (frame_h / grid_size)), grid_size - 1)
        grid[gy][gx] += 1
    return grid
