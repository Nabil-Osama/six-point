import React from 'react'
import { Heart, Users, Award } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './About.css'
import aboutImage from '../assets/Images/577306488_122140533086924632_284076888965708487_n.jpg'

const About = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Heart size={40} />,
      title: t(translations.about.quality),
      description: t(translations.about.qualityDesc)
    },
    {
      icon: <Users size={40} />,
      title: t(translations.about.atmosphere),
      description: t(translations.about.atmosphereDesc)
    },
    {
      icon: <Award size={40} />,
      title: t(translations.about.service),
      description: t(translations.about.serviceDesc)
    }
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <h2>{t(translations.about.title)}</h2>
        <p className="about-subtitle">{t(translations.about.subtitle)}</p>
        <div className="about-content">
          <div className="about-text-section">
            <div className="about-text">
              <p>
                {t(translations.about.description)}
              </p>
            </div>
            <div className="about-image">
              <img src={aboutImage} alt="Sixpoint Cafe Interior" />
              <div className="image-overlay">
                <p>{t(translations.about.imageOverlay)}</p>
              </div>
            </div>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About