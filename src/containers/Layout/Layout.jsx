import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Layout = () => {
  return (
    <>
      <Header />

      <main className="body-bg min-h-screen bg-white dark:bg-gray-800 transition-all pt-5 md:pt-5 pb-2 px-2">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout