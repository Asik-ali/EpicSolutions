import React, { useState } from 'react';
// import ReviewSection from './Review';

const FAQ = () => {
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

  return (
    <div className="flex px-4 flex-col lg:flex-row gap-4 items-center">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644"
        crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-2334117942638644"
        data-ad-slot="5257105614"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script>
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
      {/* <ReviewSection /> */}
      {/* Include JSON-LD script for schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </div>
  );
};

export default FAQ;
