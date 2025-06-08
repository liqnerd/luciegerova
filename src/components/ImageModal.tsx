'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ImageModalProps {
  imageUrl: string
  onClose: () => void
}

export default function ImageModal({ imageUrl, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl w-full h-full" onClick={e => e.stopPropagation()}>
        <Image
          src={imageUrl}
          alt="Modal image"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
        >
          ×
        </button>
      </div>
    </motion.div>
  )
} 