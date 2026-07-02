import { useEffect } from 'react'

export function useAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const tracked = target?.closest<HTMLElement>('[data-track]')

      if (tracked?.dataset.track) {
        // Simulated analytics for click behavior.
        console.log('[analytics] click:', tracked.dataset.track)
      }
    }

    const onScroll = () => {
      const progress = Math.min(
        100,
        Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100),
      )
      console.log('[analytics] scroll-progress:', `${progress}%`)
    }

    let timeoutId: number | undefined
    const throttledScroll = () => {
      if (timeoutId !== undefined) {
        return
      }
      timeoutId = window.setTimeout(() => {
        onScroll()
        timeoutId = undefined
      }, 600)
    }

    document.addEventListener('click', onClick)
    window.addEventListener('scroll', throttledScroll, { passive: true })

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('scroll', throttledScroll)
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId)
      }
    }
  }, [])
}
