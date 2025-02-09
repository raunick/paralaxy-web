'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import React from 'react'

const ParallaxCV = () => {
  const cvRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cvRef.current || !containerRef.current) return

    const cv = cvRef.current
    const container = containerRef.current

    const movementFactor = 1 / 30

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = container.getBoundingClientRect()

      const xRelative = clientX - left
      const yRelative = clientY - top

      const rotateY = (xRelative - width / 2) * movementFactor
      const rotateX = (height / 2 - yRelative) * movementFactor

      gsap.to(cv, {
        rotateY,
        rotateX,
        transformPerspective: 1000,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', () => {
      gsap.to(cv, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    })

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="min-h-screen bg-gray-200 flex items-center justify-center"
    >
      <div
        ref={containerRef}
        className="flex items-center justify-center perspective-1000"
      >
        <div
          ref={cvRef}
          className="w-[210mm] h-[297mm] bg-white rounded-lg shadow-xl transform-gpu p-8 relative"
        >
        </div>
      </div>
    </div>
  )
}

export default ParallaxCV

