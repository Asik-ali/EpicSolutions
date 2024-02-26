// Post.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = ({ posts }) => {

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
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#F8F9FD] mb-5">
      <img src={post.img} alt={post.title} className="mb-4 rounded-lg w-full h-[400px] shadow-md" />
      <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.outline}</p>
      <section className="container mx-auto mt-3">
          <p>Ad</p>
          {/* AdSense Ad Unit */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="2647559035"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </section>
      <h4 className="text-2xl font-bold mb-4">{post.h1}</h4>
      <p className="text-gray-700 mb-4">{post.para1}</p>
      <section className="container mx-auto mt-3">
          <p>Ad</p>
          {/* AdSense Ad Unit */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="8836157899"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </section>
      <h4 className="text-2xl font-bold mb-4">{post.h2}</h4>
      <p className="text-gray-700 mb-4">{post.para2}</p>
      <section className="container mx-auto mt-3">
          <p>Ad</p>
          {/* AdSense Ad Unit */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="2793493727"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </section>
      <h4 className="text-2xl font-bold mb-4">{post.h3}</h4>
      <p className="text-gray-700 mb-4">{post.para3}</p>
     
        
      <h4 className="text-2xl font-bold mb-4">{post.h4}</h4>
      <p className="text-gray-700 mb-4">{post.para4}</p>
      <section className="container mx-auto mt-3">
          <p>Ad</p>
          {/* AdSense Ad Unit */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="6018422869"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </section>
      <h4 className="text-2xl font-bold mb-4">{post.bodyh}</h4>
      <p>Ada</p>
      <ins
            className="adsbygoogle"
            style={{ display: 'block' , textAlign :"center" }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="7248572032"
          ></ins>
      <h3 className="text-gray-700 mb-4">{post.body}</h3>
      <section className="container mx-auto mt-3">
          <p>Ad</p>
          {/* AdSense Ad Unit */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="6469014852"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </section>
      <h4 className="text-2xl font-bold mb-4">Conclusion</h4>
      <p className="text-gray-700 mb-4">{post.conclusion}</p>
    </div>
  );
};

export default Post;
