import React, { useState, useEffect } from "react";
import { LuChevronsUp } from "react-icons/lu";
import icon from "../../../src/Assest/images.png";
import bg from "../../Assest/Hero5.jpg";
import { Link } from "react-router-dom";


export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  return (
    <div className="overflow-hidden ">
      <div
        className="relative h-screen w-screen px-4 flex flex-col justify-center bg-gradient-to-b from-[#CAD9F] to-[#446595] text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="mx-auto text-center lg:text-start relative z-10">
          <h1  className="text-4xl md:text-5xl lg:text-6xl font-semibold  font-[poppins] mb-4 text-gray-300">
          Your Gateway to Innovation ✨
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 font-[ContrailOne] text-gray-300">
          Where quality meets affordability, offering smart choices and superior performance for every user
          </p>
          <div className="flex flex-col justify-center md:flex-row gap-3 px-4">
            <button className="font-[DMSans] text-xl px-5 py-3 rounded bg-[#ff063c] hover:bg-gray-700 hover:text-white duration-300">
            <Link to="/services">Buy Now</Link>
            </button>
            <button className="px-5 py-3 rounded font-[DMSans] text-xl bg-gray-800 hover:bg-[#ff063c] hover:text-white duration-300">
            Services
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed h-[50px] w-[50px] rounded-full bottom-12 text-3xl left-4 z-30 ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        <a href="https://wa.me/+918190981594">
          <img className="rounded-full" src={icon} alt="Images" data-robots="noindex" />
        </a>
      </div>

      <div
        className={`fixed h-[50px] flex items-center justify-center w-[50px] bg-[#ff063c] rounded-full bottom-12 text-4xl right-4 z-30 ${
          isVisible ? "visible" : "hidden"
        }`}
        onClick={handleScrollToTop}
        style={{ cursor: "pointer" }}
      >
        <LuChevronsUp className="text-white" />
      </div>
    </div>
  );
}