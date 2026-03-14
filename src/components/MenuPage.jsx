import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import Menu from './Menu'
import './MenuPage.css'

const MenuPage = () => {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="menu-page">
      <div className="menu-page-hero">
        <div className="menu-page-hero-overlay" />
        <div className="menu-page-hero-content">
          <h1>{t(translations.menu.title)}</h1>
          <p>{t(translations.menu.subtitle)}</p>
        </div>
      </div>

      <div className="menu-page-breadcrumb">
        <div className="container">
          <Link to="/" className="breadcrumb-link">
            <Home size={16} />
            {t(translations.navbar.home)}
          </Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{t(translations.navbar.menu)}</span>
        </div>
      </div>

      <Menu />
    </div>
  )
}

export default MenuPage
