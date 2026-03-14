import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const { language, t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      if (location.pathname === '/') {
        const sections = [
          { id: 'home', href: '/' },
          { id: 'about', href: '/#about' },
          { id: 'gallery', href: '/#gallery' },
          { id: 'contact', href: '/#contact' }
        ];

        let current = '/';
        const scrollPosition = window.scrollY + 100; // Offset for navbar

        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element && scrollPosition >= element.offsetTop) {
            current = section.href;
          }
        }
        
        setActiveHash(current);
      }
    }
    window.addEventListener('scroll', handleScroll)
    
    // Initial call
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Mix of hash links (for home page sections) and route links (for separate pages)
  const navLinks = [
    { name: t(translations.navbar.home), href: '/', type: 'route' },
    { name: t(translations.navbar.menu), href: '/menu', type: 'route' },
    { name: t(translations.navbar.payment), href: '/payment', type: 'route' },
    { name: t(translations.navbar.reservation), href: '/reservation', type: 'route' },
  ]

  const handleHashClick = (href) => {
    setIsMobileMenuOpen(false)
    if (location.pathname !== '/') {
      // Navigate to home page first, then scroll to section
      window.location.href = href
    } else {
      const sectionId = href.replace('/#', '')
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const checkIsActive = (link) => {
    if (location.pathname !== '/') {
      return location.pathname === link.href;
    }
    if (link.type === 'hash') {
      return activeHash === link.href;
    }
    if (link.href === '/') {
      return activeHash === '/';
    }
    return false;
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-text">SIX POINT</span>
          <span className="logo-subtitle">CAFE</span>
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.type === 'route' ? (
                <Link
                  to={link.href}
                  className={checkIsActive(link) ? 'active-link' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={checkIsActive(link) ? 'active-link' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleHashClick(link.href)
                  }}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
