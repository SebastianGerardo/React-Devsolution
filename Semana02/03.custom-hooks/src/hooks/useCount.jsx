import { useState } from "react";

export function useCount (initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const addCount = () => {
    setCount(prev => prev + 1)
  }

  const restartCount = () => {
    setCount(prev => prev - 1)
  }

  return {
    count,
    addCount,
    restartCount
  }
}