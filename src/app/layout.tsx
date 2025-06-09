'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import PixelTrail from '@/components/PixelTrail'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`font-sans antialiased`}>
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#000"
          gooeyFilter={{ id: "cursor-goo-filter", strength: 2 }}
        />
        {children}
      </body>
    </html>
  )
}
