// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Client from "./Pages/Client";
import Carrer from "./Pages/Carrer";
import Services from "./Pages/Services";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
// import Sitemap from "./sitemap";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Carrers" element={<Carrer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/sitemap.xml" element={<Sitemap />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
