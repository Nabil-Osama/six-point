import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, Star, Users, MapPin, Clock, User, Mail, Phone, Calendar, MessageSquare } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './ReservationPage.css'

const tableData = [
    { id: 'private', name: 'Private Room', nameAr: 'غرفة خاصة', rating: 10, capacity: 10, x: 50, y: 8, size: 'large', color: '#D4AF37' },
    { id: 'window-left', name: 'Window Left', nameAr: 'نافذة يسار', rating: 6, capacity: 2, x: 12, y: 22, size: 'medium', color: '#8B8B8B' },
    { id: 'window-right', name: 'Window Right', nameAr: 'نافذة يمين', rating: 6, capacity: 2, x: 88, y: 22, size: 'medium', color: '#8B8B8B' },
    { id: 'bar', name: 'Bar Seats', nameAr: 'مقاعد البار', rating: 5, capacity: 4, x: 12, y: 40, size: 'medium', color: '#8B8B8B' },
    { id: 'main', name: 'Main Dining', nameAr: 'صالة الطعام', rating: 8, capacity: 6, x: 50, y: 38, size: 'xlarge', featured: true, color: '#D4AF37' },
    { id: 'counter', name: 'Counter', nameAr: 'الكاونتر', rating: 5, capacity: 4, x: 88, y: 40, size: 'medium', color: '#8B8B8B' },
    { id: 'cozy1', name: 'Cozy Corner 1', nameAr: 'ركن مريح ١', rating: 7, capacity: 3, x: 20, y: 58, size: 'medium', color: '#8B8B8B' },
    { id: 'cozy2', name: 'Cozy Corner 2', nameAr: 'ركن مريح ٢', rating: 7, capacity: 3, x: 80, y: 58, size: 'medium', color: '#8B8B8B' },
    { id: 'patio1', name: 'Patio Table 1', nameAr: 'طاولة الفناء ١', rating: 9, capacity: 4, x: 25, y: 78, size: 'medium', color: '#D4AF37' },
    { id: 'patio2', name: 'Patio Table 2', nameAr: 'طاولة الفناء ٢', rating: 9, capacity: 4, x: 75, y: 78, size: 'medium', color: '#D4AF37' },
    { id: 'center', name: 'Center Table', nameAr: 'طاولة الوسط', rating: 4, capacity: 2, x: 50, y: 68, size: 'small', color: '#8B8B8B' },
]

const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
]

const ReservationPage = () => {
    const { language, t } = useLanguage()
    const [selectedTable, setSelectedTable] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '2',
        date: '',
        time: '',
        specialRequests: ''
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleTableClick = (table) => {
        setSelectedTable(table)
    }

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const tableName = selectedTable
            ? (language === 'ar' ? selectedTable.nameAr : selectedTable.name)
            : t(translations.reservation.noTableSelected)

        const message = `🍽️ *${t(translations.reservation.title)}*%0A%0A` +
            `👤 ${t(translations.reservation.fullName)}: ${formData.name}%0A` +
            `📧 ${t(translations.reservation.email)}: ${formData.email}%0A` +
            `📱 ${t(translations.reservation.phoneNumber)}: ${formData.phone}%0A` +
            `👥 ${t(translations.reservation.guests)}: ${formData.guests}%0A` +
            `📅 ${t(translations.reservation.date)}: ${formData.date}%0A` +
            `🕐 ${t(translations.reservation.time)}: ${formData.time}%0A` +
            `🪑 ${t(translations.reservation.tableSection)}: ${tableName}%0A` +
            (formData.specialRequests ? `📝 ${t(translations.reservation.specialRequests)}: ${formData.specialRequests}` : '')

        window.open(`https://api.whatsapp.com/send?phone=201031889928&text=${message}`, '_blank')
    }

    const selectedInfo = selectedTable || tableData.find(t => t.id === 'main')

    return (
        <div className="reservation-page">
            {/* Hero */}
            <div className="reservation-hero">
                <div className="reservation-hero-bg" />
                <div className="reservation-hero-content">
                    <h1>{t(translations.reservation.title)}</h1>
                    <p>{t(translations.reservation.subtitle)}</p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="reservation-breadcrumb">
                <div className="container">
                    <Link to="/" className="breadcrumb-link">
                        <Home size={16} />
                        {t(translations.navbar.home)}
                    </Link>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-current">{t(translations.reservation.title)}</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="reservation-content">
                <div className="container">

                    {/* Table Selection */}
                    <div className="table-selection-section">
                        <h2 className="section-heading">{t(translations.reservation.selectTable)}</h2>

                        <div className="cafe-layout-wrapper">
                            <div className="cafe-layout">
                                <div className="layout-label">{t(translations.reservation.layoutTitle)}</div>

                                {/* Tables */}
                                {tableData.map((table) => (
                                    <button
                                        key={table.id}
                                        className={`table-node ${table.size} ${selectedTable?.id === table.id ? 'selected' : ''} ${table.featured ? 'featured' : ''}`}
                                        style={{ left: `${table.x}%`, top: `${table.y}%` }}
                                        onClick={() => handleTableClick(table)}
                                    >
                                        <div className="table-node-inner">
                                            <div className="table-rating">
                                                <Star size={10} fill="currentColor" />
                                                <span>{table.rating}</span>
                                            </div>
                                            <div className="table-capacity">
                                                <Users size={10} />
                                                <span>{table.capacity}</span>
                                            </div>
                                        </div>
                                        <span className="table-label">{language === 'ar' ? table.nameAr : table.name}</span>
                                    </button>
                                ))}

                                {/* Legend */}
                                <div className="layout-legend">
                                    <div className="legend-item">
                                        <Star size={12} fill="currentColor" />
                                        <span>{t(translations.reservation.rating)}</span>
                                    </div>
                                    <div className="legend-item">
                                        <Users size={12} />
                                        <span>{t(translations.reservation.maxCapacity)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Selected Table Info */}
                        <div className="selected-table-info">
                            <MapPin size={18} />
                            <div>
                                <strong>{language === 'ar' ? selectedInfo.nameAr : selectedInfo.name}</strong>
                                <span className="table-info-meta">
                                    {t(translations.reservation.capacityLabel)}: {selectedInfo.capacity} {t(translations.reservation.guestsLabel)} • {t(translations.reservation.rating)}: {selectedInfo.rating}/10
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Reservation Form */}
                    <div className="reservation-form-section">
                        <h2 className="section-heading">{t(translations.reservation.yourDetails)}</h2>

                        <form className="reservation-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        <User size={14} />
                                        {t(translations.reservation.fullName)}
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={t(translations.reservation.namePlaceholder)}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        <Mail size={14} />
                                        {t(translations.reservation.email)}
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={t(translations.reservation.emailPlaceholder)}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        <Phone size={14} />
                                        {t(translations.reservation.phoneNumber)}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder={t(translations.reservation.phonePlaceholder)}
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        <Users size={14} />
                                        {t(translations.reservation.guests)}
                                    </label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                            <option key={n} value={n}>
                                                {n} {n === 1 ? t(translations.reservation.guest) : t(translations.reservation.guestsLabel)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        <Calendar size={14} />
                                        {t(translations.reservation.date)}
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        <Clock size={14} />
                                        {t(translations.reservation.time)}
                                    </label>
                                    <select
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">{t(translations.reservation.selectTime)}</option>
                                        {timeSlots.map(slot => (
                                            <option key={slot} value={slot}>{slot}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>
                                    <MessageSquare size={14} />
                                    {t(translations.reservation.specialRequests)}
                                </label>
                                <textarea
                                    name="specialRequests"
                                    placeholder={t(translations.reservation.specialPlaceholder)}
                                    value={formData.specialRequests}
                                    onChange={handleInputChange}
                                    rows={4}
                                />
                            </div>

                            <button type="submit" className="reservation-submit-btn">
                                {t(translations.reservation.confirmBtn)}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ReservationPage
