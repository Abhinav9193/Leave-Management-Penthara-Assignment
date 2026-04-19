import React, { useEffect, useState } from 'react';
import { getLeaves } from '../services/leaveService';
import Navbar from '../components/Navbar';

const TOTAL_LEAVES = 20; //no of leaves
const CARD_STYLE = 'bg-white dark:bg-gray-800 p-4 shadow rounded dark:text-gray-200';


const Dashboard = () => {
  const [leaves, setLeaves] = useState([]); //to update leaves dynamically
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const approved = leaves.filter(l => l.status === 'Approved').length;

  // loads leaves after component is mounted
  useEffect(() => {
    console.log('Dashboard loading leaves...');
    setLoading(true);
    getLeaves()
      .then(data => {
        console.log('Leaves loaded:', data);
        setLeaves(data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading leaves:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      
      {/* Header */}
      <div className="h-40 relative flex items-center justify-center mb-6 bg-linear-to-r from-blue-500 to-blue-600">
        <h2 className="relative text-3xl font-bold text-white">Leave Dashboard</h2>
      </div>
      
      <div className="max-w-5xl mx-auto px-6">
        {/* Leave stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className={CARD_STYLE}>Total: <b>{TOTAL_LEAVES}</b></div>
          <div className={CARD_STYLE}>Used: <b>{approved}</b></div>
          <div className={CARD_STYLE}>Left: <b>{TOTAL_LEAVES - approved}</b></div>
        </div>
        
        {/* Welcome message */}
        <div className="mt-10 p-6 bg-white dark:bg-gray-800 rounded shadow text-center">
          <p className="text-gray-600 dark:text-gray-400">Use the menu to apply for leaves or view history.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
