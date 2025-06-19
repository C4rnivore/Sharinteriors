// app/layout.jsx
import '../globals.css'

import { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from '@/components/layout/header'

export default function PageLayout({ children }:{children: ReactNode}) {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}