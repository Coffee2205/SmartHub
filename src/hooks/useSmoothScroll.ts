import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]')

      if (!anchor) {
        return
      }

      const selector = anchor.getAttribute('href')
      if (!selector || selector === '#') {
        return
      }

      const section = document.querySelector(selector)
      if (!section) {
        return
      }

      event.preventDefault()
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    document.addEventListener('click', onAnchorClick)
    return () => {
      document.removeEventListener('click', onAnchorClick)
    }
  }, [])
}
