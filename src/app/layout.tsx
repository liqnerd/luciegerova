'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import ClientPixelTrail from '@/components/ClientPixelTrail'

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
        <ClientPixelTrail />
        {children}
      </body>
    </html>
  )
}
