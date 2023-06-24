import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" type="button" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
