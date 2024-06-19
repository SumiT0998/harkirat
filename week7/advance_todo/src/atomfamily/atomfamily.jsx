import { atomFamily } from "recoil";
import { Todos } from "../Todos";

export const todosatomfamily = atomFamily({
  key: "todosatomfamily",
  default: (id) => {
    return Todos.find((x) => x.id === id);
  },
});

// const todoAtom = atom({
//     key: "todoAtom",
//     default: 1,
//   });
