import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import axios from "axios";
import "./App.css";
import {
  // jobAtom,
  // messaageAtom,
  // networkAtom,
  // notificationAtom,
  notifications,
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
  const [networkCount, setnetworkcount] = useRecoilState(notifications);
  const total = useRecoilValue(totalnotification);
  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
  //     setnetworkcount(res.data);
  //   });
  // }, []);

  return (
    <>
      <button>home</button>
      <button>
        Network({networkCount.network >= 100 ? "99+" : networkCount.network})
      </button>
      <button>
        Jobs({networkCount.jobs >= 100 ? "99+" : networkCount.jobs})
      </button>
      <button>Message({networkCount.messaging})</button>
      <button>Notification({networkCount.notifications})</button>
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
