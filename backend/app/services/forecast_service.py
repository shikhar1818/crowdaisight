# backend/app/services/forecast_service.py
from sklearn.linear_model import LinearRegression
import numpy as np

def forecast_counts(recent_counts, steps=5):
    if not recent_counts:
        return [0] * steps
    if len(recent_counts) < 3:
        return [int(recent_counts[-1])] * steps
    X = np.arange(len(recent_counts)).reshape(-1,1)
    y = np.array(recent_counts)
    model = LinearRegression().fit(X,y)
    future_X = np.arange(len(recent_counts), len(recent_counts)+steps).reshape(-1,1)
    preds = model.predict(future_X)
    preds = [max(0, int(round(x))) for x in preds]
    return preds
