import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CursorTrail from '@/components/CursorTrail'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Lucie Hegerova - UX/UI Designer & Illustrator',
  description: 'Portfolio of Lucie Hegerova, a UX/UI designer and illustrator with over 5 years of experience in the industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`font-sans antialiased`}>
        <CursorTrail />
        {children}
      </body>
    </html>
  )
}
