import React from 'react'
import Navbar from "../Components/navbar/Navbar"
import Hero from "../../src/Components/Hero/Hero"
import Welcome from '../Components/Welcome/Welcome'
import Footer from '../Components/Footer/Footer'
import Newsletter from '../Components/newsletter/NewsLetter'
import Contact from '../Components/contact/Contact'
import AdSense from '../Components/Adsense/Adsense'
function Home() {
  return (
    <>
      <Hero />
      <AdSense adClient="ca-pub-2334117942638644" adSlot="7272910777" format="fluid" layout="in-article" />
      <Welcome />
    </>
  )
}

export default Home