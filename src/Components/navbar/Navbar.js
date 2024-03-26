import React, { useState } from "react";
// import logo from "../../../src/Assest/logo.jpg";
import { FaBars } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";

function Navbar({}) {
  const [Sidenav, setSideNav] = useState(false);
  const [btn, setBtn] = useState(null);
  const [home, sethome] = useState(false);

  function handledrop() {
    setSideNav(!Sidenav);
  }

  function handleActive(e) {
    sethome(true);
    setBtn(e.target.textContent);
    setSideNav(false);
  }

  function handleHome() {
    sethome(false);
    setSideNav(false);
    setBtn(null);
  }



  return (
    <div className="flex  lg:h-[90px] ">
      <div className="flex justify-between p-4 lg:p-0 z-50 lg:justify-between lg:px-4 text-black items-center w-full">
        <div className="flex lg:justify-center justify-center items-center ">
          {/* <img
            alt="Images"
            src={logo}
            className="lg:w-[120px] object-cover hidden lg:block"
            data-robots="index"
          /> */}

          <Link to="/">
            {" "}
            <h1 className="font-[Dmsans] font-semibold text-2xl text-black">
              Itel <span className="text-[#ff063c]">Mobile</span>
            </h1>
          </Link>
        </div>
        <FaBars className="text-2xl lg:hidden" onClick={handledrop} />
        {/* LapNavbar   */}

        <div className="hidden lg:block ">
          <ul className="flex gap-4 text-lg cursor-pointer font-semibold">
            <li
              className={
                home
                  ? "hover:text-[#ff063c] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#ff063c] "
                  : "text-[#ff063c] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#ff063c]"
              }
            >
              <Link onClick={handleHome} to="/">
                Home
              </Link>
            </li>
            <li
              className={
                btn === "About"
                  ? "text-[#ff063c] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#ff063c]"
                  : "hover:text-[#ff063c] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#ff063c] "
              }
            >
              <Link onClick={handleActive} to="/About">
                About
              </Link>
            </li>
            <li
              className={
                btn === "Clients"
                  ? "text-[#ff063c] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#ff063c]"
                  : "hover:text-[#ff063c] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#ff063c] "
              }
            >
              <Link onClick={handleActive} to="/Client">
                Clients
              </Link>
            </li>
            <li
              className={
                btn === "Careers"
                  ? "text-[#ff063c] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#ff063c]"
                  : "hover:text-[#ff063c] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#ff063c] "
              }
            >
              <Link onClick={handleActive} to="/Carrers">
                Careers
              </Link>
            </li>
            <li
              className={
                btn === "Services"
                  ? "text-[#ff063c] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#ff063c]"
                  : "hover:text-[#ff063c] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#ff063c] "
              }
            >
              <Link onClick={handleActive} to="/services">
                Services
              </Link>
            </li>

            <li
              className={
                btn === "Contact Us"
                  ? "text-[#ff063c] relative after:absolute after:left-0 after:-bottom-3 after:w-[100%] after:h-[3px]  after:bg-[#ff063c]"
                  : "hover:text-[#ff063c] relative hover:after:absolute hover:after:left-0 hover:after:-bottom-3 hover:after:w-[100%] hover:after:h-[3px]  hover:after:bg-[#ff063c] "
              }
            >
              <Link onClick={handleActive} to="/Contact">
                Contact Us
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      {/* SideBar */}
      <div
        className={
          Sidenav
            ? "z-[99] w-[100%] h-[300px]  bg-[#E0F4FF] absolute top-[60px] left-0 transition-all duration-1000  lg:hidden "
            : " h-[300px] w-full bg-[#FFFCF8] absolute -top-[350px]  transition-all duration-1000 lg:hidden"
        }
      >
        <ul className="flex flex-col content-center items-center gap-4 text-lg cursor-pointer font-semibold pt-10  ">
          <li className={home ? "text-black" : "text-[#ff063c]"}>
            <Link onClick={handleHome} to="/">
              Home
            </Link>
          </li>

          <li
            className={
              btn === "About" ? "text-[#ff063c]" : "text-black hover:text-[#ff063c] "
            }
          >
            <Link onClick={handleActive} to="/About">
              About
            </Link>
          </li>

          <li
            className={
              btn === "Clients"
                ? "text-[#ff063c]"
                : "text-black hover:text-[#ff063c] "
            }
          >
            <Link onClick={handleActive} to="/Client">
              Clients
            </Link>
          </li>
          <li
            className={
              btn === "Carrers"
                ? "text-[#ff063c]"
                : "text-black hover:text-[#ff063c]"
            }
          >
            <Link onClick={handleActive} to="/Carrers">
              Carrers
            </Link>
          </li>
          <li
            className={
              btn === "Services"
                ? "text-[#ff063c]"
                : "text-black hover:text-[#ff063c] "
            }
          >
            <Link onClick={handleActive} to="/Services">
              Services
            </Link>
          </li>
          <li
            className={
              btn === "Contact Us"
                ? "text-[#ff063c]"
                : "text-black hover:text-[#ff063c] "
            }
          >
            <Link onClick={handleActive} to="/Contact">
              Contact Us
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
