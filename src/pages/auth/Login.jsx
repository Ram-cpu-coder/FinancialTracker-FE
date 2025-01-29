import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
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
          <div className="w-full order-2 md:order-1 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Log In To Your Account
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                />
              </div>
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
      <Footer />
    </>
  );
};

export default Login;
