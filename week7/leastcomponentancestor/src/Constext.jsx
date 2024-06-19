import { createContext } from "react";
//1.  to declare the context
// 2. to wrap where we are using it

//without using redux /reuse we can use reducer useReducer

export const CountContext = createContext({ count, setCount });
