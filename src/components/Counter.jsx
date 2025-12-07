import React from 'react'
import { useState } from 'react'



const Counter = () => {
       
    const [dynamicCounter, setdynamicCounter] = useState(20);
    const [dynamicCounter2, setdynamicCounter2] = useState(30);


    
    const increasehandler = () =>{
        setdynamicCounter(dynamicCounter + 1);
    }
    
    const decreasehandler = () =>{
        setdynamicCounter(dynamicCounter - 1);
    }

    
    const increasehandler2 = () =>{
        setdynamicCounter2(dynamicCounter2 + 1);
    }
    
    const decreasehandler2 = () =>{
        setdynamicCounter2(dynamicCounter2 - 1);
    }
  return (
 <div className="min-h-screen flex justify-center items-center bg-gray-100">
  <div className="flex gap-10">

    {/* FIRST COUNTER */}
    <div className="bg-white shadow-lg p-6 rounded-2xl w-64 text-center">
      <h1 className="text-lg font-semibold mb-4">
        First Counter: <span className="text-blue-600">{dynamicCounter}</span>
      </h1>

      <div className="flex flex-col gap-3">
        <button
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          onClick={increasehandler}
        >
          Click +
        </button>

        <button
          className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          onClick={decreasehandler}
        >
          Click -
        </button>
      </div>
    </div>

   
    <div className="bg-white shadow-lg p-6 rounded-2xl w-64 text-center">
      <h1 className="text-lg font-semibold mb-4">
        Second Counter: <span className="text-blue-600">{dynamicCounter2}</span>
      </h1>

      <div className="flex flex-col gap-3">
        <button
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          onClick={increasehandler2}
        >
          Click +
        </button>

        <button
          className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          onClick={decreasehandler2}
        >
          Click -
        </button>
      </div>
    </div>

  </div>
</div>

  )
}

export default Counter



// state somporkito kisu discussion:
// johon kono button a click hoi , form submit hoi etc tokhon state change hoi. (counter dea state bojha sohoj)
// ak sathe component render ba re render hoiye thake. 
// portiti state change er sathe sathe akta render ba rerender hobar kahini jukto thake. even props er khetre ak e ghotona ghote 