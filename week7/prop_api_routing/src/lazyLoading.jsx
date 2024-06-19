import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import React, { Suspense, lazy } from "react";

import "./App.css";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Landing = React.lazy(() => import("./pages/Landing"));
//suspense api
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <br />

        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading....."}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
