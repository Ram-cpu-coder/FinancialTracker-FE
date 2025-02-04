import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import DashBoard from "./pages/dashboard/DashBoard";
import Transaction from "./pages/transaction/Transaction";
import DefaultLayout from "./components/layout/DefaultLayout";
import { ToastContainer } from "react-toastify";
import { Auth } from "./pages/auth/Auth";
import { useEffect } from "react";
import { useUser } from "./context/UserContext";

function App() {
  const { autoLogin, user } = useUser();

  const loginFromToken = async () => {
    return await autoLogin();
  };

  useEffect(() => {
    !user._id && loginFromToken();
  }, [user._id]);

  return (
    <div>
      <Routes>
        <Route path="*" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="dashboard"
            element={
              <Auth>
                <DashBoard />
              </Auth>
            }
          />
          <Route
            path="transaction"
            element={
              <Auth>
                <Transaction />
              </Auth>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
