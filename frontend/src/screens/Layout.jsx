import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function Layout() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;