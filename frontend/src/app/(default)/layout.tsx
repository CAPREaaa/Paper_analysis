'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <main className="grow">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}