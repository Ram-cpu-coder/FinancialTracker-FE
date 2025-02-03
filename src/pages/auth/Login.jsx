import React from "react";
import { Link } from "react-router-dom";
import NewCustomInput from "../../components/NewCustomInput";

const Login = () => {
  const fields = [
    {
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your Email...",
    },
    {
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Password",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        {/* Container for Form and Image */}
        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden w-full max-w-5xl flex-col md:flex-row">
          {/* Image (on top in mobile view) */}
          <div className="w-full order-1 md:order-2 flex justify-center">
            <img
              src="/assets/login.png"
              alt="Login"
              className="w-[400px] h-[auto] md:h-full"
            />
          </div>

          {/* Login Form (below image in mobile view) */}
          <div className="w-full order-2 md:order-1 p-5 border rounded-lg m-5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Log In To Your Account
            </h2>
            <form>
              {fields.map((item) => {
                return (
                  <NewCustomInput
                    key={item.label}
                    type={item.type}
                    label={item.label}
                    placeholder={item.placeholder}
                    required={item.required}
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
      </div>
    </>
  );
};

export default Login;
