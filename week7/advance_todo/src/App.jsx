import { RecoilRoot, useRecoilValue } from "recoil";

import "./App.css";
import { todosatomfamily } from "./atomfamily/atomfamily";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosatomfamily(id));

  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  );
}

export default App;
