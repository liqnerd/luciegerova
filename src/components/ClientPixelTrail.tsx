'use client'

import dynamic from 'next/dynamic'

const PixelTrail = dynamic(() => import('./PixelTrail'), {
  ssr: false,
})

export default function ClientPixelTrail() {
  return (
    <PixelTrail
      gridSize={50}
      trailSize={0.1}
      maxAge={250}
      interpolate={5}
      color="#000"
      gooeyFilter={{ id: "cursor-goo-filter", strength: 2 }}
    />
  )
} 