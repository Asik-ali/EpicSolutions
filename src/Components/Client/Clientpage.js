import React, { useEffect } from "react";
import img1 from "../../Assest/Mobile5-7.jpg";
import img2 from "../../Assest/Mobile5-8.jpg";
import img3 from "../../Assest/Mobile5-4.jpg";
import img4 from "../../Assest/Mobile5-3.jpg";
import img5 from "../../Assest/Mobile5-2.jpg";
import { FaAnglesRight } from "react-icons/fa6";

import { Helmet } from "react-helmet";
function Clientpage() {

  return (
    <div className="mb-5">
      <Helmet>
        <title>Our Valued Clients - Itel Mobile</title>
        <meta
          name="description"
          content="Explore personalized career counseling, skill enhancement workshops, interview preparation, networking events, resume building, and job search support at Itel Mobile. Navigate your career success with our expert guidance."
        />
      </Helmet>
      <link rel="canonical" href="https://itelmobile.tech/Client" />

      <div

        className="bg-[black] text-white h-[400px] overflow-hidden ">
        <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-2">
          <div className="justify-center lg:ps-10 flex flex-col gap-6">
            <h1 className="text-[#D1D5DB] text-center font-semibold font-[raleway] mt-5 lg:mt-0 text-2xl lg:text-start lg:text-4xl lg:w-[650px]">
              Elevate Your Career with Itel Mobile
            </h1>
            <p className="text-white mb-10 lg:mb-0 text-center lg:text-lg lg:text-start font-[poppins] text-sm lg:w-[750px] lg:ps-4">
              Our team of experienced career counselors is dedicated to understanding your individual aspirations, strengths, and goals in the mobile industry. Through personalized consultations, we provide insights and guidance tailored to your specific needs, helping you make informed decisions about your career path within the mobile sector.
            </p>
          </div>


          <svg
            focusable="false"
            className="hero__honeycom lg:h-[370px] h-[120px] lg:w-[320px] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 308.72 465.51"
          >
            <title>qti-inside-page-honeycomb-desktop</title>
            <path
              d="M245.36,34.33,185.9,0,126.44,34.33V103l59.46,34.33L245.36,103Z"
              fill="#ff063c"
            ></path>
            <path
              d="M182.1,143.68l-59.46-34.33L63.18,143.68v68.66l59.46,34.33,59.46-34.33Z"
              fill="#ff063c"
            ></path>
            <path
              d="M308.61,143.68l-59.46-34.33-59.46,34.33v68.66l59.46,34.33,59.46-34.33Z"
              fill="#ff063c"
            ></path>
            <path
              d="M118.92,253.2,59.46,218.87,0,253.2v68.66l59.46,34.33,59.46-34.33Z"
              fill="#ff063c"
            ></path>
            <path
              d="M245.46,253.2,186,218.87,126.54,253.2v68.66L186,356.19l59.46-34.33Z"
              fill="#ff063c"
            ></path>
            <path
              d="M308.72,362.52l-59.46-34.33L189.8,362.52v68.66l59.46,34.33,59.46-34.33Z"
              fill="#ff063c"
            ></path>
          </svg>
        </div>
      </div>
      <h1 className="text-center text-3xl lg:text-4xl font-[poppins] mt-5">
        Navigating Career <span className="text-[#ff063c]">Success</span> Together
      </h1>
      <p className="text-gray-700 text-center mt-8 px-4 lg:px-36">
        Our team of experienced career counselors is dedicated to understanding your individual aspirations, strengths, and goals in the mobile industry. Through personalized consultations, we provide insights and guidance tailored to your specific needs, helping you make informed decisions about your career path within the mobile sector.
      </p>

      <div className=" flex items-center justify-evenly flex-col lg:flex-row gap-4 px-3 mt-5 flex-wrap pb-8">

        <div

          className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
            Personalized Career  {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Counseling</span>
          </h1>
          <div className="flex  ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway]">
                Our team of experienced career counselors is dedicated to understanding your individual aspirations, strengths, and goals in the mobile industry. Through personalized consultations, we provide insights and guidance tailored to your specific needs, helping you make informed decisions about your career path within the mobile sector.
              </p>

            </div>
          </div>
        </div>
        <div

          className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
            Skill Enhancement   {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Workshops</span>
          </h1>
          <div className="flex ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway]">
                In today's dynamic job market, staying ahead requires continuous skill development. Our skill enhancement workshops cover a range of topics, from industry-specific tools to soft skills like communication and leadership. These sessions are designed to equip you with the competencies necessary for success in your chosen field, including the rapidly evolving mobile industry.
              </p>

            </div>
          </div>
        </div>
        <div

          className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
            Interview   {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Preparation</span>
          </h1>
          <div className="flex  ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway]">
                Facing an interview can be a nerve-wracking experience. Our interview preparation services include mock interviews, feedback sessions, and valuable tips to boost your confidence and improve your performance during actual job interviews. We aim to transform interviews into opportunities for you to shine, whether in the mobile industry or any other field.
              </p>

            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
            Networking Events and {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Communities</span>
          </h1>
          <div className="flex ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway]">
                Building a strong professional network is crucial for unlocking new opportunities in your career, especially within the mobile industry. Our networking events and online communities facilitate connections with like-minded individuals, industry experts, and potential employers, fostering meaningful relationships that can significantly impact your career trajectory. Join our vibrant communities to stay informed, connected, and empowered in your professional journey.
              </p>


            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
            Resume Building and  {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Optimization</span>
          </h1>
          <div className="flex  ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway]">
                Crafting an impactful resume is vital for creating a lasting first impression, especially in the competitive mobile industry. Our dedicated experts collaborate with you to develop a professional resume that not only highlights your accomplishments but also showcases your full potential. Additionally, we provide optimization services to ensure your resume seamlessly aligns with the latest requirements of modern recruitment processes. Let us help you stand out in the competitive job market with a tailored and optimized resume that truly reflects your unique value proposition.
              </p>


            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-2xl text-center text-gray-600 font-extralight font-[raleway]">
            Job Search Guidance for Your Success  {""}
            <span className="text-[#274584]  font-[poppins] font-semibold">Support</span>
          </h1>
          <div className="flex ms-10 gap-10 mt-5">
            <div className="h-[310px] md:h-[100px] lg:h-[180px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[400px] text-gray-700 font-[raleway]">
                Effectively navigating the dynamic job market can be challenging, especially given the multitude of opportunities available today. At Itel Mobile, our comprehensive job search support services go beyond traditional job hunting. We offer personalized job matching, hands-on application assistance, and valuable insights into emerging industry trends, including those relevant to the mobile sector. Our goal is to streamline your job search efforts and significantly enhance your chances of securing the perfect role. Trust us to be your partner in success as you embark on your professional journey.
              </p>


            </div>
          </div>
        </div>





      </div>

      <h1 className='text-center text-3xl lg:text-4xl font-[poppins] font-semibold mt-10'>Our Pics</h1>
      <div

        className="bg-[#E3F6F9] mt-10 ">
        <div className="flex flex-col justify-center items-center  lg:flex-row lg:justify-evenly">
          <img alt="Ortho PNG" className="w-[200px] h-[150px] object-contain rounded" src={img1} data-robots="noindex" />
          <img alt="1Point1 Logo" className="w-[200px] h-[150px] object-contain" src={img2} data-robots="noindex" />
          <img alt="Athena BPO" className="w-[200px] h-[150px] object-contain rounded" src={img3} data-robots="noindex" />
          <img alt="Logo 42" className="w-[200px] h-[150px] object-contain rounded" src={img4} data-robots="noindex" />
          <img alt="White PhotoRoom" className="w-[200px] h-[150px] object-contain rounded" src={img5} data-robots="noindex" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center mt-10 px-4">
        <div className="flex flex-col justify-center items-center gap-4">

          <div

            className="flex flex-col justify-center items-center gap-3">
            <h1 className=" font-bold text-xl">
              Our Services
            </h1>
            <div className=" bg-[#ff063c] h-[2px] w-[200px]"></div>
          </div>
          <div>
            <p className="text-[raleway] font-semibold text-lg text-center">
              Elevate Your Career with Our Specialized Services
            </p>
            <ul className="text-gray-700 flex flex-col gap-5 mt-5">
              <li className="flex gap-2 items-center">
                <FaAnglesRight className="text-[#ff063c]" /> Resume Building: Craft a standout, professional resume that leaves a lasting impression on employers, tailored to the demands of the mobile industry.
              </li>
              <li className="flex gap-2 items-center">
                <FaAnglesRight className="text-[#ff063c]" /> Job Matching: Explore job opportunities perfectly aligned with your unique skills and career goals within the mobile sector.
              </li>
              <li className="flex gap-2 items-center">
                <FaAnglesRight className="text-[#ff063c]" /> Interview Mastery: Gain the confidence and skills needed to excel in job interviews in the mobile industry, turning them into opportunities for success.
              </li>
              <li className="flex gap-2 items-center">
                <FaAnglesRight className="text-[#ff063c]" /> Personalized Career Counseling: Receive expert guidance tailored to your individual aspirations, strengths, and goals, with a focus on the mobile industry.
              </li>
            </ul>
          </div>



        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-bold text-xl">
              Seamless Journey to Success
            </h1>
            <div className="bg-[#ff063c] h-[2px] w-[200px]"></div>
          </div>
          <div>
            <p className="text-[raleway] font-semibold text-lg text-center">
              Embark on Your Career Transformation with Our Simple Process
            </p>
            <ul className="text-gray-700 flex flex-col gap-5 mt-5">
              <li className="flex gap-2 items-center">
                <FaAnglesRight className="text-[#ff063c]" /> Reach Out: Initiate the process by contacting us through email or phone to schedule an initial consultation with our mobile industry experts.
              </li>
              <li className="flex gap-2 items-center">
                <FaAnglesRight className="text-[#ff063c]" /> Skills Assessment: We'll conduct a thorough assessment of your skills, goals, and career aspirations within the mobile sector.
              </li>
              <li className="flex gap-2 items-center">
                <FaAnglesRight className="text-[#ff063c]" /> Personalized Plan: Receive a meticulously crafted, personalized plan tailored to your unique needs and aspirations in the mobile industry.
              </li>
              <li className="flex gap-2 items-center">
                <FaAnglesRight className="text-[#ff063c]" /> Ongoing Support: Benefit from continuous support and guidance throughout your job search journey in the mobile industry, ensuring success.
              </li>
            </ul>
          </div>
        </div>



      </div>





    </div>
  );
}

export default Clientpage;
