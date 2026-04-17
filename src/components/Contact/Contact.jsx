import React, { useEffect, useState } from 'react'

export default function Contact() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // alert("Welcome to my UseEffect Use page")
    }, [])
  return (
    <div>
      <h1>useEffect Use</h1>
      <p>You are {count} time clicked</p>
      <button onClick={() => setCount(count + 1)}>Clicked</button>
    </div>
  )
}
