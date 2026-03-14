import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useLanguage()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>{t(translations.contact.title)}</h2>
        <p className="contact-subtitle">{t(translations.contact.subtitle)}</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-items">
              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <h4>{t(translations.contact.location)}</h4>
                  <p>{t(translations.contact.address)}</p>
                  <a 
                    href="https://maps.google.com/?q=طنطا+الاستاد+اخر+ش+306+امام+كلية+هندسة"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    📍 {t(translations.contact.viewOnMap)}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" size={24} />
                <div>
                  <h4>{t(translations.contact.hours)}</h4>
                  <p>{t(translations.contact.hoursText)}</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <h4>{t(translations.contact.phone)}</h4>
                  <p>
                    <a href="tel:+201031889928" className="phone-link">
                      {t(translations.contact.phoneNumber)}
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-item whatsapp-item">
                <MessageCircle className="info-icon whatsapp-icon" size={24} />
                <div>
                  <h4>{t(translations.contact.whatsapp)}</h4>
                  <a 
                    href="https://api.whatsapp.com/send?phone=201031889928"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    {t(translations.contact.chatOnWhatsApp)}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>{t(translations.contact.formTitle)}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t(translations.contact.name)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t(translations.contact.email)}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t(translations.contact.message)}
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? t(translations.contact.sending) : t(translations.contact.send)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
