import { useState } from "react";
import { Fragment } from "react";

function App() {
  // const [title, setTitle] = useState("my name is sumit");       --> this creates re renders
  // function updateTitle() {
  //   let cal = Math.random();
  //   setTitle("my name is " + cal);

  return (
    <>
      <Headerwithbutton></Headerwithbutton>
      {/* //with this we overcome rerenders */}
      <Header title="amit"></Header>
      <Header title="amiasdat"></Header>
      <Header title="asa"></Header>
      <Header title="amiasdat"></Header>
      <Header title="amiasdat"></Header>
      <Header title="amiasdt"></Header>
    </>
  );
}

function Headerwithbutton() {
  const [title, setTitle] = useState("my name is sumit");

  function changeTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    <>
      <button onClick={changeTitle}>click to change</button>
      <Header title={title}></Header>
    </>
  );
}

function Header({ title }) {
  console.log("rerenderd");
  return <div>{title}</div>;
}

export default App;
