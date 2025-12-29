import React from 'react'
import { useEffect, useState } from 'react'

const Restapi = () => {
const [users, setUser] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(( res )=>{if(!res.ok){
        throw new Error("Failed to fetch users");
    }
return res.json();
})
.then((data)=>{
    setUser(data);
    setLoading(false);
})
.catch((err)=>{
    setError(err.message);
    setLoading(false);
})

}, [])
if(loading) return <h2>Loading...</h2>
if(error) return <h2>{error}</h2>


  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
}
export default Restapi
