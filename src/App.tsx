import { lazy, Suspense, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import { ChatbotWidget } from './components/ChatbotWidget'
import { LoadingScreen } from './components/LoadingScreen'
import { useAnalytics } from './hooks/useAnalytics'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useTheme } from './hooks/useTheme'

const LandingPage = lazy(() => import('./pages/LandingPage'))

function App() {
  const { theme, toggleTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useSmoothScroll()
  useAnalytics()

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1200)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]')
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#020617' : '#f8fafc')
    }
  }, [theme])

  return (
    <div className="relative min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <AnimatePresence>{isLoading ? <LoadingScreen theme={theme} /> : null}</AnimatePresence>
      <Suspense
        fallback={
          <div className="grid min-h-screen place-items-center text-sm text-slate-500 dark:text-slate-300">
            Loading...
          </div>
        }
      >
        <LandingPage isDark={theme === 'dark'} onToggleTheme={toggleTheme} />
      </Suspense>
      <ChatbotWidget />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: '14px',
            background: theme === 'dark' ? '#0f172a' : '#ffffff',
            color: theme === 'dark' ? '#f8fafc' : '#0f172a',
            border: theme === 'dark' ? '1px solid #1e293b' : '1px solid #e2e8f0',
          },
        }}
      />
    </div>
  )
}

export default App
