import { useEffect, useRef } from 'react'

/**
 * useTilt: Lightweight 3D tilt & parallax hook using requestAnimationFrame
 * and CSS custom properties. Respects prefers-reduced-motion and utilizes
 * IntersectionObserver to only execute calculations when the hero is in view.
 */
export function useTilt(heroRef, options = {}) {
  const {
    maxTilt = 12, // Maximum rotation in degrees
    lerpFactor = 0.08, // Damping factor for silky smooth motion
  } = options

  const isIntersectingRef = useRef(true)
  const rafIdRef = useRef(null)
  const targetPosRef = useRef({ x: 0, y: 0 })
  const currentPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) {
      return
    }

    const heroEl = heroRef.current
    if (!heroEl) return

    // IntersectionObserver to pause loop when hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting
        if (!entry.isIntersecting) {
          // Reset target smoothly to center when out of view
          targetPosRef.current = { x: 0, y: 0 }
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(heroEl)

    // Track mouse position relative to the hero section
    const handleMouseMove = (e) => {
      if (!isIntersectingRef.current) return
      const rect = heroEl.getBoundingClientRect()
      // Normalize to range [-1, 1] from center of hero section
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1

      targetPosRef.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      }
    }

    const handleMouseLeave = () => {
      // Smoothly return to center resting state on mouse leave
      targetPosRef.current = { x: 0, y: 0 }
    }

    heroEl.addEventListener('mousemove', handleMouseMove, { passive: true })
    heroEl.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    let isRunning = true

    const update = () => {
      if (!isRunning) return

      if (isIntersectingRef.current) {
        // Interpolate smoothly toward target position
        currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * lerpFactor
        currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * lerpFactor

        const mx = currentPosRef.current.x
        const my = currentPosRef.current.y

        // Calculate 3D tilt angles (inverted X for natural camera tilt)
        const rx = -my * maxTilt
        const ry = mx * maxTilt

        // Apply directly via CSS custom properties on hero element for zero-overhead performance
        heroEl.style.setProperty('--hero-rx', `${rx.toFixed(2)}deg`)
        heroEl.style.setProperty('--hero-ry', `${ry.toFixed(2)}deg`)
        heroEl.style.setProperty('--hero-mx', mx.toFixed(4))
        heroEl.style.setProperty('--hero-my', my.toFixed(4))
      }

      rafIdRef.current = requestAnimationFrame(update)
    }

    rafIdRef.current = requestAnimationFrame(update)

    // Cleanup all observers, listeners and RAF on unmount
    return () => {
      isRunning = false
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      observer.disconnect()
      heroEl.removeEventListener('mousemove', handleMouseMove)
      heroEl.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [heroRef, maxTilt, lerpFactor])
}

export default useTilt
