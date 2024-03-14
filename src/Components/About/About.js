import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import hero from "../../Assest/a 2.jpg";
import img1 from "../../Assest/1.png";
import img2 from "../../Assest/2.jpg";
import img3 from "../../Assest/3.jpg";
import img4 from "../../Assest/4.jpg";
import about from "../../Assest/aboutimg1.jpg";
import responsibilities from "./Resposibiltesdata";
import approachPoints from "./Apporachpoint";

function AboutContent() {
  useEffect(() => {
    // Initialize AdSense script
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Push ads when the script is loaded
    script.onload = () => {
      const adsInsElements = document.querySelectorAll('.adsbygoogle');

      // Check if 'ins' elements don't have child nodes (ads) before pushing
      adsInsElements.forEach((element) => {
        if (element.childNodes.length === 0) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      });
    };
  }, []);



  return (
    <div className="overflow-x-hidden">
      {/* SEO Section - React Helmet */}
      <Helmet>
        <title>About Itel Mobile - Empowering Success Through Talent</title>
        <meta
          name="description"
          content="Discover how Itel Mobile empowers success through talent acquisition and tailored HR management services. Learn about our consultancy approach, bid farewell to unemployment, and explore our commitment to building strong relationships in the professional world."
        />
        <link rel="canonical" href="https://itelmobile.tech/About" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644" crossOrigin="anonymous"></script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#ff063c] to-white">
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="justify-center lg:ps-10 flex flex-col gap-6">
            <h1 className="text-[black] text-center font-semibold font-[raleway] mt-5 lg:mt-0 text-3xl lg:text-5xl">
              Working Together for Stronger Results
            </h1>
            <p className="text-black mb-10 lg:mb-0 text-center lg:text-xl lg:text-start font-[poppins] text-sm lg:w-[650px]">
            In the dynamic realm of mobile technology, Itel Mobile stands out as a beacon of innovation and accessibility. As consumers navigate through a sea of options, Itel offers a refreshing blend of cutting-edge features and budget-friendly pricing, making high-quality smartphones attainable for a broader audience.
            </p>
          </div>
          <div className="">
            <img src={hero} className="rounded w-[600px] object-cover" alt="Team Collaboration" data-robots="noindex" />
          </div>
        </div>
      </section>
      {/* Consultancy Section */}
      <section className="flex flex-col lg:flex-row px-4 gap-5 lg:gap-0 items-center justify-evenly mt-10">
        <div className="">
          <h2 className="text-4xl text-gray-600 font-extralight font-[raleway]">
            <span className="text-[#274584] font-[poppins] font-semibold">
              Consultancy
            </span>{" "}
            that Empowers You
          </h2>
          <div className="flex ms-10 gap-10 mt-10">
            <div className="h-[310px] md:h-[100px] lg:h-[210px] w-[2px] bg-[#274584] after:h-[10px] after:w-[10px] after:rounded-full relative after:absolute after:-left-[4px] after:-top-[5px] before:w-[10px] after:bg-[#274584] before:h-[10px] before:rounded-full before:bg-[#274584] before:absolute before:-left-[4px] before:-bottom-[5px]"></div>
            <div>
              <p className="lg:w-[300px] text-gray-700 text-lg font-[raleway]">
              Itel Mobile, a subsidiary of Transsion Holdings, entered the smartphone market with a mission to democratize technology. Since its inception, Itel has been committed to bridging the digital divide by providing affordable yet feature-rich smartphones tailored to the needs of diverse consumer segments. 
              </p>
            </div>
          </div>
        </div>
        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2">
            <div className="relative group">
              <div className="w-[300px] h-[200px] relative">
                <img alt="Idea to Implementation" className="w-full h-full object-cover" src={img1} data-robots="noindex" />
                <div className="absolute inset-0 bg-black p-2 opacity-0 duration-500 transition-opacity group-hover:opacity-[0.7]">
                  <p className="text-white absolute bottom-4 right-0 text-xl font-[poppins]">From Idea to Implementation</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="w-[300px] h-[200px] relative">
                <img alt="The Digital Statement" className="w-full h-full object-cover" src={img2} data-robots="noindex" />
                <div className="absolute inset-0 bg-black p-2 opacity-0 duration-500 transition-opacity group-hover:opacity-[0.7]">
                  <p className="text-white bottom-4 right-10 text-xl font-[poppins] absolute">The Digital Statement</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative group">
              <div className="w-[300px] h-[200px] relative">
                <img alt="The Team that Delivers Results" className="w-full h-full object-cover" src={img3} data-robots="noindex" />
                <div className="absolute inset-0 bg-black p-2 opacity-0 duration-500 transition-opacity group-hover:opacity-[0.7]">
                  <p className="text-white absolute bottom-4 right-0 text-xl font-[poppins] text-center">The Team that Delivers Results</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="w-[300px] h-[200px] relative">
                <img alt="Touching Lives in More Ways" className="w-full h-full object-cover" src={img4} data-robots="noindex" />
                <div className="absolute inset-0 bg-black p-2 opacity-0 duration-500 transition-opacity group-hover:opacity-[0.7]">
                  <p className="text-white bottom-4 right-0 text-xl font-[poppins] text-center absolute">Touching Lives in More Ways</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goodbye to Unemployment Section */}
      <section className="bg-[#E3F6F9] mt-5">
        <h2 className="text-center text-xl lg:text-2xl p-5 lg:p-10">
          Say
          <span className="text-[#274584] font-[poppins] font-semibold text-2xl lg:text-3xl">
            {" "} Goodbye to Unemployment
          </span>{" "}
          From sleek entry-level devices to sophisticated flagship models, Itel offers a comprehensive range of smartphones to suit various preferences and budgets. Each device is meticulously crafted, blending advanced hardware with intuitive software to deliver an exceptional user experience. Whether you're a casual user or a tech enthusiast, there's an Itel Mobile handset designed just for you.
        </h2>
      </section>

      {/* About Us Section */}
      {/* Ad Section */}
      <section className="container mx-auto mt-8">
        <p>Ad</p>
        {/* First Ad */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2334117942638644"
          data-ad-slot="5257105614"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>



        {/* Add more ads as needed */}
      </section>
      <section className="mt-10 lg:px-4">
        <h1 className="text-center text-3xl lg:text-4xl font-[poppins] font-semibold">Our Story</h1>
        <div className="flex flex-col lg:flex-row lg:mx-4 container px-4 items-center justify-center gap-10 mt-5">
          <div>
            <img className="w-full rounded" src={about} alt="About Itel Mobile" data-robots="noindex" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold lg:text-4xl">Empowering Success Through Talent</h2>
            <div className="lg:w-[650px] mt-7 flex flex-col gap-2 text-gray-600 lg:text-lg leading-7">
              <p>
              What sets Itel Mobile apart from its competitors is its unwavering focus on innovation. Despite its affordable price point, Itel smartphones boast a plethora of cutting-edge features. 
              </p>
              <p>
              In addition to superior hardware, Itel Mobile places great emphasis on software optimization. The brand's custom Android experience ensures a seamless and intuitive user interface, while pre-installed apps and services enhance productivity and entertainment. 
              </p>
              <p>
              At the core of Itel Mobile's philosophy lies a commitment to accessibility. Recognizing that technology should be accessible to all, regardless of financial constraints, Itel consistently delivers value-packed smartphones at competitive prices. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}

      <section className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {responsibilities.map((responsibility, index) => (
            <div className="group" key={index}>
              <div className="responsibility-card bg-[#E3F6F9] group-hover:bg-[#274584] group-hover:text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-[raleway] font-bold mb-4">{responsibility.title}</h3>
                <p className="text-gray-600 group-hover:text-white">{responsibility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Ad Section */}
      <section className="container mx-auto mt-8">
        <p>Ad</p>


        {/* Second Ad */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2334117942638644"
          data-ad-slot="5576685729"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        {/* Add more ads as needed */}
      </section>

      {/* Approach Section */}
      <section className="container mx-auto mt-8 overflow-hidden pb-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Approach at Itel Mobile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approachPoints.map((point, index) => (
            <div className="group" key={index}>
              <div className="responsibility-card bg-[#E3F6F9] group-hover:bg-[#274584] group-hover:text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-[raleway] font-bold mb-4 ">{point.title}</h3>
                <p className="text-gray-600 group-hover:text-white">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutContent;
