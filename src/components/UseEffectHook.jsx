import React from 'react'
import { useState, useEffect } from 'react'

const UseEffectHook = () => {

    const [users, setusers] = useState([]);

    useEffect (()=>{
        fetch("https://jsonPlaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=>setusers(data))
        .catch((err)=>console.log((err))
        )
    },[])
  return (
    <div>
      
    </div>
  )
}

export default UseEffectHook
