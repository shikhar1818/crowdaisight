import { useEffect, useState,} from "react";
import { connectWebSocket, fetchLatestDetection } from "../hooks/useCrowd";

export default function LiveFeed({ cameraId }: { cameraId: number }) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetchLatestDetection(cameraId).then((d) => setCount(d.people_count));

    const ws = connectWebSocket(cameraId, (msg) => {
      if (msg.type === "detection") {
        setCount(msg.people_count);
      }
    });

    return () => ws.close();
  }, [cameraId]);

  return <div>People Count: {count}</div>;
}
