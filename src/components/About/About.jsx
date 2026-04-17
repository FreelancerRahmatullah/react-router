import React, { useState } from "react";

export default function About() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>User Input Practice</h1>
      <input
        type="text"
        placeholder="Input your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{padding: "10px", fontSize: " 20px"}}
      />
      <h2>{name ? name: "No my Friend"}</h2>
      <button onClick={() => setName(" ")}>Clear</button>
    </div>
  );
}
