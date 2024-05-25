import { useState } from "react";

import "./App.css";
let count = 4;
function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "go to gym", description: "i train hard" },
    { id: 2, title: "go to gym", description: "i train hard" },
    { id: 3, title: "go to gym", description: "i train hard" },
  ]);

  function addtodo() {
    setTodos([
      ...todos,
      {
        id: count++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addtodo}>add</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </>
  );
}


export default App;

// function addtodo() {
//   const newtodos = [];
//   for (let i = 0; i < todos.length; i++) {
//     newtodos.push(todos[i]);
//   }
//   newtodos.push({
//     id: 4,
//     title: Math.random(),
//     description: Math.random(),
//   });
//   setTodos[newtodos];
// }
