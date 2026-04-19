import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

// function to navigate to other services on the application
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  }; 

  return (
    <nav className="bg-white dark:bg-gray-800 border-b p-4 mb-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h4 className="font-bold text-lg dark:text-white">Leave Management System</h4>
        <div className="space-x-20 flex items-center">
          <Link to="/dashboard" className="hover:underline dark:text-gray-200">Dashboard</Link>
          <Link to="/apply" className="hover:underline dark:text-gray-200">Apply</Link>
          <Link to="/history" className="hover:underline dark:text-gray-200">History</Link>
          <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
