import React from 'react';
import Navbar from '../components/Navbar';
import LeaveForm from '../components/LeaveForm';

// function that renders LeaveForm.jsx
const ApplyPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-6">
        <LeaveForm onUpdate={() => {}} />
      </div>
    </div>
  );
};

export default ApplyPage;