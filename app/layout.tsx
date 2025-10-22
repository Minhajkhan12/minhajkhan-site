import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minhaj Khan | AI Enthusiast',
  description: 'The personal website of Minhaj Khan, an AI enthusiast exploring the intersection of technology, creativity, and community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
