import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

import { FaEdit } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const { logOut, user, isLogged, setIsLogged, autoLogin } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleLogOut = () => {
    logOut();
  };

  useEffect(() => {
    const clonedUser = async () => {
      const result = await autoLogin();
      !result ? setIsLogged(false) : setIsLogged(true);
    };
    clonedUser();
  }, [isLogged]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return user?._id ? (
    isMobile ? (
      <nav className="bg-blue-600 p-2 text-white shadow-md w-full flex justify-center">
        <div className="flex items-center justify-between w-[90%] z-1">
          {/* Logo */}
          <Link to="/dashboard">
            <div className="text-2xl font-bold cursor-pointer">FinTrack</div>
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
                <Link to="/dashboard">
                  <button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2 cursor-pointer">
                    <RxDashboard /> Dashboard
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/transaction">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2 cursor-pointer">
                    <GrTransaction /> Transaction
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button
                    className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2 cursor-pointer"
                    onClick={handleLogOut}
                  >
                    <RiLogoutBoxRLine /> Log Out
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
          <Link to="/dashboard">
            <div className="text-2xl font-bold cursor-pointer">FinTrack</div>
          </Link>
          {/* Buttons */}
          <div className="flex space-x-4 items-center">
            <div>Welcome, {user.username} !</div>
            <Link to="/dashboard">
              <button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2 cursor-pointer">
                <RxDashboard /> Dashboard
              </button>
            </Link>
            <Link to="/transaction">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2 cursor-pointer">
                <GrTransaction /> Transaction
              </button>
            </Link>
            <Link to="/">
              <button
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2 cursor-pointer"
                onClick={handleLogOut}
              >
                <RiLogoutBoxRLine /> Log Out
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
          <div className="text-2xl font-bold cursor-pointer">FinTrack</div>
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
                <button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2 cursor-pointer">
                  <FaSignInAlt /> Log In
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2 cursor-pointer">
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
          <div className="text-2xl font-bold cursor-pointer">FinTrack</div>
        </Link>
        {/* Buttons */}
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2 cursor-pointer">
              <FaSignInAlt /> Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition flex items-center gap-2 cursor-pointer">
              <FaEdit /> Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
