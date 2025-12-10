// Practice Problem 2: Input Field Live Update 
import React, { useState } from 'react'

const Practicetwo = () => {
  const [input, setInput] = useState('');
  
  const liveHandler = (e)=>{
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" 
      className='border-2 border-amber-950 text-black'
      value={input} 
    //   Without value={input}, input value will not be synced with react.
      onChange={liveHandler}
      placeholder='type something here...'
      /> 
      <br />
      <br />
      <textarea className='border-2 border-amber-950 text-black' name="text" id="" value={input} readOnly ></textarea>
    </div>
  )
}

export default Practicetwo
