import { useEffect, useRef, useState } from 'react'

interface UseCountUpType {
  second: number
  end: number
  slowPoint: number
}

export default function useCountUp({ second, end, slowPoint }: UseCountUpType) {
  const [count, setCount] = useState(0)
  const requestRef = useRef<number>(0)
  const slowCountRef = useRef<number>(0)

  const SLOWSTARTTIME = 50

  const frame = second * 60
  const slowEndTime = frame - SLOWSTARTTIME
  const frameSlowOneCount = Math.floor(slowEndTime / (end - slowPoint))

  const animate = () => {
    if (requestRef.current > frame) {
      return false
    }

    if (requestRef.current <= SLOWSTARTTIME) {
      setCount((prevCount) => prevCount + slowPoint / SLOWSTARTTIME)
    }

    if (requestRef.current === SLOWSTARTTIME) {
      setCount(slowPoint)
    }

    if (requestRef.current > SLOWSTARTTIME && frameSlowOneCount !== 0) {
      slowCountRef.current += 1
      if (slowCountRef.current >= frameSlowOneCount) {
        setCount((prev) => {
          if (prev === end) {
            return prev
          }
          return prev + 1
        })
        slowCountRef.current = 0
      }
    }

    if (frameSlowOneCount === 0) {
      setCount((prevCount) => prevCount + (end - slowPoint) / slowEndTime)
    }

    requestRef.current += 1
    requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(requestRef.current!)
    }
  }, [])

  return Math.floor(count)
}
