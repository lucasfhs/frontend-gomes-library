import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import NavBar from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-gray-900 bg-slate-200 p-6">Carlinhos</h1>
      </div>
      <Outlet></Outlet>
      <NavBar></NavBar>
      <p>Footer</p>
    </>
  );
}

export default App;
