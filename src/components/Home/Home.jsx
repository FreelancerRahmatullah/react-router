import React, { useState } from 'react'

export default function Home() {
    const [count, setCount] = useState(0);
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Counter App</h1>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>

    </div>
  )
}
