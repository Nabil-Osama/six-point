import React, { useState, useEffect, useRef } from 'react'

const LazyImage = ({ src, alt, className, style, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  return (
    <div ref={imgRef} style={{ position: 'relative', ...style }}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={handleLoad}
          loading="lazy"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}
      {!isLoaded && isInView && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #F5E6D3 0%, #FFF8E7 100%)',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      )}
    </div>
  )
}

export default LazyImage