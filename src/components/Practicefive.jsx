// ⭐ Practice Problem 5: Simple Form Submission 

import React from 'react'
import { useState } from 'react'

const Practicefive = () => {
       
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
       const [submitted, setSubmitted] = useState(false);

       const submitHandler = (e)=>{
        e.preventDefault();

        if(name === "" || email ==="" || password === ""){
            alert("please  fill all the fields");
            return;
        }
        setSubmitted(true)
       }

      
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)} 
        />
            
              <input 
          type="email" 
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="password" 
        placeholder='Enter your password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}/>

             <button type="submit">Submit</button>
      </form>

         
      {submitted && (
        <p style={{ color: "green" }}>
          Form submitted successfully!
        </p>
           )}
    </div>
  )
}

export default Practicefive
