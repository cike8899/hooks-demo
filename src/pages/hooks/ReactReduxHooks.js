import React, { useState, useReducer } from "react";

// const useUpdate = () => useState(0)[1];

const useUpdate = () => {
  const [, setState] = useState(0);
  return () => setState(cnt => cnt + 1);
};

const ReactReduxHooks = () => {
  //   const [count, setCount] = useState(0);
  const update = useUpdate();
  const [, forceRender] = useReducer(s => s + 1, 0);
  console.info("update");
  const onClick = () => {
    forceRender();
  };
  return (
    <div>
      ReactReduxHooks
      {/* {count} */}
      <button type="button" onClick={onClick}>
        click
      </button>
    </div>
  );
};

export default ReactReduxHooks;
