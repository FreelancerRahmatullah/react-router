import React from "react";

const myProjects = [
  { id: 1, title: "Counter App", desc: "Create useState app" },
  { id: 2, title: "User List", desc: "Call api data" },
  { id: 3, title: "Input Handel", desc: "From input practice" },
];

export default function Project() {
  return (
    <div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {myProjects.map((project) => (
          <div
            key={project.id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
              boxShadow: "0 4px 8px #cfc",
            }}
          >
            <h3>Title: {project.title}</h3>
            <p>Description: {project.desc}</p>
            <button
              style={{
                background: "blue",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Show More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
