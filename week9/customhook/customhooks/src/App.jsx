import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const { todos, loading } = useTodos();

  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
}
function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}
function useTodos() {
  // custom hook
  const [loading, setloading] = useState(true);
  const [todos, SetTodos] = useState([]);
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      SetTodos(res.data.todos);
      setloading(false);
    });
  }, []);
  return { todos, loading };
}
export default App;
