import { memo, useCallback, useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("hi there");
  }, []);

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction}></ButtonComponent>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        click me {count}
      </button>
    </div>
  );
}
const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={inputFunction}>button clicked</button>
    </div>
  );
});

export default App;
