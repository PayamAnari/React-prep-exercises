import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';

  const addOne = () => {
    setCount(count + 1);
  };
  const subtractOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const addTwo = () => {
    setCount(count + 2);
  };
  const subtractTwo = () => {
    if (count > 0) {
      setCount(count - 2);
    }
  };

  return (
    <div>
      <h2>{feedback}</h2>
      <Count count={count} />
      <Button
        addOne={addOne}
        subtractOne={subtractOne}
        addTwo={addTwo}
        subtractTwo={subtractTwo}
      />
    </div>
  );
};

export default Counter;
