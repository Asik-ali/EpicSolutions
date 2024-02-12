// Post.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Post = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    // This code loads the Google AdSense asynchronous JavaScript
    // Replace 'ca-pub-2334117942638644' with your own AdSense client ID
    // This script needs to be loaded only once, so it's placed in the useEffect hook
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.head.appendChild(script);

    // This function pushes an ad display request to the Google AdSense SDK
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.outline} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.outline} />
        <meta property="og:image" content={post.img} />
        <meta property="og:url" content={`https://yourwebsite.com/posts/${post.id}`} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.outline} />
        <meta name="twitter:image" content={post.img} />
      </Helmet>

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
            data-ad-slot="6469014852"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </section>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default Post;
