import type { Metadata } from 'next'
import '../styles/globals.css'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Pretendard-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Pretendard-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: 'NewsToYou',
  description: 'BackendPlus Venus-front'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
