import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-4 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">FinTrack</h3>
          <p className="text-gray-400">
            Your personal finance companion for better money management
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="text-gray-400 hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/transaction"
                className="text-gray-400 hover:text-white"
              >
                Transaction
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">Email: support@fintrack.com</p>
          <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">© 2023 FinTrack. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
