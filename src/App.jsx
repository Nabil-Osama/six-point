import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

// Eager loading for above-the-fold content
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy loading for below-the-fold content
const About = lazy(() => import('./components/About'))
const Gallery = lazy(() => import('./components/Gallery'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Lazy loading for separate pages
const MenuPage = lazy(() => import('./components/MenuPage'))
const PaymentPage = lazy(() => import('./components/PaymentPage'))
const ReservationPage = lazy(() => import('./components/ReservationPage'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    color: '#6F4E37'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #F5E6D3',
      borderTop: '4px solid #D4AF37',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
)

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Suspense fallback={<LoadingFallback />}>
                  <About />
                  <Gallery />
                  <Contact />
                </Suspense>
              </>
            } />
            <Route path="/menu" element={
              <Suspense fallback={<LoadingFallback />}>
                <MenuPage />
              </Suspense>
            } />
            <Route path="/payment" element={
              <Suspense fallback={<LoadingFallback />}>
                <PaymentPage />
              </Suspense>
            } />
            <Route path="/reservation" element={
              <Suspense fallback={<LoadingFallback />}>
                <ReservationPage />
              </Suspense>
            } />
          </Routes>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>

          {/* Floating WhatsApp Button */}
          <a
            href="https://api.whatsapp.com/send?phone=201031889928"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={28} />
          </a>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
