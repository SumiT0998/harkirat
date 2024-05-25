import { useState } from "react";
import { Fragment } from "react";

function App() {
  const [title, setTitle] = useState("my name is sumit");

  function updateTitle() {
    let cal = Math.random();
    setTitle("my name is " + cal);
  }
  return (
    <Fragment>
      <button onClick={updateTitle}>click to update</button>
      <Header title={title}></Header>
      <Header title="amit"></Header>
    </Fragment>
  );
}

function Header({ title }) {
  console.log("rerenderd");
  return <div>{title}</div>;
}

export default App;
