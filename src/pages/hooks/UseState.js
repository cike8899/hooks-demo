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
  const [form, setValues] = useState({ username: "", password: "" });

  const handleClick = () => {
    setCount(pre => pre + 1);
  };

  const submit = () => {
    setValues(val => {
      val.username = "xx" + 1;
      return val;
    });
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
      <p>
        <p>
          <label htmlFor="">username:</label>
          <span>{form.username}</span>
        </p>
        <button type="button" onClick={submit}>
          submit
        </button>
      </p>
      <Counter parentCount={count} />
    </div>
  );
};

export default UseState;
