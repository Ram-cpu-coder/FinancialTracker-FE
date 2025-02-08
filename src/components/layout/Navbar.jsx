import React, { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Dashboard from "../../pages/dashboard/DashBoard";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const { logOut, user, isLogged } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogOut = () => {
    logOut();
  };

  return user?._id ? (
    isMobile ? (
      <nav className="bg-blue-600 p-2 text-white shadow-md w-full flex justify-center">
        <div className="flex items-center justify-between w-[90%] z-1">
          {/* Logo */}
          <Link to={isLogged ? "/dashboard" : "/"}>
            <div className="text-2xl font-bold">FinTrack</div>
          </Link>

          {/* Buttons */}
          <div className="flex space-x-4" onClick={toggleMenu}>
            {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
          </div>
          <ul
            className={`${
              isOpen ? "absolute" : "hidden"
            } top-[45px] left-0 bg-blue-600  p-2 text-white shadow-md w-full flex justify-center`}
          >
            <div className="w-[90%] flex sm:justify-end justify-center items-center sm:flex-row flex-col gap-10">
              <li>
                <Link to={isLogged ? "/dashboard" : "/"}>
                  <button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2">
                    <FaSignInAlt /> Dashboard
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/transaction">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2">
                    <FaEdit /> Transaction
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button
                    className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2"
                    onClick={handleLogOut}
                  >
                    <FaEdit /> Log Out
                  </button>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    ) : (
      <nav className="bg-blue-600 p-2 text-white shadow-md w-full flex justify-center">
        <div className="flex items-center justify-between w-[90%] z-1">
          {/* Logo */}
          <Link to={isLogged ? "/dashboard" : "/"}>
            <div className="text-2xl font-bold">FinTrack</div>
          </Link>
          {/* Buttons */}
          <div className="flex space-x-4">
            <Link to="/dashboard">
              <button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2">
                <FaSignInAlt /> Dashboard
              </button>
            </Link>
            <Link to="/transaction">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2">
                <FaEdit /> Transaction
              </button>
            </Link>
            <Link to="/">
              <button
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2"
                onClick={handleLogOut}
              >
                <FaEdit /> Log Out
              </button>
            </Link>
          </div>
        </div>
      </nav>
    )
  ) : isMobile ? (
    <nav className="bg-blue-600 p-2 text-white shadow-md w-full flex justify-center">
      <div className="flex items-center justify-between w-[90%] z-1">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-bold">FinTrack</div>
        </Link>
        {/* Buttons */}
        <div className="flex space-x-4" onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </div>
        <ul
          className={`${
            isOpen ? "absolute" : "hidden"
          } top-[45px] left-0 bg-blue-600  p-2 text-white shadow-md w-full `}
        >
          <div className="w-[90%] flex justify-end gap-10">
            <li>
              <Link to="/login">
                <button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2">
                  <FaSignInAlt /> Log In
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2">
                  <FaEdit /> Sign Up
                </button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  ) : (
    <nav className="bg-blue-600 p-2 text-white shadow-md w-full flex justify-center">
      <div className="flex items-center justify-between w-[90%] z-1">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-bold">FinTrack</div>
        </Link>
        {/* Buttons */}
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2">
              <FaSignInAlt /> Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2">
              <FaEdit /> Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
