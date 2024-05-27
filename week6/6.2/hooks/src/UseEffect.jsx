import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pageid, Setpageid] = useState(1);

  return (
    <>
      <button
        onClick={() => {
          Setpageid(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          Setpageid(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          Setpageid(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          Setpageid(4);
        }}
      >
        4
      </button>

      <Todo id={pageid} />
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodos] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
      setTodos(res.data.todo);
    });
  }, [id]); //dependency  => to tell it re-ren whenever the id changes

  return (
    <>
      Id:{id}
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </>
  );
}

export default App;
