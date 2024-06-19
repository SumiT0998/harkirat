import { useContext, useState } from "react";
import { CountContext } from "./Constext";

function App() {
  const [count, setCount] = useState(0);

  return (
    // wraping components in context .provide where i want to use it without involving another components
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <Countrenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function Countrenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
export default App;
