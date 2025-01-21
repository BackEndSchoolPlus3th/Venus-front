import Header from '@/components/Header'
import React from 'react'

type LayoutProps = {
  analytics: React.ReactNode
  news: React.ReactNode
}

const Layout = ({ analytics, news }: LayoutProps) => {
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header />
        {analytics}
        {news}
      </div>
    </main>
  )
}

export default Layout
