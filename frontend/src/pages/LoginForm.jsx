import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

export default function LoginForm() {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('dispatcher');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setUsername('');
    setPassword('');
    setRole('dispatcher');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (isRegister) {
        // Registration endpoint
        res = await api.post('/auth/register', { username, password, role });
      } else {
        // Login endpoint
        res = await api.post('/auth/login', { username, password });
      }

      // ✅ Extract data safely
      const token = res.data.token;
      const userRole = res.data.role;
      const userId = res.data.id || res.data.userId; // fallback in case your backend returns id differently
      const usernameFromResponse = res.data.username || res.data.user || username;
      // use the input username if backend doesn’t return it

      // Dispatch loginSuccess to Redux
      dispatch(loginSuccess({
        token,
        role: userRole,
        userId,
        username: usernameFromResponse
      }));

      // Redirect based on role
      switch (userRole) {
        case 'driver':
          navigate('/driver');
          break;
        case 'consignee': // customer
          navigate('/customer-dashboard');
          break;
        case 'dispatcher':
        case 'admin':
        case 'operations':
          navigate('/dashboard'); // main dashboard for operations/admin
          break;
        default:
          navigate('/'); // fallback
      }
    } catch (err) {
      console.error('Login/Register error:', err);
      alert(err.response?.data?.message || 'Error occurred!');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">
        {isRegister ? 'Register' : 'Login'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1b3838] focus:outline-none"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1b3838] focus:outline-none"
        />
        {isRegister && (
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-[#1b3838] focus:outline-none"
          >
            <option value="dispatcher">Dispatcher</option>
            <option value="driver">Driver</option>
            <option value="consignee">Customer</option>
          </select>
        )}
        <button
          type="submit"
          className="w-full bg-[#1e3b8adc] hover:bg-[#355fd4b6] text-white font-medium py-2 rounded-lg transition-all duration-200 shadow-md"
        >
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <p
        className="mt-4 text-center text-sm text-blue-600 hover:underline cursor-pointer"
        onClick={toggleForm}
      >
        {isRegister
          ? 'Already have an account? Login'
          : "Don’t have an account? Register"}
      </p>
    </div>
  );



}
