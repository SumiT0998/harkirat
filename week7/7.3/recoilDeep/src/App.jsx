import { useState } from "react";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";

import "./App.css";
import {
  jobAtom,
  messaageAtom,
  networkAtom,
  notificationAtom,
  totalnotification,
  
} from "./atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobcount = useRecoilValue(jobAtom);
  const notificationcount = useRecoilValue(notificationAtom); // value used for using default value
  const messagecount = useRecoilValue(messaageAtom); //state used for changing state of default value

  const total = useRecoilValue(totalnotification);

  return (
    <>
      <button>home</button>
      <button>Network({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs({jobcount >= 100 ? "99+" : jobcount})</button>
      <button>Message({messagecount})</button>
      <button>Notification({notificationcount})</button>
      {/* <button
        onClick={() => {
          setmessagecount(messagecount + 1);
        }}
      >
        ME
      </button> */}
      <button>Me({total})</button>
    </>
  );
}

export default App;
