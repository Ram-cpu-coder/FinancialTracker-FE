import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NewCustomInput from "../../components/NewCustomInput";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { GridLoader } from "react-spinners";
import useForm from "../../hooks/useForm";
import { loginUser } from "../../../helper/axiosHelper";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const { form, setForm, handleOnChange } = useForm(initialState);

  const { setUser, isLogged, setIsLogged, user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const fields = [
    {
      label: "Email",
      type: "email",
      required: true,
      placeholder: "ram@gmail.com",
      name: "email",
      value: form.email,
    },
    {
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Password",
      name: "password",
      value: form.password,
    },
  ];

  const goTo = location?.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    user?._id && navigate(goTo);
  }, [user._id]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setIsLogged(true);
    // from axios helper
    const data = await loginUser(form);

    // update accessToken in localstorage
    toast[data.status](data.message);
    localStorage.setItem("accessToken", data.accessToken);

    if (data.status == "success") {
      setIsLoading(false);
      // update user from user context
      setUser(data.user);
      setForm(initialState);
      // toast message
      navigate("/dashboard");
    } else {
      setIsLoading(false);
      navigate("/login");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center relative justify-center bg-gray-100 p-4">
        {/* Container for Form and Image */}
        <div className="flex flex-col-reverse bg-white rounded-lg shadow-md w-full max-w-5xl  md:flex-row md:justify-center justify-center mt-20">
          {/* Image (on top in mobile view) */}
          <div className="w-full order-1 md:order-2 flex justify-center">
            <img
              src="/assets/login.png"
              alt="Login"
              className="w-[400px] h-[auto] md:h-full"
            />
          </div>

          {/* Login Form (below image in mobile view) */}
          <div className="w-[90%] order-2 md:order-1 p-5 border rounded-lg m-5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Log In To Your Account
            </h2>
            <form onSubmit={handleOnSubmit}>
              {fields.map((item) => {
                return (
                  <NewCustomInput
                    key={item.name}
                    {...item}
                    onChange={handleOnChange}
                  />
                );
              })}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
              >
                Log In
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-4 text-center">
              <p className="text-gray-700">
                Don't have an account? &nbsp;
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div>
              <GridLoader color="#0d6bc9" speedMultiplier={1} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
