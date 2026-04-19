import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import loginBg from '../assets/login-bg.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState(''); // used useState to manage inputs(emails basically) at the time of log in.
  const navigate = useNavigate(); // react hook to navigate throughout the page


  // main handler to validate and store the user's data
  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim()) {
      localStorage.setItem('user', email);
      navigate('/dashboard');
    } else {
      alert('Email is required');
    }
  };

 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-96 overflow-hidden">
        <img src={loginBg} alt="banner" className="h-40 w-full object-cover" />
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>

        
          <form onSubmit={handleLogin} className="space-y-4">

            {/* changing emails dynamically */}
            <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required /> 
            <Input type="password" placeholder="Password" required />
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
