import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ApplyPage from './pages/ApplyPage';
import HistoryPage from './pages/HistoryPage';

const App = () => {
  console.log('App component mounted'); // Debug
  
  // simple log in check just for demonstration
  const isAuth = () => localStorage.getItem('user') !== null;

  // used protected routing to ensure that not all services reach to the user until he logs in. Not quite advanced just to ensure proper working of the navbar so that the user logs in first and then can only access the other services.
  const ProtectedRoute = ({ element }) => isAuth() ? element : <Navigate to="/" />;

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/apply" element={<ProtectedRoute element={<ApplyPage />} />} />
          <Route path="/history" element={<ProtectedRoute element={<HistoryPage />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
