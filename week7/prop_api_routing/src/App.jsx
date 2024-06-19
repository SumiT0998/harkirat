import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Landing } from "./pages/Landing";
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <>                               //spa loading  where all bundle sent to client in once
      <BrowserRouter>
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
