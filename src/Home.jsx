import React from "react";
import {
  FaChartLine,
  FaWallet,
  FaPiggyBank,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: <FaChartLine className="text-4xl mb-4 text-blue-600" />,
      title: "Expense Tracking",
      description: "Monitor your spending with detailed charts and analytics",
    },
    {
      icon: <FaWallet className="text-4xl mb-4 text-blue-600" />,
      title: "Budget Management",
      description: "Create and maintain budgets for different categories",
    },
    {
      icon: <FaPiggyBank className="text-4xl mb-4 text-blue-600" />,
      title: "Savings Goals",
      description: "Set and track progress towards your financial goals",
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4 text-blue-600" />,
      title: "Mobile Friendly",
      description: "Access your financial data anywhere, anytime",
    },
  ];

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="p-8 flex justify-center">
              <img
                src="/assets/home.png"
                alt="Finance illustration"
                className="md:w-full md:h-auto h-[auto] w-[300px]"
              />
            </div>
            <div className="space-y-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Your Personal Finance{" "}
                <span className="text-blue-600">Tracker</span>
              </h1>
              <p className="text-lg text-gray-600">
                Take control of your money with our intuitive finance management
                tools. Track expenses, set budgets, and achieve your financial
                goals effortlessly.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/login">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </Link>
                <Link to="/">
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage your finances effectively
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    {feature.icon}
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
