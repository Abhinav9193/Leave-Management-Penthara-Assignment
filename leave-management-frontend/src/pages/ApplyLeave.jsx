import React from 'react';
import Navbar from '../components/Navbar';
import LeaveForm from '../components/LeaveForm';

const ApplyLeave = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Navbar />
            <div className="max-w-xl mx-auto p-6 mt-10">
                <LeaveForm onUpdate={() => {}} />
                <p className="text-center text-gray-500 mt-6 text-sm">
                    Fill in the details above to submit a new leave request.
                </p>
            </div>
        </div>
    );
};

export default ApplyLeave;
