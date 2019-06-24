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
      draft.age = 33;
    });
  }

  function plusCount() {
    setCount(count => {
      count.age = count.age + 1;
      return count;
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
