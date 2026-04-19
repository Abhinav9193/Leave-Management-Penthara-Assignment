import React from 'react';
import Navbar from '../components/Navbar';
import LeaveHistory from '../components/LeaveHistory';

const History = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 mt-6">
                <LeaveHistory refresh={0} />
            </div>
        </div>
    );
};

export default History;
