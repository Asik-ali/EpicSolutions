import React from 'react'
import Navbar from "../Components/navbar/Navbar"
import Hero from "../../src/Components/Hero/Hero"
import Welcome from '../Components/Welcome/Welcome'
import Footer from '../Components/Footer/Footer'
import Newsletter from '../Components/newsletter/NewsLetter'
import Contact from '../Components/contact/Contact'
import AdSenseComponent from '../Components/Adsense/Adsense'
import AdSenseComponent1 from '../Components/Adsense/Adsense1'
import AdSenseComponent2 from '../Components/Adsense/Adsense2'
import AdSenseComponent3 from '../Components/Adsense/Adsense3'
function Home() {
  return (
    <>
      <AdSenseComponent />
      <AdSenseComponent3 />
      <Hero />
      <Welcome />
      <AdSenseComponent1 />
      <AdSenseComponent2 />
    </>
  )
}

export default Home