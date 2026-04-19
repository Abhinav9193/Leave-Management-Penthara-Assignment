import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LeaveHistory from '../components/LeaveHistory';

// function to update the history table dynamically based on user's inputs and also renders LeaveHistory.jsx component
const HistoryPage = () => {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => setRefresh(prev => prev + 1);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-6">
        <LeaveHistory refresh={refresh} />
      </div>
    </div>
  );
};

export default HistoryPage;