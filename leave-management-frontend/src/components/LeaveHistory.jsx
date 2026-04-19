import React, { useEffect, useState } from 'react';
import { getLeaves, updateStatus } from '../services/leaveService';
import { formatDate, calculateDays } from '../utils/helpers';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';

// statuss styling
const STATUS_COLORS = {
  Approved: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Rejected: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
};


const LeaveHistory = ({ refresh }) => {
  const [list, setList] = useState([]);

  // useEffect to fetch leaves after refresh changes
  useEffect(() => {
    getLeaves().then(setList);
  }, [refresh]);

  // updates status button as in approve/reject
  const handleAction = async (id, status) => {
    await updateStatus(id, status);
    getLeaves().then(setList);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-gray-50/50 dark:bg-gray-900/50 border-b dark:border-gray-800">
        <CardTitle className="text-xl font-bold">Leave History</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900/80">
              <tr className="border-b dark:border-gray-800">
                <th className="px-4 py-3 font-semibold text-xs">Start</th>
                <th className="px-4 py-3 font-semibold text-xs">End</th>
                <th className="px-4 py-3 font-semibold text-xs">No of Days</th>
                <th className="px-4 py-3 font-semibold text-xs">Reason</th>
                <th className="px-4 py-3 font-semibold text-xs">Status</th>
                <th className="px-4 py-3 font-semibold text-xs text-right">Admin Action</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-800">

              {/* Maps/sets the values of the respectiv fields such as start or end dates */}
              {list.map(leave => (
                <tr key={leave.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-4 py-4">{formatDate(leave.startDate)}</td>
                  <td className="px-4 py-4">{formatDate(leave.endDate)}</td>
                  <td className="px-4 py-4 font-medium">{calculateDays(leave.startDate, leave.endDate)}</td>
                  <td className="px-4 py-4 truncate">{leave.reason}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${STATUS_COLORS[leave.status]}`}>
                      {leave.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right space-x-2">
                    {leave.status === 'Pending' ? (
                      <>
                        <Button variant="outline" size="sm" onClick={() => handleAction(leave.id, 'Approved')} className="text-green-600">Approve</Button>
                        <Button variant="outline" size="sm" onClick={() => handleAction(leave.id, 'Rejected')} className="text-red-600">Reject</Button>
                      </>
                    ) : (
                      <span className="text-gray-400 text-xs">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {list.length === 0 && <div className="text-center py-8 text-gray-500">No records found</div>}
      </CardContent>
    </Card>
  );
};

export default LeaveHistory;
