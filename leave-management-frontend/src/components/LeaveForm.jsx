import React, { useState } from 'react';
import { addLeave } from '../services/leaveService';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const LeaveForm = ({ onUpdate }) => {
  const [form, setForm] = useState({ startDate: '', endDate: '', reason: '' }); //updates the form data on user input
  const [loading, setLoading] = useState(false); //loading state of the form

  //to handle all sorts of form inputs
  const handleChange = (field, value) => setForm({ ...form, [field]: value });


  //function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addLeave(form);
      alert('Application submitted successfully!');
      setForm({ startDate: '', endDate: '', reason: '' });
      onUpdate();
    } catch (error) {
      alert('Error submitting application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-gray-50/50 dark:bg-gray-900/50 border-b dark:border-gray-800">
        <CardTitle className="text-xl font-bold">New Leave Application</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Date input */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium dark:text-gray-300">Start Date</label>
              <Input type="date" value={form.startDate} onChange={e => handleChange('startDate', e.target.value)} required />
            </div>
            <div>
              <label className="text-sm font-medium dark:text-gray-300">End Date</label>
              <Input type="date" value={form.endDate} onChange={e => handleChange('endDate', e.target.value)} required />
            </div>
          </div>
          
          {/* Reason textarea */}
          <div>
            <label className="text-sm font-medium dark:text-gray-300">Reason</label>
            <textarea placeholder="Enter reason..." className="w-full h-24 p-2 border rounded dark:bg-gray-900" value={form.reason} onChange={e => handleChange('reason', e.target.value)} required />
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Submitting...' : 'Apply Now'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeaveForm;
