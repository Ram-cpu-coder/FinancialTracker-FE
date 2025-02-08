import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NewCustomInput from "../../components/NewCustomInput";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { GridLoader } from "react-spinners";

const Login = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const { setUser, isLogged, setIsLogged, user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialState);
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

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, form);

      toast.success(response.data.message);

      setIsLoading(false);
      // accesstoken storing in local storage
      localStorage.setItem("accessToken", response.data.accessToken);
      console.log(response);

      // nagivation to the private apis
      setUser(response.data.user);
      setIsLogged(true);
      setForm(initialState);

      navigate("/dashboard");
    } catch (error) {
      if (!form.email && !form.password) {
        toast.error("Fill the Form!!!");
      } else {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        {/* Container for Form and Image */}
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full max-w-5xl  md:flex-row md:justify-center justify-center">
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
