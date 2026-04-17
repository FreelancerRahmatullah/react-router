import React, { useEffect, useState } from "react";

export default function UserList() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not fetching");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
        setError(null)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false)
      });
  }, [])

  if (loading) return <h2>Data is loading</h2>;
  if (error) return <h2 style={{color: "red"}}>{error}</h2>
  return (
    <div>
      <h1>User list api</h1>
      <ul>
        {user.map((user) => ( <article style={{background: "green", border: "1px solid black", margin: " 10px", padding: "5px", borderRadius: "5px",}}>
          <li key={user.id}>
            <strong> Name: {user.name}</strong>
            <p>Email: {user.email}</p>
          </li>
          </article>
        ))}
      </ul>
    </div>
  );
}
