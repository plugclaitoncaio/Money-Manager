import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight:'300', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Money Manager :: Seu gerenciador financeiro!',
  description: 'Gerenciador financeiro cirado na masterclass do dr. Waka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={cn(poppins.className, "bg-gray-50")}>{children}</body>
    </html>
  )
}
