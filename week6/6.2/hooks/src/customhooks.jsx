import axios from "axios";
import { useEffect, useState } from "react";

function useTodos() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    axios.get("").then((res) => {
      settodos(res.data.todos);
    });
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();

  return <div>{todos}</div>;
}

export default App;
