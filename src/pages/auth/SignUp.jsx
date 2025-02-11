import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewCustomInput from "../../components/NewCustomInput";
import axios from "axios";
import { toast } from "react-toastify";
import useForm from "../../hooks/useForm";

const SignUp = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [signedUp, setSignedUp] = useState(false);

  const initialState = {
    confirmPassword: "",
    password: "",
    username: "",
    email: "",
  };
  const { form, setForm, handleOnChange } = useForm(initialState);

  const fields = [
    {
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Ram Kumar Dhimal",
      name: "username",
      value: form.username,
    },
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
    {
      label: "Confirm Password",
      type: "password",
      required: true,
      placeholder: "Confirm Password",
      name: "confirmPassword",
      value: form.confirmPassword,
    },
  ];

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/users/register`, form);

      console.log(response);
      setSignedUp(true);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return signedUp ? (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <img
        src="./assets/done.png"
        alt=""
        srcset=""
        className="h-[300px] w-[auto]"
      />
      <div>
        Signed Up Successfully!
        <span>
          &nbsp; Please Head to
          <Link to="/login" className="text-blue-600 hover:text-blue-500">
            &nbsp; Log In
          </Link>
        </span>
      </div>
    </div>
  ) : (
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
  );
};

export default SignUp;
