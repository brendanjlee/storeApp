import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default App;
