import { useCallback } from 'react'
import { ArrowUp } from 'phosphor-react'
import { Scroll } from './styles'
import { useScrollVisibility, smoothScrollTo } from '../../hooks/useOptimizedScroll'

export function ScrollTop() {
  const up = useScrollVisibility(400)

  const scrollToTop = useCallback(() => {
    smoothScrollTo(0, 500)
  }, [])

  return (
    <>
      {up && (
        <Scroll>
          <button onClick={scrollToTop}>
            <ArrowUp weight='bold' />
          </button>
        </Scroll>
      )}
    </>
  )
}
