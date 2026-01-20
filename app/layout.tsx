import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeuralCore X1 - The Future of AI',
  description: 'Experience the power of NeuralCore X1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
