import { useEffect, useState } from "react";
import axios from "axios";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  function Todo({ title, description }) {
    return (
      <>
        <h1>{title}</h1>
        {description}
      </>
    );
  }

  const [todos, Settodos] = useState([]);

  async function main() {
    useEffect(() => {
      //useEffect
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        Settodos(res.data.todos);
      });
    }, []);
  }

  useEffect(() => {
    main();
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

export default App;
