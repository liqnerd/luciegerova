'use client'

import PixelTrail from './PixelTrail'

export default function CursorTrail() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <PixelTrail
        gridSize={40}
        trailSize={0.15}
        maxAge={150}
        interpolate={2}
        color="#000"
        gooeyFilter={{ id: "cursor-goo-filter", strength: 3 }}
      />
    </div>
  )
} 