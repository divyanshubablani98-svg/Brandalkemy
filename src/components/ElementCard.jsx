import { useState, useEffect, useRef, useCallback } from 'react'

const ACCENT_COLORS = {
  amber: '#FCCE07',
  'neutral-amber': '#FCCE07',
  amethyst: '#d18ce5',
  'neutral-amethyst': '#d18ce5',
  white: '#ffffff',
}

const MAX_PARTICLES = 14

export function ElementCard({ el }) {
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState([])
  const cardRef = useRef(null)
  const particleIdRef = useRef(0)
  const isHoveredRef = useRef(false)
  const lastMoveSpawnRef = useRef(0)
  isHoveredRef.current = isHovered

  // Ensure every card gets its designated hover spark color
  const sparkColor = el.sparkColor || ACCENT_COLORS[el.accent] || '#FCCE07'

  // Spawn a single chemistry spark / ember
  const spawnParticle = useCallback((customX, customY) => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (prefersReducedMotion.matches) return
    }

    setParticles((prev) => {
      if (prev.length >= MAX_PARTICLES) return prev

      const id = ++particleIdRef.current
      const size = Math.random() * 2.2 + 2.5 // 2.5px - 4.7px
      const x = customX !== undefined ? customX : Math.random() * 80 + 10 // 10% - 90% across card width
      const y = customY !== undefined ? customY : Math.random() * 70 + 15 // 15% - 85% across card height
      const vx = (Math.random() - 0.5) * 36 // -18px to +18px horizontal drift
      const vy = -(Math.random() * 26 + 20) // -20px to -46px upward drift
      const duration = Math.random() * 0.35 + 0.85 // 0.85s - 1.2s lifespan

      const newParticle = {
        id,
        x,
        y,
        size,
        vx,
        vy,
        duration,
        color: sparkColor,
      }

      // Schedule natural cleanup after duration ends
      setTimeout(() => {
        setParticles((current) => current.filter((p) => p.id !== id))
      }, duration * 1000 + 60)

      return [...prev, newParticle]
    })
  }, [sparkColor])

  // Continuous spawning loop while card is active (hovered or focused)
  useEffect(() => {
    if (!isHovered) return

    // Immediately emit initial sparks on hover/focus
    spawnParticle()
    const timer = setTimeout(() => {
      if (isHoveredRef.current) spawnParticle()
    }, 60)

    // Continuously emit sparks every ~110ms
    const interval = setInterval(() => {
      if (isHoveredRef.current) {
        spawnParticle()
      }
    }, 110)

    // Stop spawning immediately on mouse leave; existing sparks fade naturally
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [isHovered, spawnParticle])

  // Spawn reactive spark trail when moving cursor over the card
  const handleMouseMove = (e) => {
    const now = Date.now()
    if (now - lastMoveSpawnRef.current < 70) return
    lastMoveSpawnRef.current = now

    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    spawnParticle(x, y)
  }

  return (
    <div
      ref={cardRef}
      className={`element-card node accent-${el.accent}`}
      tabIndex={0}
      role="region"
      aria-label={`${el.symbol} - ${el.name}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <span className="node-number">{el.number}</span>
      <span className="node-symbol">{el.symbol}</span>
      <span className="node-name">{el.name}</span>

      {/* Reactive Chemistry Alchemy Spark Particles */}
      {particles.length > 0 && (
        <div className="alchemy-particles-container" aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className="alchemy-particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color,
                boxShadow: `0 0 6px ${p.color}, 0 0 12px ${p.color}, 0 0 2px #ffffff`,
                '--dx': `${p.vx}px`,
                '--dy': `${p.vy}px`,
                '--dur': `${p.duration}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ElementCard
