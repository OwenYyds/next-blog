import { useEffect, useRef, useState } from 'react'

export default function IsHeaderShow() {
  const navRef = useRef<HTMLElement>(null)

  const [showNav, setShowNav] = useState(true)

  const lastScrollY = useRef(0)

  useEffect(() => {
    // Use constant for threshold to make it easier to adjust
    const SCROLL_THRESHOLD = 5

    // Fix typo in function name and improve implementation
    const handleScroll = () => {
      // Use optional chaining for safer access
      const navHeight = navRef.current?.offsetHeight ?? 0
      const scrollY = window.scrollY

      // Special case for top of page
      if (scrollY <= navHeight) {
        setShowNav(true)
      } else {
        // Check scroll direction with threshold
        if (scrollY > lastScrollY.current + SCROLL_THRESHOLD) {
          setShowNav(false)
        } else if (scrollY < lastScrollY.current - SCROLL_THRESHOLD) {
          setShowNav(true)
        }
      }

      // Update reference value
      lastScrollY.current = scrollY
    }

    // Use passive event listener for better performance
    // This is especially important for scroll events
    document.addEventListener('scroll', handleScroll, { passive: true })

    // Clean up properly
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return {
    navRef,
    showNav,
  }
}
