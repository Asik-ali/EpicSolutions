import React from 'react'
import Clientpage from '../Components/Client/Clientpage'
import Newsletter from "../Components/newsletter/NewsLetter";
import { Helmet } from 'react-helmet';
function Client() {
  return (
    <div>
       <Helmet>
        <title>Client Itel Mobile - Empowering Success Through Talent</title>
        <meta
          name="description"
          content="Discover how Itel Mobile empowers success through talent acquisition and tailored HR management services. Learn about our consultancy approach, bid farewell to unemployment, and explore our commitment to building strong relationships in the professional world."
        />
        <link rel="canonical" href="https://itelmobile.tech/Client" />
        </Helmet>
      <Clientpage/>
      <Newsletter/>
    </div>
  )
}

export default Client
