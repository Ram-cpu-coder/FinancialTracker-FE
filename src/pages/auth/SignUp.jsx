import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewCustomInput from "../../components/NewCustomInput";

const SignUp = () => {
  const fields = [
    {
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your Full Name...",
    },
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
    {
      label: "Confirm Password",
      type: "password",
      required: true,
      placeholder: "Confirm Password",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        {/* Container for Form and Image */}
        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden w-full max-w-5xl flex-col md:flex-row p-5">
          {/* Image (on top in mobile view) */}
          <div className="w-full order-1 md:order-2 flex justify-center">
            <img
              src="/assets/signuplogo.png"
              alt="Sign Up"
              className="w-[400px] h-[auto] md:h-full"
            />
          </div>

          {/* Sign Up Form (below image in mobile view) */}

          <div className="w-full order-2 md:order-1 p-5 border rounded-lg m-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Start Tracking Your Finances Today!
            </h2>
            <form>
              {fields.map((item) => {
                return (
                  <NewCustomInput
                    type={item.type}
                    label={item.label}
                    placeholder={item.placeholder}
                    required={item.required}
                  />
                );
              })}

              {/* <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Confirm your password"
                />
              </div> */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account? &nbsp;
              <Link to="/login" className="text-blue-600 hover:text-blue-500">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
