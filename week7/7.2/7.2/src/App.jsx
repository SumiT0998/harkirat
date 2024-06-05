// import { useContext, useState } from "react";
// import "./App.css";
// import { countContext } from "./context";

import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { Countatom } from "./store/atom/count";

//------main-body------------------------------------->
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}
// count------------------------------------------------>
function Count() {
  return (
    <>
      <CountRender />
      <br />
      <Button />
    </>
  );
}
//countrender --------------------------------------------->
function CountRender() {
  const count = useRecoilValue(Countatom);

  return <div>{count}</div>;
}

//button-------------------------------------------------->
function Button() {
  const [count, setCount] = useRecoilState(Countatom);
  return (
    <>
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
    </>
  );
}

export default App;
