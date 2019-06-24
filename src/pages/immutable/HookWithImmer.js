import React, { useState } from 'react';
import { useImmer } from 'use-immer';

const HookWithImmer = () => {
  const [person, updatePerson] = useImmer({
    name: 'Michel',
    age: 33
  });

  const [per, setCount] = useState({
    name: 'jin',
    age: 20
  });

  function updateName(name) {
    updatePerson(draft => {
      draft.name = name;
    });
  }

  function becomeOlder() {
    updatePerson(draft => {
      //   draft.age++;
      draft.age = 33; // 设置为之前的值，组件不会更新
    });
  }

  function plusCount() {
    setCount(count => {
      count.age = count.age + 1;
      return count; // 返回同一个引用 组件不会更新，这跟setState有很大的区别
      // setState返回的值是用一个引用，依然会触发组件更新
    });
  }

  console.info('rerender');

  return (
    <div className="App">
      <h1>
        Hello {person.name} ({person.age})
      </h1>
      <input
        onChange={e => {
          updateName(e.target.value);
        }}
        value={person.name}
      />
      <br />
      <button onClick={becomeOlder}>Older</button>
      <p />
      <div>count:{per.age}</div>
      <button onClick={plusCount}>plus count</button>
    </div>
  );
};

export default HookWithImmer;
