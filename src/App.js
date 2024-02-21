import React, { useReducer, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  // Reducer함수에서 다른 상태를 참조하는것은 좋지 않다
  // 매개변수, 리턴값만 있으면 됨
  function countReducer(prevCount, action) {
    if (action.type === 'UP') {
      return prevCount + action.number;
    } else if (action.type === 'DOWN') {
      return prevCount - action.number;
    } else if (action === 'RESET') return 0;
  }
  const [count, countDispatch] = useReducer(countReducer, 0);

  function up() {
    countDispatch({ type: 'UP', number: number });
  }
  function down() {
    countDispatch({ type: 'DOWN', number: number });
  }
  function reset() {
    countDispatch('RESET');
  }
  function changeNumber(event) {
    setNumber(Number(event.target.value));
  }

  return (
    <>
      <input type='button' value='-' onClick={down} />
      <input type='button' value='0' onClick={reset} />
      <input type='button' value='+' onClick={up} />

      <span>{count}</span>
      <input type='text' value={number} onChange={changeNumber} />
    </>
  );
}

export default App;
