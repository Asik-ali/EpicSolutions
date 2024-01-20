// Import necessary dependencies and components
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles
import AD1 from "./Components/Ads/Ad1";
import AdSense from "./Components/Adsense/Adsense";

// Your ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) {
    return children;
  } else {
    // Redirect to login and show a toast message if user is not logged in
    toast.error("Please log in to access this page.", {
      position: "top-center",
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    return <Navigate to="/login" />;
  }
};

function App() {
  // Use state to manage user authentication status
  const [user, setUser] = useState(localStorage.getItem('user'));

  // Function to handle user login
  const handleLogin = (userData) => {
    localStorage.setItem('user', userData);
    setUser(userData);
  };

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <BrowserRouter>
      <AdSense adClient="ca-pub-2334117942638644" adSlot="7272910777" format="fluid" layout="in-article" />
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        {/* Use ProtectedRoute instead of Route for protected pages */}
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Client" element={<Client />}/>
        <Route path="/Carrers" element={<Carrer />}/>
        <Route path="/ads1" element={<ProtectedRoute><AD1 /></ProtectedRoute>} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        {/* Uncomment the line below if you have a Sitemap component */}
        {/* <Route path="/sitemap.xml" element={<Sitemap />} /> */}
      </Routes>
      <Footer />
      <ToastContainer />
      <AdSense/>
    </BrowserRouter>
  );
}

export default App;
