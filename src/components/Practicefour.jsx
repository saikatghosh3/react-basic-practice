import React, { useState } from 'react'

const Practicefour = () => {
  const [showText, setShowText] = useState(true);

  const toggleHandler = () => {
    setShowText(!showText); 
  };

  return (
    <div>
      {showText && (
        <p>This text will hide/show when the button is clicked.</p>
      )}

      <button 
        onClick={toggleHandler}  
        className='border-2 text-black bg-blue-600 px-4 py-2'
      >
        Click Me
      </button>
    </div>
  );
};

export default Practicefour;
