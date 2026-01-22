import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'sonner'

// Pages
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AudiencePage from './pages/AudiencePage'
import ProcessPage from './pages/ProcessPage'
import ContactPage from './pages/ContactPage'



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/samples" element={<AudiencePage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App