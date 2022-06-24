import React, { useEffect, useRef, useState } from "react";

export default function useCountUp(
  second: number,
  end: number,
  slowPoint: number
) {
  const [count, setCount] = useState(0);
  const requestRef = useRef<number>(0);
  const slowCountRef = useRef<number>(0);

  const SLOWSTARTTIME = 50;

  const frame = second * 60;
  const slowEndTime = frame - SLOWSTARTTIME;
  const frameSlowOneCount = Math.floor(slowEndTime / (end - slowPoint));

  const animate = () => {
    if (requestRef.current! > frame) {
      setCount(end);
      return;
    }

    if (requestRef.current! <= SLOWSTARTTIME) {
      setCount((prevCount) => prevCount + end / SLOWSTARTTIME);
    }

    if (requestRef.current! === SLOWSTARTTIME) setCount(slowPoint);

    if (requestRef.current! > SLOWSTARTTIME && frameSlowOneCount !== 0) {
      slowCountRef.current += 1;
      if (slowCountRef.current >= frameSlowOneCount) {
        setCount((prev) => {
          if (prev === end) return prev;
          return prev + 1;
        });
        slowCountRef.current = 0;
      }
    }

    if (frameSlowOneCount === 0) {
      setCount((prevCount) => prevCount + (end - slowPoint) / 80);
    }

    requestRef.current! += 1;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current!);
    };
  }, []);

  return Math.floor(count);
}
