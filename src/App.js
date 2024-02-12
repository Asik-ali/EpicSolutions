import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Client from "./Pages/Client";
import Carrer from "./Pages/Carrer";
import Services from "./Pages/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AD1 from "./Components/Ads/Ad1";
import Post from "./Pages/Post";
import PostList from "./Pages/PostList";

function App() {
  const posts = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: 'Exploring Lucrative Career Paths in Consultancy',
      outline: `
      In today's dynamic and competitive business landscape, consultancy careers offer a plethora of opportunities for individuals with diverse skills and expertise. Whether you're a seasoned professional looking for a new challenge or a recent graduate eager to make your mark, the world of consultancy beckons with promises of excitement, growth, and fulfillment.
      `,
      h1: "The Role of a Consultant",
      para1: `
     At the heart of consultancy careers lies the role of the consultant—a trusted advisor, problem-solver, and strategist rolled into one. Consultants work closely with clients to understand their unique challenges, goals, and aspirations, and devise epic solutions to address them. They leverage their expertise, analytical skills, and industry knowledge to provide valuable insights and recommendations that drive business success.
      `,
      h2: "Management Consulting",

      para2: `
      Management consultants work with organizations to improve their performance, efficiency, and profitability. They analyze business processes, identify areas for improvement, and develop strategies to drive growth and innovation. Management consultancy careers are ideal for individuals with strong analytical skills, problem-solving abilities, and a keen business acumen.
      `,
      bodyh: "Technology Consulting",
      body: `
      Technology consultants assist organizations in leveraging technology to improve their operations, streamline processes, and enhance their competitive advantage. They assess IT systems, recommend software solutions, and implement technology initiatives to drive business value. Technology consultancy careers are ideal for individuals with a passion for technology, strong technical skills, and the ability to communicate complex concepts to non-technical stakeholders.
      `,

      conclusion: "In conclusion, consultancy careers offer a wealth of opportunities for individuals with a passion for problem-solving, innovation, and making a difference. Whether you're interested in management consulting, strategy consulting, technology consulting, or financial consulting, there's a consultancy career path that aligns with your interests, skills, and aspirations. By leveraging your expertise, analytical skills, and industry knowledge, you can embark on a rewarding career journey that offers challenges, growth, and fulfillment in equal measure. So why wait? Take the first step towards a successful consultancy career today!"
    },
    {
      id: 2,
      img: `
      https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&w=600
      `,
      title: 'Unveiling the Essence of Consultancy: A Comprehensive Overview',
      outline: `
      In the ever-evolving landscape of business, consultancy emerges as a beacon of guidance, offering a myriad of services tailored to meet the diverse needs of organizations across industries. From management consulting to technology advisory, the realm of consultancy encompasses a vast array of specialties aimed at driving growth, innovation, and success.
      `,
      h1: "Understanding Consultancy",
      para1: `
      At its core, consultancy is the art and science of providing expert advice, strategic guidance, and actionable insights to businesses seeking to overcome challenges, capitalize on opportunities, and achieve their objectives. Consultants, armed with a wealth of knowledge and experience, partner with clients to analyze their current state, identify areas for improvement, and develop epic solutions to propel them forward.
      `,
      h2: "Analysis and Assessment",

      para2: `
      Consultants begin by conducting a thorough analysis of the client's business, evaluating its strengths, weaknesses, opportunities, and threats. This assessment serves as the foundation for crafting tailored strategies and recommendations that align with the client's goals and objectives.
      `,
      bodyh: "Strategy Development",
      body: `
      Based on the findings of the analysis, consultants work collaboratively with clients to develop comprehensive strategies designed to address key challenges and leverage available opportunities. These strategies encompass a wide range of areas, including business operations, marketing, finance, and technology.
      `,

      conclusion: "In conclusion, consultancy plays a vital role in helping organizations navigate the complexities of the modern business landscape. By providing expert advice, strategic guidance, and epic solutions, consultants empower businesses to overcome challenges, capitalize on opportunities, and achieve their objectives. Whether it's management consulting, technology advisory, or financial consulting, the diverse range of specialties within the field of consultancy offers something for every organization seeking to thrive in today's competitive environment."
    },
    {
      id: 2,
      img: `
      https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&w=600
      `,
      title: 'Unveiling the Essence of Consultancy: A Comprehensive Overview',
      outline: `
      In the ever-evolving landscape of business, consultancy emerges as a beacon of guidance, offering a myriad of services tailored to meet the diverse needs of organizations across industries. From management consulting to technology advisory, the realm of consultancy encompasses a vast array of specialties aimed at driving growth, innovation, and success.
      `,
      h1: "Understanding Consultancy",
      para1: `
      At its core, consultancy is the art and science of providing expert advice, strategic guidance, and actionable insights to businesses seeking to overcome challenges, capitalize on opportunities, and achieve their objectives. Consultants, armed with a wealth of knowledge and experience, partner with clients to analyze their current state, identify areas for improvement, and develop epic solutions to propel them forward.
      `,
      h2: "Analysis and Assessment",

      para2: `
      Consultants begin by conducting a thorough analysis of the client's business, evaluating its strengths, weaknesses, opportunities, and threats. This assessment serves as the foundation for crafting tailored strategies and recommendations that align with the client's goals and objectives.
      `,
      bodyh: "Strategy Development",
      body: `
      Based on the findings of the analysis, consultants work collaboratively with clients to develop comprehensive strategies designed to address key challenges and leverage available opportunities. These strategies encompass a wide range of areas, including business operations, marketing, finance, and technology.
      `,

      conclusion: "In conclusion, consultancy plays a vital role in helping organizations navigate the complexities of the modern business landscape. By providing expert advice, strategic guidance, and epic solutions, consultants empower businesses to overcome challenges, capitalize on opportunities, and achieve their objectives. Whether it's management consulting, technology advisory, or financial consulting, the diverse range of specialties within the field of consultancy offers something for every organization seeking to thrive in today's competitive environment."
    },




  ];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client" element={<Client />} />
        <Route path="/carrers" element={<Carrer />} />
        <Route path="/posts" element={<PostList posts={posts} />} />
        <Route path="/posts/:id" element={<Post posts={posts} />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
