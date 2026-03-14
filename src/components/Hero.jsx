import React from 'react'
import { Link } from 'react-router-dom'
import { Coffee, ArrowDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Hero.css'
import heroImage from '../assets/images/619464270_17869074192537493_6440135439401881340_n.jpg'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="hero" id="home">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-icon">
          <Coffee size={60} />
        </div>
        <h1 className="hero-title">
          {t(translations.hero.title)}
        </h1>
        <p className="hero-subtitle">
          {t(translations.hero.subtitle)}
        </p>
        <p className="hero-description">
          {t(translations.hero.description)}
        </p>
        <div className="hero-buttons">
          <Link to="/menu" className="btn btn-primary">{t(translations.hero.viewMenu)}</Link>
          <a 
            href="https://api.whatsapp.com/send?phone=201031889928"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            💬 {t(translations.hero.whatsappUs)}
          </a>
        </div>
        <a href="#about" className="scroll-indicator">
          <ArrowDown size={30} className="bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero
