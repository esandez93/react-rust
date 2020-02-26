import React, { useState, useEffect } from 'react';

const wasmLib = import('esandez-hello-wasm');

const LOOP_COUNT = 1000000000;

const App = () => {
  const [ name, setName ] = useState('');
  const [ wasm, setWasm ] = useState({});
  const [ time, setTime ] = useState({ js: null, rust: null });

  useEffect(() => {
    setTimeout(() => wasmLib.then(setWasm), 1000);
  }, []);

  const runLoops = () => {
    // Rust
    const rustStart = performance.now()

    wasm.long_loop(LOOP_COUNT);

    const rustEnd = performance.now();

    // JS
    const jsStart = performance.now();
    let z = 0;

    for (let _x = 0; _x < LOOP_COUNT; _x++) {
      z = z + 2;
    }

    const jsEnd = performance.now();

    setTime({
      rust: rustEnd - rustStart,
      js: jsEnd - jsStart
    });
  };

  const getPerformanceResult = () => {
    let winner = null;
    let percentage = null;

    if (time.rust > time.js) {
      winner = 'JavaScript';
      percentage = time.rust / time.js * 100;
    } else {
      winner = 'Rust';
      percentage = time.js / time.rust * 100;
    }

    return `${winner} is ${percentage}% faster`;
  }

  return (
    <div className="App">
      <input value={name} onChange={({ target: { value }}) => setName(value)}/>
      <button onClick={
        wasm.greet
          ? () => wasm.greet(name)
          : () => console.log('wasm not loaded yet', wasm)
        }
      >Greet</button>

      <div>
        <h2>Loop Comparison</h2>
        <div>
          <button onClick={runLoops}>Run</button>
        </div>
        <div>
          <h3>Rust</h3>
          <span>Time spent: {time.rust}ms</span>
        </div>
        <div>
          <h3>JavaScript</h3>
          <span>Time spent: {time.js}ms</span>
        </div>

        {time.rust && time.js &&
          <h2>{getPerformanceResult()}</h2>
        }
      </div>
    </div>
  );
};

export default App;
