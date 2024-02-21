import React, { useReducer } from 'react';

function App() {
  function countReducer(prevCount, action) {
    if (action === 'UP') {
      return prevCount + 1;
    } else if (action === 'DOWN') {
      return prevCount - 1;
    } else if (action === 'RESET') return 0;
  }
  const [count, countDispatch] = useReducer(countReducer, 0);

  function up() {
    countDispatch('UP');
  }
  function down() {
    countDispatch('DOWN');
  }
  function reset() {
    countDispatch('RESET');
  }

  return (
    <>
      <input type='button' value='-' onClick={down} />
      <input type='button' value='0' onClick={reset} />
      <input type='button' value='+' onClick={up} />
      <span>{count}</span>
    </>
  );
}

export default App;
