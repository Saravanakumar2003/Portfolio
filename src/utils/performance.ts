import { CSSProperties } from 'react'

/**
 * Performance utilities to prevent forced reflows and optimize animations
 */

/**
 * CSS properties that promote elements to their own layer, preventing reflows
 */
export const performanceLayerStyles: CSSProperties = {
  willChange: 'transform',
  transform: 'translateZ(0)', // Force hardware acceleration
  backfaceVisibility: 'hidden',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
}

/**
 * CSS properties for smooth animations without layout recalculation
 */
export const smoothAnimationStyles: CSSProperties = {
  ...performanceLayerStyles,
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
}

/**
 * Optimized scroll animation styles
 */
export const scrollAnimationStyles: CSSProperties = {
  ...performanceLayerStyles,
  position: 'relative',
}

/**
 * CSS properties for elements that change size/position frequently
 */
export const containStyles: CSSProperties = {
  contain: 'layout style paint',
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    
    const callNow = immediate && !timeout
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    
    if (callNow) func(...args)
  }
}

/**
 * Throttle function for scroll events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Check if an element is in viewport efficiently
 */
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Batch DOM reads and writes to prevent forced reflows
 */
export class DOMBatcher {
  private readQueue: Array<() => void> = []
  private writeQueue: Array<() => void> = []
  private isScheduled = false

  public read(callback: () => void): void {
    this.readQueue.push(callback)
    this.schedule()
  }

  public write(callback: () => void): void {
    this.writeQueue.push(callback)
    this.schedule()
  }

  private schedule(): void {
    if (this.isScheduled) return
    
    this.isScheduled = true
    requestAnimationFrame(() => {
      this.flush()
    })
  }

  private flush(): void {
    // Execute all reads first
    while (this.readQueue.length) {
      const callback = this.readQueue.shift()
      if (callback) callback()
    }

    // Then execute all writes
    while (this.writeQueue.length) {
      const callback = this.writeQueue.shift()
      if (callback) callback()
    }

    this.isScheduled = false
  }
}

// Global DOM batcher instance
export const domBatcher = new DOMBatcher()