import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Lookup from '../components/Lookup'
import Features from '../components/Features'

function Home() {
  return (
    <div>
        <Hero/>
        <Lookup/>
        <Features/>
    </div>
  )
}

export default Home