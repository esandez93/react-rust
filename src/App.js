import React, { useState, useEffect } from 'react';

const wasmLib = import('esandez-hello-wasm');

const App = () => {
  const [ name, setName ] = useState('');
  const [ wasm, setWasm ] = useState({});

  useEffect(() => {
    setTimeout(() => wasmLib.then(setWasm), 1000);
  }, []);

  return (
    <div className="App">
      <input value={name} onChange={({ target: { value }}) => setName(value)}/>
      <button onClick={
        wasm.greet
          ? () => wasm.greet(name)
          : () => console.log('wasm not loaded yet', wasm)
        }>Greet</button>
    </div>
  );
};

export default App;
