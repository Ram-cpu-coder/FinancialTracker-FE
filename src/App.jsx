import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import DashBoard from "./pages/dashboard/DashBoard";
import Transaction from "./pages/transaction/Transaction";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
