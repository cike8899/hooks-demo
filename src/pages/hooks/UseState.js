import React, { useState } from "react";

const calcCount = count => {
  return count + 2;
};

const Counter = ({ parentCount }) => {
  const [count, setCount] = useState(calcCount(parentCount));

  return <div>{count}</div>;
};

const UseState = () => {
  const [count, setCount] = useState(5);

  const handleClick = () => {
    setCount(pre => pre + 1);
  };

  return (
    <div style={{ padding: 100 }}>
      <p>
        <label>parent:</label> {count}
      </p>
      <p>
        <button type="button" onClick={handleClick}>
          Plus One
        </button>
      </p>
      <Counter parentCount={count} />
    </div>
  );
};

export default UseState;
