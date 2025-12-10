// Practice Problem 1: Button Click Counter 

import React from 'react'
import { useState } from 'react';

const PracticeOne = () => {
    const [ counter, setCounter] = useState(0);


      const increaseHandler = ()=>{
        setCounter(counter + 1);
      }
      const decreaseHandler = ()=>{
        setCounter(counter - 1);
      }

  return (
    <div>
      <h1> The count is: {counter}</h1> <br />
      <button onClick={increaseHandler} className='border-2 py-2 px-4 bg-amber-800 text-white' >Increase</button>
      <button onClick={decreaseHandler} className='border-2 py-2 px-4 bg-amber-800 text-white' >decrease</button>
    </div>
  )
}

export default PracticeOne
