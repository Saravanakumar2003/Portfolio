import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook to optimize scroll event handling and prevent forced reflows
 * Uses requestAnimationFrame and passive listeners for better performance
 */
export function useOptimizedScroll() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    // Use passive listener to improve scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollY
}

/**
 * Custom hook for scroll-based visibility (like scroll-to-top buttons)
 */
export function useScrollVisibility(threshold = 400) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setIsVisible(scrollY > threshold)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return isVisible
}

/**
 * Optimized smooth scroll function
 */
export function smoothScrollTo(targetY: number = 0, duration: number = 500) {
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()

  function animation(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation
    const easeInOutCubic = progress < 0.5
      ? 4 * progress * progress * progress
      : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1

    window.scrollTo(0, startY + distance * easeInOutCubic)

    if (progress < 1) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}