'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'

const TOTAL_FRAMES = 240

export default function ChipScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadedCount, setLoadedCount] = useState(0)

  // Use page scroll instead of container scroll
  const { scrollYProgress } = useScroll()

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  )

  // Load all images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises: Promise<HTMLImageElement>[] = []
      
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image()
        const promise = new Promise<HTMLImageElement>((resolve, reject) => {
          img.onload = () => {
            setLoadedCount((prev) => prev + 1)
            resolve(img)
          }
          img.onerror = reject
          img.src = `/sequence/frame_${i}_delay-0.04s.jpg`
        })
        imagePromises.push(promise)
      }

      try {
        const loadedImages = await Promise.all(imagePromises)
        setImages(loadedImages)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading images:', error)
        setIsLoading(false)
      }
    }

    loadImages()
  }, [])

  // Draw frame on canvas based on scroll
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    const unsubscribe = frameIndex.on('change', (latest) => {
      const frame = Math.floor(latest)
      const clampedFrame = Math.max(0, Math.min(frame, TOTAL_FRAMES - 1))
      
      if (images[clampedFrame]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const rect = canvas.getBoundingClientRect()
        
        // Calculate aspect ratio and center the image
        const img = images[clampedFrame]
        const imgAspect = img.width / img.height
        const canvasAspect = rect.width / rect.height
        
        let drawWidth = rect.width
        let drawHeight = rect.height
        let offsetX = 0
        let offsetY = 0

        if (imgAspect > canvasAspect) {
          // Image is wider
          drawHeight = rect.width / imgAspect
          offsetY = (rect.height - drawHeight) / 2
        } else {
          // Image is taller
          drawWidth = rect.height * imgAspect
          offsetX = (rect.width - drawWidth) / 2
        }

        ctx.drawImage(
          img,
          offsetX,
          offsetY,
          drawWidth,
          drawHeight
        )
      }
    })

    return () => {
      unsubscribe()
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [images, frameIndex])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#050505]">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white/80 mx-auto"></div>
          <p className="text-white/60 text-sm">
            Loading frames... {loadedCount}/{TOTAL_FRAMES}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-[#050505] pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        style={{ imageRendering: 'high-quality' }}
      />
    </div>
  )
}
