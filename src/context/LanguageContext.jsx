import React, { createContext, useContext, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  // Hardcoded to English as the single language
  const language = 'en'

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.lang = language
    document.documentElement.dir = 'ltr'
  }, [])

  const t = (translations) => {
    return translations[language] || translations.en
  }

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
