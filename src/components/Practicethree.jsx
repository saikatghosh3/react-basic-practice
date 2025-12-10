// ⭐ Practice Problem 3: Toggle Background Color 

// the below one is for one click but if we want it will be like toggle then the code will below this code 
// import React from 'react'
// import { useState } from 'react';

// const Practicethree = () => {
//     const [color, setColor] = useState("bg-white");
//     const changeHandler = (e)=>{
//         setColor("bg-black");
//         e.preventDefault();

//     }
//   return (
//     <>
//     <div className={`${color} border-2 border-e-black  w-[500px] h-[500px]` }>
//         <br />
//         <button className='border-2 bg-red-700 text-black' onClick={changeHandler}> Click me </button>
       
//     </div>
//     </>
//   )
// }

// export default Practicethree


// this one is toggle between two color 

import React from 'react'
import { useState } from 'react';

const Practicethree = () => {
    const [isBlack, setIsBlack] = useState(false);
    const changeHandler = (e)=>{
        setIsBlack(!isBlack)

    }
  return (
    <>
    <div className={`${isBlack ? "bg-black" : "bg-white "} border-2 border-e-black  w-[500px] h-[500px]` }>
        <br />
        <button className='border-2 bg-red-700 text-black' onClick={changeHandler}> Click me </button>
       
    </div>
    </>
  )
}

export default Practicethree
