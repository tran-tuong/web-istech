import React from 'react'
import Header from '../components/Home/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Home/Footer/Footer'

export default function HomeTemplate() {
  return (
    <div>
        <Header/>
        <Outlet/>

        <Footer/>
    </div>
  )
}
