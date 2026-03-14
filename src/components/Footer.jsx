import React from 'react'
import { Link } from 'react-router-dom'
import { Coffee, Instagram, Facebook } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Footer.css'

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Coffee size={30} />
              <div>
                <h3>SIX POINT</h3>
                <p>CAFE</p>
              </div>
            </div>
            <p className="footer-description">
              {t(translations.footer.description)}
            </p>
          </div>

          <div className="footer-section">
            <h4>{t(translations.footer.quickLinks)}</h4>
            <ul className="footer-links">
              <li><a href="#home">{t(translations.navbar.home)}</a></li>
              <li><a href="#about">{t(translations.navbar.about)}</a></li>
              <li><Link to="/menu">{t(translations.navbar.menu)}</Link></li>
              <li><a href="#gallery">{t(translations.navbar.gallery)}</a></li>
              <li><a href="#contact">{t(translations.navbar.contact)}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t(translations.contact.hours)}</h4>
            <ul className="footer-hours">
              <li>{t(translations.contact.hoursText)}</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t(translations.footer.followUs)}</h4>
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/sixpoint.eg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/sixpoint.eg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@six_point_eg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
            <p className="footer-contact">
              <a 
                href="https://maps.google.com/?q=طنطا+الاستاد+اخر+ش+306+امام+كلية+هندسة"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-link"
              >
                📍 {t(translations.contact.address)}
              </a>
              <br />
              <a href="tel:+201031889928" className="footer-phone-link">
                📞 {t(translations.contact.phoneNumber)}
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026{' '}
            <a 
              href="https://www.facebook.com/profile.php?id=61567875847279" 
              target="_blank" 
              rel="noopener noreferrer"
              className="fourdimensions-link"
            >
              FourDimensions
            </a>
            . {t(translations.footer.rightsText)}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
