import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-language') || 'es'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)

    document.documentElement.lang = language
  }, [language])

  const changeLanguage = (newLanguage) => {
    if (newLanguage === 'es' || newLanguage === 'en') {
      setLanguage(newLanguage)
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage debe utilizarse dentro de LanguageProvider'
    )
  }

  return context
}