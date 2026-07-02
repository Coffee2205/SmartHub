import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_KEY = 'theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const saved = window.localStorage.getItem(THEME_KEY)
  if (saved === 'light' || saved === 'dark') {
    return saved
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.setAttribute('data-theme', theme)
    root.style.colorScheme = theme
    document.body.style.backgroundColor = theme === 'dark' ? '#020617' : '#ffffff'
    document.body.style.color = theme === 'dark' ? '#f8fafc' : '#0f172a'
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const onSystemThemeChange = (event: MediaQueryListEvent) => {
      const saved = window.localStorage.getItem(THEME_KEY)
      if (saved !== 'light' && saved !== 'dark') {
        setTheme(event.matches ? 'dark' : 'light')
      }
    }

    const onStorage = (event: StorageEvent) => {
      if (event.key !== THEME_KEY) {
        return
      }

      if (event.newValue === 'light' || event.newValue === 'dark') {
        setTheme(event.newValue)
      }
    }

    mediaQuery.addEventListener('change', onSystemThemeChange)
    window.addEventListener('storage', onStorage)

    return () => {
      mediaQuery.removeEventListener('change', onSystemThemeChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
