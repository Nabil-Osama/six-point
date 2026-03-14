import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, Smartphone, CreditCard, Copy, Check, Shield, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './PaymentPage.css'

const PaymentPage = () => {
    const { t } = useLanguage()
    const [copiedField, setCopiedField] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedField(field)
            setTimeout(() => setCopiedField(null), 2000)
        })
    }

    const paymentMethods = [
        {
            id: 'vodafone',
            icon: <Smartphone size={32} />,
            name: t(translations.payment.vodafoneCash),
            color: '#E60000',
            gradient: 'linear-gradient(135deg, #E60000, #CC0000)',
            number: '01031889928',
            accountName: 'Six Point Cafe',
            steps: [
                t(translations.payment.vodafoneStep1),
                t(translations.payment.vodafoneStep2),
                t(translations.payment.vodafoneStep3),
                t(translations.payment.vodafoneStep4),
            ]
        },
        {
            id: 'instapay',
            icon: <CreditCard size={32} />,
            name: t(translations.payment.instaPay),
            color: '#1A73E8',
            gradient: 'linear-gradient(135deg, #1A73E8, #0D47A1)',
            number: 'sixpointcafe@instapay',
            accountName: 'Six Point Cafe',
            steps: [
                t(translations.payment.instaStep1),
                t(translations.payment.instaStep2),
                t(translations.payment.instaStep3),
                t(translations.payment.instaStep4),
            ]
        }
    ]

    return (
        <div className="payment-page">
            {/* Hero Section */}
            <div className="payment-hero">
                <div className="payment-hero-overlay" />
                <div className="payment-hero-particles">
                    <div className="particle p1" />
                    <div className="particle p2" />
                    <div className="particle p3" />
                </div>
                <div className="payment-hero-content">
                    <div className="payment-hero-icon">
                        <Shield size={40} />
                    </div>
                    <h1>{t(translations.payment.title)}</h1>
                    <p>{t(translations.payment.subtitle)}</p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="payment-breadcrumb">
                <div className="container">
                    <Link to="/" className="breadcrumb-link">
                        <Home size={16} />
                        {t(translations.navbar.home)}
                    </Link>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-current">{t(translations.payment.title)}</span>
                </div>
            </div>

            {/* Payment Methods */}
            <div className="payment-container">
                <div className="container">
                    <div className="payment-methods-grid">
                        {paymentMethods.map((method) => (
                            <div key={method.id} className="payment-card">
                                {/* Card Header */}
                                <div className="payment-card-header" style={{ background: method.gradient }}>
                                    <div className="payment-card-icon">
                                        {method.icon}
                                    </div>
                                    <h2 className="payment-card-title">{method.name}</h2>
                                </div>

                                {/* Card Body */}
                                <div className="payment-card-body">
                                    {/* Account Info */}
                                    <div className="payment-info-block">
                                        <label className="payment-label">
                                            {t(translations.payment.accountName)}
                                        </label>
                                        <div className="payment-value">
                                            <span>{method.accountName}</span>
                                        </div>
                                    </div>

                                    <div className="payment-info-block">
                                        <label className="payment-label">
                                            {method.id === 'vodafone'
                                                ? t(translations.payment.phoneNumber)
                                                : t(translations.payment.accountId)
                                            }
                                        </label>
                                        <div className="payment-value copyable">
                                            <span className="payment-number">{method.number}</span>
                                            <button
                                                className={`copy-btn ${copiedField === method.id ? 'copied' : ''}`}
                                                onClick={() => handleCopy(method.number, method.id)}
                                                title={t(translations.payment.copy)}
                                            >
                                                {copiedField === method.id ? (
                                                    <>
                                                        <Check size={16} />
                                                        <span>{t(translations.payment.copied)}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy size={16} />
                                                        <span>{t(translations.payment.copy)}</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Steps */}
                                    <div className="payment-steps">
                                        <h3 className="steps-title">
                                            {t(translations.payment.howToPay)}
                                        </h3>
                                        <ol className="steps-list">
                                            {method.steps.map((step, index) => (
                                                <li key={index} className="step-item">
                                                    <span className="step-number">{index + 1}</span>
                                                    <span className="step-text">{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Note Section */}
                    <div className="payment-note">
                        <Shield size={20} />
                        <p>{t(translations.payment.secureNote)}</p>
                    </div>

                    {/* WhatsApp Confirmation */}
                    <div className="payment-whatsapp-section">
                        <p>{t(translations.payment.confirmationNote)}</p>
                        <a
                            href="https://api.whatsapp.com/send?phone=201031889928"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="payment-whatsapp-btn"
                        >
                            {t(translations.payment.sendReceipt)}
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage