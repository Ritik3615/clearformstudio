import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'sonner'
import PrivateRoute from './lib/PrivateRoute'
import Admin from './Admin/Admin'
import User from './User/User'
import UserDashboard from './User/Pages/Dashboard'
// admin pages
import AdminSales from './Admin/Pages/Sales'
import AdminLeads from './Admin/Pages/Leads'
import AdminQuotations from './Admin/Pages/Quotations'
import AdminProjects from './Admin/Pages/Projects'
import AdminPayments from './Admin/Pages/Payments'
import { AuthProvider } from './context/AuthContext'

// Pages
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AudiencePage from './pages/AudiencePage'
import ProcessPage from './pages/ProcessPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/Login'
import Dashboard from './Admin/Pages/Dashboard'



function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  )
}

function AppRoutes() {
  const location = useLocation()
  const hideShell = location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {!hideShell && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/samples" element={<AudiencePage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/*" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales" element={<AdminSales />} />
          <Route path="leads" element={<AdminLeads />} />
          <Route path="quotations" element={<AdminQuotations />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="payments" element={<AdminPayments />} />
        </Route>

        <Route path="/user/*" element={<User />}>
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>

      </Routes>
      {!hideShell && <Footer />}
      <Toaster />
    </div>
  )
}

export default App