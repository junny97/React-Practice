import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { wonState, dollorState } from './atoms';
function App() {
  const [won, setWon] = useRecoilState(wonState);
  const [dollor, setDollor] = useRecoilState(dollorState);
  const wonOnChange = (e) => {
    setWon(Number(e.target.value));
  };

  const dollorOnChange = (e) => {
    setDollor(Number(e.target.value));
  };
  console.log(won);
  return (
    <>
      <input
        value={won}
        onChange={wonOnChange}
        type='number'
        placeholder='Won'
      />
      <input value={dollor} onChange={dollorOnChange} type='number' />
    </>
  );
}

export default App;
