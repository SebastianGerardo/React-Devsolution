import { useState } from "react";

export function useCountObject ({ initial = 2 } = {}) {
  const [count, setCount] = useState(initial)

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