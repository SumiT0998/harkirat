import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

export function Navbar() {
  const Navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          Navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          Navigate("/dashboard");
        }}
      >
        dashboard
      </button>
    </>
  );
}
