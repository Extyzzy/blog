import React, { useState } from "react";

export default function Count({ }) {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="container mx-auto my-12 bg-green h-24 border-3">
      <div>
        Our count is equal = {count}
      </div>
      <div onClick={() => setCount(count + 1)}>
        Set + 1 COUNT
      </div>
      <div onClick={() => setCount(count - 1)}>
        Set - 1 COUNT
      </div>
      <div />
    </div>
  )
}