import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation();
  return (
    <div>
        <Navbar/>
        {/* {location.pathname === '/' ? null : <Header/>} */}
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;