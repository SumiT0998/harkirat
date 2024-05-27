import { useMemo, useState } from "react";
import "./App.css";
function App() {
  const [counter, setcounter] = useState(0);
  const [inputvalue, setinputvalue] = useState(1);

  let count = useMemo(() => {
    let finalcount = 0;
    for (let i = 1; i <= inputvalue; i++) {
      ///useMemo=> memoize the value across re-renders only re calculate if inputval changed
      finalcount = finalcount + i;
    }
    return finalcount;
  }, [inputvalue]);

  return (
    <>
      <input
        onChange={function (e) {
          setinputvalue(e.target.value);
        }}
        placeholder={"sum 1 to n"}
      />
      <br />
      <br />
      <br></br>
      sum from 1 to {inputvalue} is {count}
      <br />
      <br />
      <button
        onClick={() => {
          setcounter(counter + 1);
        }}
      >
        counter {counter}
      </button>
    </>
  );
}

export default App;
