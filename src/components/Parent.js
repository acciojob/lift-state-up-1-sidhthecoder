import React, { useState } from 'react';

const Parent = () => {
  const [modal, setModal] = useState(false);

//   const handleButtonClick = () => {
//     setModal(true);
//   };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child">
        <h2>Child Component</h2>
        <button onClick={()=>{setModal(true)}}>Show Modal</button>
        {modal && (
          <div>
            <h3>Modal Content</h3>
            <p>This is the modal content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Parent;
