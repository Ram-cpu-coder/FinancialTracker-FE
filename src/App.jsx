import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
