import React, { useState } from "react";
import { User, Lock } from "lucide-react"; // Changed Mail to User icon
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  // Changed state name from email to username
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      // Passes username to the AuthContext login function
      await login(username, password) 
      const to = location.state?.from?.pathname || '/admin/dashboard'
      navigate(to, { replace: true })
    } catch (err) {
      alert(err.message || 'Invalid credentials')
    }
  }

  return (
    <div className="relative mt-10 min-h-screen flex items-center justify-center px-6 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px]" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">Welcome Back</h1>
            <p className="text-gray-400 text-sm">Login to access your dashboard</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Username</label>
              <div className="flex items-center bg-gray-900/60 border border-gray-700 rounded-lg px-4">
                <User size={18} className="text-gray-500 mr-3" />
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full bg-transparent py-3 text-white placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Password</label>
              <div className="flex items-center bg-gray-900/60 border border-gray-700 rounded-lg px-4">
                <Lock size={18} className="text-gray-500 mr-3" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent py-3 text-white placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>
              <Link to="/forgot-password" size={18} className="text-blue-400 hover:text-blue-300 transition">
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>
          <div className="border-t border-gray-700 my-8" />
        </div>
      </div>
    </div>
  );
}
