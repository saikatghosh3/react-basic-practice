import React from 'react'
import { useReducer } from 'react'

const initialState = 0;

function reducer(state, action){
    switch(action.type){
        case "INCREMENT" :
            return state  + 1;
            case "DECREMENT" :
                return state -1;
                case "RESET":
                        return 0;
                        
                        default:
                            return state;
    }
}




const Reducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
    
    <h2 className="text-2xl font-semibold mb-6">
      Count: <span className="text-blue-600">{count}</span>
    </h2>

    <div className="flex gap-3 justify-center">
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition active:scale-95"
      >
        +
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition active:scale-95"
      >
        −
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition active:scale-95"
      >
        Reset
      </button>
    </div>

  </div>
</div>

  )
}

export default Reducer;
