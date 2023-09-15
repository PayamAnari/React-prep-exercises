import React from 'react';

const Button = ({ addOne, subtractOne, addTwo, subtractTwo }) => {
  return (
    <div className="container-btn">
      <button className="btn" onClick={addOne}>
        Add 1
      </button>
      <button className="btn2" onClick={subtractOne}>
        Subtract 1
      </button>
      <button className="btn" onClick={addTwo}>
        Add 2
      </button>
      <button className="btn2" onClick={subtractTwo}>
        Subtract 2
      </button>
    </div>
  );
};

export default Button;
