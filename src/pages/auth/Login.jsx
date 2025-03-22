import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NewCustomInput from "../../components/NewCustomInput";
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

  const { user, userDetail } = useUser();
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

  const handleOnSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      // from axios helper
      const data = await loginUser(form);
      if (data.status == "success") {
        // update accessToken in localstorage
        localStorage.setItem("accessToken", data.accessToken);
        // toast message
        navigate("/dashboard");
      }
      if (data.status == "error") {
        setForm(initialState);
        navigate("/login");
        setIsLoading(false);
      }
      // update user from user context
      const user = await userDetail();
      setIsLoading(false);
      toast[data.status](data.message);
    } catch (error) {
      setIsLoading(false);
      toast.error("Login failed. Please Try Again!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    user?._id && navigate(goTo);
  }, [user._id]);

  // console.log(user);
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center relative justify-center bg-black bg-opacity-50 p-4">
        <GridLoader color="#0d6bc9" speedMultiplier={1} />
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen flex items-center relative justify-center bg-gray-100">
        {/* Container for Form and Image */}
        <div className="flex flex-col-reverse bg-white rounded-lg shadow-md w-full max-w-5xl  md:flex-row md:justify-center justify-center">
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
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Log In
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-4 text-center">
              <p className="text-gray-700">
                Don't have an account? &nbsp;
                <Link
                  to="/signup"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* {isLoading ||
          !user?._id(
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
              <div>
                <GridLoader color="#0d6bc9" speedMultiplier={1} />
              </div>
            </div>
          )} */}
      </div>
    </>
  );
};

export default Login;
