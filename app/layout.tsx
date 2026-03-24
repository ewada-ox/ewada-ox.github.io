import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#C5E5DC',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'EWADA - Building Ethical Web and Data Infrastructure in the Age of AI',
  description: 'Reform the concentration of power on the World Wide Web* by developing and deploying new forms of technical and legal infrastructure.',
  keywords: 'AI ethics, data autonomy, privacy preserving computation, Oxford Martin School',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
