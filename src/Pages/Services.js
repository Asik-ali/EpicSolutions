// Services.js
import React, { useEffect, useState } from "react";
import ApplyForm from "../Components/contact/ApplyForm";
import img3 from "../Assest/3.jpg";
import { Helmet } from "react-helmet";

const locations = ['Chennai', "Bangalore", "Mumbai", "Telangana", 'Pune', 'Noida', 'Lucknow', 'Hyderabad', 'Gurugram', 'Delhi'];

function Services() {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleApplyClick = () => {
    setShowApplyForm(true);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const [activeTab, setActiveTab] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'How do I apply for a consultancy position?',
      answer: 'You can apply for a consultancy position by visiting our Careers page and submitting your application through the online form.'
    },
    {
      id: 2,
      question: 'What qualifications are required for a coding position?',
      answer: 'We typically look for candidates with a strong background in computer science, proficiency in relevant programming languages, and experience in related projects.'
    },
    {
      id: 3,
      question: 'How long is the recruitment process?',
      answer: 'The recruitment process duration varies depending on the position. On average, it takes about 2-4 weeks from application to offer acceptance.'
    },
  ];

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Thing",
      "name": "Services",
    },
    "author": {
      "@type": "Person",
      "name": "John Doe",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
    },
    "reviewBody": "Excellent HR consultancy services! Highly recommended."
  };

  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>HR Consultancy Services - Epic Solutions</title>
        <meta
          name="description"
          content="Discover comprehensive HR consultancy services at Epic Solutions. From recruitment to talent management, our tailored services ensure your organization attracts and retains top talent. Learn more about how we empower success through strategic HR solutions."
        />
        <link rel="canonical" href="https://epic-solutions.vercel.app/services" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Epic Solutions HR Consultancy",
            "description": "Discover comprehensive HR consultancy services at Epic Solutions. From recruitment to talent management, our tailored services ensure your organization attracts and retains top talent. Learn more about how we empower success through strategic HR solutions.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.5,
              "reviewCount": 20
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "John Doe"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 5
                },
                "reviewBody": "Excellent HR consultancy services! Highly recommended."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Jane Smith"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 5
                },
                "reviewBody": "Good quality and effective talent management."
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <div className="bg-gradient-to-b from-[#7CB252] to-[#1369AA] h-[450px] lg:h-[400px]  ">
        <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-2">
          <div className=" justify-center  lg:ps-10 flex flex-col gap-6">
            <h1 className="text-white text-center font-semibold font-[popins] mt-5 lg:mt-0 text-2xl lg:text-[2.8rem]">
              LETS START YOUR CAREERS HERE!
            </h1>
            <p className="text-white mb-10 lg:mb-0 text-center lg: lg:text-start font-[poppins] text-sm lg:text-base lg:w-[750px] lg:ps-10 p-2">
              Welcome to our Epic, where expertise meets opportunity!
              Join a collaborative team of industry leaders, where your skills
              and insights shape impactful solutions. Explore diverse career
              paths, unlocking the potential to drive positive change for our
              clients. Your consultancy journey starts here, where innovation,
              collaboration, and growth converge for a fulfilling career
              experience.
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
              fill="#fff"
            ></path>
            <path
              d="M182.1,143.68l-59.46-34.33L63.18,143.68v68.66l59.46,34.33,59.46-34.33Z"
              fill="#fff"
            ></path>
            <path
              d="M308.61,143.68l-59.46-34.33-59.46,34.33v68.66l59.46,34.33,59.46-34.33Z"
              fill="#fff"
            ></path>
            <path
              d="M118.92,253.2,59.46,218.87,0,253.2v68.66l59.46,34.33,59.46-34.33Z"
              fill="#fff"
            ></path>
            <path
              d="M245.46,253.2,186,218.87,126.54,253.2v68.66L186,356.19l59.46-34.33Z"
              fill="#fff"
            ></path>
            <path
              d="M308.72,362.52l-59.46-34.33L189.8,362.52v68.66l59.46,34.33,59.46-34.33Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </div>

      <div className="px-4 flex flex-col items-center">
        <h1 className="text-center font-bold text-lg md:text-2xl mt-12 lg:text-3xl">
          Developing Your Career With Epic!
        </h1>
        <div className="border-b-2 border-blue-500 w-[540px] border-solid p-4"></div>
      </div>

      <div className="rounded-lg p-6 w-full flex lg:flex-row flex-col justify-evenly lg:mt-16 gap-11">
        <div className=" ">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600 text-center">
            Services
          </h1>

          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">
            Areas of Placement:
          </h2>
          <ul className="grid grid-cols-2  mb-4">
            {locations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleLocationClick(location)}
                className={`cursor-pointer px-3 md:px-4 py-2 m-1 md:m-2 border border-gray-300 rounded ${selectedLocation === location
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
                  }`}
              >
                {location}
              </li>
            ))}
          </ul>

          <button
            onClick={handleApplyClick}
            className="bg-blue-500 w-full md:w-auto lg:ms-12 text-white px-3 lg:px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Apply Here
          </button>
        </div>
        <div className="w-96 ">
          <img src={img3} className="" alt="HR Consultancy Services" />
        </div>
      </div>

      {showApplyForm && (
        <ApplyForm
          onClose={() => setShowApplyForm(false)}
          selectedLocation={selectedLocation}
        />
      )}
      <div className="flex px-4 flex-col lg:flex-row gap-4 items-center">
        <div className=" space-y-4 mx-auto mt-12">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          {faqData.map((item) => (
            <div key={item.id} className="relative bg-white p-4 rounded-md shadow-md px-4">
              <button
                className="flex items-center w-full text-left font-semibold focus:outline-none"
                onClick={() => toggleTab(item.id)}
              >
                {item.question}
                <span className={`ml-auto transform ${activeTab === item.id ? 'rotate-45' : 'rotate-0'} transition-transform duration-300`}>➕</span>
              </button>
              {activeTab === item.id && (
                <p className="mt-2 text-gray-600 lg:w-[450px] w-[300px]">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="max-w-lg mx-auto lg:ms-12 my-8">
          <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
          <form>
            <div className="flex items-center mb-4">
              <label className="mr-4">Rating:</label>
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="inline-flex items-center mr-2">
                  <input
                    type="radio"
                    value={value}
                    checked={rating === value}
                    onChange={handleRatingChange}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2">{value}</span>
                </label>
              ))}
            </div>
            <div className="mb-4">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                Review:
              </label>
              <textarea
                id="review"
                name="review"
                rows="4"
                value={reviewText}
                onChange={handleReviewChange}
                className="mt-1 p-2 block w-full border rounded-md bg-gray-100 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
            >
              Submit
            </button>
          </form>

          {/* Include JSON-LD script for review schema */}
          <script type="application/ld+json">
            {JSON.stringify(reviewSchema)}
          </script>
        </div>
        {/* Include JSON-LD script for schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </div>
    </div>
  );
}

export default Services;
